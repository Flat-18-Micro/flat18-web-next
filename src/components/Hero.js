'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/component-css/Hero.module.css'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Tailored Design and Development. All under one roof.'
  const typingSpeed = 50 // milliseconds per character

  useEffect(() => {
    let currentIndex = 0
    let typingInterval

    // Start typing animation after a short delay
    const startTypingTimeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typingInterval)

          // Blink cursor for a while, then stop
          setTimeout(() => {
            setShowCursor(false)
          }, 3000)
        }
      }, typingSpeed)
    }, 500)

    return () => {
      clearTimeout(startTypingTimeout)
      clearInterval(typingInterval)
    }
  }, [])

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient}></div>
        <div className={styles.heroGrid}></div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading} data-text={typedText}>
          {typedText}
          {showCursor && <span className={styles.cursor}></span>}
        </h1>

        <p className={styles.heroSubheading}>
          We build modern, high-performance websites and applications for entrepreneurs and solo founders in the crypto and blockchain space.
        </p>

        <div className={styles.heroActions}>
          <Link href="#chat" className="btn btn-primary btn-lg btn-icon">
            <span className="btn-text">Start Your Project <i className="bi bi-arrow-right"></i></span>
            <span className="btn-shine"></span>
          </Link>
          <Link href="#work" className="btn btn-secondary btn-lg">
            <span className="btn-text">View Our Work</span>
            <span className="btn-shine"></span>
          </Link>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>12+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
