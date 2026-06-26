'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'
import mediaFlowStyles from '@/styles/component-css/CaseStudyMediaFlow.module.css'

const mediaItems = [
  {
    src: '/images/case-studies/f18-pay/01-dashboard-overview.png',
    lightSrc: '/images/case-studies/f18-pay/01-dashboard-overview.png',
    alt: 'F18 Pay dashboard overview showing store activity, balances, and invoice status',
    caption: 'Dashboard overview',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    priority: true
  },
  {
    src: '/images/case-studies/f18-pay/02-store-summary.png',
    lightSrc: '/images/case-studies/f18-pay/02-store-summary.png',
    alt: 'F18 Pay store summary showing the active store, balance, and invoice statistics',
    caption: 'Store summary',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/f18-pay/03-store-settings.png',
    lightSrc: '/images/case-studies/f18-pay/03-store-settings.png',
    alt: 'F18 Pay store settings with identity, branding, and enablement controls',
    caption: 'Store settings',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/f18-pay/04-wallet-settings.png',
    lightSrc: '/images/case-studies/f18-pay/04-wallet-settings.png',
    alt: 'F18 Pay wallet settings with private key download controls',
    caption: 'Wallet controls',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/f18-pay/05-payment-assets.png',
    lightSrc: '/images/case-studies/f18-pay/05-payment-assets.png',
    alt: 'F18 Pay payment assets screen for payment buttons and payment pages',
    caption: 'Payment assets',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/f18-pay/06-invoices.png',
    lightSrc: '/images/case-studies/f18-pay/06-invoices.png',
    alt: 'F18 Pay invoices screen with status, values, filters, and support detail',
    caption: 'Invoices',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/f18-pay/07-payment-requests-list.png',
    lightSrc: '/images/case-studies/f18-pay/07-payment-requests-list.png',
    alt: 'F18 Pay payment requests list showing request status and recipient detail',
    caption: 'Payment requests',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const galleryItems = [1, 2, 3, 5, 6]

const journeySteps = [
  {
    eyebrow: '01 / Friction',
    title: 'Merchants needed more than a checkout link.',
    copy: 'F18 Pay had to handle stores, invoices, request links, wallet access, and brand controls without forcing merchants to stitch together separate tools.',
    mediaIndex: 1
  },
  {
    eyebrow: '02 / Product shape',
    title: 'The store became the centre of the system.',
    copy: 'Each store carries its own identity, currency mode, and operational settings. That keeps Bitcoin and Ethereum workflows separate and easier to support.',
    mediaIndex: 2
  },
  {
    eyebrow: '03 / Reliability',
    title: 'Security and state had to stay visible.',
    copy: 'Wallet access sits behind verification, invoice states stay clear, and payment requests carry enough context to support a real transaction later.',
    mediaIndex: 3
  }
]

const proofPoints = [
  {
    value: 'BTC / ETH',
    label: 'Store types',
    detail: 'Separate Bitcoin and Ethereum flows keep configuration and support simple.'
  },
  {
    value: 'QR checkout',
    label: 'Public flow',
    detail: 'Public invoice pages show the amount due, QR address, and current status.'
  },
  {
    value: 'Email-gated',
    label: 'Wallet access',
    detail: 'Sensitive wallet actions sit behind verification instead of an open download.'
  }
]

const featureCards = [
  {
    mediaIndex: 4,
    kicker: 'Payment assets',
    title: 'Make the checkout entry points fit the store.',
    copy: 'Buttons and payment pages can be generated in the same brand system, so merchants can embed a payment experience instead of a generic link.',
    ariaLabel: 'Open F18 Pay payment assets screenshot in viewer',
    large: true
  },
  {
    mediaIndex: 5,
    kicker: 'Invoices',
    title: 'Keep payment state visible.',
    copy: 'Invoice tables show due amounts, statuses, and date ranges so support teams can answer questions quickly.',
    ariaLabel: 'Open F18 Pay invoices screenshot in viewer'
  },
  {
    mediaIndex: 6,
    kicker: 'Payment requests',
    title: 'Create a clean trail for money requests.',
    copy: 'Request links, recipient emails, and status fields keep follow-up clear after a request leaves the dashboard.',
    ariaLabel: 'Open F18 Pay payment requests screenshot in viewer'
  }
]

export default function F18PayCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Payment state clarity</span>
              <h1 className={styles.productHeroTitle}>F18 Pay</h1>
              <p className={styles.productHeroSubtitle}>
                When merchants accept Bitcoin and Ethereum payments across stores, wallets, invoices and
                public checkout pages, the risk is unclear payment state and slow follow-up. Flat18 built
                F18 Pay so store teams can see what is live, what is paid and what needs attention.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://pay.flat18.co.uk"
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

            <div className={`${styles.productHeroVisual} ${styles.f18PayHeroVisual}`}>
              <button
                type="button"
                className={`${styles.productHeroImageButton} ${styles.f18PayHeroImageButton}`}
                onClick={() => openLightbox(0)}
                aria-label="Open F18 Pay dashboard overview screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/f18-pay/00-hero-dashboard-overview.png"
                  alt="F18 Pay dashboard overview showing store activity, balances, and invoice status"
                  width={1280}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.f18PayHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Live product</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From a payment surface to a system merchants could actually operate.</h2>
            <p>
              Flat18 treated F18 Pay as a controls and trust problem. The product had to help merchants create
              stores, manage brand and wallet state, issue invoices, create payment requests, and support
              payments without hiding the parts that usually go wrong.
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
              <h2>Designed around the moments where payment products usually break.</h2>
            </div>
            <p>
              F18 Pay is not just a QR checkout. It is an operating layer for stores, invoices, requests,
              wallet access, and payment entry points.
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
                      key={item.src}
                      style={{ ['--media-tile-bg']: `url("${item.src}")` }}
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
                <h4>Delivered for confidence</h4>
                <p>
                  Store identity, wallet access, invoices, payment assets, and request flows stay visible in
                  one place, which makes the whole payment system easier to operate and support.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: payments were split across too many surfaces</span>
                <span className={styles.metaItem}>Solution: store-centred payment system</span>
                <span className={styles.metaItem}>Outcome: clearer checkout and support flows</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 treated F18 Pay as a controls and trust problem. The product had to help merchants set up
                stores, issue invoices, manage wallet access, and present a public payment flow without hiding
                the important state.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Merchants needed stores, invoices, requests, wallets, and public payment pages in one system,
                    not a pile of disconnected tools.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The store had to be the centre of the product. If the merchant could not see state, the
                    support load would only move elsewhere.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We built store setup, payment assets, invoice tracking, request flows, wallet verification,
                    and public payment states into one operating layer.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Merchants can support real payments with clearer status, fewer hand-offs, and less guesswork
                    when something needs checking.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Turned a long-running payments codebase into a coherent product story</li>
                  <li>Designed the information architecture around stores, invoices, wallets, requests, and public payment pages</li>
                  <li>Kept operational detail visible without overwhelming the merchant</li>
                  <li>Preserved the technical depth instead of hiding it behind a simplified shell</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vue 3</span>
                  <span className={styles.chip}>Vite</span>
                  <span className={styles.chip}>Pinia</span>
                  <span className={styles.chip}>Vue Router</span>
                  <span className={styles.chip}>Node.js + Express</span>
                  <span className={styles.chip}>Neon Postgres</span>
                  <span className={styles.chip}>bitcoinjs-lib</span>
                  <span className={styles.chip}>ethers</span>
                  <span className={styles.chip}>Mailgun</span>
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
              <h2>Need a payment workflow this controlled?</h2>
              <p>
                Flat18 can turn merchant operations into a clear product with the right screens, state, and
                support flow.
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
