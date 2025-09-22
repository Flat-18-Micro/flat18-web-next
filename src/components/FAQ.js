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
          "name": "What is Availability?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We operate with limited active spaces per month, usually no more than 2 active clients per developer. This ensures you and your project get the attention required for success."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From £2,995/month. Quarterly −15%. Pause/cancel anytime. This covers dedicated development time and ensures consistent progress on your project."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in modern web technologies including Next.js, React, Vue.js, Node.js, and various blockchain technologies. We're also experienced with headless CMS solutions and modern deployment platforms like Vercel, Netlify, and AWS."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines vary based on complexity and scope. A typical website redesign might take 4-6 weeks, while more complex applications can take 2-3 months or more. We'll provide a detailed timeline during our initial consultation."
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
      question: "What is Availability?",
      answer: "We operate with limited active spaces per month, usually no more than 2 active clients per developer. This ensures you and your project get the attention required for success."
    },
    {
      question: "How much does it cost?",
      answer: "From £2,995/month. Quarterly −15%. Pause/cancel anytime. This covers dedicated development time and ensures consistent progress on your project."
    },
    {
      question: "Why the subscription model?",
      answer: "Our subscription model ensures consistent, dedicated development time for your project. It allows us to plan resources effectively and offer better rates for longer commitments."
    },
    {
      question: "What if I need a different timeframe?",
      answer: "We're flexible and can accommodate different project timeframes. Contact us to discuss your specific needs and we'll find a solution that works for you."
    },
    {
      question: "How long will my project take to complete?",
      answer: "Project timelines vary depending on complexity. A typical website takes 4-8 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with teams?",
      answer: "Yes, we collaborate effectively with in-house teams and other contractors. Our experience in team environments helps ensure smooth integration with your existing workflow."
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
