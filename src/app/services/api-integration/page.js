'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function ApiIntegrationPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — API Integration Services'
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
            <h1 className={styles.pageHeading}>API Integration Services</h1>
            <div className={styles.badge}>Seamless System Connectivity</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 offers premium API integration and bespoke API development for startups and scale-ups. We connect your digital products, automate workflows, and unlock new value by integrating with third-party platforms and services.
              </p>

              <h2>Why Trust Flat 18 for API Integration?</h2>
              <ul>
                <li>Senior engineers with broad integration experience</li>
                <li>Tailored, business-driven solutions</li>
                <li>Emphasis on reliability, security, and future scalability</li>
                <li>Transparent process and ongoing support</li>
              </ul>

              <h2>Our API Integration Expertise</h2>
              <p>
                We specialise in connecting disparate systems, automating manual processes, and enabling your digital products to communicate securely and efficiently.
              </p>

              <h3>Third-Party API Integration</h3>
              <p>
                We integrate your apps with external services—payments, CRMs, analytics, social media, and more—ensuring robust, reliable connections that extend your platform’s capabilities.
              </p>

              <h3>Bespoke API Development</h3>
              <p>
                Need to expose your own data or functionality? We design and build secure, well-documented APIs that enable easy integration with partners and internal systems.
              </p>

              <h3>API Strategy & Architecture</h3>
              <p>
                We help you define a future-proof API strategy, designing scalable architectures and clear documentation for maintainability and growth.
              </p>

              <h3>Microservices & Modular Systems</h3>
              <p>
                We implement microservices architectures, breaking down complex platforms into manageable, independent services that communicate via APIs.
              </p>

              <h3>API Security</h3>
              <p>
                Security is paramount. We implement authentication, authorisation, rate limiting, and data validation to protect your data and users from threats.
              </p>

              <h3>Testing & Monitoring</h3>
              <p>
                All integrations are rigorously tested, with real-time monitoring and alerting to ensure ongoing reliability and performance.
              </p>

              <h2>Our Integration Process</h2>
              <ol>
                <li><strong>Requirements Analysis:</strong> Define integration goals and business priorities.</li>
                <li><strong>API Evaluation:</strong> Assess documentation and capabilities of target APIs.</li>
                <li><strong>Architecture:</strong> Design secure, maintainable integration flows.</li>
                <li><strong>Development:</strong> Build and document integrations to high standards.</li>
                <li><strong>Testing:</strong> Validate reliability and performance under real-world conditions.</li>
                <li><strong>Deployment:</strong> Launch integrations into your production environment.</li>
                <li><strong>Documentation:</strong> Provide clear, comprehensive technical documentation.</li>
                <li><strong>Monitoring & Support:</strong> Ongoing monitoring and expert support.</li>
              </ol>

              <h2>Technologies We Work With</h2>
              <ul>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>SOAP, XML-RPC</li>
                <li>WebSockets (real-time communication)</li>
                <li>OAuth, JWT (secure authentication)</li>
                <li>Swagger/OpenAPI (API documentation)</li>
                <li>API gateways and management platforms</li>
              </ul>

              <h2>Connect and Grow</h2>
              <p>
                Contact Flat 18 to discuss your API integration requirements. Our expert team will help you streamline systems, automate processes, and add value to your digital products.
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
