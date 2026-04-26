'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function ForgingBlockDashboardCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/forgingblock-dashboard/dashboard-overview.svg',
      alt: 'ForgingBlock dashboard overview',
      caption: 'Dashboard snapshot',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/forgingblock-dashboard/payments-page.svg',
      alt: 'Payments hub with filters and summary metrics',
      caption: 'Payments hub',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/forgingblock-dashboard/invoice-details.svg',
      alt: 'Invoice details modal view',
      caption: 'Invoice details',
      sizes: '(max-width: 768px) 100vw, 260px'
    }
  ]

  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + mediaItems.length) % mediaItems.length))
  const showNext = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % mediaItems.length))

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>
              Case study
            </span>
            <h1 className={styles.heroTitle}>
              ForgingBlock Dashboard
            </h1>
            <p className={styles.heroSubtitle}>
              How Flat18 turned scattered merchant payment signals into a calm workflow for invoices,
              cash flow, and payout status.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>March 2026</span>
                <span className={styles.statLabel}>Review date</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Invoice clarity</span>
                <span className={styles.statLabel}>Problem solved</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Decision-ready</span>
                <span className={styles.statLabel}>Outcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Payments experience</span>
              <div className={styles.caseStudyTitleRow}>
                <h2 className={styles.caseStudyTitle}>ForgingBlock Dashboard</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                A merchant dashboard shaped around the questions customers ask when money is moving.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a href="#chat" className="btn btn-primary">
                Chat with us
              </a>
            </div>
          </div>

          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>In production</span>
                <span className={styles.metaItem}>Scope: Payments hub + invoice detail</span>
                <span className={styles.metaItem}>Diagnosis: payment status ambiguity</span>
                <span className={styles.metaItem}>Result: faster invoice lookup</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 approached the dashboard as an operational support problem, not just a table design.
                Merchants needed to know what changed, what still needed attention, and where to find
                evidence for reconciliation. The final workflow gives them that path without forcing
                them through spreadsheets or disconnected tools.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Payment teams could not quickly answer what was paid, what was open, and what had
                    changed today without digging through multiple records.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The issue was not lack of data. It was lack of hierarchy, status consistency,
                    and a reliable route from summary to invoice evidence.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We designed a payments hub with fast filters, summary metrics, active chips,
                    and a compact table that opens a detailed invoice modal on click.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Merchants get a workflow that feels controlled and trustworthy because the same
                    statuses, actions, and evidence appear across cards, tables, and modal views.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Reviewed the payment journey around real merchant questions and support scenarios</li>
                  <li>Reduced uncertainty by standardising status language across every surface</li>
                  <li>Kept reconciliation actions close to the data with export, refresh, and copyable fields</li>
                  <li>Added empty, loading, and error states so customers understand what is happening</li>
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

              <div className={styles.listBlock}>
                <h4>UX emphasis</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Filter clarity</span>
                  <span className={styles.chip}>Status consistency</span>
                  <span className={styles.chip}>Data trust</span>
                  <span className={styles.chip}>Export readiness</span>
                </div>
              </div>
            </div>

            <div className={styles.caseStudyMedia}>
              <div className={styles.mediaGrid}>
                {mediaItems.map((item, index) => (
                  <figure
                    key={item.src}
                    className={`${styles.mediaItem} ${item.isPrimary ? styles.mediaPrimary : styles.mediaSecondary}`}
                  >
                    <button
                      type="button"
                      className={styles.mediaButton}
                      onClick={() => openLightbox(index)}
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
                ))}
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Delivered for confidence</h4>
                <p>
                  The flow keeps merchants in context, moving from summary to detail without losing
                  their place, filter state, or confidence in the numbers they are reviewing.
                </p>
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
                We can audit the operational friction in your payment flow, design the missing
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
        images={mediaItems}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrev={showPrev}
      />
    </div>
  )
}
