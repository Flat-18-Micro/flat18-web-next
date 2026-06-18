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
    src: '/images/case-studies/pulseops/overview-mockup.webp',
    lightSrc: '/images/case-studies/pulseops/overview-mockup.webp',
    alt: 'PulseOps command centre mockup showing the product in context',
    caption: 'Command centre mockup',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true
  },
  {
    src: '/images/case-studies/pulseops/overview.png',
    lightSrc: '/images/case-studies/pulseops/overview.png',
    alt: 'PulseOps dashboard overview showing network inventory and status',
    caption: 'Overview dashboard',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/pulseops/network-visualisation.png',
    lightSrc: '/images/case-studies/pulseops/network-visualisation.png',
    alt: 'PulseOps network visualisation with topology map',
    caption: 'Topology visualisation',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/pulseops/insights.png',
    lightSrc: '/images/case-studies/pulseops/insights.png',
    alt: 'PulseOps historical insights dashboard',
    caption: 'Historical insights',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const journeySteps = [
  {
    eyebrow: '01 / Visibility gap',
    title: 'Small operators were stuck between tools that were too shallow and tools that were too heavy.',
    copy:
      'The product had to make network health easier to understand without asking teams to buy into an enterprise platform they did not need.',
    mediaIndex: 2
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We shaped PulseOps around inventory, telemetry, topology, and device action.',
    copy:
      'Instead of treating monitoring as one big dashboard, we broke the work into the moments operators actually need: find the device, check the state, inspect the map, and act with confidence.',
    mediaIndex: 0
  },
  {
    eyebrow: '03 / Decision layer',
    title: 'The final interface keeps history and next steps close together.',
    copy:
      'Discovery, insights, and network actions live in the same working view, so the product feels useful from the first scan rather than impressive only in a demo.',
    mediaIndex: 3
  }
]

const proofPoints = [
  {
    value: 'Self-hosted',
    label: 'Trust posture',
    detail: 'Teams can run the platform on their own infrastructure without losing clarity.',
  },
  {
    value: 'SSH + SNMP',
    label: 'Telemetry',
    detail: 'Operational data stays tied to the devices, not hidden in disconnected reports.',
  },
  {
    value: 'Topology-first',
    label: 'Workflow',
    detail: 'Operators can see relationships before they decide what to fix.',
  }
]

const featureCards = [
  {
    mediaIndex: 0,
    kicker: 'Command centre',
    title: 'Keep the current state readable at a glance.',
    copy:
      'Inventory, live telemetry, and status sit together so operators do not need to assemble the picture themselves.',
    ariaLabel: 'Open PulseOps command centre mockup in viewer',
    large: true
  },
  {
    mediaIndex: 2,
    kicker: 'Topology',
    title: 'Map the network before you touch it.',
    copy:
      'The visualisation makes dependencies and weak points easier to understand when the next move matters.',
    ariaLabel: 'Open PulseOps network visualisation screenshot in viewer'
  },
  {
    mediaIndex: 3,
    kicker: 'History',
    title: 'Turn past incidents into something useful.',
    copy:
      'Insights keep recurring faults, changes, and support context in one place so the team can spot patterns quickly.',
    ariaLabel: 'Open PulseOps historical insights screenshot in viewer'
  }
]

const galleryItems = [1, 2, 3, 0]

export default function PulseOpsCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Open-source network operations</span>
              <h1 className={styles.productHeroTitle}>PulseOps</h1>
              <p className={styles.productHeroSubtitle}>
                A self-hosted command centre for small operators that brings inventory, telemetry,
                topology, and device actions into one readable place.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://pulseops.flat18.app"
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
                aria-label="Open PulseOps command centre mockup in viewer"
              >
                <Image
                  src={mediaItems[0].src}
                  alt={mediaItems[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Self-hosted</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From a visibility gap to a command centre operators can actually run.</h2>
            <p>
              Flat18 treated PulseOps as a product story problem. Small operators needed one place to
              check inventory, health, topology, history, and next actions without carrying enterprise
              overhead.
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
              <h2>Designed around the moments where network operators need answers quickly.</h2>
            </div>
            <p>
              PulseOps does not try to be a generic monitor. Each surface supports inventory,
              topology, history, or action, so operators can move from overview to fix without losing
              context.
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
                  The product makes the trust posture visible. Teams can run it themselves, see where
                  the data comes from, and move from overview to action without losing their place.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: visibility gap</span>
                <span className={styles.metaItem}>Solution: local command centre</span>
                <span className={styles.metaItem}>Outcome: operator-ready narrative</span>
              </div>

              <p className={styles.caseStudyIntro}>
                PulseOps was treated as a product story problem. The interface had to help small
                operators see the estate, understand the topology, and decide what to do next without
                pretending they needed enterprise overhead.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Smaller networks lacked one reliable place to check state, history, and device
                    relationships.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The product needed discovery, telemetry, topology, and action in one workflow.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We shaped a self-hosted console with overview, map, and insight surfaces that
                    stay close to the work.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Teams can inspect, explain, and act without stitching together several tools.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Translated the market gap into a focused product narrative</li>
                  <li>Kept topology, telemetry, and action close enough to support real work</li>
                  <li>Used open-source positioning as part of the trust case, not a side note</li>
                  <li>Made the experience feel practical for small operators rather than oversized</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Device inventory and status tracking</li>
                  <li>Live SSH and SNMP telemetry</li>
                  <li>Topology maps and network visualisation</li>
                  <li>Historical insights and recurring fault patterns</li>
                  <li>Fast device actions with supporting context</li>
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
              <h2>Need a command centre like this?</h2>
              <p>
                Flat18 can turn a rough product opportunity into a clear service, interface, and launch
                story that small teams can understand quickly.
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
