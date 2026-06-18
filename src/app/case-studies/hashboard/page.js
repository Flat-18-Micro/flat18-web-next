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
    src: '/images/case-studies/hashboard/dashboard-overview.svg',
    lightSrc: '/images/case-studies/hashboard/dashboard-overview.svg',
    alt: 'Hashboard dashboard overview',
    caption: 'Dashboard overview',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true
  },
  {
    src: '/images/case-studies/hashboard/mining-overview.svg',
    lightSrc: '/images/case-studies/hashboard/mining-overview.svg',
    alt: 'Mining performance overview',
    caption: 'Mining performance',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/hashboard/treasury-financials.svg',
    lightSrc: '/images/case-studies/hashboard/treasury-financials.svg',
    alt: 'Treasury and financials summary',
    caption: 'Treasury visibility',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/hashboard/governance-proposals.svg',
    lightSrc: '/images/case-studies/hashboard/governance-proposals.svg',
    alt: 'Governance proposals overview',
    caption: 'Governance proposals',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/hashboard/mobile-quickview.svg',
    lightSrc: '/images/case-studies/hashboard/mobile-quickview.svg',
    alt: 'Mobile quick view dashboard',
    caption: 'Mobile quick view',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/hashboard/ui-kit.svg',
    lightSrc: '/images/case-studies/hashboard/ui-kit.svg',
    alt: 'Hashboard UI kit and reusable components',
    caption: 'UI kit',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/hashboard/wireframe-dashboard.svg',
    lightSrc: '/images/case-studies/hashboard/wireframe-dashboard.svg',
    alt: 'Dashboard wireframe sketch',
    caption: 'Dashboard wireframe',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/hashboard/wireframe-mining.svg',
    lightSrc: '/images/case-studies/hashboard/wireframe-mining.svg',
    alt: 'Mining wireframe sketch',
    caption: 'Mining wireframe',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const journeySteps = [
  {
    eyebrow: '01 / Trust gap',
    title: 'Data was scattered across mining, wallet, and governance tools.',
    copy:
      'Stakeholders could not read the health of the project quickly because the evidence lived in too many places and the story had no clear hierarchy.',
    mediaIndex: 6
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We built a summary-first dashboard with clear hierarchy and source context.',
    copy:
      'The first screen answers the important question first: how is the project doing, what changed, and where should someone look next.',
    mediaIndex: 0
  },
  {
    eyebrow: '03 / Decision layer',
    title: 'The responsive quick view and UI system keep the product useful on smaller screens.',
    copy:
      'A compact mobile view and a reusable component kit make the experience easier to maintain while keeping the dashboard readable anywhere.',
    mediaIndex: 4
  }
]

const proofPoints = [
  {
    value: 'Trust gap',
    label: 'Problem',
    detail: 'Stakeholders needed a faster way to read project health.',
  },
  {
    value: 'Summary-first',
    label: 'Approach',
    detail: 'The first screen carries the story before the charts begin.',
  },
  {
    value: 'Governance ready',
    label: 'Outcome',
    detail: 'Insight stays close enough to support the next action.',
  }
]

const featureCards = [
  {
    mediaIndex: 1,
    kicker: 'Mining',
    title: 'Keep mining performance visible at a glance.',
    copy:
      'The mining surface brings production health, trends, and key stats together so stakeholders can judge the estate quickly.',
    ariaLabel: 'Open Hashboard mining overview in viewer',
    large: true
  },
  {
    mediaIndex: 2,
    kicker: 'Treasury',
    title: 'Put treasury context beside operational data.',
    copy:
      'Balances and financial detail stay close to the rest of the dashboard, which makes the numbers easier to read in context.',
    ariaLabel: 'Open Hashboard treasury overview in viewer'
  },
  {
    mediaIndex: 3,
    kicker: 'Governance',
    title: 'Make proposal status easy to scan.',
    copy:
      'The proposals view keeps the active work visible so contributors can see what needs attention without hunting around.',
    ariaLabel: 'Open Hashboard governance proposals in viewer'
  },
  {
    mediaIndex: 4,
    kicker: 'Responsive quick view',
    title: 'Give stakeholders a quick read on smaller screens.',
    copy:
      'The compact layout makes the dashboard useful when the full interface is not available or not needed.',
    ariaLabel: 'Open Hashboard mobile quick view in viewer'
  }
]

const galleryItems = [4, 5, 6, 7]

export default function HashboardCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Mining transparency platform</span>
              <h1 className={styles.productHeroTitle}>Zettahash Hashboard</h1>
              <p className={styles.productHeroSubtitle}>
                A stakeholder dashboard that brings mining, treasury, market, and governance signals into
                one quick read.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://zettahash-hashboard.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View demo
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
                aria-label="Open Hashboard dashboard overview in viewer"
              >
                <Image
                  src={mediaItems[0].src}
                  alt={mediaItems[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Transparency hub</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From scattered operational data to a dashboard that earns trust quickly.</h2>
            <p>
              Flat18 treated the Hashboard as a trust and participation problem. Stakeholders needed a
              faster way to understand operational health, financial context, and active governance
              without stitching together separate tools.
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
              <h2>Designed around the moments where stakeholders need to assess the project quickly.</h2>
            </div>
            <p>
              The dashboard keeps operational, financial, and governance data in one readable place so
              the team can check health without assembling reports by hand.
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
                  High-contrast metrics and visible sources keep the dashboard defensible, readable, and
                  useful when stakeholders need to decide what happens next.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: project data scattered across tools</span>
                <span className={styles.metaItem}>Solution: one transparency hub</span>
                <span className={styles.metaItem}>Outcome: faster stakeholder assessment</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 approached the Hashboard as a trust problem first. The interface needed to help
                tokenholders and contributors understand operational health, financial context, and
                governance status without stitching together data from different systems.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Data spread across mining, wallet, and governance tools made it difficult to assess the
                    project quickly.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The information existed, but it lacked hierarchy, source context, and a clear path from
                    insight to action.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We designed a summary-first dashboard with mining metrics, treasury visibility,
                    governance status, and immediate next steps.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Participants can assess project health faster and move into governance with more
                    confidence.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Identified the trust gap caused by scattered operational and governance data</li>
                  <li>Prioritised summary metrics and source visibility before dense detail</li>
                  <li>Designed stakeholder journeys for tokenholder check-ins and governance</li>
                  <li>Linked insight to action with proposal status and community entry points</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Mining performance overview with trend visibility</li>
                  <li>Treasury balances and vesting status</li>
                  <li>Snapshot governance proposals and status</li>
                  <li>Responsive quick view for smaller screens</li>
                  <li>Reusable UI kit for consistent dashboard surfaces</li>
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
              <h2>Need a transparency dashboard?</h2>
              <p>
                Flat18 can turn scattered operational data into a stakeholder dashboard that explains what
                matters, where it came from, and what to do next.
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
