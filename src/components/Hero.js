'use client'

import { useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'
import styles from '@/styles/component-css/Hero.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'
import LottiePlayer from '@/components/LottiePlayer'

const networkAnimation = () => import('@/animations/Network.json')

export default function Hero() {
  const lottieWrapperRef = useRef(null)
  const lottieRef = useRef(null)

  // Warm up the animation chunk once the browser is idle
  useEffect(() => {
    const prefetch = () => {
      networkAnimation().catch(() => undefined)
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

    lottieRef.current?.setSpeed?.(0.1)
  }, [])

  return (
    <section
      className={styles.heroSection}
      data-bg-color={getSectionBackground('hero')}
      data-text-color={getSectionTextColor('hero')}
    >
      <div className={styles.herobg} aria-hidden="true" />
      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>

        {/* ── Copy column ── */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            <span className={styles.heroHeadingThin}>Build what matters.</span>
            {' '}Get momentum back.
          </h1>

          <p className={styles.heroSubheading}>
            Senior team designs and builds your website or MVP in weeks.
            Track tasks with boards — weekly progress updates, no chasing.
          </p>

          <div className={styles.heroActions}>
            <a
              href="#chat"
              className="btn btn-primary btn-icon"
              onClick={() => analytics.hero.bookCall()}
            >
              <span className="btn-text">Chat with us</span>
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
            <Link
              href="/#pricing"
              className="btn btn-secondary"
              onClick={() => analytics.hero.ctaClick('See pricing')}
            >
              <span className="btn-text">See pricing</span>
            </Link>
          </div>

          {/* Trust strip */}
          <div className={styles.trustStrip}>
            <div className={styles.trustPill}>
              <span className={styles.trustText}>Trusted by</span>
              <div className={styles.trustLogos}>
                <ResponsiveImage
                  src="/images/portfolio-graphics/logos/btcpayserver.webp"
                  alt="BTCPay Server"
                  width={172}
                  height={32}
                  className={styles.trustLogo}
                  sizes="172px"
                  widths={[120, 240, 360, 600, 1000]}
                />
                <ResponsiveImage
                  src="/images/portfolio-graphics/logos/wallet-scrutiny.webp"
                  alt="Wallet Scrutiny"
                  width={172}
                  height={32}
                  className={styles.trustLogo}
                  sizes="172px"
                  widths={[120, 240, 360, 600, 1000]}
                />
                <ResponsiveImage
                  src="/images/portfolio-graphics/logos/dvote.webp"
                  alt="DVote"
                  width={72}
                  height={132}
                  className={`${styles.trustLogo} ${styles.trustLogoDvote}`}
                  sizes="72px"
                  widths={[120, 240, 360, 600, 1000]}
                />
                <ResponsiveImage
                  src="/images/portfolio-graphics/logos/zettahash.webp"
                  alt="Zettahash"
                  width={172}
                  height={32}
                  className={`${styles.trustLogo} ${styles.trustLogoZetahash}`}
                  sizes="172px"
                  widths={[120, 240, 360, 600, 1000]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Lottie column ── */}
        <div className={styles.lottieCol} ref={lottieWrapperRef} aria-hidden="true">
          <LottiePlayer
            animationDataSrc={networkAnimation}
            autoplay
            loop={true}
            lottieRef={lottieRef}
            loadOnVisible={false}
            playerClassName={styles.themedLottie}
            prefersReducedMotionFallback={null}
            onAnimationLoaded={applyThemeToLottie}
          />
        </div>

      </div>
    </section>
  )
}
