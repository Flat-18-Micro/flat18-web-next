'use client'

import styles from '@/styles/component-css/Features.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

export default function Features() {
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

  return (
    <section
      className={styles.servicesSection}
      id="services"
      data-bg-color={getSectionBackground('features')}
      data-text-color={getSectionTextColor('features')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeading}>
          <span className="label-uppercase">Services</span>
          <h2 className={styles.sectionTitle}>What we do</h2>
          <p className={styles.sectionDescription}>
            Full-stack design and development for founders who need speed without sacrificing quality.
          </p>
        </div>

        {/* F18-style 2x2 grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              data-liquid-prebuild="true"
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <i className={`bi ${service.icon}`} aria-hidden="true"></i>
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
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <h3>Ready to check fit?</h3>
            <p>Short call to confirm scope and whether we're right.</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Book a fit check
          </a>
        </div>
      </div>
    </section>
  )
}
