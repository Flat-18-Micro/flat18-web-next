'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function HashboardCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/hashboard/dashboard-overview.svg',
      alt: 'Hashboard dashboard overview',
      caption: 'Dashboard overview',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/hashboard/mining-overview.svg',
      alt: 'Mining performance overview',
      caption: 'Mining performance',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/hashboard/treasury-financials.svg',
      alt: 'Treasury and financials summary',
      caption: 'Treasury visibility',
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
              Zettahash Hashboard
            </h1>
            <p className={styles.heroSubtitle}>
              Transparency dashboard for mining performance, treasury status, and governance activity.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>DAO transparency</span>
                <span className={styles.statLabel}>Objective</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Vue 3 + Vite</span>
                <span className={styles.statLabel}>Stack</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Governance ready</span>
                <span className={styles.statLabel}>Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Mining + treasury visibility</span>
              <div className={styles.caseStudyTitleRow}>
                <Image
                  src="/images/portfolio-graphics/logos/zettahash.webp"
                  alt="Zettahash"
                  width={200}
                  height={48}
                  className={styles.caseStudyLogo}
                />
                <h2 className={styles.caseStudyTitle}>Hashboard</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                A single dashboard for performance, treasury, market context, and governance actions.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a href="#chat" className="btn btn-primary">
                Chat with us
              </a>
            </div>
          </div>

          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Audience: Tokenholders + contributors</span>
                <span className={styles.metaItem}>Focus: Trust + clarity</span>
                <span className={styles.metaItem}>Surface: DAO dashboard</span>
              </div>

              <p className={styles.caseStudyIntro}>
                The Hashboard consolidates mining performance, treasury status, market context, and
                governance activity into one high-signal destination for the Zettahash DAO.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem</h3>
                  <p>
                    Data spread across mining, wallet, and governance tools made it difficult for
                    tokenholders to assess project health quickly.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution</h3>
                  <p>
                    A summary-first dashboard with clear metrics, contextual charts, and direct
                    links into governance actions.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Product strategy</h3>
                  <p>
                    Reduce time-to-insight with summary cards, surface trusted sources, and
                    provide immediate next actions.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Outcome</h3>
                  <p>
                    A transparency hub that makes performance and governance status readable for
                    both new and existing participants.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Mining performance overview with trend visibility</li>
                  <li>Treasury balances and vesting status</li>
                  <li>Embedded market charts for context</li>
                  <li>Snapshot governance proposals and status</li>
                  <li>Community entry points and next actions</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vue 3</span>
                  <span className={styles.chip}>Vite</span>
                  <span className={styles.chip}>Vuex</span>
                  <span className={styles.chip}>SCSS modules</span>
                  <span className={styles.chip}>External widgets</span>
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
                <h4>Trust-first reporting</h4>
                <p>
                  High-contrast metrics and visible data sources keep the dashboard defensible and
                  easy to scan during governance decisions.
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
              <h2>Need a transparency dashboard?</h2>
              <p>
                We design data-heavy surfaces that keep stakeholders informed without burying them
                in raw metrics.
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
