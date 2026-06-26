'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'
import brandStyles from '@/styles/component-css/CaseStudyBrandAssets.module.css'
import { workoutsBrandAssets } from '@/lib/workouts-assets'

const mediaItems = [
  {
    src: '/images/case-studies/workouts/01-dashboard.png',
    lightSrc: '/images/case-studies/workouts/01-dashboard.png',
    alt: 'Workouts dashboard showing training summary, weekly plan, and next-session guidance',
    caption: 'Training dashboard',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true
  },
  {
    src: '/images/case-studies/workouts/06-onboarding.png',
    lightSrc: '/images/case-studies/workouts/06-onboarding.png',
    alt: 'Workouts onboarding flow collecting goals, experience, availability, and training preferences',
    caption: 'Guided onboarding',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/workouts/02-plan.png',
    lightSrc: '/images/case-studies/workouts/02-plan.png',
    alt: 'Workouts plan screen showing a structured weekly programme and recommended training days',
    caption: 'Weekly plan',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/workouts/03-workout.png',
    lightSrc: '/images/case-studies/workouts/03-workout.png',
    alt: 'Workouts session screen showing exercises, sets, reps, weights, and workout logging controls',
    caption: 'Session logging',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/workouts/05-progress-dashboard.png',
    lightSrc: '/images/case-studies/workouts/05-progress-dashboard.png',
    alt: 'Workouts progress dashboard showing adherence, effort, volume, and coaching signals',
    caption: 'Progress dashboard',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/workouts/07-library.png',
    lightSrc: '/images/case-studies/workouts/07-library.png',
    alt: 'Workouts exercise library with searchable movements, muscles, equipment, and skill-level filters',
    caption: 'Exercise library',
    sizes: '(max-width: 768px) 100vw, 320px'
  },
  {
    src: '/images/case-studies/workouts/07-mobile-plan.png',
    lightSrc: '/images/case-studies/workouts/07-mobile-plan.png',
    alt: 'Workouts mobile plan view showing a compact training schedule for gym use',
    caption: 'Mobile plan view',
    sizes: '(max-width: 768px) 100vw, 320px'
  }
]

const journeySteps = [
  {
    eyebrow: '01 / Planning friction',
    title: 'Most training apps ask users to make too many decisions at the worst possible time.',
    copy: 'People arrive at the gym tired, rushed, distracted, or wildly optimistic. The product needed to reduce choice overload without trapping users in a rigid plan.',
    image: '/images/case-studies/workouts/06-onboarding.png',
    alt: 'Workouts onboarding flow used to shape training recommendations'
  },
  {
    eyebrow: '02 / Product shape',
    title: 'We turned profile inputs into a practical weekly training system.',
    copy: 'Goals, experience, availability, equipment, intensity and recovery context became a guided path into recommended splits, generated workout days, quick sessions, and plan adjustments.',
    image: '/images/case-studies/workouts/02-plan.png',
    alt: 'Workouts weekly plan screen showing structured training days'
  },
  {
    eyebrow: '03 / Feedback loop',
    title: 'The final product connects planning, logging, recovery, and progress into one loop.',
    copy: 'Workouts keeps today’s session, set logging, exercise alternatives, recovery warnings, adherence, volume and progress signals close together so users can see what to do next.',
    image: '/images/case-studies/workouts/05-progress-dashboard.png',
    alt: 'Workouts progress dashboard showing adherence and training signals'
  }
]

const proofPoints = [
  {
    value: '100+',
    label: 'Exercise library',
    detail: 'Searchable movements by equipment, muscle group, pattern, and skill level.'
  },
  {
    value: 'Split-aware',
    label: 'Plan generation',
    detail: 'Upper/lower, PPL, full-body, and flexible weekly structures based on availability.'
  },
  {
    value: 'Recovery',
    label: 'Training context',
    detail: 'Recent work and effort signals inform quick sessions and next-workout guidance.'
  }
]

const brandAssets = [
  {
    label: 'Open Graph',
    title: 'Share image',
    copy: 'Use this for link previews, social posts and case-study cards where the full workout layout needs to stay readable.',
    src: workoutsBrandAssets.ogShare,
    alt: 'Workouts Open Graph share image',
    width: 1200,
    height: 630,
    sizes: '(max-width: 768px) 100vw, 48vw',
    previewClassName: brandStyles.brandAssetPreviewWide,
  },
  {
    label: 'Icon',
    title: 'App icon',
    copy: 'Use this in tight spaces such as featured work tiles and app-style surfaces where the mark needs to stay bold.',
    src: workoutsBrandAssets.appIcon,
    alt: 'Workouts app icon',
    width: 512,
    height: 512,
    sizes: '(max-width: 768px) 100vw, 320px',
    previewClassName: brandStyles.brandAssetPreviewSquare,
    cardClassName: brandStyles.brandAssetCardCompact,
  },
]

export default function WorkoutsCaseStudyPage() {
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
              <span className={styles.heroKicker}>Case study / Training decision friction</span>
              <h1 className={styles.productHeroTitle}>Workouts</h1>
              <p className={styles.productHeroSubtitle}>
                When people choose training plans while tired, rushed or unsure what matters, the risk is
                decision overload before the workout starts. Flat18 shaped Workouts around onboarding,
                schedules, logging and recovery context so the next session is easier to choose and complete.
              </p>

              <div className={styles.productHeroActions}>
                <a
                  href="https://workouts.flat18.app"
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
                aria-label="Open Workouts dashboard screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/workouts/01-dashboard.png"
                  alt="Workouts dashboard showing training summary, weekly plan, and next-session guidance"
                  width={1280}
                  height={897}
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
            <h2>From training uncertainty to a guided workout system.</h2>
            <p>
              Flat18 treated Workouts as a decision-design problem. The app needed to help users choose
              a realistic plan, understand what to train next, log the detail that matters, and adapt
              when energy, recovery, or schedule quality inevitably deteriorates.
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
              <h2>Designed around the moments where training plans usually fall apart.</h2>
            </div>
            <p>
              Workouts is not just a logging screen with motivational wallpaper. Each surface answers a
              practical question: what plan fits me, what do I do today, how do I log it quickly, and
              am I actually making progress?
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            <article className={`${styles.productFeatureCard} ${styles.productFeatureCardLarge}`}>
              <button
                type="button"
                className={styles.productFeatureImageButton}
                onClick={() => openLightbox(3)}
                aria-label="Open Workouts session logging screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/workouts/03-workout.png"
                  alt="Workouts workout session screen with set logging controls"
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Session logging</span>
                <h3>Detailed enough to be useful, fast enough to use between sets.</h3>
                <p>
                  The logger tracks sets, reps, weight, RIR, cues, and completion without forcing users
                  to perform spreadsheet administration while holding dumbbells. A rare mercy.
                </p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button
                type="button"
                className={styles.productFeatureImageButton}
                onClick={() => openLightbox(5)}
                aria-label="Open Workouts exercise library screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/workouts/07-library.png"
                  alt="Workouts searchable exercise library with filters"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Exercise library</span>
                <h3>Make substitutions less chaotic.</h3>
                <p>
                  Users can search by muscle, equipment, movement pattern, and level when the gym has
                  once again hidden the only cable attachment that matters.
                </p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button
                type="button"
                className={styles.productFeatureImageButton}
                onClick={() => openLightbox(6)}
                aria-label="Open Workouts mobile plan screenshot in viewer"
              >
                <Image
                  src="/images/case-studies/workouts/07-mobile-plan.png"
                  alt="Workouts mobile plan view for gym use"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={styles.productFeatureImage}
                />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Mobile use</span>
                <h3>Keep the plan usable where training actually happens.</h3>
                <p>
                  The mobile view keeps the weekly plan, next actions, and session context readable in
                  the gym rather than trapped in desktop theatre.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={brandStyles.brandAssetsSection}>
        <div className={styles.container}>
          <div className={brandStyles.brandAssetsHeader}>
            <div>
              <span className={styles.caseStudyTag}>Brand assets</span>
              <h2>Share-ready art and compact iconography.</h2>
            </div>
            <p>
              Workouts now has a dedicated share image and app icon, so the product stays clear on link
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
          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: planning friction</span>
                <span className={styles.metaItem}>Solution: guided weekly training system</span>
                <span className={styles.metaItem}>Outcome: clearer next actions</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Workouts sits between static plans and open-ended logging tools. Flat18 handled the
                product framing, onboarding flow, recommendation logic, training-plan interface, set
                logging, exercise library, progress surfaces, and mobile-first gym use cases.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Many users know they should train consistently, but they do not know what to train
                    today, how much volume is sensible, or how to adjust a missed session.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The product needed to reduce gym-time decisions while preserving enough control for
                    different goals, experience levels, recovery states, and weekly availability.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We built onboarding, goal-aware recommendations, generated workout days, quick
                    sessions, set logging, progress signals, and a searchable exercise library.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Users can see what to train next, log the detail that matters, avoid obvious recovery
                    clashes, and understand whether the week is on track.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Converted profile inputs into practical schedule recommendations</li>
                  <li>Designed onboarding, plan, workout, logging, library, and progress views as one journey</li>
                  <li>Added recovery-aware guidance so quick sessions do not ignore recent training</li>
                  <li>Balanced detailed set logging with fast completion for rushed gym sessions</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Guided onboarding for goal, intensity, availability, and experience level</li>
                  <li>Recommended splits including upper/lower, push/pull/legs, full-body, and flexible options</li>
                  <li>Generated workout days with exercises, sets, reps, cues, and demo links</li>
                  <li>Set logging with reps, weight, RIR, and quick exercise completion</li>
                  <li>Progress dashboard for adherence, volume, effort, next workout, and coaching notes</li>
                  <li>Searchable exercise library with category, equipment, muscles, and skill level</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Built for</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Beginners</span>
                  <span className={styles.chip}>Intermediate lifters</span>
                  <span className={styles.chip}>Inconsistent schedules</span>
                  <span className={styles.chip}>Data-led training</span>
                  <span className={styles.chip}>Mobile gym use</span>
                </div>
              </div>
            </div>

            <div className={styles.caseStudyMedia}>
              <div className={styles.mediaGrid}>
                {mediaItems.map((item, index) => (
                  <figure
                    key={item.src}
                    className={`${styles.mediaItem} ${item.isPrimary ? styles.mediaPrimary : styles.mediaSecondary}`}
                  >
                    <button
                      type="button"
                      className={styles.mediaButton}
                      onClick={() => openLightbox(index)}
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
                ))}
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Delivered for confidence</h4>
                <p>
                  The case study shows the full loop: setup, recommendation, weekly plan, workout
                  execution, exercise discovery, and progress feedback.
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
              <h2>Need a personal workflow turned into a usable product?</h2>
              <p>
                Flat18 can turn complex routines into practical apps with guidance, feedback, flexible
                states, and enough structure for real users rather than imaginary perfect ones.
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
