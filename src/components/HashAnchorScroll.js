'use client'

import { useEffect } from 'react'

export default function HashAnchorScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash || hash.length < 2) return

      let attempts = 0
      const targetId = decodeURIComponent(hash.slice(1))

      const tryScroll = () => {
        const target = document.getElementById(targetId)
        if (target) {
          target.scrollIntoView({ block: 'start' })
          return
        }

        attempts += 1
        if (attempts < 20) {
          window.setTimeout(tryScroll, 100)
        }
      }

      window.setTimeout(tryScroll, 0)
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return null
}
