'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
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
      alt: 'Asset tokenization workflow',
      caption: 'Asset tokenization',
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

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12
      }
    }
  }

  const heroItem = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <div className={styles.page}>
      <motion.section
        className={styles.hero}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.container}>
          <Breadcrumbs />
          <motion.div className={styles.heroContent} variants={heroVariants}>
            <motion.span className={styles.heroKicker} variants={heroItem}>
              Case study
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={heroItem}>
              Archimedes Finance
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={heroItem}>
              Investor platform for tokenized assets, compliance workflows, and distribution reporting.
            </motion.p>
            <motion.div className={styles.heroStats} variants={heroItem}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Vue 3 + Express</span>
                <span className={styles.statLabel}>Stack</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Tokenized assets</span>
                <span className={styles.statLabel}>Category</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>KYC + audit trails</span>
                <span className={styles.statLabel}>Focus</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.caseStudySection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Tokenized investment platform</span>
              <div className={styles.caseStudyTitleRow}>
                <Image
                  src="/images/portfolio-graphics/logos/archimedes-finance.webp"
                  alt="Archimedes Finance"
                  width={520}
                  height={120}
                  className={styles.caseStudyLogo}
                />
                <h2 className={styles.caseStudyTitle}>Archimedes Finance</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                Investor app platform for tokenized assets, compliance workflows, and distribution reporting.
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
                Book a fit check
              </a>
            </div>
          </div>

          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Stack: Vue 3 + Express</span>
                <span className={styles.metaItem}>Category: Tokenized assets</span>
                <span className={styles.metaItem}>Focus: KYC + audit trails</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Archimedes Finance unifies traditional advisory workflows with digital asset tokenization,
                giving managers and clients a single, auditable workspace for onboarding, approvals, and reporting.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem</h3>
                  <p>
                    Investment teams juggle disconnected tools for KYC, asset approvals, and reporting,
                    creating delays and compliance risk.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution</h3>
                  <p>
                    A role-based platform that pairs onboarding, tokenization workflows, and profit-sharing
                    dashboards in one secure interface.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Architecture</h3>
                  <p>
                    A Vue 3 SPA backed by an Express API and Postgres, with Cloudinary storage and
                    on-chain signature breadcrumbs for asset auditability.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Outcome</h3>
                  <p>
                    A delivery-ready product narrative with clear compliance workflows and reporting
                    visibility for managers and investors.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>KYC verification with live capture, OCR, and manual review gates</li>
                  <li>Tokenization workflows with approval and signature trails</li>
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
                <h4>Compliance-ready by design</h4>
                <p>
                  Audit trails, approval workflows, and role-based routing keep sensitive
                  investment operations transparent and defensible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

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
