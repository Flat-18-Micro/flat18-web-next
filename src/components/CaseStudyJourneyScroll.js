'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function CaseStudyJourneyScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const buttons = Array.from(
      document.querySelectorAll(`.${styles.productJourneyImageButton}`)
    )

    if (!buttons.length) {
      return undefined
    }

    const cleanups = []

    buttons.forEach((button) => {
      const handleMouseEnter = () => {
        const image = button.querySelector(`.${styles.productJourneyImage}`)

        if (!(image instanceof HTMLImageElement) || !image.complete) {
          return
        }

        if (button.scrollHeight <= button.clientHeight * 2) {
          return
        }

        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches

        button.scrollTo({
          top: Math.max(0, button.scrollHeight - button.clientHeight),
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        })
      }

      button.addEventListener('mouseenter', handleMouseEnter)
      cleanups.push(() => {
        button.removeEventListener('mouseenter', handleMouseEnter)
      })
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [pathname])

  return null
}
