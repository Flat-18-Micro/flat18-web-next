'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import styles from '@/styles/component-css/PageStyles.module.css'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function AiPromptEngineeringPage() {
  useEffect(() => {
    document.title = 'Flat18 — AI Prompt Engineering'
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
            <h1 className={styles.pageHeading}>AI Prompt Engineering</h1>
            <div className={styles.badge}>Precision Guidance for LLMs</div>
            <div className={styles.textContent}>
              <p>We design, test, and optimise prompts to drive reliable, high-quality outputs from large language models (LLMs).</p>
              <h2>What We Offer</h2>
              <ul>
                <li>Prompt frameworks for marketing, design, and development workflows</li>
                <li>Data injection strategies and memory structures</li>
                <li>Few-shot examples and fallback control flows</li>
                <li>Structured output guarantees (JSON, Markdown, tabular)</li>
              </ul>
              <p>Whether you're building chatbots, UI generators, or multi-step AI agents, we ensure your prompts deliver consistent and useful results.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}