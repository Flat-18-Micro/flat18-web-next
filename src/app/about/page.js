'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
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
      <Navbar />
      <section className={styles.pageWrapper}>
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
              <p>At Flat 18, we specialise in delivering cutting-edge solutions in the ever-evolving realms of Bitcoin, cryptocurrency, and Web3 technologies. With over a decade of experience, Flat 18 LLC was officially established in 2017, built on a foundation of innovation, technical excellence, and commitment to quality. Our portfolio includes high-impact projects such as BTCPay Server and Wallet Scrutiny—initiatives that contribute meaningfully to the global crypto landscape. Additionally, we've developed Web3 solutions for international markets, including exchange and payment utilities for Nigeria's NairaEx. These are just a few examples of the transformative work we're proud to lead.</p>
              
              <h2>A Fearless Approach to Problem Solving</h2>
              <p>At Flat 18, we believe that innovation thrives when fear is removed from the equation. This philosophy drives our approach to every project, whether we're creating advanced dashboards for veToken or custom payments processors for Bitcoin and Ethereum +ERC-20. We embrace challenges head-on, viewing obstacles as opportunities for growth and refinement. Our development process is agile yet meticulous, allowing us to adapt and respond swiftly while maintaining the high standards that ensure long-term reliability and success.</p>
              
              <h2>Client-Centred Collaboration</h2>
              <p>Building strong, trusting relationships with our clients is at the heart of Flat 18. Our development process is both collaborative and transparent, providing clients with as much or as little involvement as they prefer. Through the use of best-in-class tools, like Git for version control, we offer a seamless workflow where clients can stay informed and engaged at every step. We pride ourselves on delivering projects that not only meet but exceed expectations, ensuring satisfaction at every critical juncture. Our promise is to continuously refine our work until it reaches a level of perfection our clients expect.</p>
              
              <h2>Sophisticated and Scalable Solutions</h2>
              <p>We believe in delivering solutions that are both sophisticated and scalable. Our approach leverages the best of modern technologies, from world-class serverless infrastructure to advanced software libraries. We are experts at maximising the efficiency of our builds, creating high-performance systems that are secure, resilient, and capable of scaling to meet your business's needs. Our curated selection of industry-leading platforms—like GitHub, Vercel, and Neon Postgres—ensures that each project is built on a robust and future-proof foundation, but never at the expense of quality or ambition.</p>
              
              <h2>What Sets Flat 18 Apart</h2>
              <p>Flat 18 is distinguished by our ability to deliver complex, high-value projects with a focus on craftsmanship and attention to detail. Our clients trust us to handle every element of their project, from the initial concept through to post-launch support, knowing that we'll deliver exceptional results every time. We specialise in working with cutting-edge technologies, including blockchain and Web3, and are committed to ensuring that every solution we provide is not only innovative but built to the highest industry standards. Our goal is to provide the level of service and expertise that lets our clients feel confident, whether they wish to be deeply involved or leave the finer details to us.</p>
              
              <p>The future of technology is rich with potential, and Flat 18 is here to help you harness it.</p>
              <p>Let's create something extraordinary together. ♥️☘️</p>
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
