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
      src: '/images/case-studies/social-publisher/hero-composer.webp',
      alt: 'Social Publisher composer workflow mockup',
      caption: 'Compose once, tailor everywhere',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/social-publisher/feature-calendar.webp',
      alt: 'Social Publisher drag-and-drop scheduling calendar',
      caption: 'Drag-and-drop calendar',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/social-publisher/feature-publishing-log.webp',
      alt: 'Social Publisher publishing logs and retries',
      caption: 'Publishing logs + retries',
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
              How Flat18 converted scattered platform rules, approval friction, and publishing risk
              into a controlled scheduling workflow.
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
              <span className={styles.caseStudyTag}>Open-source publishing</span>
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
                A publishing workflow designed around the details that cause missed posts,
                duplicated work, and client anxiety.
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
                  Connector transparency, visible retries, and clear publishing logs give agencies
                  more control when client posts have to land correctly.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live beta</span>
                <span className={styles.metaItem}>Diagnosis: platform-specific friction</span>
                <span className={styles.metaItem}>Solution: validation + queueing</span>
                <span className={styles.metaItem}>Outcome: lower publishing risk</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 treated publishing as an operational reliability problem. Small teams do not
                only need a nicer composer; they need guardrails for platform rules, visible approval
                status, retry behaviour, and logs that explain what happened when a post fails.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Platform rules, account sprawl, and reliability issues make publishing slow
                    and risky for lean marketing teams.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    Most scheduling friction comes from hidden differences between platforms and
                    from not knowing whether a queued post actually succeeded.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We designed a platform-aware workflow with validation, previews, scheduling,
                    logs, retries, and BYO AI keys for predictable operating costs.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Teams can compose with confidence, spot issues before publishing, and explain
                    outcomes to clients or stakeholders from one audit-friendly trail.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Translated platform constraints into capability rules and user-facing validation</li>
                  <li>Designed the workflow around compose, tailor, schedule, verify, and retry</li>
                  <li>Separated interactive app behaviour from scheduled publishing for reliability</li>
                  <li>Positioned open-source connectors as a practical defence against API change</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Workflow highlights</h4>
                <ul className={styles.checkList}>
                  <li>Compose once, tailor per-platform variants</li>
                  <li>Platform-aware validation before publish</li>
                  <li>Drag-and-drop calendar scheduling</li>
                  <li>Transparent logs with retry controls</li>
                  <li>BYO AI keys for predictable costs</li>
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
