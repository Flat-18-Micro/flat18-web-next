'use client'

import { motion } from 'framer-motion'
import styles from '../styles/component-css/HowItWorks.module.css'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: 'bi-chat-dots',
      description: 'We start with a discovery session to understand your project needs, goals, and timeline. This helps us create a tailored development plan that aligns with your vision.',
      link: {
        text: 'Start a Discovery session',
        href: '#chat',
        icon: 'bi-arrow-right'
      }
    },
    {
      number: '02',
      title: 'Develop',
      icon: 'bi-code-slash',
      description: 'Our team of experts begins building your project with regular updates and transparent communication. We use modern technologies and best practices to ensure high-quality results.',
      link: {
        text: 'View our process',
        href: '#pricing',
        icon: 'bi-arrow-right'
      }
    },
    {
      number: '03',
      title: 'Deliver',
      icon: 'bi-rocket-takeoff',
      description: 'We deliver initial samples within 2-3 days, with subsequent requests completed within 48 hours. Our iterative approach ensures you are satisfied with the final product.',
      link: {
        text: 'See our past work',
        href: '#work',
        icon: 'bi-arrow-right'
      }
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className={styles.howItWorksSection} id="how-it-works">
      <div className={styles.sectionBackground}>
        <div className={styles.backgroundGradient}></div>
      </div>

      <div className="container">
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>How We Work</h2>
          <p className={styles.sectionSubtitle}>
            Our streamlined process delivers exceptional results with maximum efficiency
          </p>
        </div>

        <motion.div
          className={styles.cardsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.cardNumber}>{step.number}</div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
                <a href={step.link.href} className={styles.cardLink}>
                  {step.link.text}
                  <i className={`bi ${step.link.icon}`}></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
