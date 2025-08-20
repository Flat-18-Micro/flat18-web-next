'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '@/styles/component-css/Hero.module.css'

export default function Hero() {
  const fullText = 'Websites & Apps\nBuilt Fast — Designed to Last.';
  const heroRef = useRef(null)

  // Pre-calculate the height to prevent layout shifts
  useEffect(() => {
    if (heroRef.current) {
      const height = heroRef.current.offsetHeight*.83;
      heroRef.current.style.minHeight = height<900?'900px':`calc(${height}px + 6rem)`;
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
    <section className={styles.heroSection} ref={heroRef}>
      {/* Animated background elements */}
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient}></div>
        <div className={styles.heroGrid}></div>
      </div>

      <motion.div
        className={styles.heroContent}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Hidden heading for SEO */}
        <h1 className={styles.seoHeading}>
          {fullText}
        </h1>

        <div className={styles.badgeBanner}>
          ⬤ Now taking on new projects – claim your spot today
        </div>

        {/* Main heading with updated content */}
        <motion.h1 className={styles.heroHeading} variants={fadeInUp}>
          Websites & Apps<br></br>Built Fast — Designed to Last.
        </motion.h1>

        <motion.p
          className={styles.heroSubheading}
          variants={fadeInUp}
        >
          Design-led UX. Security-first engineering. AI-assisted velocity.
        </motion.p>

        {/* Badge pillars */}
        <motion.div
          className={styles.heroPillars}
          variants={fadeInUp}
        >
          <span className={styles.pillar}>DeFi</span>
          <span className={styles.pillar}>Web3</span>
          <span className={styles.pillar}>Full-Stack Apps</span>
          <span className={styles.pillar}>Websites & Design</span>
        </motion.div>

        <motion.div
          className={styles.heroActions}
          variants={staggerContainer}
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link href="#contact" className={`${styles.primaryButton} btn-icon`}>
              <span className={styles.btnText}>Start your build</span>
              <span className={styles.btnIcon}><i className="bi bi-arrow-right"></i></span>
              <span className={styles.btnGlow}></span>
            </Link>
          </motion.div>

          <motion.div variants={secondaryButtonVariants} whileHover="hover" whileTap="tap">
            <Link href="#work" className={styles.secondaryButton}>
              <span className={styles.btnText}>See our work</span>
              <span className={styles.btnGlow}></span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroStats}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.6, staggerChildren: 0.2 }}
        >
          <motion.div
            className={styles.statItem}
            variants={statVariants}
            whileHover="hover"
          >
            <div className={styles.statNumber}>12+</div>
            <div className={styles.statLabel}>Years in product development</div>
            <div className={styles.statGlow}></div>
          </motion.div>

          <motion.div
            className={styles.statItem}
            variants={statVariants}
            whileHover="hover"
          >
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Projects shipped</div>
            <div className={styles.statGlow}></div>
          </motion.div>

          <motion.div
            className={styles.statItem}
            variants={statVariants}
            whileHover="hover"
          >
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Happy clients</div>
            <div className={styles.statGlow}></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
