import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

const caseStudies = [
  {
    title: 'PulseOps',
    tag: 'Open-source infrastructure',
    description: 'Identified a gap between consumer routers and enterprise suites, then shaped a self-hosted command centre around real operator workflows.',
    image: '/images/case-studies/pulseops/overview.png',
    href: '/case-studies/pulseops',
    meta: ['Problem discovery', 'Network telemetry']
  },
  {
    title: 'Social Publisher',
    tag: 'Open-source publishing',
    description: 'Turned messy multi-platform publishing rules into a dependable scheduling workflow with validation, retries, and transparent logs.',
    image: '/images/case-studies/social-publisher/hero-composer.webp',
    href: '/case-studies/social-publisher',
    meta: ['Workflow design', 'Social publishing']
  },
  {
    title: 'Natal Charts',
    tag: 'Data visualisation',
    description: 'Mapped dense ephemeris, location, and scoring data into a calm product experience with progressive detail and shareable outputs.',
    image: '/images/case-studies/natal-charts/chart-overview.png',
    href: '/case-studies/natal-charts',
    meta: ['Complex data', 'Data-rich UI']
  },
  {
    title: 'Archimedes Finance',
    tag: 'Tokenised investment platform',
    description: 'Consolidated fragmented investment, KYC, tokenisation, and reporting workflows into a role-based platform built for auditability.',
    image: '/images/case-studies/archimedes-finance/dashboard-investor.svg',
    href: '/case-studies/archimedes-finance',
    meta: ['Compliance workflow', 'Fintech']
  },
  {
    title: 'ForgingBlock Dashboard',
    tag: 'Payments experience',
    description: 'Refined merchant payment operations into a clear invoice, cash-flow, and payout experience that supports fast decisions.',
    image: '/images/case-studies/forgingblock-dashboard/payments-page.svg',
    href: '/case-studies/forgingblock-dashboard',
    meta: ['Operational clarity', 'Dashboard']
  },
  {
    title: 'ForgingBlock Website',
    tag: 'Website redesign',
    description: 'Audited a busy legacy site, found the conversion blockers, and rebuilt the journey around trust, clarity, and merchant outcomes.',
    image: '/images/case-studies/forgingblock-website/redesign/home-desktop.png',
    href: '/case-studies/forgingblock-website',
    meta: ['Strategic audit', 'Marketing site']
  },
  {
    title: 'Zettahash Hashboard',
    tag: 'DAO transparency',
    description: 'Brought mining, treasury, market, and governance signals into one readable hub so stakeholders can assess project health quickly.',
    image: '/images/case-studies/hashboard/dashboard-overview.svg',
    href: '/case-studies/hashboard',
    meta: ['Stakeholder trust', 'DAO dashboard']
  }
]

export default function CaseStudiesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>
              Case studies
            </span>
            <h1 className={styles.heroTitle}>
              Case studies with a clear commercial purpose.
            </h1>
            <p className={styles.heroSubtitle}>
              See how Flat18 investigates business problems, designs practical solutions, and
              implements product changes or new services with the care needed for confident customer sign-off.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>7</span>
                <span className={styles.statLabel}>Deep dives</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Discovery to delivery</span>
                <span className={styles.statLabel}>Method</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Customer-focused</span>
                <span className={styles.statLabel}>Outcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyListHeader}>
            <span className={styles.caseStudyTag}>All case studies</span>
            <h2 className={styles.caseStudyTitle}>Evidence of how we think and ship</h2>
            <p className={styles.caseStudySubtitle}>
              Each study follows the same useful pattern: what was wrong, what Flat18 found,
              what changed, and why the final product was easier for customers or teams to trust.
            </p>
          </div>

          <div className={styles.caseStudyList}>
            {caseStudies.map((study) => (
              <article key={study.href} className={styles.caseStudyCard}>
                <div className={styles.caseStudyCardMedia}>
                  <Image
                    src={study.image}
                    alt={`${study.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.caseStudyCardImage}
                  />
                </div>
                <div className={styles.caseStudyCardContent}>
                  <span className={styles.caseStudyCardTag}>{study.tag}</span>
                  <h3 className={styles.caseStudyCardTitle}>{study.title}</h3>
                  <p className={styles.caseStudyCardDescription}>{study.description}</p>
                  <div className={styles.caseStudyCardMeta}>
                    {study.meta.map((item) => (
                      <span key={item} className={styles.caseStudyMetaItem}>{item}</span>
                    ))}
                  </div>
                  <a href={study.href} className={styles.caseStudyCardLink}>
                    Read case study
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Want a case study like this?</h2>
              <p>
                We can audit the friction in your current product or service, design the fix, and
                implement it with a clear path to stakeholder approval.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="#chat" className="btn btn-primary">
                Chat with us
              </a>
              <a href="mailto:hello@flat18.co.uk" className="btn btn-secondary">
                Email hello@flat18.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
