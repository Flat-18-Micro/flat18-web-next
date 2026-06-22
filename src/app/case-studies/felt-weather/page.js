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
    src: '/images/case-studies/felt-weather/01-live-felt-weather-map.png',
    lightSrc: '/images/case-studies/felt-weather/01-live-felt-weather-map.png',
    alt: 'Felt Weather map with a local felt-score heat layer',
    caption: 'Live felt-score map',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true
  },
  {
    src: '/images/case-studies/felt-weather/02-location-felt-score-panel.png',
    lightSrc: '/images/case-studies/felt-weather/02-location-felt-score-panel.png',
    alt: 'Selected Felt Weather location panel with official weather and nearby posts',
    caption: 'Location evidence panel',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/felt-weather/03-mobile-location-workflow.png',
    lightSrc: '/images/case-studies/felt-weather/03-mobile-location-workflow.png',
    alt: 'Mobile Felt Weather map with selected location bottom sheet',
    caption: 'Mobile local workflow',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const journeySteps = [
  {
    eyebrow: '01 / Context gap',
    title: 'Official forecasts missed the human part of how weather feels locally.',
    copy:
      'The product needed to explain not just what the station measured, but whether people nearby were describing conditions as pleasant, windy, damp, or miserable.',
    mediaIndex: 0
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We combined weather readings with nearby posts and an explainable felt score.',
    copy:
      'The map had to stay easy to read while still showing the logic behind the score, the local posts that support it, and the conditions that sit underneath it.',
    mediaIndex: 1
  },
  {
    eyebrow: '03 / Decision layer',
    title: 'The mobile workflow keeps the same evidence close at hand in the field.',
    copy:
      'The selected-location panel becomes a bottom sheet on smaller screens so people can keep checking the map without losing the evidence they need.',
    mediaIndex: 2
  }
]

const proofPoints = [
  {
    value: 'Map-first',
    label: 'Explore',
    detail: 'The interface starts with the layer people need to scan first.',
  },
  {
    value: 'Local signals',
    label: 'Context',
    detail: 'Nearby posts help explain why the score looks the way it does.',
  },
  {
    value: 'Mobile-ready',
    label: 'Use on the move',
    detail: 'The workflow stays readable when the screen gets smaller.',
  }
]

const featureCards = [
  {
    mediaIndex: 0,
    kicker: 'Live map',
    title: 'See the felt layer at a glance.',
    copy:
      'The heat layer combines local signals with a clear visual hierarchy so the first read stays simple.',
    ariaLabel: 'Open Felt Weather live map screenshot in viewer',
    large: true
  },
  {
    mediaIndex: 1,
    kicker: 'Evidence panel',
    title: 'Explain why a location scores the way it does.',
    copy:
      'The location panel keeps official weather, nearby posts, and the score in one place so the logic is inspectable.',
    ariaLabel: 'Open Felt Weather location evidence panel in viewer'
  },
  {
    mediaIndex: 2,
    kicker: 'Mobile workflow',
    title: 'Keep the same map story on smaller screens.',
    copy:
      'The bottom sheet pattern makes the field view practical without hiding the evidence or the current location.',
    ariaLabel: 'Open Felt Weather mobile workflow screenshot in viewer'
  }
]

const galleryItems = [0, 1, 2]

export default function FeltWeatherCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Local context gap</span>
              <h1 className={styles.productHeroTitle}>Felt Weather</h1>
              <p className={styles.productHeroSubtitle}>
                When people plan around weather using only official readings, the risk is missing how
                conditions actually feel nearby. Flat18 combined forecasts with local public signals and
                an explainable felt score so users can judge a location with more context.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://felt.flat18.app"
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
                style={{ minHeight: 'clamp(320px, 42vw, 560px)' }}
                onClick={() => openLightbox(0)}
                aria-label="Open Felt Weather live map in viewer"
              >
                <Image
                  src={mediaItems[0].src}
                  alt={mediaItems[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Live map</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From raw weather data to a product that explains how conditions feel on the ground.</h2>
            <p>
              Flat18 treated Felt Weather as a context problem. The product had to keep the map simple
              while still showing the evidence behind the score, the local posts that support it, and the
              conditions underneath it.
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
              <h2>Designed around the moments where weather data needs human context.</h2>
            </div>
            <p>
              Felt Weather combines measured weather, public sentiment, and local evidence without making
              the interface feel like a research tool.
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
                  The interface exposes the evidence behind each score, so users can inspect the local
                  posts and measured conditions before trusting the map signal.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: forecast context gap</span>
                <span className={styles.metaItem}>Solution: social weather signal</span>
                <span className={styles.metaItem}>Outcome: local decision layer</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Forecasts tell people what the weather station measured. Felt Weather adds the human
                context: whether nearby people are describing conditions as pleasant, windy, damp, fresh,
                disruptive, or miserable.
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
                    Users needed weather data and human evidence together so they could understand what the
                    conditions mean for travel, events, and local plans.
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
                    People and operators can compare official weather with local sentiment before they
                    decide where to go or what to do next.
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
                Flat18 can turn live data, public signals, and operational context into a product people
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
        images={lightboxImages}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrev={showPrev}
      />
    </div>
  )
}
