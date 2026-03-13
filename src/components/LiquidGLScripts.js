'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function LiquidGLScripts() {
  useEffect(() => {
    const body = document.body
    if (!body) return () => {}

    let didInit = false
    body.classList.add('liquid-prebuild')

    const handleInit = () => {
      if (didInit) return
      didInit = true
      body.classList.remove('liquid-prebuild')
      body.classList.remove('liquid-fallback')
    }

    window.addEventListener('liquidgl:init', handleInit)
    const fallbackId = window.setTimeout(() => {
      if (didInit) return
      body.classList.remove('liquid-prebuild')
      body.classList.add('liquid-fallback')
    }, 6000)

    return () => {
      window.removeEventListener('liquidgl:init', handleInit)
      window.clearTimeout(fallbackId)
      body.classList.remove('liquid-prebuild')
      body.classList.remove('liquid-fallback')
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    let navInit = false
    let btnInit = false
    let initInFlight = false
    let cancelled = false

    const waitForPaint = () => new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve))
    })

    const tryInit = async () => {
      if (cancelled || initInFlight || (navInit && btnInit)) return
      if (!window.liquidGL || !window.html2canvas) return

      initInFlight = true

      try {
        if (document.fonts && document.fonts.ready) {
          try {
            await document.fonts.ready
          } catch {
            // Ignore font readiness errors and proceed with initialization.
          }
        }

        await waitForPaint()
        if (cancelled) return

        if (!navInit) {
          navInit = true
          window.liquidGL({
            snapshot: 'body',
            target: '.liquidGL-nav',
            resolution: 2.0,
            refraction: 0.01,
            bevelDepth: 0.08,
            bevelWidth: 0.15,
            frost: 0,
            shadow: true,
            specular: true,
            reveal: 'fade',
            tilt: false,
            tiltFactor: 5,
            magnify: 1,
            on: {
              init(instance) {
                instance.el.style.pointerEvents = 'auto'
                window.dispatchEvent(new Event('liquidgl:init'))
              }
            }
          })
        }

        if (!btnInit) {
          btnInit = true
          window.liquidGL({
            snapshot: 'body',
            target: '.btn',
            resolution: 1.5,
            refraction: 0.008,
            bevelDepth: 0.04,
            bevelWidth: 0.12,
            frost: 0.05,
            shadow: false,
            specular: true,
            reveal: 'fade',
            tilt: false,
            tiltFactor: 4,
            magnify: 1,
            on: {
              init(instance) {
                instance.el.style.pointerEvents = 'auto'
                window.dispatchEvent(new Event('liquidgl:init'))
              }
            }
          })
        }

        if (window.__liquidGLRenderer__?.captureSnapshot) {
          window.__liquidGLRenderer__.captureSnapshot()
        }
      } finally {
        initInFlight = false
      }
    }

    const handleReady = () => {
      if (window.__liquidGLRenderer__?.captureSnapshot) {
        window.__liquidGLRenderer__.captureSnapshot()
      }
      void tryInit()
    }

    void tryInit()
    window.addEventListener('html2canvas:ready', handleReady)
    window.addEventListener('liquidgl:ready', handleReady)
    window.addEventListener('load', handleReady)

    return () => {
      cancelled = true
      window.removeEventListener('html2canvas:ready', handleReady)
      window.removeEventListener('liquidgl:ready', handleReady)
      window.removeEventListener('load', handleReady)
    }
  }, [])

  return (
    <>
      <Script
        src="/scripts/html2canvas.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.__html2canvasReady = true
          window.dispatchEvent(new Event('html2canvas:ready'))
        }}
      />
      <Script
        src="/scripts/liquidGL.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.__liquidGLReady = true
          window.dispatchEvent(new Event('liquidgl:ready'))
        }}
      />
    </>
  )
}
