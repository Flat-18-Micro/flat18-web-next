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
    src: '/images/case-studies/world-earnings/01-take-home-laptop.png',
    alt: 'World Earnings take-home pay calculator displayed on a laptop',
    caption: 'Take-home calculator',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true,
  },
  {
    src: '/images/case-studies/world-earnings/02-salary-explorer-tablet.png',
    alt: 'World Earnings salary explorer displayed on a tablet',
    caption: 'Salary explorer',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    src: '/images/case-studies/world-earnings/03-rules-sources-devices.png',
    alt: 'World Earnings take-home and rule source views displayed across a laptop and tablet',
    caption: 'Rules and sources',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
]

const journeySteps = [
  {
    eyebrow: '01 / The gap',
    title: 'A salary figure is not the same as an answer.',
    copy: 'People moving between countries, considering a new role, or simply checking their pay are often left translating gross salary, tax bands, social contributions and local deductions on their own. The number that matters—what reaches them—stays frustratingly unclear.',
    image: mediaItems[0],
  },
  {
    eyebrow: '02 / The product shape',
    title: 'Make pay concrete before a decision has to be made.',
    copy: 'World Earnings puts country, residency, pay cadence and gross income beside a clear take-home result. A readable breakdown shows what is retained, what is deducted and which rule set shaped the estimate.',
    image: mediaItems[2],
  },
  {
    eyebrow: '03 / The trust layer',
    title: 'Treat the benchmark as research, not a black box.',
    copy: 'The salary explorer makes market data useful for a conversation while keeping its status visible. Freshness cues, cited sources and a separate rule trail make it easier to know what is current, directional or ready for a closer local review.',
    image: mediaItems[1],
  },
]

const proofPoints = [
  { value: '2', label: 'Decision views', detail: 'Take-home estimates and salary benchmarks meet distinct but connected questions.' },
  { value: '3', label: 'Trust signals', detail: 'Rule date, source trail and research status remain close to the result.' },
  { value: '1', label: 'Clearer number', detail: 'The product leads with what work pays, not only the headline salary.' },
]

export default function WorldEarningsCaseStudyPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () => setLightboxIndex((index) => (index === null ? index : (index - 1 + mediaItems.length) % mediaItems.length))
  const showNext = () => setLightboxIndex((index) => (index === null ? index : (index + 1) % mediaItems.length))

  return (
    <div className={`${styles.page} ${styles.productCasePage}`}>
      <section className={`${styles.hero} ${styles.productHero}`}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.productHeroGrid}>
            <div className={styles.productHeroContent}>
              <span className={styles.heroKicker}>Selected work / Global earnings clarity</span>
              <h1 className={styles.productHeroTitle}>World Earnings</h1>
              <p className={styles.productHeroSubtitle}>
                Headline salary is only part of the picture. World Earnings turns country rules, tax residency,
                pay cadence and market data into a calmer answer: what a role is likely to pay in practice,
                and what evidence sits behind the estimate.
              </p>
              <div className={styles.productHeroActions}>
                <a href="https://world-earnings.flat18.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View live product
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
              <button type="button" className={styles.productHeroImageButton} onClick={() => openLightbox(0)} aria-label="Open World Earnings take-home calculator mockup">
                <Image src={mediaItems[0].src} alt={mediaItems[0].alt} width={1586} height={992} sizes="(max-width: 768px) 100vw, 640px" className={styles.productHeroImage} priority />
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
            <h2>From a confusing gross number to a decision-ready view of work.</h2>
            <p>
              Flat18 framed World Earnings as a trust and interpretation problem, not just a calculator.
              The product has to make location-dependent rules legible without pretending a quick estimate is a replacement for professional local advice.
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
                <button type="button" className={styles.productJourneyImageButton} onClick={() => openLightbox(index === 0 ? 0 : index === 1 ? 2 : 1)} aria-label={`Open ${step.image.caption} mockup`}>
                  <Image src={step.image.src} alt={step.image.alt} width={index === 2 ? 1448 : 1586} height={index === 2 ? 1086 : 992} sizes="(max-width: 768px) 100vw, 520px" className={styles.productJourneyImage} />
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
              <h2>Designed around the questions people bring to a salary.</h2>
            </div>
            <p>
              Each view answers a different part of the same decision: what reaches the bank account, what the market may pay, and whether the data can be inspected.
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            <article className={`${styles.productFeatureCard} ${styles.productFeatureCardLarge}`}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => openLightbox(0)} aria-label="Open take-home calculator mockup">
                <Image src={mediaItems[0].src} alt={mediaItems[0].alt} fill sizes="(max-width: 768px) 100vw, 720px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Take-home pay</span>
                <h3>Move from gross pay to a useful estimate in one readable pass.</h3>
                <p>Country, residency, cadence and income stay visible alongside the take-home figure, deduction breakdown and rule set that informed it.</p>
              </div>
            </article>
            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => openLightbox(1)} aria-label="Open salary explorer mockup">
                <Image src={mediaItems[1].src} alt={mediaItems[1].alt} fill sizes="(max-width: 768px) 100vw, 420px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Salary explorer</span>
                <h3>Give negotiation a grounded starting point.</h3>
                <p>Sector, seniority and country produce a directional market range—enough context to frame a conversation without overstating precision.</p>
              </div>
            </article>
            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => openLightbox(2)} aria-label="Open rules and sources mockup">
                <Image src={mediaItems[2].src} alt={mediaItems[2].alt} fill sizes="(max-width: 768px) 100vw, 420px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Rule provenance</span>
                <h3>Keep the basis of an estimate close to the answer.</h3>
                <p>Source cards, rule dates and research freshness make uncertainty visible and help people decide when a local review is needed.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={`${styles.caseStudyGrid} ${styles.caseStudyGridReverse}`}>
            <div className={styles.caseStudyMedia}>
              <div className={styles.mediaGrid}>
                {mediaItems.map((item, index) => (
                  <article key={item.caption} className={`${styles.mediaItem} ${index === 0 ? styles.mediaPrimary : styles.mediaSecondary}`}>
                    <button type="button" className={styles.mediaButton} onClick={() => openLightbox(index)} aria-label={`Open ${item.caption} mockup`}>
                      <Image src={item.src} alt={item.alt} fill sizes={item.sizes} className={styles.mediaImage} />
                      <span className={styles.mediaButtonHint}>Open</span>
                    </button>
                    <span className={styles.mediaCaption}>{item.caption}</span>
                  </article>
                ))}
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Delivered for understanding</h4>
                <p>A practical money layer that shows the estimate, its inputs, and the research context people need to use it sensibly.</p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live product</span>
                <span className={styles.metaItem}>Diagnosis: global pay is hard to interpret</span>
                <span className={styles.metaItem}>Solution: explainable earnings workspace</span>
                <span className={styles.metaItem}>Outcome: better-informed choices</span>
              </div>
              <p className={styles.caseStudyIntro}>
                World Earnings turns a messy financial question into a clear, product-led interaction. Flat18 shaped the product narrative, interface, estimation logic, research refresh model, sources and responsive launch experience.
              </p>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}><h3>Problem found</h3><p>Gross pay is easy to quote but difficult to compare across tax rules, residency status, deductions and local market context.</p></div>
                <div className={styles.infoCard}><h3>Flat18 diagnosis</h3><p>Users need a confident first estimate, but the interface must also expose what changes the result and where the information came from.</p></div>
                <div className={styles.infoCard}><h3>Solution shipped</h3><p>A focused take-home calculator, salary explorer and rule-source trail designed as one calm decision surface.</p></div>
                <div className={styles.infoCard}><h3>Customer value</h3><p>People can start a relocation, offer or pay conversation with clearer expectations and a visible route to deeper review.</p></div>
              </div>
              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Defined the product around the difference between gross salary and usable take-home pay</li>
                  <li>Designed inputs and results to keep country-specific assumptions visible, not buried</li>
                  <li>Separated tax-rule freshness from salary-benchmark freshness so each can be understood on its own terms</li>
                  <li>Created a source trail that supports better decisions without presenting estimates as guarantees</li>
                </ul>
              </div>
              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vue 3</span><span className={styles.chip}>Vite</span><span className={styles.chip}>Vercel Functions</span><span className={styles.chip}>Neon Postgres</span><span className={styles.chip}>Mistral research</span>
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
              <h2>Need to make a complicated decision easier to trust?</h2>
              <p>Flat18 can turn difficult data, rules and comparisons into a polished product experience people can understand and act on.</p>
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
      <CaseStudyLightbox images={mediaItems} activeIndex={lightboxIndex} onClose={closeLightbox} onNext={showNext} onPrev={showPrev} />
    </div>
  )
}
