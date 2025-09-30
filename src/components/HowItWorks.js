'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
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

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const headingVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5
      }
    }
  }

  // Scroll-based transforms to mirror the "What we do" services cards
  const card1X = useTransform(scrollYProgress, [0, 0.12, 0.35, 1], [-120, -120, 0, 0])
  const card1Y = useTransform(scrollYProgress, [0, 0.12, 0.35, 1], [80, 80, 0, 0])
  const card1Scale = useTransform(scrollYProgress, [0, 0.12, 0.35, 1], [0.7, 0.7, 1, 1])
  const card1Rotate = useTransform(scrollYProgress, [0, 0.12, 0.35, 1], [-8, -8, 0, 0])
  const card1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.35, 1], [0, 0, 1, 1])

  const card2X = useTransform(scrollYProgress, [0, 0.18, 0.4, 1], [120, 120, 0, 0])
  const card2Y = useTransform(scrollYProgress, [0, 0.18, 0.4, 1], [70, 70, 0, 0])
  const card2Scale = useTransform(scrollYProgress, [0, 0.18, 0.4, 1], [0.68, 0.68, 1, 1])
  const card2Rotate = useTransform(scrollYProgress, [0, 0.18, 0.4, 1], [9, 9, 0, 0])
  const card2Opacity = useTransform(scrollYProgress, [0, 0.18, 0.4, 1], [0, 0, 1, 1])

  const card3X = useTransform(scrollYProgress, [0, 0.24, 0.45, 1], [-140, -140, 0, 0])
  const card3Y = useTransform(scrollYProgress, [0, 0.24, 0.45, 1], [-60, -60, 0, 0])
  const card3Scale = useTransform(scrollYProgress, [0, 0.24, 0.45, 1], [0.7, 0.7, 1, 1])
  const card3Rotate = useTransform(scrollYProgress, [0, 0.24, 0.45, 1], [-10, -10, 0, 0])
  const card3Opacity = useTransform(scrollYProgress, [0, 0.24, 0.45, 1], [0, 0, 1, 1])

  const card4X = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [130, 130, 0, 0])
  const card4Y = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [-80, -80, 0, 0])
  const card4Scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0.68, 0.68, 1, 1])
  const card4Rotate = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [11, 11, 0, 0])
  const card4Opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 0, 1, 1])

  const cardTransforms = [
    { x: card1X, y: card1Y, scale: card1Scale, rotate: card1Rotate, opacity: card1Opacity },
    { x: card2X, y: card2Y, scale: card2Scale, rotate: card2Rotate, opacity: card2Opacity },
    { x: card3X, y: card3Y, scale: card3Scale, rotate: card3Rotate, opacity: card3Opacity },
    { x: card4X, y: card4Y, scale: card4Scale, rotate: card4Rotate, opacity: card4Opacity }
  ]

  return (
    <section
      className={styles.processSection}
      id="process"
      ref={sectionRef}
      data-bg-color={getSectionBackground('howItWorks')}
      data-text-color={getSectionTextColor('howItWorks')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <motion.div
          className={styles.sectionHeading}
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="label-uppercase">Process</span>
          <h2 className={styles.sectionTitle}>How we work</h2>
          <p className={styles.sectionDescription}>
            Our proven process delivers results on time and on budget
          </p>
        </motion.div>

        {/* Dynamic card layout */}
        <motion.div
          className={styles.stepsGrid}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {steps.map((step, index) => {
            const transforms = cardTransforms[index] || cardTransforms[0]

            return (
              <motion.article
                key={index}
                className={styles.processCard}
                style={{
                  x: transforms.x,
                  y: transforms.y,
                  scale: transforms.scale,
                  rotate: transforms.rotate,
                  opacity: transforms.opacity
                }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <p className={styles.stepDetails}>{step.details}</p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.processBottom}
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
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
