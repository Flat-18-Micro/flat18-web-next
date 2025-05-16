'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'
import Features from '@/components/Features'

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
            <Features/>
          </motion.div>
        </motion.div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}