'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function FeltWeatherCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/felt-weather/01-live-felt-weather-map.png',
      alt: 'Felt Weather map with a local felt-score heat layer',
      caption: 'Live felt-score map',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/felt-weather/02-location-felt-score-panel.png',
      alt: 'Selected Felt Weather location panel with official weather and nearby posts',
      caption: 'Location evidence panel',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/felt-weather/03-mobile-location-workflow.png',
      alt: 'Mobile Felt Weather map with selected location bottom sheet',
      caption: 'Mobile local workflow',
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
              Felt Weather
            </h1>
            <p className={styles.heroSubtitle}>
              How Flat18 turned official forecasts and public local chatter into a map-based view of
              how the weather feels on the ground.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Local signals</span>
                <span className={styles.statLabel}>Problem solved</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Felt score</span>
                <span className={styles.statLabel}>Product layer</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Map-first</span>
                <span className={styles.statLabel}>Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Weather intelligence</span>
              <div className={styles.caseStudyTitleRow}>
                <h2 className={styles.caseStudyTitle}>Felt Weather</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                A live local weather layer that compares measured conditions with the way people
                nearby describe the weather.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a
                href="https://felt.flat18.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Felt Weather
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
                <span className={styles.metaItem}>Diagnosis: forecast context gap</span>
                <span className={styles.metaItem}>Solution: social weather signal</span>
                <span className={styles.metaItem}>Outcome: local decision layer</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Forecasts tell people what the weather station measured. Felt Weather adds the
                missing human context: whether nearby people are describing conditions as pleasant,
                windy, damp, fresh, disruptive, or miserable.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Official readings can be accurate while still missing microclimates, street-level
                    comfort, and fast-moving local conditions.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    Users needed weather data and human evidence together, so they could understand
                    what conditions mean for movement, events, travel, and local plans.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We built a map experience that combines Open-Meteo conditions, classified public
                    posts, sentiment tags, heat layers, and selected-location evidence.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    People and operators can compare official weather with local sentiment before
                    deciding where to go, staff, route, recommend, or promote.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Turned noisy local posts into structured weather sentiment and comfort signals</li>
                  <li>Designed a map-first workflow with heatmap scanning and location-level evidence</li>
                  <li>Placed official weather beside human signal so the product stays explainable</li>
                  <li>Adapted the selected-location panel into a mobile bottom sheet for field use</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Live felt-score heatmap by visible map bounds and zoom level</li>
                  <li>Open-Meteo weather with apparent temperature, wind, humidity, rain, and cloud cover</li>
                  <li>Nearby post feed with source, relative time, sentiment, and weather tags</li>
                  <li>Keyword-first classification with optional AI fallback for low-confidence posts</li>
                  <li>Responsive Leaflet workflow for desktop and mobile exploration</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vue</span>
                  <span className={styles.chip}>Pinia</span>
                  <span className={styles.chip}>Leaflet</span>
                  <span className={styles.chip}>Cloudflare Workers</span>
                  <span className={styles.chip}>Cloudflare Queues</span>
                  <span className={styles.chip}>CockroachDB</span>
                  <span className={styles.chip}>Open-Meteo</span>
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
                  The interface exposes the evidence behind each score, so users can inspect the
                  local posts and measured conditions before trusting the map signal.
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
                We can turn live data, public signals, and operational context into a product people
                can inspect, understand, and act on.
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
