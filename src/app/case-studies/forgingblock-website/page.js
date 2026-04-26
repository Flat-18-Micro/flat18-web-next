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
              How Flat18 audited a busy merchant website, found the conversion blockers, and rebuilt
              the journey around trust, clarity, and customer action.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Full-site audit</span>
                <span className={styles.statLabel}>Starting point</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Feb 2026</span>
                <span className={styles.statLabel}>Redesign</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Conversion-ready</span>
                <span className={styles.statLabel}>Outcome</span>
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
                Rebuilt from a careful review of message clarity, trust placement, mobile scanning,
                accessibility, and long-term content maintenance.
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
                <span className={styles.statusPill}>Redesign shipped</span>
                <span className={styles.metaItem}>Diagnosis: value hidden by complexity</span>
                <span className={styles.metaItem}>Solution: benefit-first journey</span>
                <span className={styles.metaItem}>Outcome: faster comprehension</span>
              </div>

              <p className={styles.caseStudyIntro}>
                The legacy site contained useful detail, but the customer journey was asking merchants
                to work too hard. Flat18 reviewed the information architecture, page hierarchy, proof
                placement, mobile density, and SEO structure before rebuilding the site into a cleaner,
                benefit-first experience.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Dense copy, deep navigation, and scattered trust proof slowed merchant understanding
                    at the exact point where confidence should have been building.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The site had technical credibility, but its strongest proof appeared too late and
                    the customer path was not organised around decision-making.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We rebuilt the journey with benefit-led messaging, earlier trust signals,
                    mobile-first scanning, central metadata, and reusable page modules.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Merchants can understand the offer faster, while the business gets a maintainable
                    system for adding proof, services, and SEO-led content.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Audited the legacy site for message clarity, trust signals, SEO, and mobile usability</li>
                  <li>Reordered the narrative so merchant outcomes appear before technical detail</li>
                  <li>Converted repeated templates into reusable sections and content-driven configs</li>
                  <li>Improved long-term upkeep with shared tokens, structured metadata, and consistent modules</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key improvements</h4>
                <ul className={styles.checkList}>
                  <li>Benefit-first hero with stronger CTA clarity</li>
                  <li>Earlier trust signals and compliance proof</li>
                  <li>Structured modules for scannable storytelling</li>
                  <li>Mobile-first layout simplification</li>
                  <li>Centralised SEO metadata and structured content</li>
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
                <h4>Delivered for confidence</h4>
                <p>
                  The redesign keeps benefits, trust, and conversion steps in a tighter sequence so
                  customers can move from interest to enquiry without losing confidence.
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
                We can audit your current site, identify the points where customers hesitate, and
                rebuild the journey around proof, clarity, and action.
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
