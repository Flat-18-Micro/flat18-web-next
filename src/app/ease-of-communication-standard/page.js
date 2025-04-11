'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function EaseOfCommunicationStandardPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — Ease of Communication Standard'
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
            <h1 className={styles.pageHeading}>FLAT18 Ease of Communication Standard (F18 EoCS)</h1>
            <div className={styles.badge}>Partially Updated: JUNE 2024</div>
            
            <div className={`${styles.textContent} ${styles.legalContent}`}>
              <p>This document is aligned with the Flat18 Ease of Communication Standard (F18 EoCS) as of January 2024.</p>
              
              <h3>Introduction</h3>
              <p>At Flat18, we believe in keeping things clear and simple. We want our documentation and communication to be easy for everyone to understand. The Flat18 Ease of Communication Standard (F18 EoCS) is our promise to use plain English and avoid complicated or confusing language.</p>
              
              <h3>Purpose</h3>
              <p>This document provides guidelines to help us simplify our communication. Our aim is to make our information more accessible, reduce misunderstandings, and improve overall communication for both our customers and team members.</p>
              
              <h3>Guidelines</h3>
              
              <h4>Use Plain English</h4>
              <ul role="list">
                <li><strong>Avoid Jargon:</strong> Skip the technical terms or industry jargon unless absolutely necessary. If you need to use them, make sure to explain them clearly.</li>
                <li><strong>Simple Words:</strong> Use everyday language instead of complex or fancy words.</li>
                <li><strong>Active Voice:</strong> Use active voice for clarity and directness. For example, say "We will complete the project by Friday" instead of "The project will be completed by Friday."</li>
              </ul>
              
              <h4>Be Concise</h4>
              <ul role="list">
                <li><strong>Short Sentences:</strong> Keep sentences short and to the point.</li>
                <li><strong>Paragraphs:</strong> Break up long paragraphs into shorter ones to make them easier to read.</li>
                <li><strong>Bullet Points:</strong> Use bullet points or numbered lists to break down information into manageable chunks.</li>
              </ul>
              
              <h4>Be Direct and Specific</h4>
              <ul role="list">
                <li><strong>Clear Instructions:</strong> Give clear, specific instructions and avoid vague terms.</li>
                <li><strong>Avoid Redundancy:</strong> Cut out unnecessary words or repetitive information.</li>
              </ul>
              
              <h4>Use Positive Language</h4>
              <ul role="list">
                <li><strong>Positive Tone:</strong> Keep the tone positive and friendly.</li>
                <li><strong>Focus on Solutions:</strong> Highlight solutions and positive outcomes rather than problems.</li>
              </ul>
              
              <h4>Test for Readability</h4>
              <ul role="list">
                <li><strong>Read Aloud:</strong> Read your text aloud to check for natural flow and simplicity.</li>
                <li><strong>Feedback:</strong> Get feedback from colleagues or customers to ensure clarity.</li>
              </ul>
              
              <h4>Provide Context</h4>
              <ul role="list">
                <li><strong>Background Information:</strong> Provide background information when necessary to help the reader understand the context.</li>
                <li><strong>Examples:</strong> Use examples to illustrate complex points or instructions.</li>
              </ul>
              
              <h4>Visual Aids</h4>
              <ul role="list">
                <li><strong>Images and Diagrams:</strong> Use images, diagrams, or infographics to visually explain complex ideas.</li>
                <li><strong>Consistent Formatting:</strong> Keep formatting consistent for headings, bullet points, and numbering to make documents easier to navigate.</li>
              </ul>
              
              <h4>Review and Revise</h4>
              <ul role="list">
                <li><strong>Regular Updates:</strong> Regularly review and update documents to keep them clear and relevant.</li>
                <li><strong>Peer Review:</strong> Have another team member review your communication for clarity and simplicity.</li>
              </ul>
              
              <h3>Implementation</h3>
              <p>All Flat18 team members should get to know the F18 EoCS and apply these guidelines in their daily communication. This includes emails, reports, project documentation, customer interactions, and website content.</p>
              
              <h3>Conclusion</h3>
              <p>The Flat18 Ease of Communication Standard is our commitment to clear, accessible, and effective communication. By following these guidelines, we aim to make our interactions more understandable and enjoyable for everyone involved.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  )
}
