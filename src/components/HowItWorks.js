'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/component-css/HowItWorks.module.css'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: 'bi-chat-dots',
      description: 'Kick off with a quick discovery chat to map out your goals and timeline. We’ll craft a plan that fits your vision.',
      link: {
        text: 'Book a discovery chat',
        href: '#chat',
        icon: 'bi-arrow-right'
      }
    },
    {
      number: '02',
      title: 'Develop',
      icon: 'bi-code-slash',
      description: 'We build in the open with regular updates and clear comms, using modern tech and best practice to keep quality high.',

    },
    {
      number: '03',
      title: 'Deliver',
      icon: 'bi-rocket-takeoff',
      description: 'Expect first samples in 2–3 days and follow-ups inside 48 hours. Iteration keeps things on track until you’re thrilled with the result.',
      link: {
        text: 'See our past work',
        href: '#work',
        icon: 'bi-arrow-right'
      }
    }
  ]

  // We'll use useEffect and useState instead of Framer Motion's whileInView
  // to have more control over the animation and prevent flickering
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once when the section comes into view
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Once we've seen it, we can disconnect the observer
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
    <section className={styles.howItWorksSection} id="how-it-works" ref={sectionRef}>
      <div className={styles.sectionBackground}>
        <div className={styles.backgroundGradient}></div>
      </div>

      <div className="container">
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>How We Work</h2>
          <p className={styles.sectionSubtitle}>
            Our no-fuss process keeps quality high and momentum strong
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeIn',
                delay: index * 0.2 // Stagger the animations
              }}
            >
              <div className={styles.cardNumber}>{step.number}</div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
                {step.link && (
                  <a href={step.link.href} className={styles.cardLink}>
                    {step.link.text}
                    <i className={`bi ${step.link.icon}`}></i>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
