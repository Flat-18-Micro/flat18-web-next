'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/component-css/FAQ.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

export default function FAQ() {
  useEffect(() => {
    // Add FAQ structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How fast can you ship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most scoped projects land in 2-12 weeks depending on complexity. Small tasks move in as little as 48 hours once we are active."
          }
        },
        {
          "@type": "Question",
          "name": "What does the fit call cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover goals, scope, timing, and whether we're the right team. If we're not a fit, we'll tell you quickly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle both design and engineering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We do product design, UX, UI, and full-stack engineering so you don't need to manage multiple vendors."
          }
        },
        {
          "@type": "Question",
          "name": "Are you only Web3?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We work across SaaS, fintech, and digital products. Web3 is optional, not required."
          }
        },
        {
          "@type": "Question",
          "name": "How does pricing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer a monthly subscription for ongoing momentum or fixed-scope quotes for defined projects. We'll recommend the right route on the fit call."
          }
        }
      ]
    }

    // Add the schema to the page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    // Clean up on unmount
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach(s => {
        if (s.text.includes('"@type":"FAQPage"')) {
          document.head.removeChild(s)
        }
      })
    }
  }, [])

  const faqs = [
    {
      question: "How fast can you ship?",
      answer: "Most scoped projects land in 2-12 weeks depending on complexity. Small tasks move in as little as 48 hours once we're active."
    },
    {
      question: "What does the fit call cover?",
      answer: "We cover goals, scope, timing, and whether we're the right team. If we're not a fit, we'll tell you quickly."
    },
    {
      question: "Do you handle both design and engineering?",
      answer: "Yes. We do product design, UX, UI, and full-stack engineering so you don't need to manage multiple vendors."
    },
    {
      question: "Are you only Web3?",
      answer: "No. We work across SaaS, fintech, and digital products. Web3 is optional, not required."
    },
    {
      question: "How does pricing work?",
      answer: "We offer a monthly subscription for ongoing momentum or fixed-scope quotes for defined projects. We'll recommend the right route on the fit call."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section
      className={styles.faqWrapper}
      id="faq"
      data-bg-color={getSectionBackground('faq')}
      data-text-color={getSectionTextColor('faq')}
    >
      <div className={styles.backgroundGradient}></div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.textOrg}>
          <h2 className={styles.gradientText}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Answers to the bits we get asked the most</p>
        </div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.visualElement}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className={styles.visualElementInner}></div>
            <div className={styles.visualElementGrid}></div>
            <div className={styles.visualElementContent}>
              <i className="bi bi-question-circle" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-yellow)' }}></i>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Still have questions?</h3>
              <p style={{ opacity: 0.8, maxWidth: '80%', margin: '0 auto 1.5rem' }}>
                We're here to help with anything else you'd like to know about your project.
              </p>
              <a href="#chat" style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(to right, var(--accent-orange), var(--accent-yellow))',
                color: 'var(--bg-dark)',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 203, 69, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <i className="bi bi-chat-text" style={{ marginRight: '0.5rem' }}></i>
                Chat with us
              </a>
            </div>
          </motion.div>

          <div>

          <motion.div
            className={styles.faqList}
            variants={listVariants}
          >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleFAQ(index)}
              variants={itemVariants}
            >
              <div className={styles.faqQuestion}>
                <h3 className={styles.questionText}>{faq.question}</h3>
                <div className={styles.faqIcon}>
                  <i className={`bi ${openIndex === index ? 'bi-dash' : 'bi-plus'}`}></i>
                </div>
              </div>
              <div className={styles.faqAnswer}>
                <p className={styles.answerText}>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
        </div>
      </motion.div>
    </section>
  )
}
