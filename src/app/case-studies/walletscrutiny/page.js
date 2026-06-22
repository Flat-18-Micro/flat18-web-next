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
    src: '/images/case-studies/walletscrutiny/2023-home.png',
    lightSrc: '/images/case-studies/walletscrutiny/2023-home.png',
    alt: 'WalletScrutiny dashboard-style home page showing review counts, wallet categories, search, and methodology links',
    caption: 'Dashboard home',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true,
  },
  {
    src: '/images/case-studies/walletscrutiny/2020-home.jpeg',
    lightSrc: '/images/case-studies/walletscrutiny/2020-home.jpeg',
    alt: 'Early WalletScrutiny home page with a large logo tile and long wallet lists under verdict groups',
    caption: 'Early directory',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/walletscrutiny/2022-home.jpeg',
    lightSrc: '/images/case-studies/walletscrutiny/2022-home.jpeg',
    alt: 'WalletScrutiny home page showing search, filters, wallet cards, and security messaging on a dark background',
    caption: 'Search and filters',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
  {
    src: '/images/case-studies/walletscrutiny/2023-mycelium.jpeg',
    lightSrc: '/images/case-studies/walletscrutiny/2023-mycelium.jpeg',
    alt: 'WalletScrutiny Mycelium review page showing security overview, methodology, timeline, and evidence blocks',
    caption: 'Review detail',
    sizes: '(max-width: 768px) 100vw, 320px',
  },
]

const journeySteps = [
  {
    eyebrow: '2020-07 / Foundation',
    title: 'The first modern redesign gave the site a front door.',
    copy:
      'The earliest work moved WalletScrutiny away from a utility feel and towards a branded landing page with a clearer hero, layout structure, and font choice. That was the first step in making the dataset feel deliberate rather than raw.',
    mediaIndex: 1,
  },
  {
    eyebrow: '2020-07 to 2020-09 / Fill-out',
    title: 'The first redesign became usable across the site.',
    copy:
      'Search behaviour, category views, sidebar treatment, dark theme fixes, and mobile clean-up turned the concept into a site people could actually work through. The visual frame was set, then the interaction details made it hold together.',
    mediaIndex: 2,
  },
  {
    eyebrow: '2023-04 to 2023-06 / Full redesign',
    title: 'The homepage became a dashboard for a large dataset.',
    copy:
      'A second, larger redesign added dedicated homepage modules, wallet groupings, stronger typography, and imagery that made the catalogue scale visible without making the first screen feel heavy.',
    mediaIndex: 0,
  },
  {
    eyebrow: '2023-06 to 2023-08 / Refinement',
    title: 'Search and density were tuned for real use.',
    copy:
      'Shared search logic, platform filtering, persistent ordering, and tighter spacing kept the interface usable as the catalogue grew. The goal was not more decoration. It was easier scanning.',
    mediaIndex: 2,
  },
  {
    eyebrow: '2024-08 / Editorial cleanup',
    title: 'Methodology wording got tighter, not louder.',
    copy:
      'Flat18’s later contribution was mainly editorial: clarifying verdict language and explaining obfuscated states more carefully without changing the visual frame.',
    mediaIndex: 3,
  },
]

const proofPoints = [
  {
    value: 'Thousands',
    label: 'Wallets reviewed',
    detail: 'The catalogue is large enough to need strong search and clear category grouping.',
  },
  {
    value: '17 tests',
    label: 'Security checks',
    detail: 'Each verdict stays tied to a named test instead of a single opaque score.',
  },
  {
    value: 'Methodology-led',
    label: 'Trust',
    detail: 'Review pages keep the explanation close to the result.',
  },
]

const featureCards = [
  {
    mediaIndex: 0,
    kicker: 'Homepage',
    title: 'Make the first screen work like a dashboard.',
    copy:
      'The home page now gives readers counts, category breakdowns, and search context before they start drilling into individual wallets.',
    ariaLabel: 'Open WalletScrutiny dashboard-style home page screenshot in viewer',
    large: true,
  },
  {
    mediaIndex: 2,
    kicker: 'Search',
    title: 'Keep filters visible as the dataset grows.',
    copy:
      'Search and category controls sit close to the content, which makes broad browsing less tiring and more deliberate.',
    ariaLabel: 'Open WalletScrutiny search and filters screenshot in viewer',
  },
  {
    mediaIndex: 3,
    kicker: 'Review pages',
    title: 'Put the method next to the result.',
    copy:
      'The Mycelium review page shows security context, methodology, and evidence together, which makes the verdict easier to trust.',
    ariaLabel: 'Open WalletScrutiny review detail screenshot in viewer',
  },
  {
    mediaIndex: 1,
    kicker: 'Foundation',
    title: 'Start with a clear front door.',
    copy:
      'The earliest redesign gave the site a branded entry point before the later dashboard work added more depth and structure.',
    ariaLabel: 'Open WalletScrutiny early directory screenshot in viewer',
  },
]

const galleryItems = [1, 2, 0, 3]

export default function WalletScrutinyCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Research evidence clarity</span>
              <h1
                className={styles.productHeroTitle}
                style={{ fontSize: 'clamp(2.7rem, 12vw, 8.5rem)', overflowWrap: 'anywhere' }}
              >
                Wallet<wbr />Scrutiny
              </h1>
              <p className={styles.productHeroSubtitle}>
                When wallet security evidence grows into a large catalogue, the risk is that readers cannot
                find the verdict or trust the method behind it. Flat18 refined WalletScrutiny's search,
                review pages and methodology presentation so people can move from summary to evidence quickly.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://walletscrutiny.com"
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
                aria-label="Open WalletScrutiny dashboard-style home page screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/walletscrutiny/2023-home.png"
                  alt="WalletScrutiny dashboard-style home page showing review counts, wallet categories, search, and methodology links"
                  width={1280}
                  height={3210}
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
            <h2>From a useful list to a research interface built for a large wallet dataset.</h2>
            <p>
              WalletScrutiny was never short on information. The challenge was to present a rich, changing catalogue
              in a way that stayed readable as the site grew. The visual redesign was led by <code>vswee</code>;
              Flat18 later tightened the methodology wording and verdict language.
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
              <h2>Designed around the moments where a dense dataset becomes hard to read.</h2>
            </div>
            <p>
              Each surface does one job: help the reader scan faster, stay in context, and move from summary to evidence
              without losing the thread.
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
                <h4>Who shaped the redesign</h4>
                <p>
                  <code>vswee</code> drove the visual redesign across the early and larger rebuilds. Flat18’s later
                  contribution was mainly editorial: tightening methodology wording and making the verdict language
                  easier to read.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: a large dataset needed a clearer front door</span>
                <span className={styles.metaItem}>Solution: dashboard-style hierarchy with explanation close to the verdict</span>
                <span className={styles.metaItem}>Outcome: faster scanning without losing evidence</span>
              </div>

              <p className={styles.caseStudyIntro}>
                WalletScrutiny needed to feel like a serious research product, not a long list of wallet names.
                Flat18 helped shape the later presentation so people can move from summary to evidence without losing
                confidence in what they are reading.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    The site had more evidence than the first screen could comfortably explain, especially once the
                    catalogue started to grow.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    Homepage hierarchy, search context, and review-page structure needed to do more of the work than a
                    simple list ever could.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    Wallet lists, category breakdowns, verdict labels, and methodology links were reorganised around
                    the dataset instead of around a marketing message.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Readers can scan faster and still move into the detail when they need it, which is the point of
                    the site.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Reframed the home page around counts, search, and categories</li>
                  <li>Kept verdicts tied to named tests and methodology, not a single score</li>
                  <li>Tuned spacing and density so long lists stayed readable on desktop and mobile</li>
                  <li>Clarified late methodology wording without changing the layout frame</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key ideas</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Search UX</span>
                  <span className={styles.chip}>Information design</span>
                  <span className={styles.chip}>Verdict language</span>
                  <span className={styles.chip}>Data density</span>
                  <span className={styles.chip}>Bitcoin security</span>
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
              <h2>Need a data-heavy site to read more clearly?</h2>
              <p>
                Flat18 can help shape the hierarchy, wording, and interaction model so a large catalogue still feels
                trustworthy.
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
