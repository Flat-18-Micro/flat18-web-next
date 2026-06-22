'use client'

import { useEffect } from 'react'
import styles from '@/styles/component-css/WhoThisIsForSection.module.css'

export default function WhoThisIsForMobileObserver() {
  useEffect(() => {
    const section = document.querySelector('[data-who-this-is-for]')

    if (!section) {
      return undefined
    }

    const mobileQuery = window.matchMedia('(max-width: 640px)')
    const cards = [...section.querySelectorAll('article')]
    let observer

    const clearActiveCards = () => {
      cards.forEach((card) => card.classList.remove(styles.cardInView))
    }

    const observeCards = () => {
      observer?.disconnect()
      observer = undefined
      clearActiveCards()

      if (!mobileQuery.matches) {
        return
      }

      if (!('IntersectionObserver' in window)) {
        cards.forEach((card) => card.classList.add(styles.cardInView))
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              styles.cardInView,
              entry.isIntersecting && entry.intersectionRatio >= 0.4
            )
          })
        },
        {
          rootMargin: '-12% 0px -18%',
          threshold: [0, 0.4, 0.7]
        }
      )

      cards.forEach((card) => observer.observe(card))
    }

    observeCards()
    mobileQuery.addEventListener('change', observeCards)

    return () => {
      observer?.disconnect()
      mobileQuery.removeEventListener('change', observeCards)
    }
  }, [])

  return null
}
