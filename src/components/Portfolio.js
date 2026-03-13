'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/component-css/Portfolio.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

// Individual Project Card Component for proper hook usage
function ProjectCard({ project, index }) {
  return (
    <div
      className={styles.projectCard}
      data-liquid-prebuild="true"
    >
      {/* F18-style large imagery */}
      <div className={styles.projectImageWrapper} data-liquid-prebuild="true">
        <div className={styles.projectImageContainer}>
          <div>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.projectImage}
              loading={index < 2 ? "eager" : "lazy"}
              fetchPriority={index < 2 ? "high" : "auto"}
              quality={90}
            />
          </div>

          {/* Overlay labels */}
          <div className={styles.imageOverlay}>
            <div className={styles.overlayContent}>
              <span className={styles.overlayLabel}>View Project</span>
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
            <Image
              src={project.projectLogo}
              alt={`${project.title} logo`}
              width={400}
              height={40}
              className={`${styles.logoImage} ${project.title}`}
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
          View Project
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
      title: 'PulseOps',
      description: 'Self-hosted network telemetry and operations console for SOHO operators.',
      image: '/images/portfolio-graphics/pulseops-scr.webp',
      projectLogo: '/images/case-studies/logos/pulseops-lockup.svg',
      link: 'https://flat18.co.uk/case-studies/pulseops',
      stats: [
        { label: 'Timeline', value: '2026 launch' },
        { label: 'Platform', value: 'Web App' },
        { label: 'Industry', value: 'Network Ops' }
      ],
      status: 'Live',
      category: 'app'
    },
    {
      title: 'Social Publisher',
      description: 'Platform-aware social scheduling built for lean teams and agencies.',
      image: '/images/portfolio-graphics/soc-pub-scr.webp',
      projectLogo: '/images/case-studies/logos/social-publisher-wordmark.svg',
      link: 'https://flat18.co.uk/case-studies/social-publisher',
      stats: [
        { label: 'Timeline', value: '2026 beta' },
        { label: 'Platform', value: 'Web App' },
        { label: 'Industry', value: 'Marketing' }
      ],
      status: 'Live beta',
      category: 'app'
    },
    {
      title: 'Archimedes Finance',
      description: 'Secure Asset Tokenization Platform for institutional investors',
      image: '/images/portfolio-graphics/archimedesfinance-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/archimedes-finance.webp',
      link: 'https://flat18.co.uk/case-studies/archimedes-finance',
      stats: [
        { label: 'Timeline', value: '8 weeks' },
        { label: 'Platform', value: 'Web App' },
        { label: 'Industry', value: 'FinTech' }
      ],
      status: 'Live',
      category: 'app'
    },
    {
      title: 'Zettahash Hashboard',
      description: 'Mining hashboard monitoring dashboard',
      image: '/images/portfolio-graphics/hashboard.webp',
      projectLogo: '/images/portfolio-graphics/logos/zettahash.webp',
      link: 'https://flat18.co.uk/case-studies/hashboard',
      stats: [
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Platform', value: 'Web App' },
        { label: 'Industry', value: 'Mining' }
      ],
      status: 'Live',
      category: 'web'
    },
    {
      title: 'WalletScrutiny',
      description: 'Bitcoin wallet security analysis platform redesign',
      image: '/images/portfolio-graphics/walletscrutiny-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/wallet-scrutiny.webp',
      link: 'https://walletscrutiny.com',
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
      description: 'Open-source Bitcoin payment processor platform',
      image: '/images/portfolio-graphics/btcpayserver-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/btcpayserver.webp',
      link: 'https://btcpayserver.org',
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
          <span className="label-uppercase">Featured Work</span>
          <h2 className={styles.sectionTitle}>Recent projects</h2>
          <p className={styles.sectionDescription}>
            A selection of our latest work across fintech, security, and digital platforms
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
            <h3>Ready to start your project?</h3>
            <p>Let's discuss your vision and bring it to life</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Book a fit check
          </a>
        </div>
      </div>
    </section>
  )
}
