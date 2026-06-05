import styles from '@/styles/component-css/Features.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function Features() {
  const services = [
    {
      icon: 'bi-lightning-charge',
      title: 'Curated MVPs',
      description: 'From idea to usable product quickly, with the right scope and no throwaway prototype.',
      bullets: ['Scope, UX, build and launch', 'Fast first version with senior review'],
      href: '/services/app-development'
    },
    {
      icon: 'bi-layers',
      title: 'Complete product builds',
      description: 'Design, frontend, backend, integrations, QA and deployment handled end to end.',
      bullets: ['Architecture and engineering', 'Production deployment and handover'],
      href: '/services/web-development'
    },
    {
      icon: 'bi-stars',
      title: 'LLM workflow design',
      description: 'Internal tools, prompts and review systems that help your team ship more with less waste.',
      bullets: ['AI-assisted workflows', 'Human review and governance'],
      href: '/services/ai-augmented-development'
    },
    {
      icon: 'bi-gear',
      title: 'Long-term product support',
      description: 'Ongoing improvements, refactors, releases and performance work after launch.',
      bullets: ['Monthly product capacity', 'Priority fixes and optimisation'],
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
          <h2 className={styles.sectionTitle}>What we build</h2>
          <p className={styles.sectionDescription}>
            Fast MVPs, full products and retainers for teams who need senior judgement as well as speed.
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
            <h3>Need a first version or a complete product?</h3>
            <p>We will help you choose the right scope before the build starts.</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
