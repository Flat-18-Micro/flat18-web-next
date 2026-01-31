'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/component-css/Hero.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'
import LottiePlayer, { usePrefersReducedMotion } from '@/components/LottiePlayer'

const loadNotificationAnimation = () => import('@/animations/Notification-[remix].json')
const herobgAnimation = () => import('@/animations/paths.json')

export default function Hero() {
  const heroRef = useRef(null)
  const [startAnimation, setStartAnimation] = useState(false)
  const lottieWrapperRef = useRef(null)
  const herobgLottieRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  // Warm up the animation chunk once the browser is idle
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const prefetch = () => {
      loadNotificationAnimation().catch(() => undefined)
      herobgAnimation().catch(() => undefined)
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
  }, [prefersReducedMotion])

  // Ensure hero section always uses natural content height
  useEffect(() => {
    if (heroRef.current) {
      // Always use auto height to prevent any clipping
      // heroRef.current.style.minHeight = 'auto';
      heroRef.current.style.height = 'auto';
    }
  }, []);

  // Callback to set animation speed when loaded
  const handleHerobgLoaded = useCallback(() => {
    // Small delay to ensure lottie instance is fully ready
    setTimeout(() => {
      if (herobgLottieRef.current) {
        console.log('Setting herobg animation speed to 0.25x')
        herobgLottieRef.current.setSpeed(0.25)
        console.log('Current speed:', herobgLottieRef.current)
      } else {
        console.log('herobgLottieRef.current is not available')
      }
    }, 100)
  }, [])

  // Start Lottie animation after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true)
    }, 2000)

    return () => clearTimeout(timer)
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

  // Re-apply theming if the animation changes after it has been shown
  useEffect(() => {
    if (!startAnimation || prefersReducedMotion) {
      return
    }

    const timer = setTimeout(() => {
      applyThemeToLottie()
    }, 120)

    return () => clearTimeout(timer)
  }, [applyThemeToLottie, prefersReducedMotion, startAnimation])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 105, 240, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 5px 15px rgba(0, 105, 240, 0.2)",
    }
  };

  const secondaryButtonVariants = {
    ...buttonVariants,
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(61, 158, 238, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 105, 240, 0.2)",
      borderColor: "rgba(0, 105, 240, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      className={styles.heroSection}
      ref={heroRef}
      data-bg-color={getSectionBackground('hero')}
      data-text-color={getSectionTextColor('hero')}
    >
      <div className={styles.herobg}>
                          <LottiePlayer
                    animationDataSrc={herobgAnimation}
                    autoplay
                    loop={true}
                    lottieRef={herobgLottieRef}
                    onDOMLoaded={handleHerobgLoaded}
                  />
</div>
      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* AI-led Badge / Notification Animation */}
          <motion.div variants={fadeInUp}>
            {!startAnimation || prefersReducedMotion ? (
              <motion.div
                className={styles.aiBadge}
                initial={{ opacity: 1 }}
                animate={{ opacity: startAnimation && !prefersReducedMotion ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className={`${styles.aiBadgeLabel} label-uppercase`}>
                  <span className={styles.aiBadgeIndicator} aria-hidden="true"></span>
                  <span className={styles.aiBadgeCopy}>Open for new projects</span>
                </span>
              </motion.div>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  rotate: -15,
                  scale: 0.8
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                style={{
                  transformOrigin: 'center center'
                }}
              >
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
              </motion.div>
            )}
          </motion.div>

          {/* Main heading with F18-style large typography */}
                    
          <motion.h1 className={styles.heroHeading} variants={fadeInUp}>
          <span
            className={styles.heroPreheading}
            variants={fadeInUp}
          >
            Designing and Building
          </span>
            <span className={styles.heroHeadingThin}>Robust Web Products</span><br />
            AI-assisted. Human-led.<br />Shipped properly.
          </motion.h1>

          {/* Supporting line */}
          <motion.p
            className={styles.heroSubheading}
            variants={fadeInUp}
          >
            UI/UX design backed by security-first engineering and maintainable code.
          </motion.p>

          {/* CTA cluster - F18 style */}
          <motion.div
            className={styles.heroActions}
            variants={staggerContainer}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <a
                href="#chat"
                className="btn btn-primary btn-icon"
                onClick={() => analytics.hero.bookCall()}
              >
                <span className="btn-text">Book a call</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </motion.div>

            <motion.div variants={secondaryButtonVariants} whileHover="hover" whileTap="tap">
              <Link
                href="/#pricing"
                className="btn btn-secondary"
                onClick={() => analytics.hero.ctaClick('See pricing')}
              >
                <span className="btn-text">See pricing</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust strip - single-row pill with logos */}
          <motion.div
            className={styles.trustStrip}
            variants={fadeInUp}
          >
            <div className={styles.trustPill}>
              <span className={styles.trustText}>Trusted by founders at</span>
              <div className={styles.trustLogos}>
                <Image src="/images/portfolio-graphics/logos/btcpayserver.webp" alt="Client logo" width={172} height={32} className={styles.trustLogo} />
                <Image src="/images/portfolio-graphics/logos/wallet-scrutiny.webp" alt="Client logo" width={172} height={32} className={styles.trustLogo} />
                <Image src="/images/portfolio-graphics/logos/dvote.webp" alt="Client logo" width={72} height={132} className={`${styles.trustLogo} ${styles.trustLogoDvote}`} />
                <Image src="/images/portfolio-graphics/logos/zettahash.webp" alt="Client logo" width={172} height={32} className={`${styles.trustLogo} ${styles.trustLogoZetahash}`} />
              </div>
            </div>
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
}
