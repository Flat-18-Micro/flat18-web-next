'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import styles from '../styles/component-css/FeaturedWork.module.css'

export default function FeaturedWork() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const featuredProjects = [
    {
      title: 'BTCPay Server',
      description: 'Clean, modern design for the BTCPay Server main landing page and Foundation website.',
      image: '/images/portfolio-graphics/btcpayserver-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/btcpayserver.webp',
      link: 'https://btcpayserver.org',
      technologies: ['HTML5', 'CSS', 'JavaScript'],
      metrics: {
        primary: 'Live site',
        secondary: 'Landing + Foundation'
      },
      status: 'Live'
    },
    {
      title: 'WalletScrutiny',
      description: 'Collaborative project with the Bitcoin Design Community to redesign the WalletScrutiny brand and website.',
      image: '/images/portfolio-graphics/walletscrutiny-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/wallet-scrutiny.webp',
      link: 'https://walletscrutiny.com',
      technologies: ['JavaScript', 'HTML5', 'SCSS'],
      metrics: {
        primary: 'Current version',
        secondary: 'Brand + Website redesign'
      },
      status: 'Current version'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className={styles.featuredSection} id="featured-work" ref={sectionRef}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className={styles.featuredHeading}
          variants={headingVariants}
        >
          <h2 className={styles.featuredTitle}>Featured Work</h2>
          <p className={styles.featuredSubtitle}>
            Platforms designed for performance and exceptional user experience
          </p>
        </motion.div>

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.featuredCard}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
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
                    <span className={styles.metricLabel}>Performance</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>{project.metrics.secondary}</span>
                    <span className={styles.metricLabel}>Outcome</span>
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
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.featuredFooter}
          variants={headingVariants}
        >
          <a href="#work" className={styles.viewAllButton}>
            View All Projects
            <i className="bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}