import TitleWords from '@/components/TitleWords'
import ChatCtaLink from '@/components/ChatCtaLink'
import Link from 'next/link'
import styles from '@/styles/component-css/Features.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function Features({ containerClassName }) {
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

  const audiencePages = [
    { href: '/saas', label: 'SaaS founders' },
    { href: '/fintech', label: 'Fintech teams' },
    { href: '/web3', label: 'Bitcoin, DeFi and Web3' },
    { href: '/ai-development', label: 'AI-assisted software' },
    { href: '/prototype-rescue', label: 'AI-built prototype rescue' },
    { href: '/rescue', label: 'Software rescue' },
    { href: '/mvp', label: 'Founder MVPs' },
  ]

  return (
    <section
      className={styles.servicesSection}
      id="services"
      data-bg-color={getSectionBackground('features')}
      data-text-color={getSectionTextColor('features')}
    >
      <div className={containerClassName || `${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeading}>
          <TitleWords as="h2" className={styles.sectionTitle}>From first version to ongoing support</TitleWords>
          <p className={styles.sectionDescription}>
            Start with a focused MVP, a full product build, or ongoing senior support.
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
                  {service.cta}
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

        <div className="mt-10 border-t border-[var(--border-soft)] pt-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-tertiary">Built for</p>
          <div className="grid gap-px border border-[var(--border-soft)] bg-[var(--border-soft)] sm:grid-cols-2 lg:grid-cols-3">
            {audiencePages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex items-center justify-between gap-4 bg-[var(--bg)] px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-[var(--surface-dim)] hover:text-[var(--secondary)]"
              >
                {page.label}
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
