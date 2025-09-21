'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '@/styles/component-css/Features.module.css'
import { getSectionBackground } from '@/hooks/useScrollBackground'

export default function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // F18-style 2x2 services grid
  const services = [
    {
      icon: 'bi-palette',
      title: 'Product & UX',
      description: 'User-centered design that drives outcomes and engagement.',
      bullets: ['User research & testing', 'Interface design'],
      href: '/services/ui-ux-design'
    },
    {
      icon: 'bi-code-slash',
      title: 'Web Engineering',
      description: 'Fast, scalable development with quality assurance.',
      bullets: ['Modern frameworks', 'Performance optimization'],
      href: '/services/web-development'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Web3 & Emerging',
      description: 'Blockchain integration and decentralized applications.',
      bullets: ['Smart contracts', 'Wallet integrations'],
      href: '/services/web3-blockchain'
    },
    {
      icon: 'bi-gear',
      title: 'Retainers',
      description: 'Ongoing support and continuous development.',
      bullets: ['Monthly maintenance', 'Feature updates'],
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

  // Create directional card variants based on index
  const getCardVariants = (index) => {
    // Determine direction based on index (cycling through 4 directions)
    const directions = [
      { x: -100, y: -100 }, // top-left
      { x: 100, y: -100 },  // top-right
      { x: -100, y: 100 },  // bottom-left
      { x: 100, y: 100 }    // bottom-right
    ]

    const direction = directions[index % 4]

    return {
      hidden: {
        opacity: 0,
        x: direction.x,
        y: direction.y,
        scale: 0.6,
        rotate: index % 2 === 0 ? -15 : 15, // Alternate rotation direction
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    }
  }

  return (
    <section
      className={styles.servicesSection}
      id="services"
      ref={sectionRef}
      data-bg-color={getSectionBackground('features')}
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
            Full-stack design and development for crypto and web3 founders
          </p>
        </motion.div>

        {/* F18-style 2x2 grid */}
        <motion.div
          className={styles.servicesGrid}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              variants={getCardVariants(index)}
              whileHover={{
                y: -4,
                scale: 1.02,
                rotate: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
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
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCTA}
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className={styles.ctaContent}>
            <h3>Ready to start your project?</h3>
            <p>Book a discovery call to discuss your needs</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Book a call
          </a>
        </motion.div>
      </div>
    </section>
  )
}