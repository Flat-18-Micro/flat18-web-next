'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '@/styles/component-css/Features.module.css'

export default function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const features = [
    {
      icon: 'bi-globe',
      title: 'Web Development',
      description: 'Custom websites built with modern frameworks like Next.js, optimised for performance and SEO.',
      color: 'primary',
      learnMore: '/services/web-development'
    },
    {
      icon: 'bi-phone',
      title: 'App Development',
      description: 'Scalable apps built with Node.js, reactive frameworks, and serverless backends.',
      color: 'secondary',
      learnMore: '/services/app-development'
    },
    {
      icon: 'bi-palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind.',
      color: 'accent-purple',
      learnMore: '/services/ui-ux-design'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Web3 & Blockchain',
      description: 'Smart contract development, wallet integration, and decentralised apps tailored for the blockchain ecosystem.',
      color: 'accent-teal',
      learnMore: '/services/web3-blockchain'
    },
    {
      icon: 'bi-code-slash',
      title: 'API Integration',
      description: 'Seamless integration with third-party services and bespoke API development.',
      color: 'accent-pink',
      learnMore: '/services/api-integration'
    },
    {
      icon: 'bi-gear',
      title: 'Maintenance & Support',
      description: '24/7 technical support and regular updates to keep your digital assets running smoothly.',
      color: 'accent-yellow',
      learnMore: '/services/maintenance-support'
    }
  ]

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section
      className={styles.featuresSection}
      id="features"
      ref={sectionRef}
    >
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.backgroundGrid}></div>
        <div className={styles.backgroundDots}></div>
      </div>

      <motion.div
        className="container"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className={styles.sectionHeading}
          variants={headingVariants}
        >
          <span className={styles.sectionLabel}>What We Do</span>
          <h2 className={styles.gradientText}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive solutions tailored to your digital needs in the crypto and blockchain space
          </p>
        </motion.div>

        <motion.div
          className={styles.featuresGrid}
          variants={gridVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${styles.featureCard} ${styles[feature.color]}`}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <i className={`bi ${feature.icon} ${styles.featureIcon}`}></i>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                {feature.learnMore && (
                  <div className={styles.cardFooter}>
                    <a className={styles.learnMore} href={feature.learnMore}>
                      Learn more <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                )}
              </div>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardBorder}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.ctaContainer}
          variants={headingVariants}
        >
          <a href="#chat" className={styles.ctaButton}>
            <span>Discuss Your Project</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}