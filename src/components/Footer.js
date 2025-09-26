'use client'

import Link from 'next/link'
import styles from '../styles/component-css/Footer.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'
import { useEffect, useRef, useState } from 'react'
import LottiePlayer from '@/components/LottiePlayer'

const loadFooterAnimation = () => import('@/animations/List-(4_3).json')

export default function Footer() {
  const lottieRef = useRef(null)
  const [isAnimationReady, setAnimationReady] = useState(false)

  useEffect(() => {
    if (!isAnimationReady || !lottieRef.current) {
      return
    }

    // Slow the animation right down
    lottieRef.current.setSpeed(0.5)
  }, [isAnimationReady])

  return (
    <footer
      className={styles.footer}
      aria-labelledby="footer-heading"
      data-bg-color={getSectionBackground('footer')}
      data-text-color={getSectionTextColor('footer')}
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        {/* Main footer content with Lottie animation on left and content on right */}
        <div className={styles.footerMainContent}>
          {/* Lottie Animation */}
          <div className={styles.footerAnimation}>
            <LottiePlayer
              animationDataSrc={loadFooterAnimation}
              loop
              autoplay
              lottieRef={lottieRef}
              className={styles.lottieAnimation}
              intersectionOptions={{ rootMargin: '0px 0px 200px 0px', threshold: 0.1 }}
              onAnimationLoaded={() => setAnimationReady(true)}
            />
          </div>

          {/* Footer content aligned to the right */}
          <div className={styles.footerContentWrapper}>
            {/* F18-style 4-column layout */}
            <div className={styles.footerGrid}>
              {/* Brand column */}
              <div className={styles.brandColumn}>
                <Link href="/" className={styles.footerBrand} aria-label="Flat 18 Home">
                  <div className={styles.footerLogo}>
                    <span className={styles.logoText}>F18</span>
                  </div>
                  <span className={styles.brandName}>Flat 18</span>
                </Link>
                <p className={styles.footerTagline}>
                  Premium web development and design for crypto, fintech, and digital platforms
                </p>

                {/* Social icons */}
                <div className={styles.socialIcons}>
                  <a href="https://x.com/f18_dev" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="bi bi-twitter-x" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/vswee" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="bi bi-github" aria-hidden="true"></i>
                  </a>
                  <a href="https://t.me/flat18_bot" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <i className="bi bi-telegram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              {/* Services column */}
              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>SERVICES</h3>
                <ul className={styles.linksList}>
                  <li>
                    <Link href="/#services" className={styles.footerLink}>
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" className={styles.footerLink}>
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" className={styles.footerLink}>
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" className={styles.footerLink}>
                      Blockchain Integration
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company column */}
              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>COMPANY</h3>
                <ul className={styles.linksList}>
                  <li>
                    <Link href="https://accounts.flat18.co.uk/client/login" className={styles.footerLink}>
                      <span>Client Portal</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#work" className={styles.footerLink}>
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/#how-it-works" className={styles.footerLink}>
                      Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className={styles.footerLink}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/ease-of-communication-standard" className={styles.footerLink}>
                      Communication Standard
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact column */}
              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>CONTACT</h3>
                <ul className={styles.linksList}>
                  <li>
                    <a href="#chat" className={styles.footerLink}>
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@flat18.co.uk" className={styles.footerLink}>
                      hello@flat18.co.uk
                    </a>
                  </li>
                  <li>
                    <Link href="/#pricing" className={styles.footerLink}>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <a href="https://t.me/flat18_bot" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer bottom */}
            <div className={styles.footerBottom}>
              <div className={styles.footerCopyright}>
                © {new Date().getFullYear()} Flat 18. All rights reserved.
              </div>
              <div className={styles.footerLegal}>
                <Link href="/privacy" className={styles.legalLink}>
                  Privacy Policy
                </Link>
                <Link href="/terms" className={styles.legalLink}>
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
