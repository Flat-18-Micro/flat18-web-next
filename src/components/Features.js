import TitleWords from '@/components/TitleWords'
import ChatCtaLink from '@/components/ChatCtaLink'
import Link from 'next/link'
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
          <TitleWords as="h2" className={styles.sectionTitle}>Product design and web development</TitleWords>
          <p className={styles.sectionDescription}>
            Choose the level of product help you need, from a focused MVP to an ongoing delivery partner.
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
                <ChatCtaLink
                  className={styles.microCTA}
                  source={`features:${service.title}`}
                  signalLabel={`features_${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`}
                  variant="icon"
                >
                  Chat with us
                </ChatCtaLink>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <TitleWords as="h3">Not sure which route fits?</TitleWords>
            <p>Send the goal, deadline and main risk. We'll suggest the leanest responsible route.</p>
          </div>
          <ChatCtaLink className="btn btn-primary" source="features:bottom-cta" signalLabel="features_bottom_cta">
            Chat with us
          </ChatCtaLink>
          <Link href="/services" className="btn btn-secondary">
            See all services
          </Link>
        </div>
      </div>
    </section>
  )
}
