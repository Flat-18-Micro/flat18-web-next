'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/component-css/Contact.module.css'

export default function ContactStatic() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email body
    const subject = `New Project Inquiry: ${formData.projectType}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}

Message:
${formData.message}
    `.trim()
    
    // Open email client
    window.location.href = `mailto:hello@flat18.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

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

  const formVariants = {
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
    <section className={styles.contactSection} id="chat">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.heading}>
          <h2 className={styles.title}>Let's Start Your Project</h2>
          <p className={styles.subtitle}>
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>

        <motion.div
          className={styles.formCard}
          variants={formVariants}
        >
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectType" className={styles.label}>Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select project type</option>
                  <option value="Website">Website</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Crypto/Web3">Crypto/Web3</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="message" className={styles.label}>Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project goals"
                  className={styles.textarea}
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className={styles.formSubmit}>
              <button
                type="submit"
                className={styles.submitButton}
              >
                <span>Send Email</span>
                <i className="bi bi-envelope"></i>
              </button>
            </div>
            
            <div className={styles.formNote}>
              <p>
                <i className="bi bi-info-circle"></i> This form will open your email client to send us a message.
              </p>
            </div>
          </form>
        </motion.div>

        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <i className={`bi bi-envelope ${styles.infoIcon}`}></i>
            <span className={styles.infoText}>
              <a href="mailto:hello@flat18.co.uk" className={styles.infoLink}>hello@flat18.co.uk</a>
            </span>
          </div>

          <div className={styles.infoItem}>
            <i className={`bi bi-geo-alt ${styles.infoIcon}`}></i>
            <span className={styles.infoText}>127.0.0.1, ::1</span>
          </div>

          <div className={styles.infoItem}>
            <i className={`bi bi-clock ${styles.infoIcon}`}></i>
            <span className={styles.infoText}>Mon-Fri: 12:00 - 20:00 UTC</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
