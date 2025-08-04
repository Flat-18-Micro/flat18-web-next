'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AboutPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — About us'
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2
      }
    }
  }

  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <motion.div
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.pageContent}
            variants={contentVariants}
          >
            <h1 className={styles.pageHeading}>Welcome to Flat 18</h1>


            <div className={styles.textContent}>
              <p>Flat 18 specialises in crafting forward‑thinking solutions across Bitcoin, cryptocurrency and Web3. With more than a decade in the game, Flat 18 LLC was formed in 2017 on a foundation of innovation, technical craft and obsessive quality. Our portfolio features high‑impact work like BTCPay Server and Wallet Scrutiny, plus Web3 tooling for global markets such as Nigeria’s NairaEx. These projects are just a glimpse of what we love to build.</p>

              <h2>Fearless problem solving</h2>
              <p>At Flat 18 we reckon innovation happens when the fear comes out of the equation. Whether it’s dashboards for veToken or bespoke payment processors for Bitcoin and Ethereum + ERC‑20, we tackle challenges head-on and treat obstacles as chances to learn. Our process is agile, considered and always focused on long‑term reliability.</p>

              <h2>Collaboration that works for you</h2>
              <p>Strong relationships sit at the heart of our work. We offer a collaborative and transparent development process where you can be as hands‑on or hands‑off as you like. Using tools like Git for version control, we keep you in the loop and deliver work that hits the mark at every step, refining until it’s spot on.</p>

              <h2>Built to scale</h2>
              <p>We create solutions that are both sophisticated and ready to grow. By leaning on world‑class serverless infrastructure and tried‑and‑tested libraries we build high‑performance systems that are secure, resilient and primed for your business needs. Platforms like GitHub, Vercel and Neon Postgres give every project a future‑proof foundation without clipping its ambition.</p>

              <h2>Why choose Flat 18</h2>
              <p>What sets us apart is our ability to deliver complex, high‑value projects with real craftsmanship. From concept to post‑launch support, clients trust us to handle every detail and to work with leading tech including blockchain and Web3. We’re committed to solutions that are innovative and built to the highest standard so you can feel confident whether you want to dive deep or leave the nitty‑gritty to us.</p>

              <p>The future of tech is full of potential and Flat 18 is here to help you tap into it.</p>
              <p>Let’s build something brilliant together. ♥️☘️</p>
            </div>
          </motion.div>
        </motion.div>

        <div className={styles.container}>
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  )
}
