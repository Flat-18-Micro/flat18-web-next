'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function MaintenanceSupportPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — Maintenance & Support Services'
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
            <h1 className={styles.pageHeading}>Maintenance & Support Services</h1>
            <div className={styles.badge}>Reliable, Proactive Care</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 provides premium maintenance and support for your websites and digital products. Our expert team ensures your assets remain secure, up-to-date, and performing at their best—so you can focus on scaling your business.
              </p>

              <h2>Why Flat 18 for Support?</h2>
              <ul>
                <li>Senior technical support—no call centres</li>
                <li>Proactive monitoring, regular updates, and security-first approach</li>
                <li>Flexible plans for startups and high-traffic scale-ups</li>
                <li>Clear communication and rapid response</li>
              </ul>

              <h2>Our Maintenance & Support Expertise</h2>
              <p>
                Launching your site or app is just the beginning. We provide continuous care, swiftly addressing issues and delivering ongoing improvements.
              </p>

              <h3>Proactive Maintenance</h3>
              <p>
                We prevent problems before they arise—applying updates, security patches, and performance optimisations to keep your digital assets in peak condition.
              </p>

              <h3>24/7 Technical Support</h3>
              <p>
                Our expert team is available around the clock to resolve issues, with guaranteed response times and multiple support channels.
              </p>

              <h3>Security Monitoring & Updates</h3>
              <p>
                We continuously monitor for vulnerabilities and implement updates to protect your data and users from emerging threats.
              </p>

              <h3>Performance Optimisation</h3>
              <p>
                We regularly analyse and tune your site or app for speed and efficiency—boosting user experience and search rankings.
              </p>

              <h3>Content Management & Updates</h3>
              <p>
                Need content changes? We keep your site fresh and relevant, handling everything from product updates to new blog posts.
              </p>

              <h3>Backup & Disaster Recovery</h3>
              <p>
                Robust backup solutions and recovery procedures ensure your data is safe and business continuity is never at risk.
              </p>

              <h2>Flexible Support Plans</h2>
              <p>
                Choose from support plans tailored to your needs:
              </p>
              <h3>Essential Support</h3>
              <p>
                Regular updates, security patches, and email support during business hours—ideal for smaller sites and apps.
              </p>

              <h3>Premium Support</h3>
              <p>
                All Essential features plus priority response, phone support, and monthly performance reports—perfect for business-critical platforms.
              </p>

              <h3>Enterprise Support</h3>
              <p>
                Comprehensive cover: 24/7 support, dedicated staff, emergency response, and quarterly strategy reviews—for high-traffic, complex digital estates.
              </p>

              <h2>Benefits of Partnering with Flat 18</h2>
              <ul>
                <li><strong>Peace of Mind:</strong> Experts safeguarding your digital assets</li>
                <li><strong>Stronger Security:</strong> Stay protected against evolving threats</li>
                <li><strong>Peak Performance:</strong> Fast, reliable sites and apps</li>
                <li><strong>Minimal Downtime:</strong> Rapid issue resolution</li>
                <li><strong>Cost Savings:</strong> Prevent costly emergencies</li>
                <li><strong>Focus on Growth:</strong> Let us handle the technical details</li>
              </ul>

              <h2>Secure Your Digital Success</h2>
              <p>
                Contact Flat 18 to discuss your maintenance and support needs. Our team will keep your digital products running smoothly, securely, and ready for growth.
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
