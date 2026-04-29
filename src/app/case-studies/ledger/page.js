'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function LedgerCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/ledger/detail.png',
      alt: 'Ledger detail screen with balance, entries, and receipt-assisted quick entry',
      caption: 'Ledger detail workflow',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/ledger/list.png',
      alt: 'Ledger list and create-ledger workflow',
      caption: 'Purpose-built ledgers',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/ledger/report.png',
      alt: 'Ledger report modal with filtered spending summary',
      caption: 'Filtered reports',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/ledger/sharing.png',
      alt: 'Ledger sharing settings with read-only public link controls',
      caption: 'Controlled sharing',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/ledger/public.png',
      alt: 'Read-only public shared Ledger view',
      caption: 'Public read-only view',
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
              Ledger
            </h1>
            <p className={styles.heroSubtitle}>
              How Flat18 shaped a simple money-tracking app for informal loans, project budgets,
              shared costs, receipts, and read-only records people can trust.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Everyday money</span>
                <span className={styles.statLabel}>Audience</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Version history</span>
                <span className={styles.statLabel}>Trust model</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Read-only links</span>
                <span className={styles.statLabel}>Sharing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Personal finance utility</span>
              <div className={styles.caseStudyTitleRow}>
                <h2 className={styles.caseStudyTitle}>Ledger</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                A lightweight record for money lent, spent, repaid, and shared without accounting
                jargon or spreadsheet maintenance.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a
                href="https://ledger.flat18.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Ledger
              </a>
              <a href="#chat" className="btn btn-primary">
                Chat with us
              </a>
            </div>
          </div>

          <div className={`${styles.caseStudyGrid} ${styles.caseStudyGridReverse}`}>
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
                  Ledger keeps the balance, receipt evidence, private context, corrections, and
                  public sharing controls in one understandable workflow.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: informal money records break trust</span>
                <span className={styles.metaItem}>Solution: purpose-built ledgers</span>
                <span className={styles.metaItem}>Outcome: clear shared balances</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Many money situations are too important for scattered notes, but too small for full
                accounting software. Ledger gives each person, project, trip, or shared expense a
                dedicated record with plain labels, receipts, reports, and controlled public links.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Informal balances get split across messages, banking apps, receipts, screenshots,
                    and memory, which makes sensitive money conversations harder.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    Users needed a shared factual record, not accounting concepts. The product had to
                    feel as quick as a note and more trustworthy than a spreadsheet.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We designed ledgers with type-specific labels, fast entries, optional receipt
                    detail, preserved edit history, small reports, and read-only sharing.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    People can explain what happened, when it happened, what evidence supports it,
                    and what the balance is now without exposing private notes.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Translated money tracking into plain-language workflows for real-life situations</li>
                  <li>Kept quick entry simple while allowing detail when receipts or context matter</li>
                  <li>Designed trust features around version history, private notes, and read-only sharing</li>
                  <li>Built reporting around practical questions instead of finance jargon</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Purpose-built ledgers for loans, budgets, trips, households, and project spending</li>
                  <li>Fast entry with amount, direction, date, description, vendor, and category</li>
                  <li>Receipt upload with OCR-assisted amount, date, vendor, and line-item suggestions</li>
                  <li>Editable entries with preserved version history</li>
                  <li>Reports filtered by date, category, and search text</li>
                  <li>Read-only public links with private-note controls</li>
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
              <h2>Want a case study like this?</h2>
              <p>
                We can turn a sensitive, messy workflow into a clear product experience with the
                controls people need to trust it.
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
