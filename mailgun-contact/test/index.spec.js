import { createExecutionContext, waitOnExecutionContext } from 'cloudflare:test'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import worker from '../src/index.js'

describe('mailgun-contact worker', () => {
  let fetchSpy

  beforeEach(() => {
    fetchSpy = vi.spyOn(globalThis, 'fetch')
  })

  afterEach(() => {
    fetchSpy.mockRestore()
  })

  it('proxies Chatwoot assets through /chatwoot', async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response('sdk payload', {
        status: 200,
        headers: {
          'content-type': 'text/javascript',
          'set-cookie': 'sid=1; Domain=chatwoot.flat18.co.uk; Path=/; Secure',
        },
      })
    )

    const request = new Request('https://example.com/chatwoot/packs/js/sdk.js?foo=1', {
      headers: {
        Origin: 'https://flat18.co.uk',
      },
    })

    const ctx = createExecutionContext()
    const response = await worker.fetch(request, {}, ctx)
    await waitOnExecutionContext(ctx)

    expect(response.status).toBe(200)
    expect(await response.text()).toBe('sdk payload')
    expect(fetchSpy).toHaveBeenCalledTimes(1)
    expect(String(fetchSpy.mock.calls[0][0])).toBe('https://chatwoot.flat18.co.uk/packs/js/sdk.js?foo=1')
    expect(response.headers.get('access-control-allow-origin')).toBe('https://flat18.co.uk')
    expect(response.headers.get('set-cookie')).toContain('sid=1')
    expect(response.headers.get('set-cookie')).not.toContain('Domain=')
  })

  it('proxies metrics through /metrics', async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ webM: 'abc123', geo: 'London, GB' }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      })
    )

    const request = new Request('https://example.com/metrics/webm/index.php?geo=1&t=123', {
      headers: {
        Origin: 'https://flat18.co.uk',
      },
    })

    const ctx = createExecutionContext()
    const response = await worker.fetch(request, {}, ctx)
    await waitOnExecutionContext(ctx)

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ webM: 'abc123', geo: 'London, GB' })
    expect(String(fetchSpy.mock.calls[0][0])).toBe('https://api.flat18.co.uk/metrics/webm/index.php?geo=1&t=123')
    expect(response.headers.get('access-control-allow-origin')).toBe('https://flat18.co.uk')
  })

  it('proxies geo lookup through /geo-ip', async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({
        ip: '203.0.113.10',
        city: 'Dublin',
        country: 'Ireland',
      }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      })
    )

    const request = new Request('https://example.com/geo-ip?ip=203.0.113.10', {
      headers: {
        Origin: 'https://flat18.co.uk',
      },
    })

    const ctx = createExecutionContext()
    const response = await worker.fetch(request, {
      FLAT18_GEO_API_TOKEN: 'secret-token',
      FLAT18_GEO_API_URL: 'https://geo.flat18.app/api/ipinfo',
    }, ctx)
    await waitOnExecutionContext(ctx)

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({
      success: true,
      data: {
        ip: '203.0.113.10',
        city: 'Dublin',
        country: 'Ireland',
      },
      clientIp: null,
    })
    expect(String(fetchSpy.mock.calls[0][0])).toBe('https://geo.flat18.app/api/ipinfo?ip=203.0.113.10')
    expect(response.headers.get('access-control-allow-origin')).toBe('https://flat18.co.uk')
  })

  it('still accepts the contact form at the worker root', async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ message: 'Queued' }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      })
    )

    const request = new Request('https://example.com/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Origin: 'https://flat18.co.uk',
      },
      body: JSON.stringify({
        name: 'Alex',
        email: 'alex@example.com',
        projectType: 'MVP Sprint',
        message: 'Build me a product.',
      }),
    })

    const ctx = createExecutionContext()
    const response = await worker.fetch(request, {
      MAILGUN_DOMAIN: 'mg.flat18.co.uk',
      MAILGUN_API_KEY: 'test-key',
    }, ctx)
    await waitOnExecutionContext(ctx)

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ success: true })
    expect(String(fetchSpy.mock.calls[0][0])).toBe('https://api.eu.mailgun.net/v3/mg.flat18.co.uk/messages')
    expect(response.headers.get('access-control-allow-origin')).toBe('https://flat18.co.uk')
    expect(response.headers.get('access-control-allow-credentials')).toBe('true')
  })
})
