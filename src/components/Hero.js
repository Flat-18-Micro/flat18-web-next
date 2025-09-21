'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/component-css/Hero.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground } from '@/hooks/useScrollBackground'

export default function Hero() {
  const heroRef = useRef(null)

  // Pre-calculate the height to prevent layout shifts
  useEffect(() => {
    if (heroRef.current) {
      const height = heroRef.current.offsetHeight * 0.83;
      heroRef.current.style.minHeight = height < 900 ? '900px' : `calc(${height}px + 6rem)`;
    }
  }, []);

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
    >

      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-6 sm:px-8`}>
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* AI-led Badge */}
          <motion.div className={styles.aiBadge} variants={fadeInUp}>
            <span className={`${styles.aiBadgeLabel} label-uppercase`}>
              <span className={styles.aiBadgeIndicator} aria-hidden="true"></span>
              <span className={styles.aiBadgeCopy}>Open for new projects</span>
            </span>
          </motion.div>

          {/* Main heading with F18-style large typography */}
          <motion.h1 className={styles.heroHeading} variants={fadeInUp}>
            Websites & Apps<br />
            <span className={styles.heroHeadingThin}>AI-Led Design + Development</span>
          </motion.h1>

          {/* Supporting line */}
          <motion.p
            className={styles.heroSubheading}
            variants={fadeInUp}
          >
            UI/UX Development. Security-first engineering. Robust code designed to last..
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
                <Image src="/images/portfolio-graphics/logos/btcpayserver.webp" alt="Client logo" width={72} height={32} className={styles.trustLogo} />
                <Image src="/images/portfolio-graphics/logos/wallet-scrutiny.webp" alt="Client logo" width={72} height={32} className={styles.trustLogo} />
                <Image src="/images/portfolio-graphics/logos/dvote.webp" alt="Client logo" width={72} height={32} className={`${styles.trustLogo} ${styles.trustLogoDvote}`} />
                <Image src="/images/portfolio-graphics/logos/zettahash.webp" alt="Client logo" width={72} height={32} className={`${styles.trustLogo} ${styles.trustLogoZetahash}`} />
              </div>
            </div>
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
}
