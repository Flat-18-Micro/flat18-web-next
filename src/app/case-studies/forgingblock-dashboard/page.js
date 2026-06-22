'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

const mediaItems = [
  {
    src: '/images/case-studies/forgingblock-dashboard/dashboard-overview.svg',
    lightSrc: '/images/case-studies/forgingblock-dashboard/dashboard-overview.svg',
    alt: 'ForgingBlock dashboard overview',
    caption: 'Dashboard overview',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true
  },
  {
    src: '/images/case-studies/forgingblock-dashboard/payments-page.svg',
    lightSrc: '/images/case-studies/forgingblock-dashboard/payments-page.svg',
    alt: 'Payments hub with filters and summary metrics',
    caption: 'Payments hub',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-dashboard/invoice-details.svg',
    lightSrc: '/images/case-studies/forgingblock-dashboard/invoice-details.svg',
    alt: 'Invoice details modal view',
    caption: 'Invoice details',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-dashboard/filters-layout.svg',
    lightSrc: '/images/case-studies/forgingblock-dashboard/filters-layout.svg',
    alt: 'Payments filters layout with saved state and quick filtering',
    caption: 'Filters layout',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-dashboard/workflow.svg',
    lightSrc: '/images/case-studies/forgingblock-dashboard/workflow.svg',
    alt: 'Workflow diagram showing the payment review path',
    caption: 'Workflow map',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-dashboard/payments-card-simple.svg',
    lightSrc: '/images/case-studies/forgingblock-dashboard/payments-card-simple.svg',
    alt: 'Compact payments card showing summary values and status',
    caption: 'Compact summary',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-dashboard/status-chip-system.svg',
    lightSrc: '/images/case-studies/forgingblock-dashboard/status-chip-system.svg',
    alt: 'Status chip system showing consistent payment labels',
    caption: 'Status chip system',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-dashboard/data-states.svg',
    lightSrc: '/images/case-studies/forgingblock-dashboard/data-states.svg',
    alt: 'Data states layout showing loading, empty, and error states',
    caption: 'Data states',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const journeySteps = [
  {
    eyebrow: '01 / Support load',
    title: 'Payment teams were spending too long answering simple status questions.',
    copy:
      'Customers needed to know what had been paid, what was still open, and where to find proof. The old flow made them work too hard for each answer.',
    mediaIndex: 3
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We turned the payments view into a focused hub with filters and summary metrics.',
    copy:
      'The interface brings together active chips, quick ranges, and the most useful totals so the dashboard starts with a decision, not a data dump.',
    mediaIndex: 4
  },
  {
    eyebrow: '03 / Decision layer',
    title: 'Invoice detail, exports, and state handling stay close to the data.',
    copy:
      'The workflow keeps the numbers, evidence, and next action in one place so support can move from summary to proof without losing context.',
    mediaIndex: 2
  }
]

const proofPoints = [
  {
    value: 'Merchant-first',
    label: 'Focus',
    detail: 'The dashboard starts with the questions customers actually ask.',
  },
  {
    value: 'Status consistent',
    label: 'Clarity',
    detail: 'The same labels and chips appear across every surface.',
  },
  {
    value: 'Less back-and-forth',
    label: 'Outcome',
    detail: 'Filters, details, and proof stay close enough to reduce support churn.',
  }
]

const featureCards = [
  {
    mediaIndex: 1,
    kicker: 'Payments hub',
    title: 'Keep the working view focused on the next decision.',
    copy:
      'The primary screen combines the overview, the table, and the important actions without making the merchant hunt for the right tab.',
    ariaLabel: 'Open ForgingBlock payments hub screenshot in viewer',
    large: true
  },
  {
    mediaIndex: 3,
    kicker: 'Filters',
    title: 'Show filters without burying the table.',
    copy:
      'Quick ranges and saved state make the dashboard feel responsive while keeping the working set obvious.',
    ariaLabel: 'Open ForgingBlock filters layout screenshot in viewer'
  },
  {
    mediaIndex: 6,
    kicker: 'Status system',
    title: 'Make every payment status read the same way.',
    copy:
      'The chip system keeps labels consistent across cards, tables, and detail views so teams do not have to decode the language again.',
    ariaLabel: 'Open ForgingBlock status chip system screenshot in viewer'
  },
  {
    mediaIndex: 7,
    kicker: 'Data states',
    title: 'Keep loading, empty, and error states honest.',
    copy:
      'When the system is waiting or missing data, the interface says so plainly instead of pretending everything is fine.',
    ariaLabel: 'Open ForgingBlock data states screenshot in viewer'
  }
]

const galleryItems = [4, 2, 5, 0]

export default function ForgingBlockDashboardCaseStudyPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + mediaItems.length) % mediaItems.length))
  const showNext = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % mediaItems.length))

  const lightboxImages = mediaItems.map((item) => ({
    ...item,
    src: item.lightSrc || item.src
  }))

  return (
    <div className={`${styles.page} ${styles.productCasePage}`}>
      <section className={`${styles.hero} ${styles.productHero}`}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.productHeroGrid}>
            <div className={styles.productHeroContent}>
              <span className={styles.heroKicker}>Case study / Invoice status clarity</span>
              <h1 className={styles.productHeroTitle}>ForgingBlock Dashboard</h1>
              <p className={styles.productHeroSubtitle}>
                When payment teams answer invoice, cash-flow and payout questions across messy merchant
                data, the risk is slow support and unclear next steps. Flat18 refined the dashboard into a
                focused payments hub so teams can see what was paid, what is open and what needs attention.
              </p>
              <div className={styles.productHeroActions}>
                <a href="#story" className="btn btn-secondary">
                  Read the build story
                </a>
                <a href="#chat" className="btn btn-primary">
                  Chat with us
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
                style={{ minHeight: 'clamp(320px, 42vw, 560px)' }}
                onClick={() => openLightbox(0)}
                aria-label="Open ForgingBlock dashboard overview in viewer"
              >
                <Image
                  src={mediaItems[0].src}
                  alt={mediaItems[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Payments clarity</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From payment noise to a dashboard that answers the next question first.</h2>
            <p>
              Flat18 approached the dashboard as an operations support problem, not a table design
              exercise. Merchants needed to know what changed, what still needed attention, and where to
              find proof for reconciliation.
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
              <h2>Designed around the moments where payment work usually slows down.</h2>
            </div>
            <p>
              ForgingBlock does not hide the system behind a generic support shell. Each surface keeps
              filters, state, evidence, and action close together so the workflow stays calm.
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
              <div className={styles.mediaGrid}>
                {galleryItems.map((mediaIndex, galleryIndex) => {
                  const item = mediaItems[mediaIndex]

                  return (
                    <figure
                      key={item.src}
                      className={`${styles.mediaItem} ${galleryIndex === 0 ? styles.mediaPrimary : styles.mediaSecondary}`}
                    >
                      <button
                        type="button"
                        className={styles.mediaButton}
                        onClick={() => openLightbox(mediaIndex)}
                        aria-label={`Open ${item.alt} in viewer`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes={item.sizes}
                          className={styles.mediaImage}
                          priority={item.priority}
                        />
                        <span className={styles.mediaButtonHint}>
                          <i className="bi bi-arrows-fullscreen" aria-hidden="true"></i>
                          View
                        </span>
                      </button>
                      <figcaption className={styles.mediaCaption}>{item.caption}</figcaption>
                    </figure>
                  )
                })}
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Delivered for confidence</h4>
                <p>
                  The flow keeps merchants in context, moving from summary to detail without losing
                  filter state or confidence in the numbers they are reviewing.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>In production</span>
                <span className={styles.metaItem}>Diagnosis: payment status ambiguity</span>
                <span className={styles.metaItem}>Solution: calm payments hub</span>
                <span className={styles.metaItem}>Outcome: faster invoice lookup</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 treated the dashboard as an operational support problem. Merchants needed to know
                what changed, what still needed attention, and where to find the proof for reconciliation
                without jumping between disconnected tools.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Payment teams could not quickly answer what was paid, what was open, and what had
                    changed today.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The issue was not lack of data. It was lack of hierarchy, state consistency, and a
                    reliable route from summary to evidence.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We designed a payments hub with fast filters, summary metrics, status chips, and an
                    invoice modal that stays close to the table.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Merchants get a workflow that feels controlled because the same states and actions
                    appear across cards, tables, and detail views.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Reviewed the payment journey around real merchant support scenarios</li>
                  <li>Standardised status language across the dashboard, filters, and detail views</li>
                  <li>Kept reconciliation actions close to the data with export and refresh controls</li>
                  <li>Added loading, empty, and error states so the product stays honest</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Quick range filters with active chip feedback</li>
                  <li>Summary metrics for paid volume and net cash flow</li>
                  <li>Sortable payments table with row click detail</li>
                  <li>Invoice details modal with copyable fields</li>
                  <li>CSV export and manual refresh controls</li>
                  <li>Transparent loading, empty, and error states</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Need a payments dashboard like this?</h2>
              <p>
                Flat18 can audit the operational friction in your payment flow, design the missing
                controls, and ship a dashboard your customers can rely on.
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
