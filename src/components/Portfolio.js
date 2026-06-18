'use client'

import Image from 'next/image'
import { useState } from 'react'
import ResponsiveImage from './ResponsiveImage'
import styles from '../styles/component-css/Portfolio.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

// Individual Project Card Component for proper hook usage
function ProjectCard({ project, index }) {
  return (
    <div className={styles.projectCard}>
      {/* F18-style large imagery */}
      <div className={styles.projectImageWrapper}>
        <div className={styles.projectImageContainer}>
          <div>
            {project.useNextImage ? (
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.projectImage}
                priority={index < 2}
              />
            ) : (
              <ResponsiveImage
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.projectImage}
                loading={index < 2 ? "eager" : "lazy"}
                fetchPriority={index < 2 ? "high" : "auto"}
                widths={[400, 800, 1000]}
              />
            )}
          </div>

          {/* Overlay labels */}
          <div className={styles.imageOverlay}>
            <div className={styles.overlayContent}>
              <span className={styles.overlayLabel}>View project</span>
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </div>
          </div>

          {/* Status pill */}
          <div className={`${styles.statusPill} ${project.status === 'Live' ? styles.live : ''}`}>
            {project.status}
          </div>
        </div>
      </div>

      {/* Project content */}
      <div className={styles.projectContent}>
        {project.projectLogo && (
          <div className={styles.projectLogo}>
            <ResponsiveImage
              src={project.projectLogo}
              alt={`${project.title} logo`}
              width={400}
              height={40}
              className={`${styles.logoImage} ${project.title}`}
              sizes="(max-width: 768px) 40vw, 260px"
              widths={[120, 240, 360, 600, 1000]}
            />
          </div>
        )}

        <h3 className={styles.projectTitle}>
          {project.title}
        </h3>

        <p className={styles.projectDescription}>
          {project.description}
        </p>

        {/* F18-style stat pills */}
        <div className={styles.projectStats}>
          {project.stats.map((stat, statIndex) => (
            <div
              key={statIndex}
              className={styles.statPill}
            >
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>{stat.value}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectCTA}
        >
          View project
          <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [filter] = useState('all')

  // F18-style featured work projects
  const projects = [
    {
      title: 'Felt Weather',
      description: 'Map-based weather intelligence combining official conditions with local human signals.',
      image: '/images/portfolio-graphics/felt-weather.webp',
      link: '/case-studies/felt-weather',
      stats: [
        { label: 'Timeline', value: '2026 launch' },
        { label: 'Platform', value: 'Web app' },
        { label: 'Industry', value: 'Weather' }
      ],
      status: 'Live',
      category: 'app',
      useNextImage: true
    },
    {
      title: 'Ledger',
      description: 'Simple ledgers for money lent, spent, repaid, shared, and backed by receipts.',
      image: '/images/portfolio-graphics/ledger.webp',
      link: '/case-studies/ledger',
      stats: [
        { label: 'Timeline', value: '2026 launch' },
        { label: 'Platform', value: 'Web app' },
        { label: 'Industry', value: 'Finance' }
      ],
      status: 'Live',
      category: 'app',
      useNextImage: true
    },
    {
      title: 'Workouts',
      description: 'Workout planning, logging, recovery context, and progress signals in one training app.',
      image: '/images/portfolio-graphics/workouts.webp',
      link: '/case-studies/workouts',
      stats: [
        { label: 'Timeline', value: '2026 launch' },
        { label: 'Platform', value: 'Web app' },
        { label: 'Industry', value: 'Fitness' }
      ],
      status: 'Live',
      category: 'app',
      useNextImage: true
    },
    {
      title: 'PulseOps',
      description: 'Self-hosted network telemetry and operations console for SOHO operators.',
      image: '/images/portfolio-graphics/pulseops-scr.webp',
      projectLogo: '/images/case-studies/logos/pulseops-lockup.svg',
      link: '/case-studies/pulseops',
      stats: [
        { label: 'Timeline', value: '2026 launch' },
        { label: 'Platform', value: 'Web app' },
        { label: 'Industry', value: 'Network ops' }
      ],
      status: 'Live',
      category: 'app'
    },
    {
      title: 'Social Publisher',
      description: 'A focused scheduling workspace for channel variants, validation, calendars, logs, and retries.',
      image: '/images/portfolio-graphics/social-publisher.webp',
      projectLogo: '/images/case-studies/logos/social-publisher-wordmark.svg',
      link: '/case-studies/social-publisher',
      stats: [
        { label: 'Timeline', value: '2026 beta' },
        { label: 'Platform', value: 'Web app' },
        { label: 'Industry', value: 'Marketing' }
      ],
      status: 'Live beta',
      category: 'app',
      useNextImage: true
    },
    {
      title: 'Natal Charts',
      description: 'Browser-based chart generation with transits, relationship comparison, and exportable readings.',
      image: '/images/portfolio-graphics/natal-charts.webp',
      link: '/case-studies/natal-charts',
      stats: [
        { label: 'Timeline', value: 'Demo build' },
        { label: 'Platform', value: 'Web app' },
        { label: 'Industry', value: 'Data visualisation' }
      ],
      status: 'Live',
      category: 'app',
      useNextImage: true
    },
    {
      title: 'Archimedes Finance',
      description: 'Secure asset tokenisation platform for institutional investors.',
      image: '/images/portfolio-graphics/archimedesfinance-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/archimedes-finance.webp',
      link: '/case-studies/archimedes-finance',
      stats: [
        { label: 'Timeline', value: '8 weeks' },
        { label: 'Platform', value: 'Web app' },
        { label: 'Industry', value: 'Fintech' }
      ],
      status: 'Live',
      category: 'app'
    },
    {
      title: 'Zettahash Hashboard',
      description: 'Mining hashboard monitoring dashboard.',
      image: '/images/portfolio-graphics/hashboard.webp',
      projectLogo: '/images/portfolio-graphics/logos/zettahash.webp',
      link: '/case-studies/hashboard',
      stats: [
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Platform', value: 'Web app' },
        { label: 'Industry', value: 'Mining' }
      ],
      status: 'Live',
      category: 'web'
    },
    {
      title: 'WalletScrutiny',
      description: 'Bitcoin wallet security analysis platform redesign.',
      image: '/images/portfolio-graphics/walletscrutiny-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/wallet-scrutiny.webp',
      link: '/case-studies/walletscrutiny',
      stats: [
        { label: 'Timeline', value: '12 weeks' },
        { label: 'Platform', value: 'Website' },
        { label: 'Industry', value: 'Security' }
      ],
      status: 'Live',
      category: 'web'
    },
    {
      title: 'BTCPay Server',
      description: 'Open-source Bitcoin payment processor platform.',
      image: '/images/portfolio-graphics/btcpayserver-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/btcpayserver.webp',
      link: '/case-studies/btcpayserver',
      stats: [
        { label: 'Timeline', value: '10 weeks' },
        { label: 'Platform', value: 'Website' },
        { label: 'Industry', value: 'Bitcoin' }
      ],
      status: 'Live',
      category: 'web'
    }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section
      className={styles.workSection}
      id="work"
      data-bg-color={getSectionBackground('portfolio')}
      data-text-color={getSectionTextColor('portfolio')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeading}>
          <span className="label-uppercase">Featured work</span>
          <h2 className={styles.sectionTitle}>Products, platforms and launches</h2>
          <p className={styles.sectionDescription}>
            Product and interface work that shows the technical depth behind our faster delivery model.
          </p>
        </div>

        {/* F18-style project grid */}
        <div className={styles.projectGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <h3>Ready to start your product?</h3>
            <p>Tell us the goal, constraints and deadline. We will suggest the fastest responsible route.</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
