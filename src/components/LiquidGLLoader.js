'use client'

import { useEffect } from 'react'

const SCRIPT_URLS = [
  '/scripts/html2canvas.min.js',
  '/scripts/liquidGL.js',
  '/scripts/liquidgl-init.js'
]

const getScriptRegistry = () => {
  if (typeof window === 'undefined') return null
  if (!window.__liquidGLScriptPromises__) {
    window.__liquidGLScriptPromises__ = {}
  }
  return window.__liquidGLScriptPromises__
}

const isScriptLoaded = (script) => (
  script.dataset.liquidglLoaded === 'true' ||
  script.readyState === 'complete'
)

const waitForScript = (script, src) => new Promise((resolve, reject) => {
  const handleLoad = () => {
    script.dataset.liquidglLoaded = 'true'
    resolve()
  }
  const handleError = () => {
    script.dataset.liquidglFailed = 'true'
    reject(new Error(`Failed to load ${src}`))
  }
  script.addEventListener('load', handleLoad, { once: true })
  script.addEventListener('error', handleError, { once: true })
})

const shouldLoadLiquidGL = () => {
  if (typeof window === 'undefined') return false

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false
  }

  if (window.innerWidth < 768) {
    return false
  }

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection) {
    const effectiveType = connection.effectiveType || ''
    // Skip on anything slower than 4G to protect LCP on throttled connections
    if (['slow-2g', '2g', '3g'].includes(effectiveType)) return false
  }

  return true
}

const injectScript = (src) => {
  if (typeof window === 'undefined') return Promise.resolve()

  const registry = getScriptRegistry()
  if (registry && registry[src]) return registry[src]

  const existing = document.querySelector(`script[data-liquidgl="${src}"]`)
  if (existing) {
    if (isScriptLoaded(existing)) {
      existing.dataset.liquidglLoaded = 'true'
      return Promise.resolve()
    }
    const pending = waitForScript(existing, src)
    if (registry) registry[src] = pending
    return pending
  }

  const script = document.createElement('script')
  script.src = src
  script.async = false
  script.dataset.liquidgl = src

  const pending = waitForScript(script, src)
  if (registry) registry[src] = pending

  document.body.appendChild(script)
  return pending
}

export default function LiquidGLLoader() {
  useEffect(() => {
    if (!shouldLoadLiquidGL()) return

    let loaded = false

    const loadScripts = () => {
      if (loaded) return
      loaded = true
      injectScript(SCRIPT_URLS[0])
        .then(() => injectScript(SCRIPT_URLS[1]))
        .then(() => injectScript(SCRIPT_URLS[2]))
        .then(() => {
          if (typeof window.__liquidGLInit === 'function') {
            window.__liquidGLInit({ force: true })
          }
        })
        .catch(() => {})
    }

    // Load after first user interaction OR after a long idle timeout.
    // This ensures LiquidGL never competes with critical page resources
    // during the Lighthouse measurement window.
    const IDLE_TIMEOUT_MS = 7000
    const USER_EVENTS = ['pointerdown', 'pointermove', 'keydown', 'scroll', 'touchstart']

    const onInteraction = () => {
      USER_EVENTS.forEach(ev => window.removeEventListener(ev, onInteraction))
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadScripts)
      } else {
        window.setTimeout(loadScripts, 200)
      }
    }

    USER_EVENTS.forEach(ev => window.addEventListener(ev, onInteraction, { passive: true, once: true }))

    // Fallback: load after long idle even without interaction
    let fallbackId
    if ('requestIdleCallback' in window) {
      fallbackId = window.requestIdleCallback(loadScripts, { timeout: IDLE_TIMEOUT_MS })
    } else {
      fallbackId = window.setTimeout(loadScripts, IDLE_TIMEOUT_MS)
    }

    return () => {
      USER_EVENTS.forEach(ev => window.removeEventListener(ev, onInteraction))
      if ('requestIdleCallback' in window) {
        window.cancelIdleCallback(fallbackId)
      } else {
        window.clearTimeout(fallbackId)
      }
    }
  }, [])

  return null
}
