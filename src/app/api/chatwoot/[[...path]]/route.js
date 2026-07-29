const UPSTREAM_ORIGIN = 'https://chatwoot.flat18.co.uk'
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

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const buildUpstreamUrl = (request, params) => {
  const incomingUrl = new URL(request.url)
  const path = Array.isArray(params?.path) ? params.path.join('/') : ''
  const upstreamPath = path ? `/${path}` : '/'
  const upstreamUrl = new URL(upstreamPath, UPSTREAM_ORIGIN)
  upstreamUrl.search = incomingUrl.search
  return upstreamUrl
}

const buildForwardHeaders = (request) => {
  const incomingUrl = new URL(request.url)
  const headers = new Headers(request.headers)

  headers.delete('host')
  headers.delete('content-length')
  headers.delete('accept-encoding')
  headers.set('origin', UPSTREAM_ORIGIN)
  headers.set('referer', `${UPSTREAM_ORIGIN}/`)
  headers.set('x-forwarded-host', incomingUrl.host)
  headers.set('x-forwarded-proto', incomingUrl.protocol.replace(':', ''))

  return headers
}

const rewriteSetCookieHeaders = (upstreamHeaders, responseHeaders) => {
  const setCookieValues = typeof upstreamHeaders.getSetCookie === 'function'
    ? upstreamHeaders.getSetCookie()
    : []

  if (!setCookieValues.length) {
    const singleCookie = upstreamHeaders.get('set-cookie')
    if (singleCookie) {
      setCookieValues.push(singleCookie)
    }
  }

  responseHeaders.delete('set-cookie')

  setCookieValues.forEach((cookieValue) => {
    responseHeaders.append(
      'set-cookie',
      cookieValue.replace(/;\s*Domain=[^;]+/ig, '')
    )
  })
}

const buildResponseHeaders = (upstreamHeaders) => {
  const responseHeaders = new Headers(upstreamHeaders)

  HOP_BY_HOP_HEADERS.forEach((headerName) => {
    responseHeaders.delete(headerName)
  })

  responseHeaders.delete('content-length')
  responseHeaders.delete('content-encoding')
  rewriteSetCookieHeaders(upstreamHeaders, responseHeaders)

  return responseHeaders
}

async function proxyChatwoot(request, params) {
  const upstreamUrl = buildUpstreamUrl(request, params)
  const headers = buildForwardHeaders(request)
  const init = {
    method: request.method,
    headers,
    cache: 'no-store',
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = request.body
    init.duplex = 'half'
  }

  try {
    const upstreamResponse = await fetch(upstreamUrl, init)
    const responseHeaders = buildResponseHeaders(upstreamResponse.headers)

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      headers: responseHeaders,
    })
  } catch (error) {
    console.error('[chatwoot-proxy] request error', error)
    return new Response('Chatwoot proxy unavailable', {
      status: 502,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
      },
    })
  }
}

export async function GET(request, context) {
  return proxyChatwoot(request, context?.params)
}

export async function HEAD(request, context) {
  return proxyChatwoot(request, context?.params)
}

export async function POST(request, context) {
  return proxyChatwoot(request, context?.params)
}

export async function PUT(request, context) {
  return proxyChatwoot(request, context?.params)
}

export async function PATCH(request, context) {
  return proxyChatwoot(request, context?.params)
}

export async function DELETE(request, context) {
  return proxyChatwoot(request, context?.params)
}

export async function OPTIONS(request, context) {
  return proxyChatwoot(request, context?.params)
}
