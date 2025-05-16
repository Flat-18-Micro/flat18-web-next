'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AppDevelopmentPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — App Development Services'
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
            <h1 className={styles.pageHeading}>App Development Services</h1>
            <div className={styles.badge}>Expert-Led Digital Apps</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 designs and develops apps for startups and scale-ups. We deliver robust, scalable solutions using modern tech stacks, tailored to your business goals and user needs.
              </p>

              <h2>What Sets Our App Development Apart?</h2>
              <ul>
                <li>Bespoke apps for ambitious companies</li>
                <li>Senior engineers and designers on every project</li>
                <li>Agile, transparent process with rapid delivery</li>
                <li>Focus on usability, security, and future growth</li>
              </ul>

              <h2>Our App Development Expertise</h2>
              <p>
                We specialise in crafting digital products that combine powerful back-end logic with delightful user experiences.
              </p>

              <h3>Full-Stack App Development</h3>
              <p>
                From idea to launch, we handle everything: business logic, data processing, and seamless user journeys. Our integrated approach ensures your app is cohesive and maintainable.
              </p>

              <h3>Node.js & Modern Frameworks</h3>
              <p>
                We use Node.js for high-performance, scalable back-ends, and frameworks like React and Vue.js for sleek, interactive front-ends.
              </p>

              <h3>Serverless & Cloud-Native Solutions</h3>
              <p>
                Our serverless architectures (AWS Lambda, Vercel, Cloudflare Workers) enable automatic scaling and cost efficiency—ideal for startups expecting rapid growth.
              </p>

              <h3>Database Design & Integration</h3>
              <p>
                We design and implement efficient data storage using PostgreSQL, MySQL, MongoDB, or Firebase, ensuring your app is reliable and secure.
              </p>

              <h3>API-First Development</h3>
              <p>
                Our team builds robust APIs for seamless integration with third-party services and your wider digital ecosystem.
              </p>

              <h2>Our Proven Process</h2>
              <ol>
                <li><strong>Discovery:</strong> We clarify your objectives and technical needs.</li>
                <li><strong>Architecture:</strong> Scalable, maintainable blueprints for your app.</li>
                <li><strong>UI/UX:</strong> Intuitive and engaging user interfaces.</li>
                <li><strong>Development:</strong> Clean, testable code from experienced developers.</li>
                <li><strong>Testing:</strong> Comprehensive QA for performance and security.</li>
                <li><strong>Launch & Support:</strong> Smooth deployment and ongoing improvements.</li>
              </ol>

              <h2>Technologies We Use</h2>
              <ul>
                <li>Node.js, Express.js, NestJS</li>
                <li>React, Vue.js, Next.js</li>
                <li>PostgreSQL, MySQL, MongoDB, Firebase</li>
                <li>AWS, Vercel, Cloudflare</li>
                <li>Docker for containerisation</li>
                <li>GraphQL and REST APIs</li>
              </ul>

              <h2>Let’s Build Your Next App</h2>
              <p>
                Contact Flat 18 to discuss your app vision. Our expert team will help you launch a digital product that drives real business impact.
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
