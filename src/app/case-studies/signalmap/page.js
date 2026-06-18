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
    src: '/images/case-studies/signalmap/01-landing-full.png',
    lightSrc: '/images/case-studies/signalmap/01-landing-full.png',
    alt: 'SignalMap landing page showing privacy-first analytics messaging and the product dashboard preview',
    caption: 'Product landing page',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    priority: true,
  },
  {
    src: '/images/case-studies/signalmap/04-dashboard-overview.png',
    lightSrc: '/images/case-studies/signalmap/04-dashboard-overview.png',
    alt: 'SignalMap dashboard overview showing traffic, conversions, sources, and recommendations',
    caption: 'Dashboard overview',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/signalmap/05-dashboard-live.png',
    lightSrc: '/images/case-studies/signalmap/05-dashboard-live.png',
    alt: 'SignalMap live dashboard showing recent activity and visitor flow',
    caption: 'Live activity',
    sizes: '(max-width: 768px) 100vw, 320px',
    priority: true,
  },
  {
    src: '/images/case-studies/signalmap/06-dashboard-map.png',
    lightSrc: '/images/case-studies/signalmap/06-dashboard-map.png',
    alt: 'SignalMap journey map showing the path through a session and where users drop away',
    caption: 'Journey map',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/signalmap/07-dashboard-pages.png',
    lightSrc: '/images/case-studies/signalmap/07-dashboard-pages.png',
    alt: 'SignalMap pages screen showing top pages, visits, and conversion signals',
    caption: 'Pages view',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/signalmap/08-dashboard-sources.png',
    lightSrc: '/images/case-studies/signalmap/08-dashboard-sources.png',
    alt: 'SignalMap sources screen showing channels, campaign tags, and traffic quality signals',
    caption: 'Sources view',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/signalmap/09-dashboard-campaigns.png',
    lightSrc: '/images/case-studies/signalmap/09-dashboard-campaigns.png',
    alt: 'SignalMap campaigns screen showing UTM performance and source quality',
    caption: 'Campaigns view',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/signalmap/10-dashboard-journeys.png',
    lightSrc: '/images/case-studies/signalmap/10-dashboard-journeys.png',
    alt: 'SignalMap journeys screen showing the first steps in a session and the path analysis',
    caption: 'Journeys view',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/signalmap/11-dashboard-recommendations.png',
    lightSrc: '/images/case-studies/signalmap/11-dashboard-recommendations.png',
    alt: 'SignalMap recommendations screen showing plain-English actions',
    caption: 'Recommendations',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/signalmap/12-dashboard-tracker.png',
    lightSrc: '/images/case-studies/signalmap/12-dashboard-tracker.png',
    alt: 'SignalMap tracker code screen showing one-line install instructions and configuration',
    caption: 'Tracker code',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
]

const galleryItems = [2, 3, 4, 6, 8]

const journeySteps = [
  {
    eyebrow: '01 / The problem',
    title: 'Analytics could show volume, but not the next move.',
    copy:
      'Founders can see visits, sources, and conversions, but they still need help deciding what to change this week.',
    mediaIndex: 1,
  },
  {
    eyebrow: '02 / The product shape',
    title: 'We kept the signal pipeline deliberately thin.',
    copy:
      'The browser tracker records page views, events, conversions, UTMs, and a daily rotating anonymous session hash. A Cloudflare Worker handles ingest, Neon Postgres stores aggregates, and the Vue 3 dashboard keeps the read fast.',
    mediaIndex: 3,
  },
  {
    eyebrow: '03 / The decision layer',
    title: 'The UI answers one question and then steps back.',
    copy:
      'Overview, Pages, Sources, Campaigns, Journeys, Recommendations, and Tracker Code each solve one job, so the product feels like guidance rather than another BI tool.',
    mediaIndex: 8,
  },
]

const proofPoints = [
  {
    value: 'Cookie-free',
    label: 'Tracking',
    detail: 'Page views, events, conversions, and campaign data are collected without cookies.',
  },
  {
    value: 'Edge-first',
    label: 'Ingest',
    detail: 'A Cloudflare Worker validates and normalises events before they reach storage.',
  },
  {
    value: 'Actionable',
    label: 'Recommendations',
    detail: 'Rule-based prompts turn patterns into the next useful change.',
  },
]

const featureCards = [
  {
    mediaIndex: 1,
    kicker: 'Overview',
    title: 'Keep the first read simple.',
    copy: 'Traffic, conversions, and the top source sit together so founders do not start with a chart maze.',
    ariaLabel: 'Open SignalMap dashboard overview screenshot in viewer',
    large: true,
  },
  {
    mediaIndex: 5,
    kicker: 'Pages and sources',
    title: 'Separate page demand from traffic quality.',
    copy: 'Pages show what people read. Sources show where they came from. Together they make attribution useful instead of decorative.',
    ariaLabel: 'Open SignalMap sources screenshot in viewer',
  },
  {
    mediaIndex: 7,
    kicker: 'Campaigns and journeys',
    title: 'See what a campaign actually changed.',
    copy: 'UTMs, campaign groups, and first-step paths make it easier to spot which visits are worth keeping.',
    ariaLabel: 'Open SignalMap journeys screenshot in viewer',
  },
  {
    mediaIndex: 9,
    kicker: 'Recommendations and tracker code',
    title: 'Make the next step and the install obvious.',
    copy: 'Plain-English recommendations point to the change, and the one-line tracker keeps setup friction low.',
    ariaLabel: 'Open SignalMap tracker code screenshot in viewer',
  },
]

export default function SignalMapCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Privacy-first analytics platform</span>
              <h1 className={styles.productHeroTitle}>SignalMap</h1>
              <p className={styles.productHeroSubtitle}>
                A privacy-first analytics product for founders, startups, and small agencies that turns
                minimal browser signals into practical next steps instead of another dashboard to interpret.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://signalmap.app"
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
                aria-label="Open SignalMap product landing page screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/signalmap/01-landing-full.png"
                  alt="SignalMap landing page showing privacy-first analytics messaging and the product dashboard preview"
                  width={1440}
                  height={2054}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Live beta</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From raw traffic to a product that points to the next move.</h2>
            <p>
              Flat18 treated SignalMap as a signal-design problem. The product had to collect the minimum
              useful data, keep identity ephemeral, and turn that data into guidance a founder can act on
              without decoding the dashboard first.
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
              <h2>Designed around the moments where analytics usually get noisy.</h2>
            </div>
            <p>
              Each surface has one job: reduce noise, keep context, and make the next decision obvious.
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
                <h4>Why it works</h4>
                <p>
                  SignalMap stays narrow on purpose. Aggregate-first storage keeps the dashboard fast,
                  the daily rotating session hash avoids persistent identifiers, and the recommendation
                  layer stays explainable because it starts from rules rather than hidden scoring.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live beta</span>
                <span className={styles.metaItem}>Diagnosis: volume without clear action</span>
                <span className={styles.metaItem}>Solution: edge-first signal pipeline</span>
                <span className={styles.metaItem}>Outcome: quicker, explainable decisions</span>
              </div>

              <p className={styles.caseStudyIntro}>
                SignalMap was shaped as a privacy-first analytics product from the start. The job was not to
                collect more data. It was to collect the minimum useful signal, keep identity temporary, and
                present recommendations a founder can act on without a translation layer in between.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Most analytics tools show traffic volume, but stop short of telling teams what to change
                    first.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The product had to stay privacy-first, fast, and opinionated about the signal that
                    actually matters.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We connected the browser tracker, edge ingest, aggregate views, recommendation rules, and
                    dashboard surfaces into one system.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Founders get a quicker read on what happened and a clearer steer on what to do next.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Defined <code>signal.js</code> as a lightweight tracker for page views, events, conversions, and attribution data</li>
                  <li>Shaped the browser, worker, and database path so the hot route stayed thin</li>
                  <li>Designed the information architecture around Overview, Pages, Sources, Campaigns, Journeys, Recommendations, and Tracker Code</li>
                  <li>Kept the weekly reporting tone readable for founders who do not want a metrics lecture</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Page view, event, and conversion tracking</li>
                  <li>UTM campaign attribution</li>
                  <li>Visitor journey mapping</li>
                  <li>Live activity view for recent events</li>
                  <li>Country and device breakdowns</li>
                  <li>Rule-based recommendations with AI-ready extension points</li>
                  <li>Privacy-first architecture with no cookies and no persistent identifiers</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Browser tracker</span>
                  <span className={styles.chip}>Cloudflare Worker</span>
                  <span className={styles.chip}>Neon Postgres</span>
                  <span className={styles.chip}>Vue 3</span>
                  <span className={styles.chip}>Aggregate queries</span>
                  <span className={styles.chip}>Rule-based recommendations</span>
                  <span className={styles.chip}>Weekly reporting</span>
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
              <h2>Need analytics that reads like advice?</h2>
              <p>
                Flat18 can turn minimal signal into a clearer product with the right tracker, data model,
                dashboard, and reporting flow.
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
