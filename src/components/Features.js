import styles from '@/styles/component-css/Features.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function Features() {
  const services = [
    {
      icon: 'bi-lightning-charge',
      title: 'Curated MVP sprint',
      description: 'A tight sprint from idea to usable first release.',
      bestFor: 'New products, demos and market tests',
      pace: '2-6 weeks',
      bullets: ['Scope and user flow', 'UX, UI and full-stack build', 'Deploy, document, hand over'],
      href: '/services/app-development'
    },
    {
      icon: 'bi-layers',
      title: 'Complete product build',
      description: 'End-to-end design and engineering for production software.',
      bestFor: 'SaaS, dashboards, internal tools and customer platforms',
      pace: '6-12+ weeks',
      bullets: ['Architecture and product design', 'Frontend, backend and integrations', 'QA, launch and handover'],
      href: '/services/web-development'
    },
    {
      icon: 'bi-infinity',
      title: 'Monthly product team',
      description: 'Steady senior product work without hiring.',
      bestFor: 'Teams with a live product or growing backlog',
      pace: 'Monthly',
      bullets: ['One active request', 'Clear product queue', 'Pause when done'],
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
          <h2 className={styles.sectionTitle}>Three ways to build</h2>
          <p className={styles.sectionDescription}>
            Pick the shape of work. We keep scope tight, use LLMs where they help, and ship code you can keep.
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
