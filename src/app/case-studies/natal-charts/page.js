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
    src: '/images/case-studies/natal-charts/01-landing.png',
    alt: 'Natal Charts Generator landing screen with birth data form and chart preview panel',
    caption: 'Product landing screen',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true
  },
  {
    src: '/images/case-studies/natal-charts/02-loaded-top.png',
    alt: 'Loaded natal chart overview showing birth info, simple chart summary, and share actions',
    caption: 'Loaded chart summary',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/natal-charts/01-chart-overview.png',
    alt: 'Natal chart wheel with placements, houses, aspects, and key planetary data',
    caption: 'Chart wheel and placements',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/natal-charts/03-partner-modal.png',
    alt: 'Partner birth data modal for relationship chart comparison',
    caption: 'Partner intake modal',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/natal-charts/04-compatibility-overview.png',
    alt: 'Compatibility overview showing relationship score bars and partner comparison summary',
    caption: 'Compatibility overview',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/natal-charts/05-relationship-details.png',
    alt: 'Relationship details view showing category scores and synastry aspect filtering',
    caption: 'Relationship details',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/natal-charts/06-composite-chart.png',
    alt: 'Composite chart view showing wheel, placements, and key aspects',
    caption: 'Composite chart',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/natal-charts/07-about-modal.png',
    alt: 'About modal explaining chart accuracy, method, Swiss Ephemeris, and interpretive limits',
    caption: 'Accuracy and method',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/natal-charts/08-privacy-modal.png',
    alt: 'Privacy modal explaining local chart generation and limited geocoding data use',
    caption: 'Privacy explanation',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/natal-charts/09-mobile-main.png',
    alt: 'Mobile Natal Charts Generator view with birth info and simple chart summary',
    caption: 'Mobile chart view',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const journeySteps = [
  {
    eyebrow: '01 / Dense inputs',
    title: 'Astrology tools usually make users wrestle the machinery before seeing the result.',
    copy: 'Birth date, exact time, birthplace, coordinates, house systems, time-zone conversion, privacy questions and chart methods all arrive before the user understands whether the product is worth trusting.',
    image: '/images/case-studies/natal-charts/01-landing.png',
    alt: 'Natal Charts landing screen showing the birth data form and chart preview'
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We turned technical calculation into a guided, progressive chart journey.',
    copy: 'The app starts with the simple chart, then lets users move into placements, houses, aspects, transits, compatibility, synastry and composite chart detail only when those layers are useful.',
    image: '/images/case-studies/natal-charts/02-loaded-top.png',
    alt: 'Loaded natal chart summary with simple chart and share actions'
  },
  {
    eyebrow: '03 / Trust layer',
    title: 'The finished product explains what is exact, what is interpretive, and what stays private.',
    copy: 'Calculation accuracy, Swiss Ephemeris use, local browser generation, geocoding boundaries and interpretive limits are separated from the main flow so the product feels clear instead of evasive.',
    image: '/images/case-studies/natal-charts/07-about-modal.png',
    alt: 'About modal explaining calculation method and chart accuracy'
  }
]

const proofPoints = [
  {
    value: 'Swiss',
    label: 'Ephemeris engine',
    detail: 'Browser-based calculation with placements, houses, aspects, angles and retrogrades.'
  },
  {
    value: 'Synastry',
    label: 'Relationship layer',
    detail: 'Partner intake, compatibility scores, aspect filtering and composite chart outputs.'
  },
  {
    value: 'Local-first',
    label: 'Privacy framing',
    detail: 'Birth details and chart results are not stored by the app; geocoding is explained plainly.'
  }
]

export default function NatalChartsCaseStudyPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + mediaItems.length) % mediaItems.length))
  const showNext = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % mediaItems.length))

  return (
    <div className={`${styles.page} ${styles.productCasePage}`}>
      <section className={`${styles.hero} ${styles.productHero}`}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.productHeroGrid}>
            <div className={styles.productHeroContent}>
              <span className={styles.heroKicker}>Case study / Data visualisation</span>
              <h1 className={styles.productHeroTitle}>Natal Charts</h1>
              <p className={styles.productHeroSubtitle}>
                A browser-based natal chart product that turns birth data, ephemeris calculation,
                relationship scoring, chart interpretation, privacy guidance, and shareable outputs into
                a clear guided experience.
              </p>
              <div className={styles.productHeroActions}>
                <a href="https://natal-chart.flat18.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View live demo
                </a>
                <a href="#story" className="btn btn-secondary">Read the build story</a>
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
              <button type="button" className={styles.productHeroImageButton} onClick={() => openLightbox(0)}>
                <Image
                  src="/images/case-studies/natal-charts/01-landing.png"
                  alt="Natal Charts Generator landing screen with birth data form and chart preview panel"
                  width={1280}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Open source</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From specialist calculation to a product ordinary users can actually read.</h2>
            <p>
              Flat18 treated Natal Charts as a translation problem. The calculation layer needed to stay
              technically sound, while the interface needed to reveal the output progressively, explain
              what users were seeing, and avoid making astrology look like a spreadsheet wearing perfume.
            </p>
          </div>

          <div className={styles.productJourneyGrid}>
            {journeySteps.map((step, index) => (
              <article key={step.title} className={styles.productJourneyCard}>
                <div className={styles.productJourneyCopy}>
                  <span>{step.eyebrow}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
                <button
                  type="button"
                  className={styles.productJourneyImageButton}
                  onClick={() => openLightbox(index === 0 ? 0 : index === 1 ? 1 : 7)}
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className={styles.productJourneyImage}
                  />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.productShowcaseSection}>
        <div className={styles.container}>
          <div className={styles.productShowcaseHeader}>
            <div>
              <span className={styles.caseStudyTag}>Product surfaces</span>
              <h2>Designed around the moments where complex chart tools usually lose people.</h2>
            </div>
            <p>
              The product separates input, summary, technical chart detail, relationship comparison,
              explainers, privacy notes, and mobile sharing into surfaces with distinct jobs.
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            <article className={`${styles.productFeatureCard} ${styles.productFeatureCardLarge}`}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => openLightbox(2)}>
                <Image
                  src="/images/case-studies/natal-charts/01-chart-overview.png"
                  alt="Natal chart wheel with placements, houses, aspects, and key planetary data"
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Chart detail</span>
                <h3>Keep the technical layer inspectable without letting it dominate the product.</h3>
                <p>
                  Placements, houses, angles, retrogrades, aspect types, chart wheel data, and key aspects
                  stay available for users who want depth, while the page still begins with a readable summary.
                </p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => openLightbox(4)}>
                <Image
                  src="/images/case-studies/natal-charts/04-compatibility-overview.png"
                  alt="Compatibility overview with partner scores and comparison summary"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Compatibility</span>
                <h3>Turn relationship analysis into a guided comparison.</h3>
                <p>
                  Partner intake, score categories, aspect evidence, and composite chart detail create a
                  fuller journey than a single vague compatibility number.
                </p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => openLightbox(8)}>
                <Image
                  src="/images/case-studies/natal-charts/08-privacy-modal.png"
                  alt="Privacy modal explaining local chart generation and limited geocoding use"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Trust explainers</span>
                <h3>Explain the sensitive parts before users have to worry about them.</h3>
                <p>
                  Privacy, local processing, geocoding, calculation accuracy, and interpretive limits are
                  written into the product rather than buried in some ceremonial legal swamp.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: specialist data was too dense</span>
                <span className={styles.metaItem}>Solution: guided chart generation</span>
                <span className={styles.metaItem}>Outcome: shareable interpretation</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Natal Charts turns dense astrological calculation into a calmer product journey. Flat18
                handled the product framing, calculation workflow, intake design, chart hierarchy,
                relationship comparison, trust explainers, mobile presentation, and export/share surfaces.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Natal chart tools must coordinate birthplace lookup, time zones, house systems,
                    planetary positions, aspects, relationship methods, and readable explanations.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The value was hidden by density. Users needed trusted inputs first, a simple chart
                    summary next, and deeper comparison data only when useful.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We shaped a browser workflow for geocoding, Swiss Ephemeris calculation, chart
                    summaries, relationship scores, synastry, composite charts, and shareable outputs.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Users can explore a complex symbolic system, understand the key takeaways, inspect
                    the supporting data, and share a polished chart result.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Mapped birth details, location, time-zone handling, and house systems into a guided intake flow</li>
                  <li>Prioritised simple chart summary, chart wheel, placements, houses, and aspect data progressively</li>
                  <li>Designed relationship scoring with partner intake, category explanations, and inspectable synastry aspects</li>
                  <li>Separated calculation method, privacy guidance, interpretation notes, and share actions into clear surfaces</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Reusable pattern</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Specialist calculators</span>
                  <span className={styles.chip}>Guided intake</span>
                  <span className={styles.chip}>Data visualisation</span>
                  <span className={styles.chip}>Comparison tools</span>
                  <span className={styles.chip}>Trust explainers</span>
                  <span className={styles.chip}>Shareable outputs</span>
                </div>
              </div>
            </div>

            <div className={styles.caseStudyMedia}>
              <div className={styles.mediaGrid}>
                {mediaItems.map((item, index) => (
                  <figure key={item.src} className={`${styles.mediaItem} ${item.isPrimary ? styles.mediaPrimary : styles.mediaSecondary}`}>
                    <button type="button" className={styles.mediaButton} onClick={() => openLightbox(index)}>
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
                ))}
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Delivered for confidence</h4>
                <p>
                  The app keeps calculation, interpretation, comparison, privacy, and sharing distinct
                  enough for users to understand what is exact, what is contextual, and what is optional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Need specialist logic turned into a product people understand?</h2>
              <p>
                Flat18 can turn dense calculations, niche data, comparison workflows, and trust-sensitive
                outputs into polished products with clear journeys and usable explanations.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="#chat" className="btn btn-primary">Chat with us</a>
              <a href="mailto:hello@flat18.co.uk" className="btn btn-secondary">Email hello@flat18.co.uk</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <CaseStudyLightbox
        images={mediaItems}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrev={showPrev}
      />
    </div>
  )
}