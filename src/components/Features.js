import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/Features.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function Features() {
  const services = [
    {
      icon: 'bi-lightning-charge',
      title: 'MVP Sprint',
      description: 'For focused first versions.',
      bullets: ['Product scoping', 'UX/UI direction', 'Full-stack MVP build', 'LLM-assisted implementation', 'Deployment support'],
      cta: 'Start an MVP',
    },
    {
      icon: 'bi-layers',
      title: 'Product Build',
      description: 'For serious end-to-end launches.',
      bullets: ['Product planning', 'Interface design', 'Frontend and backend development', 'Authentication, database and integrations', 'Testing and release support'],
      cta: 'Plan a build',
    },
    {
      icon: 'bi-infinity',
      title: 'Monthly Studio',
      description: 'For ongoing product work.',
      bullets: ['Feature delivery', 'UX improvements', 'Technical support', 'Refactoring', 'Product experiments'],
      cta: 'Work monthly',
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
          <TitleWords as="h2" className={styles.sectionTitle}>Three ways to build</TitleWords>
          <p className={styles.sectionDescription}>
            Choose the level of product help you need.
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
                <TitleWords as="h3" className={styles.serviceTitle}>{service.title}</TitleWords>
              </div>

              <p className={styles.serviceDescription}>{service.description}</p>

              <ul className={styles.serviceBullets}>
                {service.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>

              {/* Micro-CTA */}
              <div className={styles.cardFooter}>
                <a href="#contact" className={styles.microCTA}>
                  {service.cta}
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <TitleWords as="h3">Not sure which route fits?</TitleWords>
            <p>Send the goal, deadline and main risk. We'll suggest the leanest responsible route.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
