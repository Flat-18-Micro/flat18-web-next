'use client'

import Image from 'next/image'
import ResponsiveImage from '@/components/ResponsiveImage'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function ArchimedesFinanceCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/archimedes-finance/dashboard-investor.svg',
      alt: 'Investor dashboard overview',
      caption: 'Investor dashboard',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/archimedes-finance/asset-tokenization.svg',
      alt: 'Asset tokenisation workflow',
      caption: 'Asset tokenisation',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/archimedes-finance/kyc-verification.svg',
      alt: 'KYC verification workflow',
      caption: 'KYC verification',
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
              Archimedes Finance
            </h1>
            <p className={styles.heroSubtitle}>
              How Flat18 organised KYC, tokenisation, reporting, and client communication into one
              auditable investment platform.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>KYC + audit</span>
                <span className={styles.statLabel}>Problem solved</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Tokenised assets</span>
                <span className={styles.statLabel}>Category</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Role-based</span>
                <span className={styles.statLabel}>Delivery shape</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Tokenised investment platform</span>
              <div className={styles.caseStudyTitleRow}>
                <ResponsiveImage
                  src="/images/portfolio-graphics/logos/archimedes-finance.webp"
                  alt="Archimedes Finance"
                  width={520}
                  height={120}
                  className={styles.caseStudyLogo}
                  sizes="(max-width: 768px) 70vw, 520px"
                  widths={[120, 240, 360, 600, 1000]}
                />
                <h2 className={styles.caseStudyTitle}>Archimedes Finance</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                A platform designed to reduce friction and compliance risk across onboarding,
                asset approval, and investor reporting.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a
                href="https://archimedes-finance.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Archimedes Finance
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
                <span className={styles.metaItem}>Diagnosis: disconnected compliance workflows</span>
                <span className={styles.metaItem}>Solution: role-based operating platform</span>
                <span className={styles.metaItem}>Outcome: clearer audit visibility</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 treated the product as an operational controls problem. Investment teams needed
                to move clients through verification, asset review, tokenisation, messaging, and
                distributions without losing evidence or context between tools.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Investment teams juggle disconnected tools for KYC, asset approvals, and reporting,
                    creating delays and compliance risk.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    The workflow needed shared context, role-based boundaries, and persistent records
                    more than another isolated dashboard.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We delivered a Vue 3 and Express platform covering onboarding, KYC, tokenisation,
                    profit-sharing dashboards, messaging, and audit trails.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Managers and investors get clearer status visibility, stronger approval records,
                    and fewer hand-offs across sensitive financial workflows.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Mapped client, manager, and admin responsibilities into distinct product journeys</li>
                  <li>Joined KYC, asset approval, messaging, and reporting into a single operating flow</li>
                  <li>Added audit-friendly evidence through approval records and signature breadcrumbs</li>
                  <li>Designed dashboards that make distributions and tokenised asset status easier to review</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>KYC verification with live capture, OCR, and manual review gates</li>
                  <li>Tokenisation workflows with approval and signature trails</li>
                  <li>Profit-sharing dashboards and distribution tracking</li>
                  <li>In-app messaging, notifications, and audit logs</li>
                  <li>Multi-role routing for managers, clients, and admins</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vue 3</span>
                  <span className={styles.chip}>Vite</span>
                  <span className={styles.chip}>Pinia</span>
                  <span className={styles.chip}>Node + Express</span>
                  <span className={styles.chip}>PostgreSQL</span>
                  <span className={styles.chip}>Cloudinary</span>
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
                  Audit trails, approval workflows, and role-based routing keep sensitive investment
                  operations transparent, defensible, and easier for stakeholders to approve.
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
                We can consolidate fragmented customer, compliance, or reporting workflows into a
                product that feels controlled from first login to final approval.
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
