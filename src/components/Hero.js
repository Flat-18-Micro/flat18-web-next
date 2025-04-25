'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import styles from '@/styles/component-css/Hero.module.css'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Tailored Design and Development.\nAll under one roof.'
  const typingSpeed = 50 // milliseconds per character
  const heroRef = useRef(null)

  // Pre-calculate the height to prevent layout shifts
  useEffect(() => {
    if (heroRef.current) {
      const height = heroRef.current.offsetHeight;
      heroRef.current.style.minHeight = `${height}px`;

      // Set fixed dimensions for the heading container to prevent layout shifts
      const headingElement = heroRef.current.querySelector(`.${styles.heroHeading}`);
      if (headingElement) {
        const headingHeight = headingElement.offsetHeight;
        headingElement.style.minHeight = `${headingHeight}px`;
      }
    }
  }, []);

  useEffect(() => {
    // Immediately set the full text for SEO and performance
    // The animation will overlay this text
    // Set the full text immediately to prevent layout shifts
    setTypedText(fullText);

    // Only run the typing animation if the user prefers reduced motion is not enabled
    // Check if window is defined (for SSR compatibility)
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setShowCursor(false);
      return;
    }

    let currentIndex = 0
    let typingInterval

    // Start typing animation after a short delay
    const startTypingTimeout = setTimeout(() => {
      try {
        // Reset to empty string to start the animation
        setTypedText('');

        typingInterval = setInterval(() => {
          if (currentIndex < fullText.length) {
            setTypedText(fullText.substring(0, currentIndex + 1))
            currentIndex++
          } else {
            if (typingInterval) {
              clearInterval(typingInterval)
            }

            // Blink cursor for a while, then stop
            setTimeout(() => {
              setShowCursor(false)
            }, 3000)
          }
        }, typingSpeed)
      } catch (error) {
        console.error('Error in typing animation:', error);
        // Fallback to showing the full text
        setTypedText(fullText);
      }
    }, 500)

    return () => {
      if (startTypingTimeout) clearTimeout(startTypingTimeout)
      if (typingInterval) clearInterval(typingInterval)
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

        <div className={styles.availableIndicatorWrapper}>
          <span className={styles.availableDot}></span>
          Available for work
        </div>

        {/* Animated heading that overlays the SEO heading */}
        <h1
          className={styles.heroHeading}
          data-text={typedText || fullText}
          aria-hidden="true"
          style={{
            // Inline fallback styles to ensure text is visible even if CSS modules fail
            color: typedText ? 'transparent' : '#00f0b5',
            backgroundImage: 'linear-gradient(to right, #00f0b5, #3d9eee)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          {typedText || fullText}
          {showCursor && <span className={styles.cursor}></span>}
        </h1>

        <p className={styles.heroSubheading}>
          We build modern, high-performance Web3 & DeFi solutions for entrepreneurs and startups in the crypto space. Specialising in secure, cost-effective development and design.
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
