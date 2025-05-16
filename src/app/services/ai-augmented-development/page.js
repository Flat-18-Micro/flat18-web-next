'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AiAugmentedDevelopmentPage() {
  useEffect(() => {
    document.title = 'Flat18 — AI-Augmented Development'
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } }
  }

  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>
        <motion.div className={styles.container} variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className={styles.pageContent} variants={contentVariants}>
            <h1 className={styles.pageHeading}>AI-Augmented Development</h1>
            <div className={styles.badge}>Faster, Smarter Code</div>
            <div className={styles.textContent}>
              <p>Flat 18 uses AI-assisted workflows to speed up development while improving code quality and maintainability.</p>
              <h2>Capabilities</h2>
              <ul>
                <li>Co-pilot integrations and fine-tuned LLMs for coding support</li>
                <li>Code scaffolding and refactoring using AI-generated templates</li>
                <li>Automated test generation and inline documentation</li>
                <li>Context-aware linting, debugging, and suggestions</li>
              </ul>
              <p>We build with AI, not just for AI. Accelerate your roadmap with intelligent development practices.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}