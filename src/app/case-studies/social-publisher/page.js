'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function SocialPublisherCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/social-publisher/01-dashboard-overview.png',
      alt: 'Social Publisher dashboard overview with metrics, queue, and channel health',
      caption: 'Dashboard overview',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/social-publisher/00-live-home.png',
      alt: 'Social Publisher live homepage',
      caption: 'Live product homepage',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/social-publisher/02-compose-validation-preview.png',
      alt: 'Social Publisher composer with platform variants, preview, media, and validation',
      caption: 'Composer and validation',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/social-publisher/03-calendar-scheduling.png',
      alt: 'Social Publisher weekly scheduling calendar with queued posts',
      caption: 'Calendar scheduling',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/social-publisher/04-channels-logs-status.png',
      alt: 'Social Publisher channels, publishing logs, retries, and status views',
      caption: 'Channels, logs, and status',
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
              Social Publisher
            </h1>
            <p className={styles.heroSubtitle}>
              How Flat18 turned social publishing into a structured workflow for channel connection,
              platform-aware drafting, validation, scheduling, and dispatch logs.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Small teams</span>
                <span className={styles.statLabel}>Audience</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Platform rules</span>
                <span className={styles.statLabel}>Problem solved</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Queue-backed</span>
                <span className={styles.statLabel}>Reliability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Social publishing workflow</span>
              <div className={styles.caseStudyTitleRow}>
                <Image
                  src="/images/case-studies/logos/social-publisher-wordmark.svg"
                  alt="Social Publisher"
                  width={860}
                  height={140}
                  className={styles.caseStudyLogo}
                />
                <h2 className={styles.caseStudyTitle}>Social Publisher</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                A focused scheduling workspace for teams that need dependable publishing without
                enterprise complexity.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a
                href="https://social-publisher.flat18.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Social Publisher
              </a>
              <a href="#chat" className="btn btn-primary">
                Chat with us
              </a>
            </div>
          </div>

          <div className={`${styles.caseStudyGrid} ${styles.caseStudyGridReverse}`}>
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
                Flat18 treated social publishing as a recurring operations problem. Teams need more
                than a text box and a calendar reminder; they need one place to prepare variants,
                check platform rules, schedule content, and see what happened after the queue runs.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Lean teams often manage posts across drafts, platform tabs, calendars, media
                    folders, AI tools, account credentials, and manual reminders.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The product needed to make platform differences visible before scheduling and
                    make queue health visible after dispatch.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We designed a workspace for connected channels, base posts, per-platform
                    variants, validation, previews, calendar scheduling, logs, retries, and BYO AI.
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
                <h4>Workflow highlights</h4>
                <ul className={styles.checkList}>
                  <li>Compose once, tailor per-platform variants</li>
                  <li>Check text length, media limits, links, authorisation state, and entitlement limits early</li>
                  <li>Preview estimated platform output before posts enter the queue</li>
                  <li>Schedule from a weekly calendar with status and review context</li>
                  <li>Inspect channel health, publishing logs, retry state, and dispatch outcomes</li>
                  <li>Use bring-your-own AI provider keys for cost and data control</li>
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
              <h2>Want a case study like this?</h2>
              <p>
                We can turn repeatable customer operations into a dependable product workflow with
                the right guardrails, logs, and escalation paths.
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
