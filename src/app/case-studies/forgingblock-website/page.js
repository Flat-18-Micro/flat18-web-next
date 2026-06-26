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
    src: '/images/case-studies/forgingblock-website/mockups/home-comparison.png',
    lightSrc: '/images/case-studies/forgingblock-website/mockups/home-comparison.png',
    alt: 'Home page comparison showing the legacy and redesigned layouts',
    caption: 'Home comparison',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true
  },
  {
    src: '/images/case-studies/forgingblock-website/mockups/pricing-comparison.png',
    lightSrc: '/images/case-studies/forgingblock-website/mockups/pricing-comparison.png',
    alt: 'Pricing page comparison showing the old and new pricing layouts',
    caption: 'Pricing comparison',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-website/redesign/home-desktop.png',
    lightSrc: '/images/case-studies/forgingblock-website/redesign/home-desktop.png',
    alt: 'Redesigned ForgingBlock home page',
    caption: 'Redesign home',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-website/redesign/home-mobile.png',
    lightSrc: '/images/case-studies/forgingblock-website/redesign/home-mobile.png',
    alt: 'Redesigned ForgingBlock home page on mobile',
    caption: 'Mobile home',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-website/redesign/pricing-desktop.png',
    lightSrc: '/images/case-studies/forgingblock-website/redesign/pricing-desktop.png',
    alt: 'Redesigned pricing page',
    caption: 'Redesign pricing',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-website/redesign/white-label-desktop.png',
    lightSrc: '/images/case-studies/forgingblock-website/redesign/white-label-desktop.png',
    alt: 'Redesigned white-label page',
    caption: 'White-label page',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-website/redesign/contact-desktop.png',
    lightSrc: '/images/case-studies/forgingblock-website/redesign/contact-desktop.png',
    alt: 'Redesigned contact page',
    caption: 'Contact page',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-website/legacy/home-desktop.png',
    lightSrc: '/images/case-studies/forgingblock-website/legacy/home-desktop.png',
    alt: 'Legacy home page snapshot',
    caption: 'Legacy home',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-website/legacy/home-mobile.png',
    lightSrc: '/images/case-studies/forgingblock-website/legacy/home-mobile.png',
    alt: 'Legacy home page on mobile',
    caption: 'Legacy mobile',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-website/legacy/pricing-desktop.png',
    lightSrc: '/images/case-studies/forgingblock-website/legacy/pricing-desktop.png',
    alt: 'Legacy pricing page snapshot',
    caption: 'Legacy pricing',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/forgingblock-website/legacy/white-label-desktop.png',
    lightSrc: '/images/case-studies/forgingblock-website/legacy/white-label-desktop.png',
    alt: 'Legacy white-label page snapshot',
    caption: 'Legacy white-label',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const journeySteps = [
  {
    eyebrow: '01 / Clarity audit',
    title: 'The legacy site had useful proof, but the hierarchy made people work too hard.',
    copy:
      'Flat18 reviewed the information architecture, page flow, proof placement, mobile density, and SEO structure before changing the experience.',
    mediaIndex: 7
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We rebuilt the journey so the merchant case appears before the technical detail.',
    copy:
      'The redesign moves value, trust, and conversion signals earlier, then uses comparison screens to show what improved and why it matters.',
    mediaIndex: 0
  },
  {
    eyebrow: '03 / Delivery system',
    title: 'The final site is easier to scan on mobile and easier to extend later.',
    copy:
      'Reusable modules, clearer metadata, and tighter page structure make it easier for the team to add proof without breaking the flow.',
    mediaIndex: 3
  }
]

const proofPoints = [
  {
    value: 'Trust first',
    label: 'Messaging',
    detail: 'Proof appears earlier and reads more plainly.',
  },
  {
    value: 'Mobile scan',
    label: 'Reading',
    detail: 'The structure stays clear on smaller screens.',
  },
  {
    value: 'Reusable modules',
    label: 'Maintenance',
    detail: 'Pages can grow without drifting out of shape.',
  }
]

const featureCards = [
  {
    mediaIndex: 2,
    kicker: 'Homepage',
    title: 'Lead with value before detail.',
    copy:
      'The redesigned home page brings the commercial case forward so visitors know what ForgingBlock does and why it matters.',
    ariaLabel: 'Open ForgingBlock redesigned home page in viewer',
    large: true
  },
  {
    mediaIndex: 1,
    kicker: 'Pricing',
    title: 'Make pricing easier to compare.',
    copy:
      'The comparison view shows the old and new structure side by side, which makes the change easier to read at a glance.',
    ariaLabel: 'Open ForgingBlock pricing comparison in viewer'
  },
  {
    mediaIndex: 5,
    kicker: 'White-label',
    title: 'Explain the technical offer without clutter.',
    copy:
      'The white-label page keeps the message direct, with enough proof to build confidence and not much more.',
    ariaLabel: 'Open ForgingBlock white-label page in viewer'
  },
  {
    mediaIndex: 6,
    kicker: 'Contact',
    title: 'Turn the final step into a clear action.',
    copy:
      'The contact page makes the next step obvious instead of hiding it behind a crowded footer or a vague form label.',
    ariaLabel: 'Open ForgingBlock contact page in viewer'
  }
]

const galleryItems = [2, 4, 5, 6]

export default function ForgingBlockWebsiteCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Merchant conversion blockers</span>
              <h1 className={styles.productHeroTitle}>ForgingBlock Website</h1>
              <p className={styles.productHeroSubtitle}>
                When merchants land on a busy payments site with proof buried behind technical detail, the
                risk is confusion before enquiry. Flat18 audited and rebuilt the ForgingBlock journey so
                buyers can understand the offer, compare pricing and trust the next step.
              </p>
              <div className={styles.productHeroActions}>
                <a href="#story" className="btn btn-secondary">
                  Read the build story
                </a>
                <a href="#chat" className="btn btn-primary">
                  Chat with us
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
                aria-label="Open ForgingBlock home page comparison in viewer"
              >
                <Image
                  src={mediaItems[0].src}
                  alt={mediaItems[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Audit and redesign</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From a crowded site to a clearer path through trust, pricing, and action.</h2>
            <p>
              Flat18 treated the site as a clarity problem. The legacy journey contained useful detail,
              but the customer path made people work too hard at the moment when confidence should have
              been building.
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
              <h2>Designed around the moments where website copy usually loses people.</h2>
            </div>
            <p>
              The redesign is not about visual flair for its own sake. It gives ForgingBlock a better
              way to present the offer, the proof, and the next step in a sequence that is easier to
              scan.
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
                  The redesign keeps benefits, trust, and conversion steps in a tighter sequence so
                  customers can move from interest to enquiry without losing confidence.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Redesign shipped</span>
                <span className={styles.metaItem}>Diagnosis: value hidden by complexity</span>
                <span className={styles.metaItem}>Solution: benefit-first journey</span>
                <span className={styles.metaItem}>Outcome: faster comprehension</span>
              </div>

              <p className={styles.caseStudyIntro}>
                The legacy site contained useful detail, but the customer journey was asking merchants to
                work too hard. Flat18 reviewed the information architecture, page hierarchy, proof
                placement, mobile density, and SEO structure before rebuilding the site into a cleaner,
                benefit-first experience.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Dense copy, deep navigation, and scattered trust proof slowed understanding at the
                    point where confidence should have been building.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The site had credibility, but its strongest proof appeared too late and the path was
                    not organised around decision-making.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We rebuilt the journey with benefit-led messaging, earlier trust signals, mobile
                    scanning, central metadata, and reusable page modules.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Merchants can understand the offer faster, while the business gets a maintainable
                    system for adding proof and services.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Audited the legacy site for message clarity, trust signals, SEO, and mobile usability</li>
                  <li>Reordered the narrative so merchant outcomes appear before technical detail</li>
                  <li>Converted repeated templates into reusable sections and content-driven modules</li>
                  <li>Improved long-term upkeep with shared tokens and structured metadata</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key improvements</h4>
                <ul className={styles.checkList}>
                  <li>Benefit-first hero with stronger CTA clarity</li>
                  <li>Earlier trust signals and compliance proof</li>
                  <li>Structured modules for scannable storytelling</li>
                  <li>Mobile-first layout simplification</li>
                  <li>Centralised SEO metadata and structured content</li>
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
              <h2>Need a marketing refresh?</h2>
              <p>
                Flat18 can audit your current site, identify the points where customers hesitate, and
                rebuild the journey around proof, clarity, and action.
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
