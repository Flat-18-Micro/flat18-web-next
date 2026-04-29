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
      src: '/images/case-studies/natal-charts/01-chart-overview.png',
      alt: 'Generated natal chart overview with map, core triad, chart wheel, and summary scores',
      caption: 'Generated chart overview',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/natal-charts/02-transits-focus.png',
      alt: 'Present-time transit panel and focus-area scoring for relationship, work, and life themes',
      caption: 'Transits and focus areas',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/natal-charts/03-relationship-comparison.png',
      alt: 'Relationship comparison with partner scores and category explanations',
      caption: 'Relationship comparison',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/natal-charts/04-synastry-composite.png',
      alt: 'Synastry aspect list and composite chart details',
      caption: 'Synastry and composite chart',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/natal-charts/05-interpretation-notes.png',
      alt: 'Major aspects and interpretation notes generated from the sample chart',
      caption: 'Interpretation notes',
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
              How Flat18 turned ephemeris data, time-zone logic, relationship scoring, current
              transits, and interpretation notes into a clear browser product.
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
                <span className={styles.statValue}>Swiss Ephemeris</span>
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
                A browser-based chart generator with geocoding, Swiss Ephemeris calculation,
                current transit context, relationship comparison, and exportable results.
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
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: technical astrology workflow</span>
                <span className={styles.metaItem}>Solution: guided chart generation</span>
                <span className={styles.metaItem}>Outcome: export-ready report</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 treated the app as a data translation challenge. The calculation layer had to
                stay accurate, while the interface needed to help people move from birth details to
                chart overview, current transits, relationship comparison, deeper synastry, and
                shareable interpretation without training.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Natal chart tools must coordinate birthplace lookup, time zones, house systems,
                    planetary positions, aspects, relationship methods, and readable explanations.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The value was hidden by density. Users needed a sequence: trusted inputs first,
                    core chart signals next, and deeper comparison data only when useful.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We shaped a browser workflow for geocoding, Swiss Ephemeris calculation, chart
                    summaries, transits, partner comparison, synastry, composite charts, and PDF export.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Users can explore a complex symbolic system, understand the key takeaways, inspect
                    the supporting data, and produce a polished artefact for sharing or records.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Mapped birth details, location, time-zone handling, and house systems into a guided intake flow</li>
                  <li>Prioritised core triad, chart wheel, summary gauges, and focus areas before deeper data</li>
                  <li>Designed relationship scoring that combines plain summaries with inspectable synastry aspects</li>
                  <li>Kept interpretation, calculation detail, privacy notes, and PDF export in one coherent journey</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Birthplace geocoding with coordinate confirmation and time-zone handling</li>
                  <li>Swiss Ephemeris chart calculation with house systems, placements, angles, retrogrades, and aspects</li>
                  <li>Core triad, element and mode distribution, summary scores, and focus areas</li>
                  <li>Current transit houses, Moon phase, illumination, and retrograde status</li>
                  <li>Relationship comparison with category scores, synastry aspects, and composite chart details</li>
                  <li>Interpretation notes, privacy guidance, and PDF export for sharing or records</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Reusable pattern</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Intake forms</span>
                  <span className={styles.chip}>Calculation layers</span>
                  <span className={styles.chip}>Signal summaries</span>
                  <span className={styles.chip}>Comparison tools</span>
                  <span className={styles.chip}>Exportable reports</span>
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
                  The app keeps technical calculation, symbolic interpretation, relationship analysis,
                  and privacy guidance separate enough for users to understand what they are seeing.
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
