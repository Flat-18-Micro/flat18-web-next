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
    src: '/images/case-studies/btcpayserver/07-2025-09-03-24891c5-case-studies-ui.png',
    lightSrc: '/images/case-studies/btcpayserver/07-2025-09-03-24891c5-case-studies-ui.png',
    alt: 'Current BTCPay Server homepage showing the updated hero, live demo call to action, and modular proof sections',
    caption: 'Current homepage',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true,
  },
  {
    src: '/images/case-studies/btcpayserver/01-2018-12-16-b523d3c-launch-era.png',
    lightSrc: '/images/case-studies/btcpayserver/01-2018-12-16-b523d3c-launch-era.png',
    alt: 'Early BTCPay Server homepage with a plain hero, live demo call to action, and an explanatory donation panel',
    caption: 'Launch era',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/btcpayserver/03-2019-07-05-614affe-html5-video.png',
    lightSrc: '/images/case-studies/btcpayserver/03-2019-07-05-614affe-html5-video.png',
    alt: 'BTCPay Server homepage with HTML5 video in the hero and a clearer donate flow',
    caption: 'Video explainer',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/btcpayserver/04-2020-04-22-2438d2b-html-integrations.png',
    lightSrc: '/images/case-studies/btcpayserver/04-2020-04-22-2438d2b-html-integrations.png',
    alt: 'BTCPay Server homepage showing checkout flow, integrations messaging, and multilingual navigation',
    caption: 'Integrations layer',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
]

const journeySteps = [
  {
    eyebrow: '2018-12 / Foundation',
    title: 'The first site gave BTCPay Server a public front door.',
    copy:
      'BTCPay Server existed before the public story did, so the first job was to create a site from scratch and explain the self-hosted, open-source payment model without making it feel technical or obscure.',
    mediaIndex: 1,
  },
  {
    eyebrow: '2019 / Explanation',
    title: 'Video and stronger hero messaging made the product easier to grasp.',
    copy:
      'The homepage stopped behaving like a static project page once motion, stronger calls to action, and a clearer visual hierarchy were added. Visitors could understand the payment flow faster and spend less time decoding the page.',
    mediaIndex: 2,
  },
  {
    eyebrow: '2020 / International reach',
    title: 'Translations, language switching, and responsiveness made it feel global.',
    copy:
      'As the project grew, the website had to serve a wider audience. Language support, RTL handling, and mobile fixes made the site more usable for a distributed community of merchants, developers, and contributors.',
    mediaIndex: 3,
  },
  {
    eyebrow: '2024-2025 / Proof',
    title: 'Case studies and contributor visibility turned the website into evidence.',
    copy:
      'The latest phase made the site more narrative and more modular. Case studies, community signals, and reusable sections now show adoption in the real world instead of leaving the homepage to do all the work.',
    mediaIndex: 0,
  },
]

const proofPoints = [
  {
    value: '0% fees',
    label: 'Promise',
    detail: 'The first screen makes the no-middleman model clear straight away.',
  },
  {
    value: 'Multilingual',
    label: 'Reach',
    detail: 'Language switching and translation support make the project feel borderless.',
  },
  {
    value: 'Case studies',
    label: 'Proof',
    detail: 'Adoption stories and contributor visibility now support the product story.',
  },
]

const featureCards = [
  {
    mediaIndex: 0,
    kicker: 'Homepage',
    title: 'Start with the promise and the path to try it.',
    copy:
      'The current homepage blends a clear value proposition with live demo and getting started calls to action, so newcomers do not have to hunt for the next step.',
    ariaLabel: 'Open current BTCPay Server homepage screenshot in viewer',
    large: true,
  },
  {
    mediaIndex: 2,
    kicker: 'Video',
    title: 'Use motion to explain the flow quickly.',
    copy:
      'HTML5 video made the website easier to understand at a glance, which matters when the product itself is about direct, self-hosted payments.',
    ariaLabel: 'Open BTCPay Server video explainer screenshot in viewer',
  },
  {
    mediaIndex: 3,
    kicker: 'Integrations',
    title: 'Show the ecosystem, not just the product.',
    copy:
      'E-commerce integrations and API support make BTCPay look implementable rather than ideological, which helps merchants trust the rollout.',
    ariaLabel: 'Open BTCPay Server integrations screenshot in viewer',
  },
  {
    mediaIndex: 1,
    kicker: 'Launch page',
    title: 'Keep the first version simple and direct.',
    copy:
      'The earliest page established the brand, explained the no-fee model, and created a home for the project before the bigger storytelling work arrived.',
    ariaLabel: 'Open BTCPay Server launch era screenshot in viewer',
  },
]

const galleryItems = [1, 2, 3, 0]

export default function BTCPayServerCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Public product story</span>
              <h1 className={styles.productHeroTitle}>BTCPay Server</h1>
              <p className={styles.productHeroSubtitle}>
                When an open-source payments project has strong capability but no clear public story, the
                risk is that new users cannot see why to try it or how to start. Flat18 built and evolved
                the BTCPay Server site so the project could explain itself, support global users and turn
                adoption proof into trust.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://btcpayserver.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View live site
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
                aria-label="Open current BTCPay Server homepage screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/btcpayserver/07-2025-09-03-24891c5-case-studies-ui.png"
                  alt="Current BTCPay Server homepage showing the updated hero, live demo call to action, and modular proof sections"
                  width={1280}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Live site</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From a first website to a mature, community-shaped product story.</h2>
            <p>
              BTCPay Server did not start with a web presence. The first job was to create that presence from scratch,
              then keep evolving it as the project became more international, more visual, and more evidence-led.
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
              <h2>Designed around the moments where the story needs to move faster.</h2>
            </div>
            <p>
              The website has to do more than advertise the software. It needs to explain the model, show how to start,
              and prove that the ecosystem around BTCPay Server is real.
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
                <h4>Why it works</h4>
                <p>
                  BTCPay Server is an open-source project, not a company. The site therefore has to do three jobs at
                  once: explain the product, guide people into the docs, and show the community and case studies behind
                  the software.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: the product needed a public story as much as a homepage</span>
                <span className={styles.metaItem}>Solution: a modular site with proof, docs, and community signals</span>
                <span className={styles.metaItem}>Outcome: a clearer path from first visit to first payment</span>
              </div>

              <p className={styles.caseStudyIntro}>
                The BTCPay Server website grew in step with the project itself. Flat18’s role was to keep the public
                story readable as the product moved from a simple launch page to a richer, international front door.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    The project had a strong product story, but no public front door to explain it in a calm and
                    approachable way.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The site needed to function as landing page, documentation gateway, and community showcase without
                    making any one of those jobs feel overloaded.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    The homepage, integrations, video, translations, and case-study modules were shaped into a single
                    communication system that could keep growing.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Merchants and contributors can understand the model quickly, then move into the docs or the live
                    demo with less friction.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Created the first website from scratch around the self-hosted payments story</li>
                  <li>Refined the hero, calls to action, and video treatment into a clearer landing page</li>
                  <li>Added support for translations, language switching, and RTL-friendly presentation</li>
                  <li>Reworked integrations, community proof, and case studies into reusable modules</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key ideas</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Self-hosted</span>
                  <span className={styles.chip}>Video</span>
                  <span className={styles.chip}>Translations</span>
                  <span className={styles.chip}>Integrations</span>
                  <span className={styles.chip}>Case studies</span>
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
              <h2>Need a website that grows with the product behind it?</h2>
              <p>
                Flat18 can shape the story, structure, and proof so a technical project stays clear as it scales.
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
