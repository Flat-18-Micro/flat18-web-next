'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'
import brandStyles from '@/styles/component-css/CaseStudyBrandAssets.module.css'
import mediaFlowStyles from '@/styles/component-css/CaseStudyMediaFlow.module.css'
import { ledgerBrandAssets } from '@/lib/ledger-assets'

const mediaItems = [
  {
    src: '/images/case-studies/ledger/01-landing-page-dark.png',
    lightSrc: '/images/case-studies/ledger/01-landing-page-dark.png',
    alt: 'Ledger landing page showing the product positioning for simple shared money records',
    caption: 'Product landing page',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true
  },
  {
    src: '/images/case-studies/ledger/07-list-mockup-dark.png',
    lightSrc: '/images/case-studies/ledger/07-list-mockup-dark.png',
    alt: 'Ledger list screen showing purpose-built ledgers for different money records',
    caption: 'Ledger list',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/ledger/08-detail-mockup-dark.png',
    lightSrc: '/images/case-studies/ledger/08-detail-mockup-dark.png',
    alt: 'Ledger detail screen showing entries, balance, and receipt-assisted quick entry',
    caption: 'Ledger detail workflow',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/ledger/09-report-mockup-dark.png',
    lightSrc: '/images/case-studies/ledger/09-report-mockup-dark.png',
    alt: 'Ledger report view showing filtered spending and balance summaries',
    caption: 'Filtered reports',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/ledger/10-sharing-mockup-dark.png',
    lightSrc: '/images/case-studies/ledger/10-sharing-mockup-dark.png',
    alt: 'Ledger sharing settings showing read-only public link controls',
    caption: 'Controlled sharing',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/ledger/11-public-mockup-dark.png',
    lightSrc: '/images/case-studies/ledger/11-public-mockup-dark.png',
    alt: 'Ledger public read-only view for sharing a trusted money record',
    caption: 'Public read-only view',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const journeySteps = [
  {
    eyebrow: '01 / Trust gap',
    title: 'Informal money records were too fragile for the conversations they supported.',
    copy: 'Loans, shared costs, project spending, household bills, and trip budgets often live across screenshots, bank app notes, receipts, chat history, and memory. That is fine until someone needs proof, context, or a calm answer.',
    image: '/images/case-studies/ledger/01-landing-page-dark.png',
    alt: 'Ledger landing page framing the problem of trusted shared money records'
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We designed ledgers around real-life money situations, not accounting jargon.',
    copy: 'Each ledger became a focused record with the right labels, fast entry, receipts, notes, categories, balance state, and reports. The app had to feel quicker than a spreadsheet and less dramatic than a group chat argument about who paid for petrol.',
    image: '/images/case-studies/ledger/07-list-mockup-dark.png',
    alt: 'Ledger list showing different record types and balances'
  },
  {
    eyebrow: '03 / Confidence layer',
    title: 'The final workflow makes private context and public proof coexist.',
    copy: 'Ledger separates private notes from shareable facts, preserves edit context, supports filtered reports, and lets users publish a read-only view when the record needs to be trusted without exposing everything.',
    image: '/images/case-studies/ledger/10-sharing-mockup-dark.png',
    alt: 'Ledger sharing controls for read-only public records'
  }
]

const proofPoints = [
  {
    value: '5+',
    label: 'Record types',
    detail: 'Loans, trips, households, projects, shared costs, and everyday balances.'
  },
  {
    value: 'OCR',
    label: 'Receipt assistance',
    detail: 'Entry support for amount, date, vendor, and line-item context when receipts matter.'
  },
  {
    value: 'Read-only',
    label: 'Shareable proof',
    detail: 'Public links keep the useful record visible while protecting private notes.'
  }
]

const brandAssets = [
  {
    label: 'Open Graph',
    title: 'Share image',
    copy: 'Use this for link previews, social posts and case-study cards where the full layout needs to stay legible.',
    src: ledgerBrandAssets.ogShare,
    alt: 'Ledger Open Graph share image',
    width: 1200,
    height: 630,
    sizes: '(max-width: 768px) 100vw, 48vw',
    previewClassName: brandStyles.brandAssetPreviewWide,
  },
  {
    label: 'Icon',
    title: 'App icon',
    copy: 'Use this in tight spaces such as featured work tiles and app-style surfaces where the mark needs to stay clear.',
    src: ledgerBrandAssets.appIcon,
    alt: 'Ledger app icon',
    width: 512,
    height: 512,
    sizes: '(max-width: 768px) 100vw, 320px',
    previewClassName: brandStyles.brandAssetPreviewSquare,
    cardClassName: brandStyles.brandAssetCardCompact,
  },
]

export default function LedgerCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Informal money trust</span>
              <h1 className={styles.productHeroTitle}>Ledger</h1>
              <p className={styles.productHeroSubtitle}>
                When people track loans, shared costs and receipts across messages, bank notes and memory,
                the risk is a balance no one can explain. Flat18 shaped Ledger around focused records,
                evidence and sharing controls so people can settle money with less doubt.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://ledger.flat18.app"
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
                onClick={() => openLightbox(0)}
                aria-label="Open Ledger product landing page screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/ledger/01-landing-page-dark.png"
                  alt="Ledger landing page showing the product positioning for simple shared money records"
                  width={1280}
                  height={1075}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
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
            <h2>From messy shared expenses to a product built around trust.</h2>
            <p>
              Flat18 approached Ledger as a trust and clarity problem. The interface needed to make
              informal money records easier to create, easier to explain, and safer to share without
              dragging users into full accounting software.
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
                  onClick={() => openLightbox(index === 0 ? 0 : index === 1 ? 1 : 4)}
                  aria-label={`Open ${step.alt} in viewer`}
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
              <h2>Designed around the moments where informal records usually fail.</h2>
            </div>
            <p>
              Ledger is not a mini accounting suite wearing a fake moustache. Each surface supports a
              real trust moment: creating the record, proving what happened, summarising the balance,
              and sharing the version other people need to see.
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            <article className={`${styles.productFeatureCard} ${styles.productFeatureCardLarge}`}>
              <button
                type="button"
                className={styles.productFeatureImageButton}
                onClick={() => openLightbox(2)}
                aria-label="Open Ledger detail workflow screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/ledger/08-detail-mockup-dark.png"
                  alt="Ledger detail screen with entries, balance, and receipt-assisted quick entry"
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Detail workflow</span>
                <h3>Fast entries when speed matters, richer context when trust matters.</h3>
                <p>
                  The detail view keeps the balance, entries, private context, categories, receipt evidence,
                  and correction history close to the record instead of scattering it across tools.
                </p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button
                type="button"
                className={styles.productFeatureImageButton}
                onClick={() => openLightbox(3)}
                aria-label="Open Ledger report screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/ledger/09-report-mockup-dark.png"
                  alt="Ledger report view with filtered spending summary"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Reports</span>
                <h3>Answer practical questions quickly.</h3>
                <p>Users can filter by date, category, and search text without pretending they are running an accounts department.</p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button
                type="button"
                className={styles.productFeatureImageButton}
                onClick={() => openLightbox(5)}
                aria-label="Open Ledger public read-only view screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/ledger/11-public-mockup-dark.png"
                  alt="Ledger public read-only view for sharing a trusted record"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Public proof</span>
                <h3>Share the useful record, not the private mess.</h3>
                <p>Read-only links let a ledger become evidence while keeping sensitive notes and edit context under control.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={brandStyles.brandAssetsSection} id="brand-assets">
        <div className={styles.container}>
          <div className={brandStyles.brandAssetsHeader}>
            <div>
              <span className={styles.caseStudyTag}>Brand assets</span>
              <h2>Share-ready art and compact iconography.</h2>
            </div>
            <p>
              Ledger now has a dedicated share image and app icon, so the product stays readable on link
              previews, work tiles and smaller app surfaces.
            </p>
          </div>

          <div className={brandStyles.brandAssetGrid}>
            {brandAssets.map((asset) => (
              <article
                key={asset.title}
                className={`${brandStyles.brandAssetCard} ${asset.cardClassName || ''}`}
              >
                <div className={`${brandStyles.brandAssetPreview} ${asset.previewClassName}`}>
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    fill
                    sizes={asset.sizes}
                    className={brandStyles.brandAssetImage}
                  />
                </div>
                <div className={brandStyles.brandAssetCopy}>
                  <span>{asset.label}</span>
                  <h3>{asset.title}</h3>
                  <p>{asset.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={`${styles.caseStudyGrid} ${styles.caseStudyGridReverse}`}>
            <div className={styles.caseStudyMedia}>
              <div className={`${styles.mediaGrid} ${mediaFlowStyles.mediaGridFlow}`}>
                {mediaItems.map((item, index) => (
                  <figure
                    key={item.src}
                    style={{ ['--media-tile-bg']: `url("${item.src}")` }}
                    className={`${styles.mediaItem} ${item.isPrimary ? styles.mediaPrimary : styles.mediaSecondary} ${mediaFlowStyles.mediaFlowItem} ${item.isPrimary ? mediaFlowStyles.mediaFlowPrimary : mediaFlowStyles.mediaFlowSecondary}`}
                  >
                    <button
                      type="button"
                      className={`${styles.mediaButton} ${mediaFlowStyles.mediaFlowButton}`}
                      onClick={() => openLightbox(index)}
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
                ))}
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Delivered for confidence</h4>
                <p>
                  Ledger keeps balances, entries, receipt evidence, private notes, reports, and public
                  sharing controls in one understandable workflow.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: informal money records break trust</span>
                <span className={styles.metaItem}>Solution: purpose-built ledgers</span>
                <span className={styles.metaItem}>Outcome: clear shared balances</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Ledger turns sensitive, everyday money situations into clear records. Flat18 handled the
                product framing, interface design, ledger workflows, receipt-assisted entry model, reporting
                surfaces, privacy boundaries, and shareable public views.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Informal balances get split across messages, banking apps, receipts, screenshots,
                    and memory, which makes sensitive money conversations harder.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    Users needed a shared factual record, not accounting concepts. The product had to feel
                    as quick as a note and more trustworthy than a spreadsheet.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We designed ledgers with type-specific labels, fast entries, optional receipt detail,
                    preserved edit context, useful reports, and read-only sharing.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    People can explain what happened, when it happened, what evidence supports it, and
                    what the balance is now without exposing private notes.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Translated everyday money tracking into plain-language workflows for real-life situations</li>
                  <li>Kept quick entry simple while allowing detail when receipts or context matter</li>
                  <li>Designed trust features around private notes, correction context, and read-only sharing</li>
                  <li>Built reporting around practical questions instead of finance jargon</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Purpose-built ledgers for loans, budgets, trips, households, and project spending</li>
                  <li>Fast entry with amount, direction, date, description, vendor, and category</li>
                  <li>Receipt upload with OCR-assisted amount, date, vendor, and line-item suggestions</li>
                  <li>Reports filtered by date, category, and search text</li>
                  <li>Read-only public links with private-note controls</li>
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
              <h2>Need a trust-sensitive workflow made clear?</h2>
              <p>
                Flat18 can turn messy records, shared decisions, and sensitive operational workflows into
                polished products people can inspect, explain, and trust.
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
