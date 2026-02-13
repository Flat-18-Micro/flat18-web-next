'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import styles from '../styles/component-css/Portfolio.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

// Individual Project Card Component for proper hook usage
function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, {
    once: true,
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  })

  // Dramatic card reveal animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 15,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  // Individual child element animations
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.1
      }
    }
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      filter: "blur(5px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  }

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  }

  const techStackVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
        staggerChildren: 0.1
      }
    }
  }

  const techBarVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }
    }
  }

  const techItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={styles.projectCard}
      variants={cardVariants}
      initial="hidden"
      animate={cardInView ? "visible" : "hidden"}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      {/* F18-style large imagery */}
      <motion.div
        className={styles.projectImageWrapper}
        variants={imageVariants}
      >
        <div className={styles.projectImageContainer}>
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={cardInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
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
          </motion.div>

          {/* Overlay labels */}
          <motion.div
            className={styles.imageOverlay}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.overlayContent}
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span className={styles.overlayLabel}>View Project</span>
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </motion.div>
          </motion.div>

          {/* Status pill */}
          <motion.div
            className={`${styles.statusPill} ${project.status === 'Live' ? styles.live : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            {project.status}
          </motion.div>
        </div>
      </motion.div>

      {/* Project content */}
      <motion.div
        className={styles.projectContent}
        variants={descriptionVariants}
      >
        {project.projectLogo && (
          <motion.div
            className={styles.projectLogo}
            variants={logoVariants}
          >
            <Image
              src={project.projectLogo}
              alt={`${project.title} logo`}
              width={400}
              height={40}
              className={styles.logoImage}
            />
          </motion.div>
        )}

        <motion.h3
          className={styles.projectTitle}
          variants={titleVariants}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className={styles.projectDescription}
          variants={descriptionVariants}
        >
          {project.description}
        </motion.p>

        {/* F18-style stat pills */}
        <motion.div
          className={styles.projectStats}
          variants={techStackVariants}
        >
          {project.stats.map((stat, statIndex) => (
            <motion.div
              key={statIndex}
              className={styles.statPill}
              variants={techItemVariants}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={cardInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6 + (statIndex * 0.1)
              }}
            >
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>{stat.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectCTA}
          initial={{ opacity: 0, x: -20 }}
          animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          whileHover={{
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          View Project
          <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // F18-style featured work projects
  const projects = [
    {
      title: 'Archimedes Finance',
      description: 'Secure Asset Tokenization Platform for institutional investors',
      image: '/images/portfolio-graphics/archimedesfinance-bahaus.webp',
      projectLogo: '/images/portfolio-graphics/logos/archimedes-finance.webp',
      link: 'https://archimedes-finance.pages.dev',
      stats: [
        { label: 'Timeline', value: '8 weeks' },
        { label: 'Platform', value: 'Web App' },
        { label: 'Industry', value: 'FinTech' }
      ],
      status: 'Live',
      category: 'app'
    },
    {
      title: 'Honey Pay',
      description: 'Instant settlement payment framework built on Berachain',
      image: '/images/portfolio-graphics/honeypay-bahaus.webp',
      projectLogo: '/images/portfolio-graphics/logos/honeypay.webp',
      link: 'https://honeypay.pages.dev',
      stats: [
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Platform', value: 'Web3' },
        { label: 'Industry', value: 'Crypto' }
      ],
      status: 'Demo',
      category: 'web'
    },
    {
      title: 'WalletScrutiny',
      description: 'Bitcoin wallet security analysis platform redesign',
      image: '/images/portfolio-graphics/walletscrutiny-bahaus.webp',
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
      image: '/images/portfolio-graphics/btcpayserver-bahaus.webp',
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

  // Enhanced Animation variants for dramatic reveal
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const filterButtonVariants = {
    inactive: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: "var(--text-secondary)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      scale: 1
    },
    active: {
      backgroundColor: "rgba(35, 64, 255, 0.12)",
      color: "var(--primary)",
      border: "1px solid rgba(35, 64, 255, 0.3)",
      scale: 1.05
    }
  }

  return (
    <section
      className={styles.workSection}
      id="work"
      ref={sectionRef}
      data-bg-color={getSectionBackground('portfolio')}
      data-text-color={getSectionTextColor('portfolio')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <motion.div
          className={styles.sectionHeading}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="label-uppercase">Featured Work</span>
          <h2 className={styles.sectionTitle}>Recent projects</h2>
          <p className={styles.sectionDescription}>
            A selection of our latest work across fintech, security, and digital platforms
          </p>
        </motion.div>

        {/* F18-style project grid */}
        <motion.div
          className={styles.projectGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCTA}
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className={styles.ctaContent}>
            <h3>Ready to start your project?</h3>
            <p>Let's discuss your vision and bring it to life</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Book a fit check
          </a>
        </motion.div>
      </div>
    </section>
  )
}
