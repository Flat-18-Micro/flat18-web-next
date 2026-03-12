'use client'

import Script from 'next/script'

export default function LiquidGLScripts() {
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
