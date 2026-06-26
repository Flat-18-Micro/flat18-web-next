'use client'

import Image from 'next/image'
import { useState } from 'react'
import homeImage from './home.png'
import dashboardImage from './dashboard.png'
import walletsImage from './wallets.png'
import alertsImage from './alerts.png'
import settingsImage from './settings.png'
import settingsAdvancedImage from './settings-advanced.png'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'
import mediaFlowStyles from '@/styles/component-css/CaseStudyMediaFlow.module.css'

const mediaItems = [
  {
    src: homeImage,
    lightSrc: homeImage,
    alt: 'Axis Finance landing page showing the quiet hero, summary cards, and direct navigation into the product',
    caption: 'Landing page',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true,
  },
  {
    src: dashboardImage,
    lightSrc: dashboardImage,
    alt: 'Axis Finance portfolio dashboard showing total value, 24-hour PnL, a trend chart, wallet balances, and a focus panel',
    caption: 'Portfolio dashboard',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: walletsImage,
    lightSrc: walletsImage,
    alt: 'Axis Finance read-only wallets screen showing BTC and EVM balances with value tables and connection flow',
    caption: 'Read-only wallets',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: alertsImage,
    lightSrc: alertsImage,
    alt: 'Axis Finance alerts screen showing active rules for BTC, ETH, and depeg monitoring',
    caption: 'Alerts and watchlists',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: settingsImage,
    lightSrc: settingsImage,
    alt: 'Axis Finance settings screen showing region override, consent toggles, PIN protection, and saved assets',
    caption: 'Settings',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: settingsAdvancedImage,
    lightSrc: settingsAdvancedImage,
    alt: 'Axis Finance advanced settings screen showing the asset registry and placeholder key-management controls',
    caption: 'Advanced controls',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
]

const journeySteps = [
  {
    eyebrow: '01 / Discover',
    title: 'The landing page explains the product in one glance.',
    copy:
      'Axis starts with a quiet homepage that frames the value proposition plainly: show live positions, prices, and alerts without turning the app into a trading terminal or a custody layer.',
    mediaIndex: 0,
  },
  {
    eyebrow: '02 / Observe',
    title: 'The dashboard turns market noise into a calm snapshot.',
    copy:
      'Portfolio value, 24-hour movement, wallet exposure, and trend context sit together on one screen so users can understand what changed without moving between tools.',
    mediaIndex: 1,
  },
  {
    eyebrow: '03 / Inspect',
    title: 'Read-only wallet tracking keeps privacy intact.',
    copy:
      'Public BTC and EVM addresses are enough for the core flow. That keeps the product useful while staying explicit about what it will not ask users to hand over.',
    mediaIndex: 2,
  },
  {
    eyebrow: '04 / Act',
    title: 'Alerts stay narrow enough to be useful.',
    copy:
      'Price, momentum, gas, and depeg triggers are framed as deliberate rules rather than a constant stream of noise, so the user always knows why something matters.',
    mediaIndex: 3,
  },
  {
    eyebrow: '05 / Control',
    title: 'The control layer stays small on purpose.',
    copy:
      'Region override, consent, PIN security, and asset registry placeholders are kept explicit so the beta feels careful and credible instead of overbuilt.',
    mediaIndex: 5,
  },
]

const proofPoints = [
  {
    value: 'Read-only',
    label: 'Model',
    detail: 'No private keys or custody prompts are needed in the core flow.',
  },
  {
    value: 'Live value',
    label: 'Signal',
    detail: 'Portfolio totals, movement, and watchlist context stay on the first screen.',
  },
  {
    value: 'PIN + consent',
    label: 'Control',
    detail: 'Local security and consent controls stay visible instead of hidden away.',
  },
]

const featureCards = [
  {
    mediaIndex: 1,
    kicker: 'Dashboard',
    title: 'Keep the overview calm.',
    copy:
      'The dashboard gives users a fast read on total value, 24-hour PnL, wallet exposure, and trend context without crowding the screen.',
    ariaLabel: 'Open Axis Finance portfolio dashboard screenshot in viewer',
    large: true,
  },
  {
    mediaIndex: 2,
    kicker: 'Wallets',
    title: 'Stay read-only by default.',
    copy:
      'The wallets view surfaces BTC and EVM balances with direct labels and value tables, which keeps the product useful without creating custody risk.',
    ariaLabel: 'Open Axis Finance read-only wallets screenshot in viewer',
  },
  {
    mediaIndex: 3,
    kicker: 'Alerts',
    title: 'Make the signal narrow.',
    copy:
      'Alerts focus on price, momentum, gas, and depeg scenarios so the product can help users act without becoming a noisy terminal.',
    ariaLabel: 'Open Axis Finance alerts screenshot in viewer',
  },
  {
    mediaIndex: 4,
    kicker: 'Settings',
    title: 'Keep trust explicit.',
    copy:
      'Region override, consent toggles, and PIN protection make the account layer easy to scan and easy to explain.',
    ariaLabel: 'Open Axis Finance settings screenshot in viewer',
  },
]

const galleryItems = [1, 2, 3, 4, 5]

export default function AxisFinanceCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Private portfolio clarity</span>
              <h1 className={styles.productHeroTitle}>Axis Finance</h1>
              <p className={styles.productHeroSubtitle}>
                When private investors watch positions, prices and alerts across noisy finance tools, the risk
                is acting on a screen they do not trust. Flat18 shaped Axis Finance around read-only wallet
                tracking and narrow alerts so users can inspect the signal without handing over control.
              </p>
              <div className={styles.productHeroActions}>
                <a href="#showcase" className="btn btn-primary">
                  Explore the screens
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
                aria-label="Open Axis Finance landing page screenshot in viewer"
              >
                <Image
                  src={homeImage}
                  alt="Axis Finance landing page showing the quiet hero, summary cards, and direct navigation into the product"
                  width={1440}
                  height={1614}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Beta</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From a quiet concept to a readable finance cockpit.</h2>
            <p>
              Flat18 treated Axis Finance as a trust and clarity problem. The app had to show useful market context
              without asking for custody-level access or turning into a cluttered trading interface.
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

      <section id="showcase" className={styles.productShowcaseSection}>
        <div className={styles.container}>
          <div className={styles.productShowcaseHeader}>
            <div>
              <span className={styles.caseStudyTag}>Product surfaces</span>
              <h2>Designed around the questions people ask first.</h2>
            </div>
            <p>
              Each screen does one job: show the signal, keep the state readable, and avoid the usual finance-app
              clutter.
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
              <div className={`${styles.mediaGrid} ${mediaFlowStyles.mediaGridFlow}`}>
                {galleryItems.map((mediaIndex, galleryIndex) => {
                  const item = mediaItems[mediaIndex]

                  return (
                    <figure
                      key={item.caption}
                      style={{ ['--media-tile-bg']: `url("${item.src?.src || item.src}")` }}
                      className={`${styles.mediaItem} ${galleryIndex === 0 ? styles.mediaPrimary : styles.mediaSecondary} ${mediaFlowStyles.mediaFlowItem} ${galleryIndex === 0 ? mediaFlowStyles.mediaFlowPrimary : mediaFlowStyles.mediaFlowSecondary}`}
                    >
                      <button
                        type="button"
                        className={`${styles.mediaButton} ${mediaFlowStyles.mediaFlowButton}`}
                        onClick={() => openLightbox(mediaIndex)}
                        aria-label={`Open ${item.alt} in viewer`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes={item.sizes}
                          className={`${styles.mediaImage} ${mediaFlowStyles.mediaFlowImage}`}
                          priority={item.priority}
                        />
                        <span className={`${styles.mediaButtonHint} ${mediaFlowStyles.mediaFlowHint}`}>
                          <i className="bi bi-arrows-fullscreen" aria-hidden="true"></i>
                          View
                        </span>
                      </button>
                      <figcaption className={`${styles.mediaCaption} ${mediaFlowStyles.mediaFlowCaption}`}>{item.caption}</figcaption>
                    </figure>
                  )
                })}
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Why it works</h4>
                <p>
                  Axis stays calm because the interface limits what it asks for and what it shows. Read-only wallet
                  tracking, narrow alerts, and explicit security controls make the product feel careful rather than
                  overloaded.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Beta</span>
                <span className={styles.metaItem}>Diagnosis: finance apps often bury the useful signal</span>
                <span className={styles.metaItem}>Solution: read-only surfaces with narrow alerts and local controls</span>
                <span className={styles.metaItem}>Outcome: a calmer product for private portfolio tracking</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 treated Axis Finance as a clarity problem first. The app had to show live positions, prices, and
                alerts without feeling like a trading terminal or asking for custody-level access.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Most finance dashboards either create noise or ask for more access than they need. Axis needed a
                    calmer way to show exposure and movement.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The product had to stay read-only by default and keep the security layer small enough that it felt
                    understandable from the first screen.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We shaped the landing page, dashboard, wallets, alerts, and settings around one simple idea: show
                    the signal without making the interface feel heavy.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Users can scan portfolio value, market movement, and wallet exposure quickly while keeping custody
                    risk out of the core experience.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Framed the product around live positions, prices, and alerts</li>
                  <li>Kept wallet visibility read-only and privacy-first</li>
                  <li>Tuned the alert model so thresholds stay clear and actionable</li>
                  <li>Made PIN, consent, and region state easy to understand</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Design principles</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Read-only first</span>
                  <span className={styles.chip}>Quiet hierarchy</span>
                  <span className={styles.chip}>Signal over noise</span>
                  <span className={styles.chip}>Local security</span>
                  <span className={styles.chip}>BTC + EVM</span>
                  <span className={styles.chip}>Dark UI</span>
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
              <h2>Need a finance interface that stays quiet and clear?</h2>
              <p>
                Flat18 can shape the hierarchy, wording, and interaction model so a dense financial product reads
                cleanly.
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
