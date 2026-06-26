'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'
import mediaFlowStyles from '@/styles/component-css/CaseStudyMediaFlow.module.css'

const mediaItems = [
  {
    src: '/images/case-studies/archimedes-finance/01-dashboard.png',
    lightSrc: '/images/case-studies/archimedes-finance/01-dashboard.png',
    alt: 'Archimedes Finance manager dashboard showing balance summary, client assets, chart history, profile, and recent activity',
    caption: 'Manager dashboard',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true,
  },
  {
    src: '/images/case-studies/archimedes-finance/02-assets.png',
    lightSrc: '/images/case-studies/archimedes-finance/02-assets.png',
    alt: 'Archimedes Finance tokenised assets table showing asset types, owners, values, and approval status',
    caption: 'Tokenised assets',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/archimedes-finance/10-kyc.png',
    lightSrc: '/images/case-studies/archimedes-finance/10-kyc.png',
    alt: 'Archimedes Finance identity verification flow showing passport upload and support guidance',
    caption: 'Identity verification',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/archimedes-finance/03-vesting.png',
    lightSrc: '/images/case-studies/archimedes-finance/03-vesting.png',
    alt: 'Archimedes Finance vesting management screen showing contract status and unlock timing',
    caption: 'Vesting management',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/archimedes-finance/05-reports.png',
    lightSrc: '/images/case-studies/archimedes-finance/05-reports.png',
    alt: 'Archimedes Finance reports dashboard showing filters, asset distribution, value over time, and asset detail',
    caption: 'Reports dashboard',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/archimedes-finance/06-messages.png',
    lightSrc: '/images/case-studies/archimedes-finance/06-messages.png',
    alt: 'Archimedes Finance messages inbox showing manager communication and conversation state',
    caption: 'Messages inbox',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/archimedes-finance/09-clients.png',
    lightSrc: '/images/case-studies/archimedes-finance/09-clients.png',
    alt: 'Archimedes Finance manage clients screen showing linked client records and dashboard access',
    caption: 'Client management',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/archimedes-finance/07-profile.png',
    lightSrc: '/images/case-studies/archimedes-finance/07-profile.png',
    alt: 'Archimedes Finance profile screen showing account details, preferences, and identity verification state',
    caption: 'Profile settings',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
]

const journeySteps = [
  {
    eyebrow: '01 / The problem',
    title: 'Investment operations were split across tools that never shared enough context.',
    copy:
      'Onboarding, KYC, token approvals, vesting, reporting, and client communication often live in separate systems. That makes the work slower, harder to review, and harder to defend when questions come back later.',
    mediaIndex: 2,
  },
  {
    eyebrow: '02 / The product shape',
    title: 'We shaped the platform around distinct manager, client, and admin journeys.',
    copy:
      'The core job was not to build another generic portal. It was to give each role the screens and state they actually need, while keeping approvals, identity checks, and portfolio data tied to the same operating model.',
    mediaIndex: 0,
  },
  {
    eyebrow: '03 / The decision layer',
    title: 'Every screen answers one operational question and then gets out of the way.',
    copy:
      'Dashboard, Tokenised Assets, Vesting, Reports, Messages, Clients, and Profile each focus on one thing: what is live, what is locked, who can act, what changed, and what needs a follow-up.',
    mediaIndex: 4,
  },
]

const proofPoints = [
  {
    value: '3 roles',
    label: 'Access model',
    detail: 'Manager, client, and admin journeys stay separate without losing shared context.',
  },
  {
    value: 'KYC gates',
    label: 'Controls',
    detail: 'Identity checks sit before advanced features and keep the process visible.',
  },
  {
    value: 'Audit-ready',
    label: 'Reporting',
    detail: 'Approvals, vesting, and messaging stay attached to the platform record.',
  },
]

const featureCards = [
  {
    mediaIndex: 0,
    kicker: 'Dashboard',
    title: 'Keep the operating picture on one screen.',
    copy:
      'Managers can see balances, client assets, recent activity, and profile state without jumping between disconnected tools.',
    ariaLabel: 'Open Archimedes Finance manager dashboard screenshot in viewer',
    large: true,
  },
  {
    mediaIndex: 2,
    kicker: 'Identity verification',
    title: 'Keep KYC visible and paced.',
    copy:
      'Step-by-step verification makes the gate obvious without making the process feel opaque or disconnected from the rest of the platform.',
    ariaLabel: 'Open Archimedes Finance identity verification screenshot in viewer',
  },
  {
    mediaIndex: 3,
    kicker: 'Vesting',
    title: 'Show what is locked and when.',
    copy:
      'The vesting view keeps contract state, status, and timing together so release questions are easy to answer quickly.',
    ariaLabel: 'Open Archimedes Finance vesting management screenshot in viewer',
  },
  {
    mediaIndex: 4,
    kicker: 'Reporting',
    title: 'Give stakeholders a view they can trust.',
    copy:
      'Filters, charts, and asset detail make it easier to review portfolio value and mix before anyone exports data.',
    ariaLabel: 'Open Archimedes Finance reports dashboard screenshot in viewer',
  },
]

const galleryItems = [1, 5, 6, 7, 2]

export default function ArchimedesFinanceCaseStudyPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + mediaItems.length) % mediaItems.length))
  const showNext = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % mediaItems.length))

  const lightboxImages = mediaItems.map((item) => ({
    ...item,
    src: item.lightSrc || item.src,
  }))

  return (
    <div className={`${styles.page} ${styles.productCasePage}`}>
      <section className={`${styles.hero} ${styles.productHero}`}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.productHeroGrid}>
            <div className={styles.productHeroContent}>
              <span className={styles.heroKicker}>Case study / Investment operations control</span>
              <h1 className={styles.productHeroTitle}>Archimedes Finance</h1>
              <p className={styles.productHeroSubtitle}>
                When investment teams manage onboarding, KYC, approvals, vesting, reporting and client
                messages across separate tools, the risk is slow review and weak audit confidence. Flat18
                shaped Archimedes Finance around role-based journeys so managers, clients and admins can
                see the right state and evidence in one flow.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://archimedes-finance.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View live product
                </a>
                <a href="#story" className="btn btn-secondary">
                  Read the build story
                </a>
              </div>
              <div className={styles.productProofGrid}>
                {proofPoints.map((point) => (
                  <div key={point.label} className={styles.productProofCard}>
                    <span className={styles.productProofValue}>{point.value}</span>
                    <span className={styles.productProofLabel}>{point.label}</span>
                    <p>{point.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.productHeroVisual}>
              <button
                type="button"
                className={styles.productHeroImageButton}
                onClick={() => openLightbox(0)}
                aria-label="Open Archimedes Finance dashboard screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/archimedes-finance/01-dashboard.png"
                  alt="Archimedes Finance manager dashboard showing balance summary, client assets, chart history, profile, and recent activity"
                  width={1280}
                  height={1778}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Live product</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From fragmented investment operations to one controlled workflow.</h2>
            <p>
              Flat18 treated Archimedes Finance as a confidence problem. The platform had to move people
              from login to verification, asset review, vesting, reporting, and client communication
              without losing the evidence needed to trust the result.
            </p>
          </div>

          <div className={styles.productJourneyGrid}>
            {journeySteps.map((step) => {
              const item = mediaItems[step.mediaIndex]

              return (
                <article key={step.title} className={styles.productJourneyCard}>
                  <div className={styles.productJourneyCopy}>
                    <span>{step.eyebrow}</span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                  <button
                    type="button"
                    className={styles.productJourneyImageButton}
                    onClick={() => openLightbox(step.mediaIndex)}
                    aria-label={`Open ${item.alt} in viewer`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      className={styles.productJourneyImage}
                    />
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.productShowcaseSection}>
        <div className={styles.container}>
          <div className={styles.productShowcaseHeader}>
            <div>
              <span className={styles.caseStudyTag}>Product surfaces</span>
              <h2>Designed around the moments where investment products usually get stuck.</h2>
            </div>
            <p>
              Archimedes is not a generic portal with a finance label. Each surface helps the team make a
              specific decision: approve, verify, vest, report, or follow up.
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            {featureCards.map((card) => {
              const item = mediaItems[card.mediaIndex]

              return (
                <article
                  key={card.title}
                  className={`${styles.productFeatureCard} ${card.large ? styles.productFeatureCardLarge : ''}`}
                >
                  <button
                    type="button"
                    className={styles.productFeatureImageButton}
                    onClick={() => openLightbox(card.mediaIndex)}
                    aria-label={card.ariaLabel}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes={card.large ? '(max-width: 768px) 100vw, 720px' : '(max-width: 768px) 100vw, 420px'}
                      className={styles.productFeatureImage}
                      priority={card.large && card.mediaIndex === 0}
                    />
                  </button>
                  <div className={styles.productFeatureCopy}>
                    <span>{card.kicker}</span>
                    <h3>{card.title}</h3>
                    <p>{card.copy}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={`${styles.caseStudyGrid} ${styles.caseStudyGridReverse}`}>
            <div className={styles.caseStudyMedia}>
              <div className={`${styles.mediaGrid} ${mediaFlowStyles.mediaGridFlow}`}>
                {galleryItems.map((mediaIndex, galleryIndex) => {
                  const item = mediaItems[mediaIndex]

                  return (
                    <figure
                      key={item.src}
                      style={{ ['--media-tile-bg']: `url("${item.src}")` }}
                      className={`${styles.mediaItem} ${galleryIndex === 0 ? styles.mediaPrimary : styles.mediaSecondary} ${mediaFlowStyles.mediaFlowItem} ${galleryIndex === 0 ? mediaFlowStyles.mediaFlowPrimary : mediaFlowStyles.mediaFlowSecondary}`}
                    >
                      <button
                        type="button"
                        className={`${styles.mediaButton} ${mediaFlowStyles.mediaFlowButton}`}
                        onClick={() => openLightbox(mediaIndex)}
                        aria-label={`Open ${item.alt} in viewer`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes={item.sizes}
                          className={`${styles.mediaImage} ${mediaFlowStyles.mediaFlowImage}`}
                          priority={item.priority}
                        />
                        <span className={`${styles.mediaButtonHint} ${mediaFlowStyles.mediaFlowHint}`}>
                          <i className="bi bi-arrows-fullscreen" aria-hidden="true"></i>
                          View
                        </span>
                      </button>
                      <figcaption className={`${styles.mediaCaption} ${mediaFlowStyles.mediaFlowCaption}`}>{item.caption}</figcaption>
                    </figure>
                  )
                })}
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Why it works</h4>
                <p>
                  Archimedes keeps role state, approval history, and communication close together. That
                  cuts down hand-offs and gives the team one place to check what changed, what is pending,
                  and what was told to the client.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: fragmented investment operations</span>
                <span className={styles.metaItem}>Solution: role-based control layer</span>
                <span className={styles.metaItem}>Outcome: clearer audit and approval flow</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 treated Archimedes Finance as an operations and confidence problem. The product had
                to move people through verification, asset review, vesting, reporting, and client
                communication without losing the evidence needed to trust the result.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Investment teams were switching between onboarding, approval, reporting, and messaging
                    tools to complete one job.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The platform needed a single source of truth for role state, asset state, and audit
                    evidence.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We designed the manager, client, and admin journeys, then tied KYC, tokenisation,
                    vesting, reporting, and messaging into one flow.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Teams can review sensitive financial work faster and with less back-and-forth.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Mapped manager, client, and admin responsibilities into distinct journeys</li>
                  <li>Joined onboarding, KYC, tokenisation, vesting, reporting, and messaging into one platform</li>
                  <li>Kept approval evidence and state visible without overwhelming the user</li>
                  <li>Designed dashboards that are easier to review in a sensitive workflow</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Manager dashboard for portfolio and activity overview</li>
                  <li>Tokenised assets with approval states and value summaries</li>
                  <li>Identity verification with step-by-step KYC</li>
                  <li>Vesting contracts and release timing</li>
                  <li>Reporting filters and asset performance views</li>
                  <li>Client management and linked dashboard access</li>
                  <li>In-app messages and client links</li>
                  <li>Profile and preferences controls for account state</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vue 3</span>
                  <span className={styles.chip}>Vite</span>
                  <span className={styles.chip}>Pinia</span>
                  <span className={styles.chip}>Node + Express</span>
                  <span className={styles.chip}>PostgreSQL</span>
                  <span className={styles.chip}>Cloudinary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Need an investment workflow this controlled?</h2>
              <p>
                Flat18 can turn a sensitive financial workflow into a clearer product with the right
                surfaces, state, and approval flow.
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
      <CaseStudyLightbox
        images={lightboxImages}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrev={showPrev}
      />
    </div>
  )
}
