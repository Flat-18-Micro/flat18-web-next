'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function UiUxDesignPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — UI/UX Design Services'
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
            <h1 className={styles.pageHeading}>UI/UX Design Services</h1>
            <div className={styles.badge}>Beautiful, Usable Interfaces</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 creates elegant, intuitive digital interfaces that delight users and drive engagement. Our UI/UX design is led by senior designers and informed by user research—perfect for startups and scale-ups seeking a premium digital presence.
              </p>

              <h2>Why Flat 18 for UI/UX?</h2>
              <ul>
                <li>Expert-led design team</li>
                <li>Bespoke solutions for ambitious brands</li>
                <li>User-centred, research-driven approach</li>
                <li>Consistent, accessible, and visually stunning results</li>
              </ul>

              <h2>Our UI/UX Design Expertise</h2>
              <p>
                We blend creative flair with evidence-based strategy to craft interfaces that are both beautiful and highly functional.
              </p>

              <h3>User Interface (UI) Design</h3>
              <p>
                We design visually distinctive interfaces that reflect your brand and resonate with your audience, while prioritising clarity and ease of use.
              </p>

              <h3>User Experience (UX) Design</h3>
              <p>
                Our UX process maps user journeys, optimises flows, and ensures every interaction is seamless—maximising satisfaction and conversion.
              </p>

              <h3>User Research & Testing</h3>
              <p>
                We conduct in-depth research to understand your users’ needs and behaviours, validating designs through rapid prototyping and user feedback.
              </p>

              <h3>Wireframes & Interactive Prototypes</h3>
              <p>
                Early wireframes and clickable prototypes help us refine concepts and ensure alignment before development begins.
              </p>

              <h3>Design Systems & Brand Consistency</h3>
              <p>
                We build comprehensive design systems—component libraries, style guides, and principles—to support consistency and accelerate future development.
              </p>

              <h3>Responsive & Accessible Design</h3>
              <p>
                Every interface is crafted to work perfectly across all devices and meets accessibility standards for an inclusive experience.
              </p>

              <h2>Our Design Process</h2>
              <ol>
                <li><strong>Discovery & Research:</strong> Understand your business, users, and market context.</li>
                <li><strong>User Personas & Journey Mapping:</strong> Define user types and their goals.</li>
                <li><strong>Information Architecture:</strong> Structure content and features logically.</li>
                <li><strong>Wireframing:</strong> Sketch layouts and user flows.</li>
                <li><strong>Visual Design:</strong> Develop a cohesive visual language.</li>
                <li><strong>Prototyping & Testing:</strong> Validate ideas with real users and iterate.</li>
                <li><strong>Developer Handover:</strong> Provide detailed specs for seamless implementation.</li>
              </ol>

              <h2>Design Tools We Use</h2>
              <ul>
                <li>Figma (collaborative design & prototyping)</li>
                <li>Affinity by Serif Suite</li>
              </ul>

              <h2>Transform Your Digital Experience</h2>
              <p>
                Contact Flat 18 to discuss your UI/UX design needs. Our expert team will help you create a digital product that captivates users and elevates your brand.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
