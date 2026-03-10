'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

const caseStudies = [
  {
    title: 'PulseOps',
    tag: 'Open-source infrastructure',
    description: 'Self-hosted network operations for SOHO operators and small MSPs.',
    image: '/images/case-studies/pulseops/overview.png',
    href: '/case-studies/pulseops',
    meta: ['Live', 'Network telemetry']
  },
  {
    title: 'Social Publisher',
    tag: 'Open-source publishing',
    description: 'Platform-aware social scheduling for small teams, agencies, and creators.',
    image: '/images/case-studies/social-publisher/hero-composer.webp',
    href: '/case-studies/social-publisher',
    meta: ['Live beta', 'Social publishing']
  },
  {
    title: 'Archimedes Finance',
    tag: 'Tokenized investment platform',
    description: 'Investor platform for tokenized assets, compliance workflows, and reporting.',
    image: '/images/case-studies/archimedes-finance/dashboard-investor.svg',
    href: '/case-studies/archimedes-finance',
    meta: ['Live', 'Fintech']
  },
  {
    title: 'ForgingBlock Dashboard',
    tag: 'Payments experience',
    description: 'Payments hub for invoices, cash flow, and payout monitoring.',
    image: '/images/case-studies/forgingblock-dashboard/payments-page.svg',
    href: '/case-studies/forgingblock-dashboard',
    meta: ['Payments UX', 'Dashboard']
  },
  {
    title: 'ForgingBlock Website',
    tag: 'Website redesign',
    description: 'Benefit-first marketing site rebuild with clearer narrative and trust signals.',
    image: '/images/case-studies/forgingblock-website/redesign/home-desktop.png',
    href: '/case-studies/forgingblock-website',
    meta: ['Redesign', 'Marketing site']
  },
  {
    title: 'Zettahash Hashboard',
    tag: 'DAO transparency',
    description: 'Mining performance, treasury status, and governance activity in one hub.',
    image: '/images/case-studies/hashboard/dashboard-overview.svg',
    href: '/case-studies/hashboard',
    meta: ['Live', 'DAO dashboard']
  }
]

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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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
              Product platforms, shipped with intent.
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={heroItem}>
              Six launches from Flat 18 across fintech, infrastructure, and data-heavy platforms.
              Each case study links to a dedicated deep dive.
            </motion.p>
            <motion.div className={styles.heroStats} variants={heroItem}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>6</span>
                <span className={styles.statLabel}>Case studies</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Fintech + ops</span>
                <span className={styles.statLabel}>Coverage</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>2026</span>
                <span className={styles.statLabel}>Most recent</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.caseStudySection}
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.container}>
          <div className={styles.caseStudyListHeader}>
            <span className={styles.caseStudyTag}>All case studies</span>
            <h2 className={styles.caseStudyTitle}>Explore the full set</h2>
            <p className={styles.caseStudySubtitle}>
              Each preview links to the full write-up with workflows, architecture, and visuals.
            </p>
          </div>

          <motion.div className={styles.caseStudyList} variants={listVariants}>
            {caseStudies.map((study) => (
              <motion.article key={study.href} className={styles.caseStudyCard} variants={cardVariants}>
                <div className={styles.caseStudyCardMedia}>
                  <Image
                    src={study.image}
                    alt={`${study.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.caseStudyCardImage}
                  />
                </div>
                <div className={styles.caseStudyCardContent}>
                  <span className={styles.caseStudyCardTag}>{study.tag}</span>
                  <h3 className={styles.caseStudyCardTitle}>{study.title}</h3>
                  <p className={styles.caseStudyCardDescription}>{study.description}</p>
                  <div className={styles.caseStudyCardMeta}>
                    {study.meta.map((item) => (
                      <span key={item} className={styles.caseStudyMetaItem}>{item}</span>
                    ))}
                  </div>
                  <a href={study.href} className={styles.caseStudyCardLink}>
                    Read case study
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Want a case study like this?</h2>
              <p>
                We build product platforms and marketing systems that stand up to technical scrutiny
                and investor-grade narratives.
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
