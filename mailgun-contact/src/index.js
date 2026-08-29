const CONTACT_ALLOWED_ORIGINS = new Set([
  'https://flat18.co.uk',
  'https://www.flat18.co.uk',
  'http://localhost:3000',
])

const CHATWOOT_UPSTREAM_ORIGIN = 'https://chatwoot.flat18.co.uk'
const GEO_UPSTREAM_ORIGIN = 'https://geo.flat18.app/api/geo'
const PROXY_METHODS = 'GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS'
const DEFAULT_ALLOWED_HEADERS = 'Content-Type, Authorization, X-Requested-With, Accept'
const DEFAULT_GEO_TIMEOUT_MS = 1500
const HOP_BY_HOP_HEADERS = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
])

const isAllowedOrigin = (origin) => CONTACT_ALLOWED_ORIGINS.has(origin)

const buildCorsHeaders = (request, allowCredentials = false) => {
  const origin = request.headers.get('Origin') || ''
  const requestedHeaders = request.headers.get('Access-Control-Request-Headers') || DEFAULT_ALLOWED_HEADERS

  const headers = {
    'Access-Control-Allow-Methods': PROXY_METHODS,
    'Access-Control-Allow-Headers': requestedHeaders,
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  }

  if (origin && isAllowedOrigin(origin)) {
    headers['Access-Control-Allow-Origin'] = origin
    if (allowCredentials) {
      headers['Access-Control-Allow-Credentials'] = 'true'
    }
  } else if (origin) {
    headers['Access-Control-Allow-Origin'] = '*'
  }

  return headers
}

const addCorsHeaders = (headers, request, allowCredentials = false) => {
  const corsHeaders = buildCorsHeaders(request, allowCredentials)
  Object.entries(corsHeaders).forEach(([key, value]) => {
    headers.set(key, value)
  })
}

const buildProxyTarget = (request, prefix, upstreamOrigin, upstreamPathPrefix = '') => {
  const incomingUrl = new URL(request.url)
  const suffix = incomingUrl.pathname.slice(prefix.length) || '/'
  const upstreamPath = `${upstreamPathPrefix}${suffix}`.replace(/\/{2,}/g, '/')
  const upstreamUrl = new URL(upstreamPath, upstreamOrigin)
  upstreamUrl.search = incomingUrl.search
  return upstreamUrl
}

const matchesProxyPrefix = (pathname, prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)

const buildProxyRequestHeaders = (request, upstreamOrigin) => {
  const incomingUrl = new URL(request.url)
  const headers = new Headers(request.headers)

  headers.delete('host')
  headers.delete('content-length')
  headers.delete('accept-encoding')
  headers.set('origin', upstreamOrigin)
  headers.set('referer', `${upstreamOrigin}/`)
  headers.set('x-forwarded-host', incomingUrl.host)
  headers.set('x-forwarded-proto', incomingUrl.protocol.replace(':', ''))

  return headers
}

const rewriteSetCookieHeaders = (upstreamHeaders, responseHeaders) => {
  const cookieValues = typeof upstreamHeaders.getSetCookie === 'function'
    ? upstreamHeaders.getSetCookie()
    : []

  if (!cookieValues.length) {
    const singleCookie = upstreamHeaders.get('set-cookie')
    if (singleCookie) {
      cookieValues.push(singleCookie)
    }
  }

  responseHeaders.delete('set-cookie')

  cookieValues.forEach((cookieValue) => {
    responseHeaders.append(
      'set-cookie',
      cookieValue.replace(/;\s*Domain=[^;]+/ig, '')
    )
  })
}

const rewriteLocationHeader = (responseHeaders, requestUrl, prefix, upstreamOrigin) => {
  const location = responseHeaders.get('location')
  if (!location) return

  try {
    const absoluteLocation = new URL(location, upstreamOrigin)
    if (absoluteLocation.origin !== upstreamOrigin) {
      return
    }

    const proxiedLocation = new URL(requestUrl)
    proxiedLocation.pathname = `${prefix}${absoluteLocation.pathname}`.replace(/\/{2,}/g, '/')
    proxiedLocation.search = absoluteLocation.search
    proxiedLocation.hash = absoluteLocation.hash

    responseHeaders.set('location', proxiedLocation.toString())
  } catch {
    // Leave invalid redirects untouched.
  }
}

const buildProxyResponseHeaders = (upstreamHeaders, requestUrl, prefix, upstreamOrigin, request) => {
  const responseHeaders = new Headers(upstreamHeaders)

  HOP_BY_HOP_HEADERS.forEach((headerName) => {
    responseHeaders.delete(headerName)
  })

  responseHeaders.delete('content-length')
  responseHeaders.delete('content-encoding')
  rewriteSetCookieHeaders(upstreamHeaders, responseHeaders)
  rewriteLocationHeader(responseHeaders, requestUrl, prefix, upstreamOrigin)
  addCorsHeaders(responseHeaders, request, true)

  return responseHeaders
}

const proxyUpstream = async (request, prefix, upstreamOrigin, upstreamPathPrefix = '') => {
  const upstreamUrl = buildProxyTarget(request, prefix, upstreamOrigin, upstreamPathPrefix)
  const headers = buildProxyRequestHeaders(request, upstreamOrigin)
  const init = {
    method: request.method,
    headers,
    cache: 'no-store',
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = request.body
  }

  const upstreamResponse = await fetch(upstreamUrl, init)

  if (upstreamResponse.webSocket) {
    return upstreamResponse
  }

  const responseHeaders = buildProxyResponseHeaders(
    upstreamResponse.headers,
    request.url,
    prefix,
    upstreamOrigin,
    request
  )

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    headers: responseHeaders,
  })
}

const getGeoHeaders = (env) => {
  const bearerToken = env.FLAT18_GEO_API_TOKEN
  const basicUser = env.FLAT18_GEO_BASIC_USER
  const basicPass = env.FLAT18_GEO_BASIC_PASS

  if (bearerToken) {
    return {
      Authorization: `Bearer ${bearerToken}`,
    }
  }

  if (basicUser && basicPass) {
    const credentials = btoa(`${basicUser}:${basicPass}`)
    return {
      Authorization: `Basic ${credentials}`,
    }
  }

  return {}
}

const buildGeoLookupUrl = (request, env) => {
  const requestUrl = new URL(request.url)
  const endpoint = env.FLAT18_GEO_API_URL || GEO_UPSTREAM_ORIGIN
  const lookupUrl = new URL(endpoint)
  const overrideIp = requestUrl.searchParams.get('ip')
  const forwardedFor = request.headers.get('x-forwarded-for') || ''
  const clientIp = request.headers.get('cf-connecting-ip')
    || forwardedFor.split(',').map(part => part.trim()).find(Boolean)
    || request.headers.get('x-real-ip')
    || null
  if (overrideIp) {
    lookupUrl.searchParams.set('ip', overrideIp)
  }

  return {
    lookupUrl: lookupUrl.toString(),
    clientIp,
  }
}

const handleGeoIp = async (request, env) => {
  const headers = buildCorsHeaders(request, false)

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers })
  }

  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    })
  }

  try {
    const { lookupUrl, clientIp } = buildGeoLookupUrl(request, env)
    const geoHeaders = getGeoHeaders(env)
    if (clientIp) {
      // /api/geo resolves the caller from forwarded headers without requiring
      // an API token. Forward the address Cloudflare assigned to this request
      // so the upstream sees the visitor rather than the Worker.
      geoHeaders['x-real-ip'] = clientIp
      geoHeaders['x-forwarded-for'] = clientIp
    }
    const timeoutMs = Number(env.FLAT18_GEO_TIMEOUT_MS || DEFAULT_GEO_TIMEOUT_MS)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

    try {
      const response = await fetch(lookupUrl, {
        headers: {
          ...geoHeaders,
          Accept: 'application/json',
        },
        cache: 'no-store',
        signal: controller.signal,
      })

      const text = await response.text()
      let data = null
      if (text) {
        try {
          data = JSON.parse(text)
        } catch (error) {
          console.error('[geo-ip] failed to parse upstream payload', error)
        }
      }

      if (!response.ok) {
        console.error('[geo-ip] upstream error', response.status, text?.slice?.(0, 200))
        return new Response(JSON.stringify({
          error: 'Geo lookup failed',
          status: response.status,
          data: data || null,
        }), {
          status: response.status,
          headers: {
            ...headers,
            'Content-Type': 'application/json',
          },
        })
      }

      return new Response(JSON.stringify({
        success: true,
        data,
        clientIp: clientIp || null,
      }), {
        status: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      })
    } finally {
      clearTimeout(timeoutId)
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      return new Response(JSON.stringify({ error: 'Geo lookup timed out' }), {
        status: 504,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      })
    }

    console.error('[geo-ip] request error', error)
    return new Response(JSON.stringify({ error: 'Geo lookup error' }), {
      status: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    })
  }
}

const handleContactForm = async (request, env) => {
  const headers = buildCorsHeaders(request, true)

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers })
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    })
  }

  try {
    const { name, email, message } = await request.json()

    const formData = new URLSearchParams()
    formData.append('from', 'Flat18 Contact Form <web-contact-form@mg.flat18.co.uk>')
    formData.append('to', 'hello.flat18.co.uk@sinaswee.com')
    formData.append('subject', `New contact form submission from ${name}`)
    formData.append(
      'text',
      `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim()
    )

    const res = await fetch(`https://api.eu.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('Mailgun failed:', error)
      return new Response(JSON.stringify({ error: 'Failed to send message' }), {
        status: 500,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    })
  } catch (err) {
    console.error('Error:', err)
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    })
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    try {
      if (matchesProxyPrefix(url.pathname, '/chatwoot')) {
        if (request.method === 'OPTIONS') {
          return new Response(null, {
            status: 204,
            headers: buildCorsHeaders(request, true),
          })
        }

        return await proxyUpstream(request, '/chatwoot', CHATWOOT_UPSTREAM_ORIGIN)
      }

      // Chatwoot's widget page serves Vite assets from the origin root rather
      // than beneath /chatwoot, so proxy those asset requests as well.
      if (matchesProxyPrefix(url.pathname, '/vite')) {
        if (request.method === 'OPTIONS') {
          return new Response(null, {
            status: 204,
            headers: buildCorsHeaders(request, true),
          })
        }

        return await proxyUpstream(request, '/vite', CHATWOOT_UPSTREAM_ORIGIN, '/vite')
      }

      // Chatwoot's widget API uses root-relative /api/v1/widget paths from
      // inside the iframe, so proxy those requests to the Chatwoot instance.
      if (matchesProxyPrefix(url.pathname, '/api')) {
        if (request.method === 'OPTIONS') {
          return new Response(null, {
            status: 204,
            headers: buildCorsHeaders(request, true),
          })
        }

        return await proxyUpstream(request, '/api', CHATWOOT_UPSTREAM_ORIGIN, '/api')
      }

      // Chatwoot uses a root-relative Action Cable endpoint for live updates.
      if (matchesProxyPrefix(url.pathname, '/cable')) {
        if (request.method === 'OPTIONS') {
          return new Response(null, {
            status: 204,
            headers: buildCorsHeaders(request, true),
          })
        }

        return await proxyUpstream(request, '/cable', CHATWOOT_UPSTREAM_ORIGIN, '/cable')
      }

      if (matchesProxyPrefix(url.pathname, '/geo-ip')) {
        return await handleGeoIp(request, env)
      }

      return await handleContactForm(request, env, ctx)
    } catch (err) {
      console.error('Error:', err)
      const headers = buildCorsHeaders(request, true)
      return new Response(JSON.stringify({ error: 'Server error' }), {
        status: 500,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      })
    }
  },
}
