'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function ForgingBlockWebsiteCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/forgingblock-website/redesign/home-desktop.png',
      alt: 'ForgingBlock redesign home page',
      caption: 'Redesign home (desktop)',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/forgingblock-website/legacy/home-desktop.png',
      alt: 'Legacy home page snapshot',
      caption: 'Legacy home (desktop)',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/forgingblock-website/mockups/home-comparison.png',
      alt: 'Home page comparison mockup',
      caption: 'Before/after comparison',
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
              ForgingBlock Website Redesign
            </h1>
            <p className={styles.heroSubtitle}>
              Benefit-first marketing site rebuild focused on trust, clarity, and conversion.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Next.js App Router</span>
                <span className={styles.statLabel}>Stack</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Feb 2026</span>
                <span className={styles.statLabel}>Redesign</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Marketing site</span>
                <span className={styles.statLabel}>Scope</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Website redesign</span>
              <div className={styles.caseStudyTitleRow}>
                <h2 className={styles.caseStudyTitle}>ForgingBlock Website</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                Rebuilt around a clearer narrative, tighter hierarchy, and centralized SEO metadata.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a href="#chat" className="btn btn-primary">
                Book a fit check
              </a>
            </div>
          </div>

          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Redesign shipped</span>
                <span className={styles.metaItem}>Focus: Value prop + trust</span>
                <span className={styles.metaItem}>Surface: Marketing site</span>
                <span className={styles.metaItem}>Outcome: Faster comprehension</span>
              </div>

              <p className={styles.caseStudyIntro}>
                The legacy site delivered broad coverage but buried the value proposition and trust signals.
                The redesign reorganizes the experience into a benefit-first story with consistent modules,
                clearer hierarchy, and a maintainable content architecture.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem</h3>
                  <p>
                    Dense copy, deep navigation, and scattered trust proof slowed merchant understanding
                    and weakened conversion intent.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution</h3>
                  <p>
                    A modular Next.js build with benefit-led messaging, early trust signals, and
                    mobile-first scanning patterns.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Implementation</h3>
                  <p>
                    Centralized metadata, content-driven page configs, and shared design tokens
                    for consistent sections across the site.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Outcome</h3>
                  <p>
                    Clearer narrative flow, improved trust positioning, and a maintainable system
                    for ongoing marketing updates.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>Key improvements</h4>
                <ul className={styles.checkList}>
                  <li>Benefit-first hero with stronger CTA clarity</li>
                  <li>Earlier trust signals and compliance proof</li>
                  <li>Structured modules for scannable storytelling</li>
                  <li>Mobile-first layout simplification</li>
                  <li>Centralized SEO metadata and structured content</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Next.js</span>
                  <span className={styles.chip}>App Router</span>
                  <span className={styles.chip}>Design tokens</span>
                  <span className={styles.chip}>Content configs</span>
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
                <h4>Story-first flow</h4>
                <p>
                  The redesign keeps benefits, trust, and conversion steps in a tighter sequence
                  so merchants understand value faster.
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
              <h2>Need a marketing refresh?</h2>
              <p>
                We rebuild marketing sites around clarity, trust, and conversion-ready narratives.
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
