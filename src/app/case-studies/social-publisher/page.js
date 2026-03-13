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
              Platform-aware social scheduling for small teams, agencies, and creators.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>March 2026</span>
                <span className={styles.statLabel}>Launch</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Social publishing</span>
                <span className={styles.statLabel}>Category</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Vue 3 + Workers</span>
                <span className={styles.statLabel}>Stack</span>
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
                Platform-aware social scheduling for small teams, agencies, and creators.
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
                Book a fit check
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
                <h4>Open-source posture</h4>
                <p>
                  Connector transparency, faster platform updates, and portable deployments
                  for agencies that need control.
                </p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live beta</span>
                <span className={styles.metaItem}>Launch: March 2026</span>
                <span className={styles.metaItem}>Category: Social publishing</span>
                <span className={styles.metaItem}>Stack: Vue 3 + Workers</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Social Publisher helps teams compose once, validate per platform, and schedule with
                confidence. A queue-backed pipeline tracks logs and retries while BYO AI keys keep
                costs predictable.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem</h3>
                  <p>
                    Platform rules, account sprawl, and reliability issues make publishing slow
                    and risky for lean marketing teams.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution</h3>
                  <p>
                    A platform-aware workflow with validation, previews, scheduling, and logs
                    that keeps teams fast and consistent.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Open-source edge</h3>
                  <p>
                    Community-led connectors and capability rules keep the platform transparent,
                    extensible, and resilient to API changes.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Outcome</h3>
                  <p>
                    A launch-ready product narrative with a scalable architecture built on
                    Cloudflare Pages, Workers, and Neon.
                  </p>
                </div>
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
                We build open-source-ready products and marketing systems that stand up to
                technical scrutiny and investor-grade narratives.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="#chat" className="btn btn-primary">
                Book a fit check
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
