import Image from 'next/image'
import axisFinanceDashboard from './axis-finance/dashboard.png'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

const caseStudies = [
  {
    title: 'Ledger',
    tag: 'Personal finance utility',
    description: 'Turned informal money tracking into clear, purpose-built ledgers for loans, shared costs, project budgets, receipts, and read-only records.',
    image: '/images/case-studies/ledger/detail.png',
    href: '/case-studies/ledger',
    meta: ['Trust workflows', 'Everyday finance']
  },
  {
    title: 'F18 Pay',
    tag: 'Payment infrastructure',
    description: 'Built a merchant payment system for Bitcoin and Ethereum stores, with invoices, payment requests, wallet controls, and QR checkout pages.',
    image: '/images/case-studies/f18-pay/01-dashboard-overview.png',
    href: '/case-studies/f18-pay',
    meta: ['Store setup', 'Wallet controls']
  },
  {
    title: 'Axis Finance',
    tag: 'Portfolio monitoring',
    description: 'Shaped a privacy-first finance layer for live positions, prices, alerts, and read-only wallet tracking.',
    image: axisFinanceDashboard,
    href: '/case-studies/axis-finance',
    meta: ['Read-only', 'Privacy first']
  },
  {
    title: 'SignalMap',
    tag: 'Privacy-first analytics',
    description: 'Built a privacy-first analytics platform that turns browser signals, edge ingest, and aggregate reporting into practical recommendations.',
    image: '/images/case-studies/signalmap/01-landing.png',
    href: '/case-studies/signalmap',
    meta: ['Cookie-free', 'Edge-first']
  },
  {
    title: 'WalletScrutiny',
    tag: 'Bitcoin wallet security',
    description: 'Reshaped a large wallet review catalogue into a clearer research interface with stronger search, review pages, and methodology context.',
    image: '/images/case-studies/walletscrutiny/2023-home.jpeg',
    href: '/case-studies/walletscrutiny',
    meta: ['Search UX', 'Methodology']
  },
  {
    title: 'BTCPay Server',
    tag: 'Open-source payments',
    description: 'Created a first website for a self-hosted Bitcoin payments project, then evolved it into a multilingual, video-led, evidence-backed homepage.',
    image: '/images/case-studies/btcpayserver/07-2025-09-03-24891c5-case-studies-ui.png',
    href: '/case-studies/btcpayserver',
    meta: ['Multilingual', 'Case studies']
  },
  {
    title: 'Flat18 Geo',
    tag: 'IP geolocation service',
    description: 'Built a compact IP intelligence API for Vercel with city, region, and ASN lookups, browser-safe geo responses, refresh dispatch, and freshness monitoring.',
    image: '/images/case-studies/ipgeo/flat18-geo-overview.png',
    href: '/case-studies/ipgeo',
    meta: ['API design', 'Data freshness']
  },
  {
    title: 'Workouts',
    tag: 'Fitness planning app',
    description: 'Built a practical training system that guides users from onboarding and schedule selection to workout logging and progress review.',
    image: '/images/case-studies/workouts/03-plan-overview.png',
    href: '/case-studies/workouts',
    meta: ['Planning workflow', 'Mobile app UI']
  },
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
    tag: 'Social publishing workflow',
    description: 'Turned scattered publishing work into one workspace for channel connection, platform variants, validation, scheduling, and dispatch logs.',
    image: '/images/case-studies/social-publisher/01-dashboard-overview-dark.png',
    href: '/case-studies/social-publisher',
    meta: ['Workflow design', 'Social publishing']
  },
  {
    title: 'Natal Charts',
    tag: 'Data visualisation',
    description: 'Mapped ephemeris data, time-zone logic, current transits, and relationship comparison into a clear browser-based chart product.',
    image: '/images/case-studies/natal-charts/01-landing.png',
    href: '/case-studies/natal-charts',
    meta: ['Complex data', 'Chart workflow']
  },
  {
    title: 'Archimedes Finance',
    tag: 'Tokenised investment platform',
    description: 'Built a role-based tokenisation platform that keeps onboarding, KYC, vesting, reporting, and client communication in one auditable flow.',
    image: '/images/case-studies/archimedes-finance/25-home-landing.jpeg',
    href: '/case-studies/archimedes-finance',
    meta: ['Role-based access', 'Audit trail']
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
    image: '/images/case-studies/forgingblock-website/mockups/home-comparison.png',
    href: '/case-studies/forgingblock-website',
    meta: ['Strategic audit', 'Marketing site']
  },
  {
    title: 'Felt Weather',
    tag: 'Weather intelligence',
    description: 'Combined official forecasts with nearby public weather conversation to show how conditions feel locally, not just what the forecast says.',
    image: '/images/case-studies/felt-weather/01-live-felt-weather-map.png',
    href: '/case-studies/felt-weather',
    meta: ['Local signals', 'Map-based UI']
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
    <div className={`${styles.page} ${styles.caseStudyIndexPage}`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>Case studies</span>
            <h1 className={styles.heroTitle}>Case studies with a clear commercial purpose.</h1>
            <p className={styles.heroSubtitle}>
              See how Flat18 investigates business problems, designs practical solutions, and
              implements product changes or new services with the care needed for confident customer sign-off.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>16</span>
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
              <a href="#chat" className="btn btn-primary">Chat with us</a>
              <a href="mailto:hello@flat18.co.uk" className="btn btn-secondary">Email hello@flat18.co.uk</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
