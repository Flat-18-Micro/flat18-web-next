'use client'

import Image from 'next/image'
import styles from '../styles/component-css/FeaturedWork.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

export default function FeaturedWork() {
  const featuredProjects = [
    {
      title: 'BTCPay Server',
      description: 'Conversion-focused landing and foundation site refresh for the open-source payments platform.',
      image: '/images/portfolio-graphics/btcpayserver-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/btcpayserver.webp',
      link: 'https://btcpayserver.org',
      technologies: ['HTML5', 'CSS', 'JavaScript'],
      metrics: {
        primary: 'Marketing site',
        secondary: 'Foundation hub'
      },
      status: 'Live'
    },
    {
      title: 'WalletScrutiny',
      description: 'Brand + UX redesign to make wallet security research clear and trustworthy.',
      image: '/images/portfolio-graphics/walletscrutiny-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/wallet-scrutiny.webp',
      link: 'https://walletscrutiny.com',
      technologies: ['JavaScript', 'HTML5', 'SCSS'],
      metrics: {
        primary: 'Brand + UX',
        secondary: 'Research platform'
      },
      status: 'Current version'
    }
  ]

  return (
    <section
      className={styles.featuredSection}
      id="featured-work"
      data-bg-color={getSectionBackground('featuredWork')}
      data-text-color={getSectionTextColor('featuredWork')}
    >
      <div className="container">
        <div className={styles.featuredHeading}>
          <h2 className={styles.featuredTitle}>Featured results</h2>
          <p className={styles.featuredSubtitle}>
            Real platforms with measurable outcomes, not portfolio fluff
          </p>
        </div>

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={styles.featuredCard}
            >
              <div className={styles.featuredImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.featuredImage}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  quality={90}
                />
                
                {project.projectLogo && (
                  <div className={styles.featuredLogo}>
                    <Image
                      src={project.projectLogo}
                      alt={`${project.title} logo`}
                      width={40}
                      height={40}
                      className={styles.logoImage}
                    />
                  </div>
                )}
              </div>

              <div className={styles.featuredContent}>
                <div className={styles.featuredHeader}>
                  <h3 className={styles.featuredProjectTitle}>{project.title}</h3>
                  <span className={styles.featuredStatus}>{project.status}</span>
                </div>

                <p className={styles.featuredDescription}>
                  {project.description}
                </p>

                <div className={styles.featuredMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>{project.metrics.primary}</span>
                    <span className={styles.metricLabel}>Scope</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>{project.metrics.secondary}</span>
                    <span className={styles.metricLabel}>Focus</span>
                  </div>
                </div>

                <div className={styles.featuredTech}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.featuredCta}
                >
                  View Project
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.featuredFooter}>
          <a href="#work" className={styles.viewAllButton}>
            View All Projects
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
