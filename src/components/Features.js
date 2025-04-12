'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/component-css/Features.module.css'

export default function Features() {
  const features = [
    {
      icon: 'bi-globe',
      title: 'Web Development',
      description: 'Custom websites built with modern frameworks like Next.js, optimized for performance and SEO.'
    },
    {
      icon: 'bi-phone',
      title: 'App Development',
      description: 'Scalable apps built with Node.js, reactive frameworks, and serverless backends.'
    },
    {
      icon: 'bi-palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind.'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Web3 & Blockchain',
      description: 'Smart contract development, wallet integration, and decentralized apps tailored for the blockchain ecosystem.'
    },
    {
      icon: 'bi-code-slash',
      title: 'API Integration',
      description: 'Seamless integration with third-party services and custom API development.'
    },
    {
      icon: 'bi-gear',
      title: 'Maintenance & Support',
      description: '24/7 technical support and regular updates to keep your digital assets running smoothly.'
    }
  ]

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
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
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2
      }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.section
      className={styles.featuresSection}
      id="features"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={styles.backgroundGradient}></div>

      <div className="container">
        <motion.div
          className={styles.sectionHeading}
          variants={headingVariants}
        >
          <h2 className={styles.gradientText}>Our Services</h2>
          <p className={styles.subtitle}>Comprehensive solutions tailored for your digital needs</p>
        </motion.div>

        <motion.div
          className={styles.featuresGrid}
          variants={gridVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              variants={cardVariants}
            >
              <div className={styles.iconWrapper}>
                <i className={`bi ${feature.icon} ${styles.featureIcon}`}></i>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}