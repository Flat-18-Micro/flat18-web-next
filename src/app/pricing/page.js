'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PricingPage.module.css'

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const faqs = [
    {
      question: "How does your subscription model work?",
      answer: "Our subscription model provides you with dedicated development time each month. You pay a fixed monthly or quarterly fee, and we allocate resources to your project. This ensures consistent progress and allows us to plan effectively, resulting in better rates for longer commitments."
    },
    {
      question: "What if I need more development hours?",
      answer: "If you need additional development hours beyond your subscription, we can accommodate that. We'll discuss your needs and either temporarily increase your subscription level or add extra hours at our standard rate. We're flexible and can adapt to your project's changing requirements."
    },
    {
      question: "Can I pause my subscription?",
      answer: "Yes, you can pause your subscription with advance notice. We understand that project needs can fluctuate. Please note that pausing may affect your place in our development queue when you resume, but we'll do our best to minimize any disruption to your project timeline."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments in multiple currencies including GBP, USD, EUR, and cryptocurrencies like Bitcoin and Ethereum. Our payment system automatically converts between currencies to provide you with flexible payment options that suit your needs."
    },
    {
      question: "Is there a minimum commitment period?",
      answer: "While we don't enforce a strict minimum commitment, our pricing structure is designed to reward longer commitments with better rates. Quarterly billing offers significant savings compared to monthly billing. Most projects typically require at least 3-6 months to complete, depending on complexity."
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — Pricing'

    // Initialize any necessary scripts or analytics
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      if (location.href.indexOf("300") < 0) {
        location.href = location.href.replace("http://", "https://")
      }
    }

    // Fetch metrics data if needed
    const q = localStorage && localStorage.getItem("webM") ? `&webM=${localStorage.getItem("webM")}` : ""
    fetch('https://api.flat18.co.uk/metrics/webm/index.php?geo=1' + q)
      .then(response => response.json())
      .then(data => {
        window.webM = data.webM
        window.geoCityCountry = data.geo
        let persist = localStorage && localStorage.getItem("webM") ? localStorage.getItem("webM") : data.webM
        localStorage.setItem("webM", persist)
      })
      .catch(error => console.log('Metrics fetch error:', error))
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

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <main>
      <section className={styles.pricingPageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <motion.div
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={contentVariants}>
            <h1 className={styles.pageHeading}>Our Pricing</h1>
            <div className={styles.pricingIntro}>
              <p className={styles.pricingIntroText}>
                At Flat 18, we believe in transparent, value-based pricing that aligns with your business goals.
                Our subscription model ensures you receive consistent, high-quality support for your digital presence.
              </p>
            </div>
          </motion.div>

          <Pricing />

          <div id="more-info" className={styles.pricingDetailsSection}>
            <h2 className={styles.sectionHeading}>What's Included</h2>

            <motion.div
              className={styles.detailsGrid}
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div className={styles.detailCard} variants={itemVariants}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-code-slash"></i>
                </div>
                <h3 className={styles.detailTitle}>Full-Stack Development</h3>
                <p className={styles.detailText}>Our team handles both frontend and backend development, ensuring a seamless, integrated solution for your digital needs.</p>
              </motion.div>

              <motion.div className={styles.detailCard} variants={itemVariants}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-palette"></i>
                </div>
                <h3 className={styles.detailTitle}>UI/UX Design</h3>
                <p className={styles.detailText}>We create intuitive, engaging user interfaces and experiences that align with your brand and business goals.</p>
              </motion.div>

              <motion.div className={styles.detailCard} variants={itemVariants}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-headset"></i>
                </div>
                <h3 className={styles.detailTitle}>Technical Support</h3>
                <p className={styles.detailText}>Ongoing support to address any technical issues or questions that arise during and after development.</p>
              </motion.div>

              <motion.div className={styles.detailCard} variants={itemVariants}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-kanban"></i>
                </div>
                <h3 className={styles.detailTitle}>Project Management</h3>
                <p className={styles.detailText}>Dedicated project management to ensure your project stays on track, on budget, and meets all requirements.</p>
              </motion.div>

              <motion.div className={styles.detailCard} variants={itemVariants}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-phone"></i>
                </div>
                <h3 className={styles.detailTitle}>Responsive Design</h3>
                <p className={styles.detailText}>All our websites and applications are built to work flawlessly across all devices and screen sizes.</p>
              </motion.div>

              <motion.div className={styles.detailCard} variants={itemVariants}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-search"></i>
                </div>
                <h3 className={styles.detailTitle}>SEO Optimization</h3>
                <p className={styles.detailText}>We implement best practices for search engine optimization to help your site rank higher in search results.</p>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>

        <div className={styles.container}>
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  )
}
