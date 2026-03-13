'use client'

import { useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/component-css/Hero.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'
import LottiePlayer from '@/components/LottiePlayer'

const loadNotificationAnimation = () => import('@/animations/Notification-[remix].json')

export default function Hero() {
  const lottieWrapperRef = useRef(null)

  // Warm up the animation chunk once the browser is idle
  useEffect(() => {
    const prefetch = () => {
      loadNotificationAnimation().catch(() => undefined)
    }

    if (typeof window === 'undefined') {
      return
    }

    let idleId

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(prefetch)
    } else {
      idleId = window.setTimeout(prefetch, 1200)
    }

    return () => {
      if ('cancelIdleCallback' in window && typeof idleId === 'number') {
        window.cancelIdleCallback(idleId)
      } else if (idleId) {
        clearTimeout(idleId)
      }
    }
  }, [])

  const applyThemeToLottie = useCallback(() => {
    if (!lottieWrapperRef.current) {
      return
    }

    const lottieContainer = lottieWrapperRef.current.querySelector('svg')
    if (!lottieContainer) {
      return
    }

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
    const elementsToRecolor = lottieContainer.querySelectorAll('[fill="rgb(230,230,230)"], [style*="fill:rgb(230,230,230)"]')
    const darkElements = lottieContainer.querySelectorAll('[fill="rgb(0,0,0)"], [fill="black"], [style*="fill:rgb(0,0,0)"]')

    elementsToRecolor.forEach(element => {
      element.style.fill = primaryColor
    })

    darkElements.forEach(element => {
      element.style.fill = primaryColor
    })
  }, [])

  return (
    <section
      className={styles.heroSection}
      data-bg-color={getSectionBackground('hero')}
      data-text-color={getSectionTextColor('hero')}
    >
      <div className={styles.herobg} aria-hidden="true" />
      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className={styles.heroContent}>
          {/* Notification Animation */}

              <div
                ref={lottieWrapperRef}
                style={{
                  width: 'clamp(450px, 30vw, 560px)',
                  maxWidth: '95vw',
                  // height: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '20px'
                }}
              >
                <LottiePlayer
                  animationDataSrc={loadNotificationAnimation}
                  autoplay
                  loop={false}
                  loadOnVisible={false}
                  playerClassName={styles.themedLottie}
                  prefersReducedMotionFallback={null}
                  onAnimationLoaded={applyThemeToLottie}
                />
              </div>

          {/* Main heading with F18-style large typography */}
                    
          <h1 className={styles.heroHeading}>
          {/* <span
            className={styles.heroPreheading}
          >
            For founders who need momentum
          </span> */}
            <span className={styles.heroHeadingThin}>Build what matters.</span><br />
            Get momentum back.
          </h1>

          {/* Supporting line */}
          <p className={styles.heroSubheading}>
            Senior team designs and builds your website or MVP in a matter of weeks. Track tasks with boards. <br />Weekly progress updates, no chasing.
          </p>

          {/* <ul className={styles.heroHighlights} variants={fadeInUp}>
            <li className={styles.heroHighlightItem}>
              <span className={styles.heroHighlightIcon}><i className="bi bi-lightning-charge-fill" aria-hidden="true"></i></span>
              Weekly progress, no chasing
            </li>
            <li className={styles.heroHighlightItem}>
              <span className={styles.heroHighlightIcon}><i className="bi bi-people-fill" aria-hidden="true"></i></span>
              One senior team, end to end
            </li>
          </ul> */}

          {/* <p className={styles.heroQualifier} variants={fadeInUp}>
            For founders with a clear product and budget. Not for idea-stage work or large-agency procurement.
          </p> */}

          {/* CTA cluster - F18 style */}
          <div className={styles.heroActions}>
            <div>
              <a
                href="#chat"
                className="btn btn-primary btn-icon"
                onClick={() => analytics.hero.bookCall()}
              >
                <span className="btn-text">Book a fit check</span>
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </a>
            </div>

            <div>
              <Link
                href="/#pricing"
                className="btn btn-secondary"
                onClick={() => analytics.hero.ctaClick('See pricing')}
              >
                <span className="btn-text">See pricing</span>
              </Link>
            </div>
          </div>

          <p className={styles.heroCtaNote}>
            15-20 minute fit check.
          </p>

          {/* Trust strip - single-row pill with logos */}
          <div className={styles.trustStrip}>
            <div className={styles.trustPill}>
              <span className={styles.trustText}>Trusted by</span>
              <div className={styles.trustLogos}>
                <Image src="/images/portfolio-graphics/logos/btcpayserver.webp" alt="Client logo" width={172} height={32} className={styles.trustLogo} />
                <Image src="/images/portfolio-graphics/logos/wallet-scrutiny.webp" alt="Client logo" width={172} height={32} className={styles.trustLogo} />
                <Image src="/images/portfolio-graphics/logos/dvote.webp" alt="Client logo" width={72} height={132} className={`${styles.trustLogo} ${styles.trustLogoDvote}`} />
                <Image src="/images/portfolio-graphics/logos/zettahash.webp" alt="Client logo" width={172} height={32} className={`${styles.trustLogo} ${styles.trustLogoZetahash}`} />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
