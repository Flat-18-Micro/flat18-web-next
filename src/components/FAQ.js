'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/component-css/FAQ.module.css'

export default function FAQ() {
  const faqs = [
    {
      question: "What is Availability?",
      answer: "We operate with limited active spaces per month, usually no more than 2 active clients per developer. This ensures you and your project get the attention required for success."
    },
    {
      question: "How much does it cost?",
      answer: "Our pricing starts at £37.50 per hour. For a typical project with around 80 development hours per month, this comes to approximately £3,000 per month. We offer discounts for longer commitments, with quarterly billing offering around 15% savings."
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
    <section className={styles.faqWrapper} id="faq">
      <div className={styles.backgroundGradient}></div>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.textOrg}>
          <h2 className={styles.gradientText}>Commonly Asked Questions</h2>
          <p className={styles.subtitle}>Find answers to common questions about our services</p>
        </div>

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
      </motion.div>
    </section>
  )
}
