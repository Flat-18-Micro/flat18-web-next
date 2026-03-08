'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function CaseStudiesPage() {
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
              Case studies
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={heroItem}>
              Open-source products, shipped with intent.
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={heroItem}>
              Two new launches from Flat 18: PulseOps and Social Publisher. Both are built
              to solve operational pain, ship credible product stories, and invite the open-source
              community into the roadmap.
            </motion.p>
            <motion.div className={styles.heroStats} variants={heroItem}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>2</span>
                <span className={styles.statLabel}>New launches</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>OSS-first</span>
                <span className={styles.statLabel}>Default posture</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>2026</span>
                <span className={styles.statLabel}>Launch year</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>SOHO+</span>
                <span className={styles.statLabel}>Target users</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="pulseops"
        className={styles.caseStudySection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
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
                Self-hosted network operations for SOHO operators and small MSPs.
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
                <figure className={`${styles.mediaItem} ${styles.mediaPrimary}`}>
                  <Image
                    src="/images/case-studies/pulseops/overview.png"
                    alt="PulseOps command center overview dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px"
                    className={styles.mediaImage}
                    priority
                  />
                  <figcaption className={styles.mediaCaption}>Command center overview</figcaption>
                </figure>
                <figure className={`${styles.mediaItem} ${styles.mediaSecondary}`}>
                  <Image
                    src="/images/case-studies/pulseops/network-visualisation.png"
                    alt="PulseOps network visualisation with topology map"
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    className={styles.mediaImage}
                  />
                  <figcaption className={styles.mediaCaption}>Topology visualisation</figcaption>
                </figure>
                <figure className={`${styles.mediaItem} ${styles.mediaSecondary}`}>
                  <Image
                    src="/images/case-studies/pulseops/insights.png"
                    alt="PulseOps historical insights dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    className={styles.mediaImage}
                  />
                  <figcaption className={styles.mediaCaption}>Historical insights</figcaption>
                </figure>
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
      </motion.section>

      <motion.section
        id="social-publisher"
        className={`${styles.caseStudySection} ${styles.caseStudySectionAlt}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
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
                <figure className={`${styles.mediaItem} ${styles.mediaPrimary}`}>
                  <Image
                    src="/images/case-studies/social-publisher/hero-composer.webp"
                    alt="Social Publisher composer workflow mockup"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px"
                    className={styles.mediaImage}
                  />
                  <figcaption className={styles.mediaCaption}>Compose once, tailor everywhere</figcaption>
                </figure>
                <figure className={`${styles.mediaItem} ${styles.mediaSecondary}`}>
                  <Image
                    src="/images/case-studies/social-publisher/feature-calendar.webp"
                    alt="Social Publisher drag-and-drop scheduling calendar"
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    className={styles.mediaImage}
                  />
                  <figcaption className={styles.mediaCaption}>Drag-and-drop calendar</figcaption>
                </figure>
                <figure className={`${styles.mediaItem} ${styles.mediaSecondary}`}>
                  <Image
                    src="/images/case-studies/social-publisher/feature-publishing-log.webp"
                    alt="Social Publisher publishing logs and retries"
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    className={styles.mediaImage}
                  />
                  <figcaption className={styles.mediaCaption}>Publishing logs + retries</figcaption>
                </figure>
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
    </div>
  )
}
