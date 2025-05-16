'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

// Metadata is now handled in layout.js

export default function WebDevelopmentPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Web Development Services | Next.js & React Experts | Flat 18'

    // Add structured data for service
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Flat 18",
        "url": "https://flat18.co.uk"
      },
      "description": "Expert web development using Next.js, React and modern frameworks. Fast, SEO-optimized websites and applications for startups, scale-ups, and blockchain entrepreneurs.",
      "serviceType": "Web Development",
      "areaServed": {
        "@type": "Country",
        "name": "Global"
      },
      "offers": {
        "@type": "Offer",
        "price": "3000",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/LimitedAvailability"
      }
    }

    // Add the schema to the page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(serviceSchema)
    document.head.appendChild(script)

    // Clean up on unmount
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach(s => {
        if (s.text.includes('"@type":"Service"')) {
          document.head.removeChild(s)
        }
      })
    }
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
            <h1 className={styles.pageHeading}>Web Development Services</h1>
            <div className={styles.badge}>Premium Digital Solutions</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 delivers expert-led web development for ambitious startups and scale-ups. We craft bespoke websites and digital platforms using the latest frameworks, optimised for speed, SEO, and measurable business results.
              </p>

              <h2>Why Choose Flat 18?</h2>
              <ul>
                <li>Premium, tailored solutions for high-growth companies</li>
                <li>Senior team with deep technical and design expertise</li>
                <li>Transparent process and proactive communication</li>
                <li>Focus on performance, accessibility, and scalability</li>
              </ul>

              <h2>Our Web Development Expertise</h2>
              <p>
                We combine robust engineering with thoughtful design to deliver digital experiences that elevate your brand and convert your audience.
              </p>

              <h3>Bespoke Website Development</h3>
              <p>
                We build fully bespoke websites to suit your unique business goals. Whether you need a marketing site, a content platform, or an e-commerce solution, we ensure your site is distinctive and aligned with your strategy.
              </p>

              <h3>Modern Frameworks & Headless Architecture</h3>
              <p>
                Our team specialises in Next.js, React, and other modern frameworks, delivering lightning-fast, future-ready sites. We implement headless CMS solutions for flexible content management.
              </p>

              <h3>Performance & SEO Optimisation</h3>
              <p>
                Every build is engineered for speed, accessibility, and search visibility. We optimise code, images, and infrastructure to ensure your site ranks highly and loads instantly for all users.
              </p>

              <h3>Responsive, Accessible Design</h3>
              <p>
                Your website will look and perform flawlessly on every device, from desktop to mobile. We adhere to accessibility standards and best practices to ensure an inclusive experience.
              </p>

              <h3>Web App & Portal Development</h3>
              <p>
                Need more than a website? We create secure, scalable web apps and client portals with complex business logic, integrations, and user management.
              </p>

              <h2>Our Approach</h2>
              <ol>
                <li><strong>Discovery:</strong> We clarify your goals, audience, and technical requirements.</li>
                <li><strong>Design & Prototyping:</strong> Wireframes and visual concepts to align on direction.</li>
                <li><strong>Development:</strong> Clean, maintainable code built to the latest standards.</li>
                <li><strong>Quality Assurance:</strong> Rigorous testing for performance, security, and usability.</li>
                <li><strong>Deployment & Support:</strong> Seamless launch, with ongoing support and optimisation.</li>
              </ol>

              <h2>Technologies We Use</h2>
              <ul>
                <li>Next.js, React, and Vue.js</li>
                <li>Node.js for server-side logic</li>
                <li>Vercel, Netlify, AWS for hosting and deployment</li>
                <li>Headless CMS: Jekyll</li>
                <li>GraphQL and REST APIs</li>
                <li>CSS Modules, Tailwind CSS, Styled Components</li>
              </ul>

              <h2>Ready to Elevate Your Web Presence?</h2>
              <p>
                Get in touch to discuss your next web project. Flat 18’s expert team will help you build a digital platform that sets you apart and fuels your growth.
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
