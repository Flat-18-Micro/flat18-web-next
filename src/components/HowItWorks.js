'use client'

import styles from '@/styles/component-css/HowItWorks.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

export default function HowItWorks() {
  // F18-style four-step process
  const steps = [
    {
      number: '01',
      title: 'Align',
      description: 'We lock goals, users, and success metrics before we design a pixel.',
      details: '45-min discovery, scope, timeline, success criteria'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Messaging, flows, and UI that move people to act.',
      details: 'Wireframes, prototypes, content direction'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Senior engineers build, test, and optimize the product.',
      details: 'Frontend + backend, QA, performance passes'
    },
    {
      number: '04',
      title: 'Launch + Iterate',
      description: 'We deploy, monitor, and keep improving with you.',
      details: 'Release, analytics, handover, support'
    }
  ]

  return (
    <section
      className={styles.processSection}
      id="process"
      data-bg-color={getSectionBackground('howItWorks')}
      data-text-color={getSectionTextColor('howItWorks')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeading}>
          <span className="label-uppercase">Process</span>
          <h2 className={styles.sectionTitle}>How we ship</h2>
          <p className={styles.sectionDescription}>
            Clear milestones, weekly updates, and no surprises.
          </p>
        </div>

        {/* Dynamic card layout */}
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <article
              key={index}
              className={styles.processCard}
              data-liquid-prebuild="true"
            >
                <div className={styles.cardHeader}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <p className={styles.stepDetails}>{step.details}</p>
                </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.processBottom}>
          <div className={styles.ctaContent}>
            <h3>Ready to ship?</h3>
            <p>We'll map scope, timeline, and next steps fast.</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Book a fit check
          </a>
        </div>
      </div>
    </section>
  )
}
