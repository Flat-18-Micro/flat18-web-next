'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import styles from '@/styles/component-css/Hero.module.css'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = 'Tailored Design and Development.\nAll under one roof.'
  const typingSpeed = 50 // milliseconds per character
  const heroRef = useRef(null)

  // Pre-calculate the height to prevent layout shifts
  useEffect(() => {
    if (heroRef.current) {
      const height = heroRef.current.offsetHeight;
      heroRef.current.style.minHeight = `${height}px`;
    }
  }, []);

  useEffect(() => {
    // Immediately set the full text for SEO and performance
    // The animation will overlay this text
    setIsTypingComplete(true);

    // Only run the typing animation if the user prefers reduced motion is not enabled
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTypedText(fullText);
      setShowCursor(false);
      return;
    }

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
    <section className={styles.heroSection} ref={heroRef}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient}></div>
        <div className={styles.heroGrid}></div>
      </div>

      <div className={styles.heroContent}>
        {/* Hidden heading for SEO and initial render */}
        <h1 className={styles.seoHeading} aria-hidden="true">
          {fullText}
        </h1>

        {/* Animated heading that overlays the SEO heading */}
        <h1 className={styles.heroHeading} data-text={typedText} aria-hidden="true">
          {typedText}
          {showCursor && <span className={styles.cursor}></span>}
        </h1>

        <p className={styles.heroSubheading}>
          We build modern, high-performance Web3 & DeFi solutions for entrepreneurs and startups in the crypto space. Specializing in secure, cost-effective development with premium design.
        </p>

        <div className={styles.heroActions}>
          <Link href="#chat" className="btn btn-primary btn-lg btn-icon">
            <span className="btn-text">Start Your Project <i className="bi bi-arrow-right"></i></span>
          </Link>
          <Link href="#work" className="btn btn-secondary btn-lg">
            <span className="btn-text">View Our Work</span>
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
