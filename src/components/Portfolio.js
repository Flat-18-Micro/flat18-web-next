'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import styles from '../styles/component-css/Portfolio.module.css'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const projects = [
    {
      title: 'Archimedes Finance',
      description: 'Secure Asset Tokenization Platform. Transform real-world assets into digital tokens with our secure, transparent blockchain infrastructure. Designed for institutional investors and financial professionals. ',
      image: '/images/portfolio-graphics/archimedesfinance-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/archimedes-finance.webp',
      link: 'https://archimedes-finance.pages.dev',
      technologies: [
        { name: 'Vue JS', percentage: '45%', colorClass: styles.vueColor },
        { name: 'Node.js', percentage: '50%', colorClass: styles.nodeColor },
        { name: 'PostgreSQL', percentage: '5%', colorClass: styles.postgresColor },
      ],
      status: 'Demo version',
      category: 'app'
    },
        {
      title: 'Honey Pay',
      description: 'Instant settlement, near-zero fees. ✓Free to use payment framework ✓Non-Custodial ✓Built on Berachain',
      image: '/images/portfolio-graphics/honeypay-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/honeypay.webp',
      link: 'https://honeypay.pages.dev',
      technologies: [
        { name: 'Next.js', percentage: '100%', colorClass: styles.nextJSColor },
      ],
      status: 'Demo version',
      category: 'web'
    },
    {
      title: 'WalletScrutiny',
      description: 'Collaborative project with the Bitcoin Design Community to redesign the WalletScrutiny brand and website.',
      image: '/images/portfolio-graphics/walletscrutiny-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/wallet-scrutiny.webp',
      link: 'https://walletscrutiny.com',
      technologies: [
        { name: 'JavaScript', percentage: '90%', colorClass: styles.jsColor },
        { name: 'HTML5', percentage: '5%', colorClass: styles.htmlColor },
        { name: 'SCSS', percentage: '5%', colorClass: styles.scssColor }
      ],
      status: 'Current version',
      category: 'web'
    },
    {
      title: 'BTCPay Server',
      description: 'Clean, modern design for the BTCPay Server main landing page and Foundation website.',
      image: '/images/portfolio-graphics/btcpayserver-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/btcpayserver.webp',
      link: 'https://btcpayserver.org',
      technologies: [
        { name: 'HTML5', percentage: '40%', colorClass: styles.htmlColor },
        { name: 'CSS', percentage: '30%', colorClass: styles.cssColor },
        { name: 'JavaScript', percentage: '30%', colorClass: styles.jsColor }
      ],
      status: 'Live',
      category: 'web'
    },
    {
      title: 'F18 Pay',
      description: 'Bitcoin, ETH and ERC-20 token payments processor built to run in serverless environments.',
      image: '/images/portfolio-graphics/f18pay-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/f18pay.webp',
      link: 'https://pay.flat18.co.uk',
      technologies: [
        { name: 'JavaScript', percentage: '100%', colorClass: styles.jsColor }
      ],
      status: 'Live',
      category: 'app'
    },
    {
      title: '# Hashboard',
      description: 'Web3 application enabling transparent operation and governance of the Zettahash DAO project.',
      image: '/images/portfolio-graphics/hashboard-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/zettahash.webp',
      link: 'https://hashboard.zettahash.org',
      technologies: [
        { name: 'Vue.js', percentage: '60%', colorClass: styles.vueColor },
        { name: 'JavaScript', percentage: '40%', colorClass: styles.jsColor }
      ],
      status: 'Live',
      category: 'app'
    },
    {
      title: 'Zettahash DAO',
      description: 'Zettahash website built in Webflow and designed to be processed in Node within a GitHub Pages environment.',
      image: '/images/portfolio-graphics/zettahash-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/zettahash-dao.webp',
      link: 'https://zettahash-static.webflow.io',
      technologies: [
        { name: 'Webflow', percentage: '100%', colorClass: styles.webflowColor }
      ],
      status: 'Live',
      category: 'web',
      framework: {
        name: 'Webflow',
        logo: '/images/all/webflow-icon-4095338614.png'
      }
    },
    {
      title: 'dVote EVM',
      description: "dVote's EVM Networks dashboard offers a comprehensive suite of tools designed to streamline and enhance decentralised governance for the blockchain ecosystem.",
      image: '/images/portfolio-graphics/dvote-clay-2.webp',
      projectLogo: '/images/portfolio-graphics/logos/dvote.webp',
      link: 'https://evm.dvote.ai/networks',
      technologies: [
        { name: 'Next.js', percentage: '100%', colorClass: styles.nextJSColor },
      ],
      status: 'Demo',
      category: 'web'
    },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  // Animation variants
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
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
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

  const filterButtonVariants = {
    inactive: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: "var(--text-secondary)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      scale: 1
    },
    active: {
      backgroundColor: "rgba(0, 240, 181, 0.1)",
      color: "var(--primary)",
      border: "1px solid rgba(0, 240, 181, 0.2)",
      scale: 1.05
    }
  }

  return (
    <section className={styles.portfolioSection} id="work" ref={sectionRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.backgroundGrid}></div>
      </div>

      <motion.div
        className="container"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className={styles.portfolioHeading}
          variants={headingVariants}
        >
          <span className={styles.sectionLabel}>Portfolio</span>
          <h2 className={styles.portfolioTitle}>Our Work</h2>
          <p className={styles.portfolioSubtitle}>
            Explore our portfolio of successful projects across web and blockchain applications.
          </p>

          <div className={styles.filterContainer}>
            <motion.button
              className={styles.filterButton}
              onClick={() => setFilter('all')}
              animate={filter === 'all' ? 'active' : 'inactive'}
              variants={filterButtonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              All Projects
            </motion.button>
            <motion.button
              className={styles.filterButton}
              onClick={() => setFilter('web')}
              animate={filter === 'web' ? 'active' : 'inactive'}
              variants={filterButtonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Web
            </motion.button>
            <motion.button
              className={styles.filterButton}
              onClick={() => setFilter('app')}
              animate={filter === 'app' ? 'active' : 'inactive'}
              variants={filterButtonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Apps
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className={styles.portfolioGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className={styles.projectImageWrapper}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.projectImage}
                    loading={index < 3 ? "eager" : "lazy"}
                    fetchPriority={index < 3 ? "high" : "auto"}
                    quality={85}
                  />

                </div>
                
              </div>

              <div className={styles.projectContent}>
                {project.projectLogo && (
                  <div className={styles.projectLogo}>
                    <Image
                      src={project.projectLogo}
                      alt={`${project.title} logo`}
                      width={48}
                      height={48}
                      className={styles.logoImage}
                    />
                  </div>
                )}
                <h3 className={styles.projectTitle}><span>{project.title}</span><div className={`${styles.projectStatus} ${project.status === 'Live' ? styles.live : ''}`}>
                  {project.status}
                </div></h3>
                
                <p className={styles.projectDescription}>{project.description}
                  <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewProjectButton}
                    >
                      View Project  <i className="bi bi-arrow-right"></i>
                    </a></p>
                    
                <div className={styles.projectTechStack}>
                  <div className={styles.techBar}>
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className={`${styles.techBarSegment} ${tech.colorClass || ''}`}
                        style={{ width: tech.percentage }}
                      />
                    ))}
                  </div>
                  <ul className={styles.techList}>
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className={styles.techItem}>
                        <span
                          className={`${styles.techColor} ${tech.colorClass || ''}`}
                        ></span>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.ctaContainer}
          variants={headingVariants}
        >
          <a href="#chat" className={styles.ctaButton}>
            <span>Start Your Project</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
