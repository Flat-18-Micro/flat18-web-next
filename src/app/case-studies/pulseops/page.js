'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function PulseOpsCaseStudyPage() {
  const mediaItems = [
    {
      src: '/images/case-studies/pulseops/overview.png',
      alt: 'PulseOps command center overview dashboard',
      caption: 'Command center overview',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px',
      isPrimary: true,
      priority: true
    },
    {
      src: '/images/case-studies/pulseops/network-visualisation.png',
      alt: 'PulseOps network visualisation with topology map',
      caption: 'Topology visualisation',
      sizes: '(max-width: 768px) 100vw, 260px'
    },
    {
      src: '/images/case-studies/pulseops/insights.png',
      alt: 'PulseOps historical insights dashboard',
      caption: 'Historical insights',
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
              PulseOps
            </h1>
            <p className={styles.heroSubtitle}>
              Self-hosted network operations for SOHO operators and small MSPs.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>March 2026</span>
                <span className={styles.statLabel}>Launch</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Network telemetry</span>
                <span className={styles.statLabel}>Category</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Self-hosted</span>
                <span className={styles.statLabel}>Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyHeader}>
            <div className={styles.caseStudyHeading}>
              <span className={styles.caseStudyTag}>Open-source infrastructure</span>
              <div className={styles.caseStudyTitleRow}>
                <Image
                  src="/images/case-studies/logos/pulseops-lockup.svg"
                  alt="PulseOps"
                  width={900}
                  height={256}
                  className={styles.caseStudyLogo}
                />
                <h2 className={styles.caseStudyTitle}>PulseOps</h2>
              </div>
              <p className={styles.caseStudySubtitle}>
                A unified command center for inventory, telemetry, topology, and device actions.
              </p>
            </div>
            <div className={styles.caseStudyActions}>
              <a
                href="https://pulseops.flat18.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View PulseOps
              </a>
              <a href="#chat" className="btn btn-primary">
                Start a project
              </a>
            </div>
          </div>

          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live</span>
                <span className={styles.metaItem}>Launch: March 2026</span>
                <span className={styles.metaItem}>Category: Network telemetry</span>
                <span className={styles.metaItem}>Deployment: Self-hosted</span>
              </div>

              <p className={styles.caseStudyIntro}>
                PulseOps delivers a unified command center for inventory, telemetry, topology,
                and device actions—enterprise-grade visibility without enterprise overhead.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem</h3>
                  <p>
                    Small networks sit between consumer tools and enterprise suites, leaving
                    operators without a single, reliable view of health and history.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution</h3>
                  <p>
                    A local, operator-first console that pairs live SSH/SNMP telemetry with
                    discovery, topology mapping, and device actions.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Open-source edge</h3>
                  <p>
                    Auditable telemetry, community device drivers, and long-term survivability
                    for security-sensitive environments.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Outcome</h3>
                  <p>
                    A proof-heavy marketing site with real dashboards, clear deployment steps,
                    and a VC-grade narrative for launch.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>Key capabilities</h4>
                <ul className={styles.checkList}>
                  <li>Device inventory and status tracking</li>
                  <li>Live SSH/SNMP telemetry (latency, CPU, memory, uptime)</li>
                  <li>Topology maps and network visualisation</li>
                  <li>Discovery and network analysis workflows</li>
                  <li>Device actions (backup, reboot, reprovision)</li>
                  <li>Activity logs with historical context</li>
                </ul>
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
                <h4>Open-source posture</h4>
                <p>
                  Built for transparency and extensibility—operators can audit telemetry paths,
                  extend device drivers, and own the roadmap with the community.
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
                We build open-source-ready products and marketing systems that stand up to
                technical scrutiny and investor-grade narratives.
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
