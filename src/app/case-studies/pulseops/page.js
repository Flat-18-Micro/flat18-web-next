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
      alt: 'PulseOps command centre overview dashboard',
      caption: 'Command centre overview',
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
              How Flat18 identified a visibility gap for small network operators and turned it into
              a credible self-hosted product proposition.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>SOHO + MSP</span>
                <span className={styles.statLabel}>Audience</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Network visibility</span>
                <span className={styles.statLabel}>Problem solved</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Self-hosted</span>
                <span className={styles.statLabel}>Trust posture</span>
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
                A unified command centre shaped around inventory, telemetry, topology, and device
                actions that small operators can actually run.
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
                <span className={styles.metaItem}>Diagnosis: visibility gap</span>
                <span className={styles.metaItem}>Solution: local command centre</span>
                <span className={styles.metaItem}>Outcome: operator-ready narrative</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 saw that smaller network operators were underserved: consumer tools lacked
                depth, enterprise suites carried too much overhead, and neither gave teams a simple
                path from visibility to action. PulseOps was positioned and presented as the missing
                middle: enterprise-grade awareness without enterprise drag.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Problem found</h3>
                  <p>
                    Small networks sit between consumer tools and enterprise suites, leaving
                    operators without a single, reliable view of health and history.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Flat18 diagnosis</h3>
                  <p>
                    Operators needed more than monitoring. They needed discovery, telemetry, topology,
                    logs, and corrective actions to stay connected in one place.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Solution shipped</h3>
                  <p>
                    We built the product story, proof-led screens, and launch experience around a
                    local, self-hosted console for SSH/SNMP telemetry and device action.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Customer value</h3>
                  <p>
                    Customers can see the practical workflow before deployment, understand the trust
                    posture, and evaluate the product with real interface proof.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Defined the market gap and converted it into a focused product narrative</li>
                  <li>Prioritised product proof over abstract claims by leading with real dashboard surfaces</li>
                  <li>Framed open source as a trust, auditability, and extensibility advantage</li>
                  <li>Connected deployment, operator workflows, and roadmap signals into one launch story</li>
                </ul>
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
                <h4>Delivered for confidence</h4>
                <p>
                  The experience shows operators exactly what they can monitor, map, and act on,
                  while making the open-source posture part of the trust case.
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
                We can turn a rough product opportunity into a clear service, interface, and launch
                story that customers understand quickly.
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
