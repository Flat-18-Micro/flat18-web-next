'use client'

import { useEffect } from 'react'

export default function HashAnchorScroll() {
  useEffect(() => {
    const headerOffset = 96

    const scrollToTarget = (target) => {
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset
      const root = document.documentElement
      const previousScrollBehavior = root.style.scrollBehavior

      root.style.scrollBehavior = 'auto'
      window.scrollTo({ top: Math.max(0, top), behavior: 'auto' })
      root.style.scrollBehavior = previousScrollBehavior
    }

    const scrollToHash = (hash = window.location.hash) => {
      if (typeof hash !== 'string') {
        hash = window.location.hash
      }

      if (!hash || hash.length < 2) return

      const targetId = decodeURIComponent(hash.slice(1))
      let attempts = 0

      const tryScroll = () => {
        const target = document.getElementById(targetId)
        if (target) {
          scrollToTarget(target)

          const distanceFromTarget = Math.abs(target.getBoundingClientRect().top - headerOffset)
          if (distanceFromTarget < 12 || attempts >= 20) {
            return
          }
        }

        attempts += 1
        if (attempts < 20) {
          window.setTimeout(tryScroll, 100)
        }
      }

      window.setTimeout(tryScroll, 0)
    }

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return

      const hash = link.getAttribute('href')
      if (!hash || hash === '#') return

      const targetId = decodeURIComponent(hash.slice(1))
      if (!document.getElementById(targetId)) return

      event.preventDefault()

      if (window.location.hash !== hash) {
        window.history.pushState(null, '', hash)
      }

      scrollToHash(hash)
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return null
}
