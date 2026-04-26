'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function NatalChartsCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/natal-charts/chart-overview.png',
      alt: 'Natal chart overview screen',
      caption: 'Chart overview',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/natal-charts/relationship-report.png',
      alt: 'Relationship compatibility report',
      caption: 'Compatibility report',
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
              Natal Charts
            </h1>
            <p className={styles.heroSubtitle}>
              How Flat18 turned dense ephemeris, location, and scoring data into a calm product
              experience customers can explore and share.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Complex inputs</span>
                <span className={styles.statLabel}>Problem solved</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Progressive detail</span>
                <span className={styles.statLabel}>UX approach</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Shareable PDF</span>
                <span className={styles.statLabel}>Customer output</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Data visualisation</span>
              <div className={styles.caseStudyTitleRow}>
                <h2 className={styles.caseStudyTitle}>Natal Charts</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                A demo that proves how raw calculations, comparisons, and interpretations can become
                a usable customer-facing product.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a
                href="https://natal-chart.flat18.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View live demo
              </a>
              <a href="#chat" className="btn btn-primary">
                Chat with us
              </a>
            </div>
          </div>

          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live demo</span>
                <span className={styles.metaItem}>Diagnosis: dense data overload</span>
                <span className={styles.metaItem}>Solution: signal-first UI</span>
                <span className={styles.metaItem}>Outcome: export-ready report</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 treated this as a data translation challenge: the underlying calculations had
                to remain rich, but the customer experience needed to feel clear, calm, and useful.
                The result demonstrates how complex inputs can be shaped into an interface that guides
                people from overview to detail without overwhelming them.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Astrology data blends coordinates, time zones, ephemeris math, and dense outputs that overwhelm
                    users when presented as raw tables.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The value was hidden by volume. Users needed a sequence: core signals first,
                    explanations second, and deeper comparisons only when useful.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We normalised the inputs, created comparison-ready scoring, added expandable
                    interpretations, and gave the product a clear visual hierarchy.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Customers can explore a complex system, understand the key takeaways, and produce
                    a polished PDF artefact for sharing or records.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Mapped unfamiliar technical outputs into consistent product structures</li>
                  <li>Prioritised the highest-value signals before exposing detailed interpretation</li>
                  <li>Designed comparison and scoring patterns that make dense data feel navigable</li>
                  <li>Turned the live product view into a customer-ready downloadable report</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Structured placements, aspects, summaries, and interpretations</li>
                  <li>Core triad highlights with focus areas and summary gauges</li>
                  <li>Relationship compatibility view with scoring and highlights</li>
                  <li>Progressive disclosure for long-form explanations</li>
                  <li>One-click PDF export for sharing or records</li>
                  <li>Responsive layout for desktop and mobile</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Where this scales</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Health + biometrics</span>
                  <span className={styles.chip}>Financial risk</span>
                  <span className={styles.chip}>Scientific reporting</span>
                  <span className={styles.chip}>Behavioural assessments</span>
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
                  The same diligence can translate health, finance, or research datasets into clear
                  narratives with explainers, hierarchy, and exportable outputs.
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
              <h2>Want a case study like this?</h2>
              <p>
                We can turn a dense dataset or specialist process into a product customers understand,
                use, and feel confident sharing.
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
