'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../styles/component-css/Portfolio.module.css'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'WalletScrutiny',
      description: 'Collaborative project with the Bitcoin Design Community to redesign the WalletScrutiny brand and website.',
      image: '/images/portfolio-graphics/wallet-scrutiny.webp',
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
      description: 'Clean, modern design for the BTCPay Server Main Landing page and Foundation Website.',
      image: '/images/portfolio-graphics/btcpayserver.webp',
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
      image: '/images/portfolio-graphics/f18-pay.webp',
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
      image: '/images/portfolio-graphics/hashboard.webp',
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
      image: '/images/portfolio-graphics/zettahash.webp',
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
      description: 'dVote\'s EVM Networks dashboard offers a comprehensive suite of tools designed to streamline and enhance decentralised governance for blockchain ecosystem',
      image: '/images/portfolio-graphics/dvote.webp',
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

  // Animation variants - optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0], // Optimized cubic-bezier
        opacity: { duration: 0.3 }, // Faster opacity transition
        scale: { duration: 0.4 }
      }
    }
  }

  // Check if user prefers reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' ?
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  return (
    <section className={styles.portfolioSection} id="work">
      <div className="container">
        <div className={styles.portfolioHeading}>
          <h2 className={styles.portfolioTitle}>Our Public Work</h2>
          <p className={styles.portfolioSubtitle}>
            Check out some of our projects across web and app development
          </p>

          <div className="flex justify-center gap-4 mt-6 mb-10">
            <button
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`btn ${filter === 'web' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button
              className={`btn ${filter === 'app' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('app')}
            >
              Apps
            </button>
          </div>
        </div>

        <motion.div
          className={styles.portfolioGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: prefersReducedMotion ? 'tween' : 'spring' }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={itemVariants}
            >
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.projectImage}
                  loading={index < 3 ? "eager" : "lazy"} /* Load first 3 images eagerly */
                  fetchPriority={index < 3 ? "high" : "auto"} /* High priority for first 3 */
                  quality={75} /* Reduce quality slightly for better performance */
                />
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

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

                <div className={styles.projectFooter}>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      Visit Website
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  ) : (
                    <span></span>
                  )}

                  <div className={`${styles.projectStatus} ${project.status === 'Live' ? styles.live : ''}`}>
                    {project.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
