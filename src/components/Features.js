'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from '@/styles/component-css/Features.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

export default function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // F18-style 2x2 services grid
  const services = [
    {
      icon: 'bi-palette',
      title: 'Product & UX',
      description: 'Positioning, flows, and UI that turn interest into action.',
      bullets: ['Messaging & user journeys', 'Design systems & prototypes'],
      href: '/services/ui-ux-design'
    },
    {
      icon: 'bi-code-slash',
      title: 'Web Engineering',
      description: 'Fast, secure builds that scale without rewrites.',
      bullets: ['Next.js + API integrations', 'Performance + QA'],
      href: '/services/web-development'
    },
    {
      icon: 'bi-credit-card-2-front',
      title: 'Fintech & Web3',
      description: 'Payments, wallets, and complex data flows built right.',
      bullets: ['Compliance-aware UX', 'Wallet + payment integrations'],
      href: '/services/web3-blockchain'
    },
    {
      icon: 'bi-gear',
      title: 'Retainers',
      description: 'Ongoing shipping after launch.',
      bullets: ['Monthly improvements', 'Priority support'],
      href: '/services/maintenance-support'
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
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  }

  // Create scroll-based transforms for each card
  // Card 1 transforms (top-left)
  const card1X = useTransform(scrollYProgress, [0, 0.1, 0.35, 1], [-100, -100, 0, 0])
  const card1Y = useTransform(scrollYProgress, [0, 0.1, 0.35, 1], [-100, -100, 0, 0])
  const card1Scale = useTransform(scrollYProgress, [0, 0.1, 0.35, 1], [0.6, 0.6, 1, 1])
  const card1Rotate = useTransform(scrollYProgress, [0, 0.1, 0.35, 1], [-15, -15, 0, 0])
  const card1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.35, 1], [0, 0, 1, 1])

  // Card 2 transforms (top-right)
  const card2X = useTransform(scrollYProgress, [0, 0.15, 0.4, 1], [100, 100, 0, 0])
  const card2Y = useTransform(scrollYProgress, [0, 0.15, 0.4, 1], [-100, -100, 0, 0])
  const card2Scale = useTransform(scrollYProgress, [0, 0.15, 0.4, 1], [0.6, 0.6, 1, 1])
  const card2Rotate = useTransform(scrollYProgress, [0, 0.15, 0.4, 1], [15, 15, 0, 0])
  const card2Opacity = useTransform(scrollYProgress, [0, 0.15, 0.4, 1], [0, 0, 1, 1])

  // Card 3 transforms (bottom-left)
  const card3X = useTransform(scrollYProgress, [0, 0.2, 0.45, 1], [-100, -100, 0, 0])
  const card3Y = useTransform(scrollYProgress, [0, 0.2, 0.45, 1], [100, 100, 0, 0])
  const card3Scale = useTransform(scrollYProgress, [0, 0.2, 0.45, 1], [0.6, 0.6, 1, 1])
  const card3Rotate = useTransform(scrollYProgress, [0, 0.2, 0.45, 1], [-15, -15, 0, 0])
  const card3Opacity = useTransform(scrollYProgress, [0, 0.2, 0.45, 1], [0, 0, 1, 1])

  // Card 4 transforms (bottom-right)
  const card4X = useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [100, 100, 0, 0])
  const card4Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [100, 100, 0, 0])
  const card4Scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [0.6, 0.6, 1, 1])
  const card4Rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [15, 15, 0, 0])
  const card4Opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [0, 0, 1, 1])

  // Array of card transforms for easy access
  const cardTransforms = [
    { x: card1X, y: card1Y, scale: card1Scale, rotate: card1Rotate, opacity: card1Opacity },
    { x: card2X, y: card2Y, scale: card2Scale, rotate: card2Rotate, opacity: card2Opacity },
    { x: card3X, y: card3Y, scale: card3Scale, rotate: card3Rotate, opacity: card3Opacity },
    { x: card4X, y: card4Y, scale: card4Scale, rotate: card4Rotate, opacity: card4Opacity }
  ]

  return (
    <section
      className={styles.servicesSection}
      id="services"
      ref={sectionRef}
      data-bg-color={getSectionBackground('features')}
      data-text-color={getSectionTextColor('features')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <motion.div
          className={styles.sectionHeading}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="label-uppercase">Services</span>
          <h2 className={styles.sectionTitle}>What we do</h2>
          <p className={styles.sectionDescription}>
            Full-stack design and development for founders who need speed without sacrificing quality.
          </p>
        </motion.div>

        {/* F18-style 2x2 grid */}
        <motion.div
          className={styles.servicesGrid}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const transforms = cardTransforms[index] || cardTransforms[0] // Fallback to first card transforms

            return (
              <motion.div
                key={index}
                className={styles.serviceCard}
                style={{
                  x: transforms.x,
                  y: transforms.y,
                  scale: transforms.scale,
                  rotate: transforms.rotate,
                  opacity: transforms.opacity
                }}
              >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>

              <p className={styles.serviceDescription}>{service.description}</p>

              <ul className={styles.serviceBullets}>
                {service.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>

              {/* Micro-CTA */}
              <div className={styles.cardFooter}>
                <a href={service.href} className={styles.microCTA}>
                  Learn more
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCTA}
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className={styles.ctaContent}>
            <h3>Ready to check fit?</h3>
            <p>Short call to confirm scope and whether we're right.</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Book a fit check
          </a>
        </motion.div>
      </div>
    </section>
  )
}
