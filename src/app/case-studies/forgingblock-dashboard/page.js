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
              Payments experience for merchants tracking invoices, cash flow, and payout status.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>March 2026</span>
                <span className={styles.statLabel}>Capture date</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Payments UX</span>
                <span className={styles.statLabel}>Focus</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Dashboard platform</span>
                <span className={styles.statLabel}>Surface</span>
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
                Layered views for quick situational awareness and deep invoice analysis.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a href="#chat" className="btn btn-primary">
                Book a fit check
              </a>
            </div>
          </div>

          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>In production</span>
                <span className={styles.metaItem}>Scope: Payments hub + invoice detail</span>
                <span className={styles.metaItem}>Focus: Clarity + trust</span>
                <span className={styles.metaItem}>Surface: Merchant dashboard</span>
              </div>

              <p className={styles.caseStudyIntro}>
                The ForgingBlock payments surface is designed around a two-step workflow: glanceable
                insight on the dashboard and deeper analysis inside the payments hub, with a details
                modal for per-invoice inspection.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem</h3>
                  <p>
                    Merchants need to answer “what got paid, what’s open, and what changed today”
                    without digging through spreadsheets or multiple tools.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution</h3>
                  <p>
                    A payments hub with fast filters, summary metrics, and a compact table that
                    opens a detailed invoice modal on click.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>UX strategy</h3>
                  <p>
                    Keep actions one click away, surface active filters as chips, and show calm
                    data states for loading, empty, and error conditions.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Outcome</h3>
                  <p>
                    A payments workflow that balances speed and depth, with trustworthy status
                    signaling across cards, tables, and modal views.
                  </p>
                </div>
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
                <h4>Workflow clarity</h4>
                <p>
                  The flow keeps merchants in context, moving from summary to detail without
                  losing their place or filter state.
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
                We design and ship merchant tools that make reporting, exports, and compliance
                feel calm and trustworthy.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="#chat" className="btn btn-primary">
                Book a fit check
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
