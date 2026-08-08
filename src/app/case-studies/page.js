import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

const caseStudies = [
  {
    title: 'Client Desk',
    tag: 'Relationship operations',
    description: 'Turned scattered contacts, conversations, campaign activity and reminders into a quieter client relationship workspace.',
    image: '/images/case-studies/client-desk/01-overview-devices.webp',
    href: '/selected-work/client-desk',
    meta: ['CRM product', 'Lead review']
  },
  {
    title: 'World Earnings',
    tag: 'Global pay clarity',
    description: 'Turned gross-pay uncertainty, country rules and variable market data into an explainable take-home estimate and salary research workspace.',
    image: '/images/selected-work/world-earnings.png',
    href: '/selected-work/world-earnings',
    meta: ['Earnings research', 'Rule provenance']
  },
  {
    title: 'Ledger',
    tag: 'Informal money trust',
    description: 'Turned scattered messages, receipts and memory into clear records for loans, shared costs, budgets and read-only balances people can explain.',
    image: '/images/selected-work/ledger.webp',
    href: '/selected-work/ledger',
    meta: ['Trust workflows', 'Everyday finance']
  },
  {
    title: 'F18 Pay',
    tag: 'Payment state clarity',
    description: 'Helped merchants manage stores, wallets, invoices and public checkout pages without losing track of what is live, paid or waiting.',
    image: '/images/selected-work/f18-pay.webp',
    href: '/selected-work/f18-pay',
    meta: ['Store setup', 'Wallet controls']
  },
  {
    title: 'Axis Finance',
    tag: 'Private portfolio clarity',
    description: 'Made live positions, prices and alerts easier to inspect without asking private investors to hand over custody or trust a noisy terminal.',
    image: '/images/selected-work/axis-finance-mockup.webp',
    href: '/selected-work/axis-finance',
    meta: ['Read-only', 'Privacy first']
  },
  {
    title: 'SignalMap',
    tag: 'Actionable analytics',
    description: 'Turned privacy-limited browser signals into aggregate reporting and clear recommendations founders and small agencies can act on.',
    image: '/images/selected-work/signalmap.webp',
    href: '/selected-work/signalmap',
    meta: ['Cookie-free', 'Edge-first']
  },
  {
    title: 'WalletScrutiny',
    tag: 'Research evidence clarity',
    description: 'Reshaped a large wallet review catalogue so readers can find the verdict, inspect the method and move from summary to evidence faster.',
    image: '/images/selected-work/walletscrutiny.webp',
    href: '/selected-work/walletscrutiny',
    meta: ['Search UX', 'Methodology']
  },
  {
    title: 'BTCPay Server',
    tag: 'Public product story',
    description: 'Gave a self-hosted payments project a clearer route from first visit to first try, then strengthened it with language support, video and proof.',
    image: '/images/selected-work/btcpayserver.webp',
    href: '/selected-work/btcpayserver',
    meta: ['Multilingual', 'Selected work']
  },
  {
    title: 'Flat18 Geo',
    tag: 'Fresh location data',
    description: 'Made city, region and ASN context safer to call from products by separating lookup, browser response, refresh and freshness checks.',
    image: '/images/selected-work/ipgeo.webp',
    href: '/selected-work/ipgeo',
    meta: ['API design', 'Data freshness']
  },
  {
    title: 'Workouts',
    tag: 'Training decision friction',
    description: 'Reduced choice overload before training by turning onboarding, schedules, logging, recovery context and progress review into one practical flow.',
    image: '/images/selected-work/workouts.webp',
    href: '/selected-work/workouts',
    meta: ['Planning workflow', 'Mobile app UI']
  },
  {
    title: 'PulseOps',
    tag: 'Network visibility gap',
    description: 'Found the space between shallow router views and heavy enterprise suites, then shaped a self-hosted command centre for real operator work.',
    image: '/images/selected-work/pulseops.webp',
    href: '/selected-work/pulseops',
    meta: ['Problem discovery', 'Network telemetry']
  },
  {
    title: 'Social Publisher',
    tag: 'Publishing operations friction',
    description: 'Turned scattered drafts, channel limits, calendars and dispatch checks into one workspace small teams can operate with less rework.',
    image: '/images/selected-work/social-publisher.webp',
    href: '/selected-work/social-publisher',
    meta: ['Workflow design', 'Social publishing']
  },
  {
    title: 'Natal Charts',
    tag: 'Dense calculation clarity',
    description: 'Made birth data, time-zone logic, transits and relationship comparison easier to enter, read, compare and share.',
    image: '/images/selected-work/natal-charts.webp',
    href: '/selected-work/natal-charts',
    meta: ['Complex data', 'Chart workflow']
  },
  {
    title: 'Archimedes Finance',
    tag: 'Investment operations control',
    description: 'Joined onboarding, KYC, approvals, vesting, reporting and client messages so investment teams can review state and evidence in one flow.',
    image: '/images/selected-work/archimedes-finance.webp',
    href: '/selected-work/archimedes-finance',
    meta: ['Role-based access', 'Audit trail']
  },
  {
    title: 'ForgingBlock Dashboard',
    tag: 'Invoice status clarity',
    description: 'Refined scattered merchant payment data into a focused view of paid invoices, open items, cash-flow signals and payout status.',
    image: '/images/selected-work/forgingblock-dashboard.webp',
    href: '/selected-work/forgingblock-dashboard',
    meta: ['Operational clarity', 'Dashboard']
  },
  {
    title: 'ForgingBlock Website',
    tag: 'Merchant conversion blockers',
    description: 'Found where proof, pricing and merchant outcomes were getting buried, then rebuilt the journey so buyers could trust the next step.',
    image: '/images/selected-work/forgingblock-website.webp',
    href: '/selected-work/forgingblock-website',
    meta: ['Strategic audit', 'Marketing site']
  },
  {
    title: 'Felt Weather',
    tag: 'Local context gap',
    description: 'Combined forecasts with nearby public signals so people can judge how conditions feel locally, not just what the official reading says.',
    image: '/images/selected-work/felt-weather.webp',
    href: '/selected-work/felt-weather',
    meta: ['Local signals', 'Map-based UI']
  },
  {
    title: 'Zettahash Hashboard',
    tag: 'Stakeholder transparency gap',
    description: 'Brought mining, treasury, market and governance signals into one readable hub so stakeholders can assess project health quickly.',
    image: '/images/selected-work/hashboard.webp',
    href: '/selected-work/hashboard',
    meta: ['Stakeholder trust', 'DAO dashboard']
  }
]

const selectedWorkCount = caseStudies.length

export default function CaseStudiesPage() {
  return (
    <div className={`${styles.page} ${styles.caseStudyIndexPage}`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>Selected work</span>
            <h1 className={styles.heroTitle}>Selected work with a clear commercial purpose.</h1>
            <p className={styles.heroSubtitle}>
              See how Flat18 investigates business problems, designs practical solutions, and
              implements product changes or new services with the care needed for confident customer sign-off.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{selectedWorkCount}</span>
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
            <span className={styles.caseStudyTag}>All selected work</span>
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
                  <Link href={study.href} className={styles.caseStudyCardLink}>
                    View project
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </Link>
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
              <h2>Need work like this?</h2>
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
