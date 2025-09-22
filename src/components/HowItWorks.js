'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/component-css/HowItWorks.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

export default function HowItWorks() {
  // F18-style four-step process
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start with a deep dive into your goals, audience, and technical requirements.',
      details: 'Strategy session, requirements gathering, project scoping'
    },
    {
      number: '02',
      title: 'Design',
      description: 'User-centered design that balances aesthetics with functionality and performance.',
      details: 'Wireframes, prototypes, visual design, user testing'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Modern, scalable code built with best practices and continuous integration.',
      details: 'Frontend & backend development, testing, optimization'
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Seamless deployment with ongoing support to ensure your success.',
      details: 'Deployment, monitoring, training, maintenance'
    }
  ]

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  return (
    <section
      className={styles.processSection}
      id="process"
      ref={sectionRef}
      data-bg-color={getSectionBackground('howItWorks')}
      data-text-color={getSectionTextColor('howItWorks')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeading}>
          <span className="label-uppercase">Process</span>
          <h2 className={styles.sectionTitle}>How we work</h2>
          <p className={styles.sectionDescription}>
            Our proven process delivers results on time and on budget
          </p>
        </div>

        {/* F18-style horizontal timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineTrack}></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.timelineStep}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.15
              }}
            >
              {/* Numbered badge with violet accent */}
              <div className={styles.stepBadge}>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>
              
              {/* Step content */}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                <p className={styles.stepDetails}>{step.details}</p>
              </div>
              
              {/* Connector line (except for last step) */}
              {index < steps.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.processBottom}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.8
          }}
        >
          <div className={styles.ctaContent}>
            <h3>Ready to get started?</h3>
            <p>Let's discuss your project and timeline</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Start your project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
