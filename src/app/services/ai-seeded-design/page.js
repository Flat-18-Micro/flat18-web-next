'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AiSeededDesignPage() {
  useEffect(() => {
    document.title = 'Flat18 — AI-Seeded Design & Graphics'
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
            <h1 className={styles.pageHeading}>AI-Seeded Design & Graphics</h1>
            <div className={styles.badge}>Imagination, Accelerated</div>
            <div className={styles.textContent}>
              <p>We use generative AI to accelerate concept development, visual iteration, and production of high-fidelity assets.</p>
              <h2>Design with AI</h2>
              <ul>
                <li>Concept art and layout inspiration via AI image tools</li>
                <li>Asset generation from prompts and brand data</li>
                <li>AI-enhanced illustration and compositing</li>
                <li>Midjourney, DALL·E, and custom fine-tuning</li>
              </ul>
              <p>Whether it's hero graphics, icons, or unique aesthetics—our designers guide AI to deliver tailored, production-ready visuals.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}