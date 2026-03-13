'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function LiquidGLScripts() {
  useEffect(() => {
    const body = document.body
    if (!body) return () => {}

    body.classList.add('liquid-prebuild')

    const handleInit = () => {
      body.classList.remove('liquid-prebuild')
    }

    window.addEventListener('liquidgl:init', handleInit)
    const timeoutId = window.setTimeout(handleInit, 3000)

    return () => {
      window.removeEventListener('liquidgl:init', handleInit)
      window.clearTimeout(timeoutId)
      body.classList.remove('liquid-prebuild')
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
