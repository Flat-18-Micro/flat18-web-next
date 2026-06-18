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
    src: '/images/case-studies/ipgeo/flat18-geo-overview.png',
    lightSrc: '/images/case-studies/ipgeo/flat18-geo-overview.png',
    alt: 'Flat18 Geo overview showing the product snapshot, endpoint cards, and cache summary',
    caption: 'Product snapshot',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true,
  },
  {
    src: '/images/case-studies/ipgeo/flat18-geo-ipinfo.png',
    lightSrc: '/images/case-studies/ipgeo/flat18-geo-ipinfo.png',
    alt: 'Flat18 Geo ipinfo response screen showing auth, curl request, JSON payload, and field breakdown',
    caption: 'ipinfo response',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/ipgeo/flat18-geo-geo.png',
    lightSrc: '/images/case-studies/ipgeo/flat18-geo-geo.png',
    alt: 'Flat18 Geo geo response screen showing caller IP resolution, request profile, and debug payload',
    caption: 'Browser-safe geo',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/ipgeo/flat18-geo-refresh.png',
    lightSrc: '/images/case-studies/ipgeo/flat18-geo-refresh.png',
    alt: 'Flat18 Geo refresh dispatch screen showing the manual trigger, accepted response, and workflow flow',
    caption: 'Refresh dispatch',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/ipgeo/flat18-geo-freshness.png',
    lightSrc: '/images/case-studies/ipgeo/flat18-geo-freshness.png',
    alt: 'Flat18 Geo freshness monitor screen showing the latest metadata row and sample payload',
    caption: 'Freshness monitor',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
]

const journeySteps = [
  {
    eyebrow: '01 / Trust gap',
    title: 'IP data was useful, but it needed more than a raw lookup.',
    copy:
      'Other Flat18 apps needed city, region, ASN, and request context, but the data only mattered if it stayed fresh and the caller could trust what came back later.',
    mediaIndex: 0,
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We split the service into the smallest useful endpoints.',
    copy:
      'Flat18 Geo ended up with four clear jobs: lookup, browser-safe geo, refresh dispatch, and freshness monitoring. Each surface keeps its own auth, cache, and response rules.',
    mediaIndex: 1,
  },
  {
    eyebrow: '03 / Confidence layer',
    title: 'Freshness had to be visible, not assumed.',
    copy:
      'A monitor endpoint and a background refresh path keep operators aware of data age without making the request path slow, fragile, or hard to support.',
    mediaIndex: 4,
  },
]

const proofPoints = [
  {
    value: '4 endpoints',
    label: 'API surface',
    detail: 'ipinfo, geo, refresh, and freshness cover the full lifecycle.',
  },
  {
    value: '60s cache',
    label: 'Lookup',
    detail: 'Private responses stay light for repeat calls.',
  },
  {
    value: '15s TTL',
    label: 'Monitoring',
    detail: 'Freshness checks stay cheap while still showing stale data quickly.',
  },
]

const featureCards = [
  {
    mediaIndex: 2,
    kicker: 'GET /api/geo',
    title: 'Make browser callers safe without hiding request context.',
    copy:
      'The geo endpoint resolves the caller IP from request headers, supports explicit lookups, and keeps the response usable from the browser.',
    ariaLabel: 'Open Flat18 Geo browser-safe geo screenshot in viewer',
    large: true,
  },
  {
    mediaIndex: 1,
    kicker: 'GET /api/ipinfo',
    title: 'Keep the main lookup compact and cacheable.',
    copy:
      'The lookup endpoint returns city, region, country, timezone, and ASN data with predictable cache behaviour.',
    ariaLabel: 'Open Flat18 Geo ipinfo response screenshot in viewer',
  },
  {
    mediaIndex: 3,
    kicker: 'GET /api/refresh',
    title: 'Move reload work off the hot path.',
    copy:
      'Refresh calls validate their trigger, dispatch GitHub Actions, and hand off the heavier GeoLite load without blocking the edge request.',
    ariaLabel: 'Open Flat18 Geo refresh dispatch screenshot in viewer',
  },
  {
    mediaIndex: 4,
    kicker: 'GET /api/freshness',
    title: 'Show data age before it becomes a support problem.',
    copy:
      'The freshness endpoint reports the latest load row so operators can see when GeoLite data last changed.',
    ariaLabel: 'Open Flat18 Geo freshness monitor screenshot in viewer',
  },
]

const galleryItems = [1, 2, 3, 4, 0]

export default function IPGeoCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / IP geolocation service</span>
              <h1 className={styles.productHeroTitle}>Flat18 Geo</h1>
              <p className={styles.productHeroSubtitle}>
                A compact IP intelligence API for Vercel that combines city and ASN lookups, browser-safe geo responses,
                scheduled refresh dispatch, and a freshness monitor built for operations.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://geo.flat18.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View live API
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
                aria-label="Open Flat18 Geo overview screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/ipgeo/flat18-geo-overview.png"
                  alt="Flat18 Geo overview showing the product snapshot, endpoint cards, and cache summary"
                  width={1280}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Live API</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From scattered IP data to a service built around trust and freshness.</h2>
            <p>
              Flat18 approached IPGeo as a reliability problem first. The API had to answer location questions quickly,
              keep browser callers safe, and make data age visible without turning the request path into a heavy job.
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
              <h2>Designed around the moments where geolocation usually gets messy.</h2>
            </div>
            <p>
              Each surface has one job: keep the lookup predictable, keep the browser path safe, and make the next
              operational step obvious.
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
                  Flat18 kept the hot path thin, moved the heavier data reload into GitHub Actions, and split the API
                  into small endpoints so lookup, refresh, and monitoring each stay easy to understand.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: IP data needed trust and freshness</span>
                <span className={styles.metaItem}>Solution: small endpoints with clear cache rules</span>
                <span className={styles.metaItem}>Outcome: safer lookups and easier operations</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 treated IPGeo as a confidence problem. The API needed to return useful location data, stay fast
                enough for other apps to call on demand, and make it obvious when the underlying GeoLite data had gone
                stale.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Other apps needed IP context, but a raw lookup was not enough unless the data was fresh and the
                    response shape stayed predictable.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The service needed separate paths for lookup, browser-safe geo, refresh dispatch, and monitoring
                    instead of one heavy endpoint doing everything.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We built cache-aware endpoints, a GitHub Actions reload path, and a freshness monitor on top of
                    Neon Postgres and the GeoLite2 data model.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Flat18 apps can add geolocation context without taking on a heavy platform or a fragile refresh
                    routine.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Defined the API contract for lookup, browser-safe geo, refresh, and monitoring</li>
                  <li>Kept the Vercel request path thin and pushed reload work into GitHub Actions</li>
                  <li>Added auth, cache, and debug rules so the service is safe to call from browsers and backend jobs</li>
                  <li>Made data freshness visible so support and operations can spot stale data quickly</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>City, region, country, timezone, and ASN lookup</li>
                  <li>Browser-safe geo responses with resolved caller IP</li>
                  <li>Basic or bearer auth for lookup requests</li>
                  <li>Cron-aware refresh dispatch</li>
                  <li>Bearer-protected freshness checks</li>
                  <li>Private 60 second cache on successful lookups</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vercel Functions</span>
                  <span className={styles.chip}>Neon Postgres</span>
                  <span className={styles.chip}>GitHub Actions</span>
                  <span className={styles.chip}>MaxMind GeoLite2</span>
                  <span className={styles.chip}>Vercel Cron</span>
                  <span className={styles.chip}>HTTP Basic / Bearer</span>
                  <span className={styles.chip}>Postgres SQL functions</span>
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
              <h2>Need IP intelligence that stays fast and easy to trust?</h2>
              <p>
                Flat18 can turn geolocation, refresh jobs, and freshness monitoring into a service that stays clear
                under pressure.
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
