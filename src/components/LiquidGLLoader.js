'use client'

import { useEffect } from 'react'

const SCRIPT_URLS = [
  '/scripts/html2canvas.min.js',
  '/scripts/liquidGL.js',
  '/scripts/liquidgl-init.js'
]

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
    if (['slow-2g', '2g'].includes(effectiveType)) return false
  }

  return true
}

const injectScript = (src) => new Promise((resolve, reject) => {
  if (document.querySelector(`script[data-liquidgl="${src}"]`)) {
    resolve()
    return
  }

  const script = document.createElement('script')
  script.src = src
  script.async = true
  script.defer = true
  script.dataset.liquidgl = src
  script.onload = () => resolve()
  script.onerror = () => reject(new Error(`Failed to load ${src}`))
  document.body.appendChild(script)
})

export default function LiquidGLLoader() {
  useEffect(() => {
    if (!shouldLoadLiquidGL()) return

    const loadScripts = () => {
      injectScript(SCRIPT_URLS[0])
        .then(() => injectScript(SCRIPT_URLS[1]))
        .then(() => injectScript(SCRIPT_URLS[2]))
        .catch(() => {})
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadScripts, { timeout: 4000 })
    } else {
      window.setTimeout(loadScripts, 2500)
    }
  }, [])

  return null
}
