'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function WorkoutsCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/workouts/03-plan-overview.png',
      alt: 'Workouts plan overview with weekly split and recovery-aware quick workout builder',
      caption: 'Plan overview',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/workouts/01-onboarding-profile.png',
      alt: 'Workouts onboarding profile screen',
      caption: 'Guided profile setup',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/workouts/02-schedule-recommendations.png',
      alt: 'Workouts schedule recommendation cards',
      caption: 'Schedule recommendations',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/workouts/04-workout-logger.png',
      alt: 'Workouts exercise logger with set tracking and progress controls',
      caption: 'Workout logger',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/workouts/05-progress-dashboard.png',
      alt: 'Workouts progress dashboard with adherence and volume signals',
      caption: 'Progress dashboard',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/workouts/06-exercise-library.png',
      alt: 'Workouts searchable exercise library',
      caption: 'Exercise library',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/workouts/07-mobile-plan.png',
      alt: 'Workouts mobile plan view',
      caption: 'Mobile plan view',
      sizes: '(max-width: 768px) 100vw, 260px'
    }
  ]

  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + mediaItems.length) % mediaItems.length))
  const showNext = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % mediaItems.length))

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>
              Case study
            </span>
            <h1 className={styles.heroTitle}>
              Workouts
            </h1>
            <p className={styles.heroSubtitle}>
              How Flat18 turned workout planning, schedule selection, set logging, recovery context,
              and progress signals into one practical training system.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>4-day plan</span>
                <span className={styles.statLabel}>Sample journey</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>100+ exercises</span>
                <span className={styles.statLabel}>Library</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Recovery-aware</span>
                <span className={styles.statLabel}>Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Fitness planning app</span>
              <div className={styles.caseStudyTitleRow}>
                <h2 className={styles.caseStudyTitle}>Workouts</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                A browser-based training planner that helps users choose a split, follow a weekly
                plan, log sessions, and see what to do next.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a
                href="https://workouts.flat18.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Workouts
              </a>
              <a href="#chat" className="btn btn-primary">
                Chat with us
              </a>
            </div>
          </div>

          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Diagnosis: planning friction</span>
                <span className={styles.metaItem}>Solution: guided weekly training system</span>
                <span className={styles.metaItem}>Outcome: clearer next actions</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Workouts sits between static plans and open-ended logging tools. It helps users get
                from a short profile to a realistic training week, then keeps the plan flexible when
                real life changes the schedule.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Many users know they should train consistently, but they do not know what to
                    train today, how much volume is sensible, or how to adjust a missed session.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The product needed to reduce gym-time decisions while preserving enough control
                    for different goals, experience levels, and weekly availability.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We built onboarding, goal-aware schedule recommendations, generated workout days,
                    quick sessions, set logging, progress signals, and a searchable exercise library.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Users can see what to train next, log the detail that matters, avoid obvious
                    recovery clashes, and understand whether the week is on track.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Converted profile inputs into practical schedule recommendations</li>
                  <li>Designed plan, workout, logging, library, and progress views as one connected journey</li>
                  <li>Added recovery-aware warnings so quick sessions do not ignore recent training</li>
                  <li>Balanced detailed set logging with fast completion for rushed gym sessions</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Guided onboarding for goal, intensity, availability, and experience level</li>
                  <li>Recommended splits including Upper / Lower, Push / Pull / Legs, and freestyle options</li>
                  <li>Generated workout days with exercises, sets, reps, cues, and demo links</li>
                  <li>Set logging with reps, weight, and RIR, plus quick exercise completion</li>
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
              <h2>Want a case study like this?</h2>
              <p>
                We can turn a complex personal workflow into a practical app with guidance, feedback,
                and enough flexibility for real use.
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
        images={mediaItems}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrev={showPrev}
      />
    </div>
  )
}
