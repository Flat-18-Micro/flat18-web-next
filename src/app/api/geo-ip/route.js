import { NextResponse } from 'next/server'

const DEFAULT_ENDPOINT = 'https://geo.flat18.app/api/ipinfo'
const DEFAULT_TIMEOUT_MS = 1500

const getGeoHeaders = () => {
  const bearerToken = process.env.FLAT18_GEO_API_TOKEN
  const basicUser = process.env.FLAT18_GEO_BASIC_USER
  const basicPass = process.env.FLAT18_GEO_BASIC_PASS

  if (bearerToken) {
    return {
      Authorization: `Bearer ${bearerToken}`
    }
  }

  if (basicUser && basicPass) {
    const credentials = Buffer.from(`${basicUser}:${basicPass}`).toString('base64')
    return {
      Authorization: `Basic ${credentials}`
    }
  }

  throw new Error('Geo API credentials are not configured')
}

const buildLookupUrl = (clientIp, overrideIp) => {
  const endpoint = process.env.FLAT18_GEO_API_URL || DEFAULT_ENDPOINT
  const lookupUrl = new URL(endpoint)
  const ip = overrideIp || clientIp
  if (ip) {
    lookupUrl.searchParams.set('ip', ip)
  }
  return lookupUrl.toString()
}

const getClientIp = (request) => {
  const forwardedFor = request.headers.get('x-forwarded-for') || ''
  if (!forwardedFor) return null
  return forwardedFor.split(',').map(part => part.trim()).find(Boolean) || null
}

export async function GET(request) {
  let geoHeaders
  try {
    geoHeaders = getGeoHeaders()
  } catch (error) {
    console.error('[geo-ip] configuration error', error.message)
    return NextResponse.json({ error: 'Geo lookup is unavailable' }, { status: 500 })
  }

  const urlParams = new URL(request.url).searchParams
  const overrideIp = urlParams.get('ip')
  const clientIp = getClientIp(request)
  const lookupUrl = buildLookupUrl(clientIp, overrideIp)
  const timeoutMs = Number(process.env.FLAT18_GEO_TIMEOUT_MS || DEFAULT_TIMEOUT_MS)
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(lookupUrl, {
      headers: {
        ...geoHeaders,
        Accept: 'application/json'
      },
      cache: 'no-store',
      signal: controller.signal
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
      return NextResponse.json({
        error: 'Geo lookup failed',
        status: response.status,
        data: data || null
      }, { status: response.status })
    }

    return NextResponse.json({ success: true, data, clientIp: clientIp || null })
  } catch (error) {
    if (error.name === 'AbortError') {
      return NextResponse.json({ error: 'Geo lookup timed out' }, { status: 504 })
    }
    console.error('[geo-ip] request error', error)
    return NextResponse.json({ error: 'Geo lookup error' }, { status: 500 })
  } finally {
    clearTimeout(timeoutId)
  }
}
