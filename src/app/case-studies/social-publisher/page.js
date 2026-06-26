'use client'
import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import CaseStudyMediaFlow from '@/components/CaseStudyMediaFlow'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'
import brandStyles from '@/styles/component-css/CaseStudyBrandAssets.module.css'
import { socialPublisherBrandAssets } from '@/lib/social-publisher-assets'

const mediaItems = [
  {
    src: '/images/case-studies/social-publisher/01-dashboard-overview-dark.png',
    lightSrc: '/images/case-studies/social-publisher/01-dashboard-overview-dark.png',
    alt: 'Social Publisher dashboard showing publishing volume, upcoming queue, and channel health',
    caption: 'Workspace dashboard',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true
  },
  {
    src: '/images/case-studies/social-publisher/00-live-home.png',
    lightSrc: '/images/case-studies/social-publisher/00-live-home.png',
    alt: 'Social Publisher product homepage with hero, pricing, and product screenshot',
    caption: 'Live product homepage',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/social-publisher/02-compose-validation-preview-dark.png',
    lightSrc: '/images/case-studies/social-publisher/02-compose-validation-preview-dark.png',
    alt: 'Social Publisher compose screen with per-platform previews and validation checks',
    caption: 'Compose, preview, validate',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/social-publisher/03-calendar-scheduling-dark.png',
    lightSrc: '/images/case-studies/social-publisher/03-calendar-scheduling-dark.png',
    alt: 'Social Publisher calendar showing posts scheduled across a working week',
    caption: 'Calendar scheduling',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/social-publisher/04-channels-logs-status-dark.png',
    lightSrc: '/images/case-studies/social-publisher/04-channels-logs-status-dark.png',
    alt: 'Social Publisher channels, publishing logs, retry handling, and system status screens',
    caption: 'Channels, logs, status',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const journeySteps = [
  {
    eyebrow: '01 / Friction',
    title: 'Publishing work was scattered across too many places.',
    copy: 'Small teams were planning campaigns in calendars, writing drafts in separate tools, adapting copy manually for each channel, and checking limits only when something was about to go out.',
    image: '/images/case-studies/social-publisher/00-live-home.png',
    alt: 'Social Publisher homepage used to frame the product opportunity'
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We turned the mess into one operational loop.',
    copy: 'The workflow became channel connection, base post, platform variants, validation, preview, calendar scheduling, queue dispatch, logs, and retry visibility. Boring in the best possible way.',
    image: '/images/case-studies/social-publisher/02-compose-validation-preview-dark.png',
    alt: 'Composer showing base post, platform previews, and validation checks'
  },
  {
    eyebrow: '03 / Reliability',
    title: 'The final product shows what is ready, queued, published, or failing.',
    copy: 'Instead of hiding the hard parts, Social Publisher makes channel health, entitlement limits, queue confidence, dispatch logs, and retry states visible before mistakes reach the customer.',
    image: '/images/case-studies/social-publisher/04-channels-logs-status-dark.png',
    alt: 'Channels and logs screen showing publishing status and retry handling'
  }
]

const proofPoints = [
  {
    value: '4+',
    label: 'Channel types planned',
    detail: 'Bluesky, X, LinkedIn, Google Business Profile and room for more.'
  },
  {
    value: '98%',
    label: 'Queue confidence modelled',
    detail: 'Validation, auth checks, quota signals and retry states surfaced before dispatch.'
  },
  {
    value: 'BYO AI',
    label: 'Controlled assistance',
    detail: 'AI support framed around user-owned provider keys and predictable cost control.'
  }
]

const brandAssets = [
  {
    label: 'Open Graph',
    title: 'Share image',
    copy: 'Use this for link previews, social posts and case-study cards where the full brand treatment needs to hold up.',
    src: socialPublisherBrandAssets.ogShare,
    alt: 'Social Publisher Open Graph share image',
    width: 1200,
    height: 630,
    sizes: '(max-width: 768px) 100vw, 48vw',
    previewClassName: brandStyles.brandAssetPreviewWide,
  },
  {
    label: 'Icon',
    title: 'App icon',
    copy: 'Use this in tight spaces such as featured work tiles and app-style surfaces where the wordmark would not fit.',
    src: socialPublisherBrandAssets.appIcon,
    alt: 'Social Publisher app icon',
    width: 512,
    height: 512,
    sizes: '(max-width: 768px) 100vw, 320px',
    previewClassName: brandStyles.brandAssetPreviewSquare,
    cardClassName: brandStyles.brandAssetCardCompact,
  },
]

export default function SocialPublisherCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Publishing operations friction</span>
              <h1 className={styles.productHeroTitle}>Social Publisher</h1>
              <p className={styles.productHeroSubtitle}>
                When small teams publish across channels, calendars, media folders and approval checks, the
                risk is missed limits, unclear queues and launch-week rework. Flat18 built Social Publisher
                around channel connection, variants, validation, scheduling and logs so teams can trust what
                is ready and what has shipped.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href="https://social-publisher.flat18.app"
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
                aria-label="Open Social Publisher dashboard screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/social-publisher/01-dashboard-overview-dark.png"
                  alt="Social Publisher dashboard overview with publishing volume, channel health, and upcoming queue"
                  width={1440}
                  height={1100}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Live beta</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From scattered publishing chores to a structured product workflow.</h2>
            <p>
              Flat18 approached Social Publisher as an operations problem first and a UI problem second.
              The product needed to help teams prepare better posts, understand platform constraints, and trust
              what happened after scheduling.
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
                  onClick={() => openLightbox(index === 0 ? 1 : index === 1 ? 2 : 4)}
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
              <h2>Designed around the moments where publishing usually breaks.</h2>
            </div>
            <p>
              The interface is not just a prettier scheduler. Each surface exposes a different failure point:
              unclear channel state, platform-specific limits, weak review context, and invisible dispatch results.
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            <article className={`${styles.productFeatureCard} ${styles.productFeatureCardLarge}`}>
              <button
                type="button"
                className={styles.productFeatureImageButton}
                onClick={() => openLightbox(2)}
                aria-label="Open compose and validation screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/social-publisher/02-compose-validation-preview-dark.png"
                  alt="Compose interface with base post, platform previews, and validation checks"
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Compose</span>
                <h3>Write once, adapt per network, catch issues early.</h3>
                <p>
                  The composer keeps the base post, platform-specific previews, media choices, authorisation state,
                  daily quota and text limits visible before anything enters the queue.
                </p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button
                type="button"
                className={styles.productFeatureImageButton}
                onClick={() => openLightbox(3)}
                aria-label="Open calendar scheduling screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/social-publisher/03-calendar-scheduling-dark.png"
                  alt="Weekly calendar view with posts scheduled across multiple platforms"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Calendar</span>
                <h3>Make the queue readable.</h3>
                <p>Teams can review what is going out, where it is going, and what still needs attention.</p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button
                type="button"
                className={styles.productFeatureImageButton}
                onClick={() => openLightbox(4)}
                aria-label="Open channels logs and status screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/social-publisher/04-channels-logs-status-dark.png"
                  alt="Channels, logs, retries, and status overview"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Reliability</span>
                <h3>Show failures before they become mysteries.</h3>
                <p>Logs, retries, channel profiles and system status make dispatch easier to inspect and support.</p>
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
              The case study now includes the social share image and the compact app icon, so the product can be shown
              clearly on link previews, tiles and other small surfaces.
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
              <div className={styles.mediaGrid}>
                <CaseStudyMediaFlow
                  items={mediaItems}
                  onOpen={openLightbox}
                  ariaLabel="Social Publisher screenshot carousel"
                />
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Delivered for confidence</h4>
                <p>
                  Dashboard state, channel health, validation feedback, logs, and retry visibility
                  make the publishing pipeline easier to inspect before and after dispatch.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live beta</span>
                <span className={styles.metaItem}>Diagnosis: fragmented publishing operations</span>
                <span className={styles.metaItem}>Solution: structured scheduling workspace</span>
                <span className={styles.metaItem}>Outcome: calmer content execution</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Social Publisher became a case study in turning repeatable creative work into a dependable product system.
                Flat18 handled the product framing, interface design, workflow logic, queue model, validation rules, and
                launch-facing marketing experience.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Lean teams often manage posts across drafts, platform tabs, calendars, media folders,
                    AI tools, account credentials, and manual reminders.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The product needed to make platform differences visible before scheduling and make queue
                    health visible after dispatch.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We designed a workspace for connected channels, base posts, per-platform variants,
                    validation, previews, calendar scheduling, logs, retries, and BYO AI.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Small teams can run content with clearer ownership, fewer avoidable mistakes,
                    and a practical record of what is ready, queued, published, or failed.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Mapped the operational loop from channel connection to draft, validation, schedule, dispatch, and logs</li>
                  <li>Made platform differences explicit through variants, previews, and early validation checks</li>
                  <li>Designed dashboard and calendar surfaces that show publishing state, not just reminders</li>
                  <li>Framed BYO AI support around predictable costs and user control over providers</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vue 3</span>
                  <span className={styles.chip}>Vite</span>
                  <span className={styles.chip}>Cloudflare Pages</span>
                  <span className={styles.chip}>Workers + Queues</span>
                  <span className={styles.chip}>Neon Postgres</span>
                  <span className={styles.chip}>Cloudflare R2</span>
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
              <h2>Need a product workflow this controlled?</h2>
              <p>
                Flat18 can turn repeatable customer operations into a polished, inspectable product with the
                right interface, queue logic, validation, logs, and launch path.
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
