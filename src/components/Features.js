import styles from '@/styles/component-css/Features.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function Features() {
  const services = [
    {
      icon: 'bi-lightning-charge',
      title: 'MVP Sprint',
      description: "For founders who need to validate an idea, demo a product or get a working MVP into users' hands quickly.",
      bestFor: 'Validation, demos and early users',
      pace: '2-6 weeks',
      bullets: ['Product scoping', 'UX/UI direction', 'Full-stack implementation', 'LLM-accelerated build process', 'Deployment support'],
      href: '/services/app-development'
    },
    {
      icon: 'bi-layers',
      title: 'Product Build',
      description: 'For teams that need a more complete web app, dashboard or product system built with stronger foundations.',
      bestFor: 'SaaS, dashboards, internal tools and customer platforms',
      pace: '6-12+ weeks',
      bullets: ['UX and interface design', 'Frontend and backend development', 'Authentication, data models and integrations', 'Testing and refinement', 'Launch support'],
      href: '/services/web-development'
    },
    {
      icon: 'bi-infinity',
      title: 'Ongoing Studio',
      description: 'For clients who need a long-term design and development partner for product improvements, experiments and feature delivery.',
      bestFor: 'Teams with a live product or growing backlog',
      pace: 'Monthly',
      bullets: ['Iterative feature work', 'Design and UX improvements', 'Technical maintenance', 'Refactoring and performance work', 'Product support'],
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
          <h2 className={styles.sectionTitle}>Three focused build paths</h2>
          <p className={styles.sectionDescription}>
            Choose the level of support that fits the product. Each route uses senior direction, practical design and LLM-assisted delivery where it genuinely speeds the work.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              data-index={String(index + 1).padStart(2, '0')}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <i className={`bi ${service.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>

              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.serviceMetaGrid}>
                <div className={styles.serviceMeta}>
                  <span>Best for</span>
                  <strong>{service.bestFor}</strong>
                </div>
                <div className={styles.serviceMeta}>
                  <span>Typical pace</span>
                  <strong>{service.pace}</strong>
                </div>
              </div>

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

        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <h3>Not sure which route fits?</h3>
            <p>Send the goal, deadline and main risk. We will suggest the leanest responsible route.</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
