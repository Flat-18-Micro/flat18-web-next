'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/component-css/Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://mailgun-contact.cloudflare-7fd.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: '',
        })
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again or email us directly at hello@flat18.co.uk')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.heading}>
          <h2 className={styles.title}>Tell Us About Your Project</h2>
          <p className={styles.subtitle}>
            Jump on live chat or fill in the form — we'll get back within a day.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div>
            <motion.div
              className={styles.formCard}
              variants={formVariants}
            >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
              <p className="text-tertiary">
                We've received your inquiry and will contact you shortly.
              </p>
            </div>
          ) : (
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
                    <option value="website">Website</option>
                    <option value="webapp">Web Application</option>
                    <option value="crypto">Crypto/Web3</option>
                    <option value="other">Other</option>
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <span>Start Your Project</span>
                      <i className="bi bi-arrow-right"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
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
        </div>

        <motion.div
          className={styles.visualElement}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles.visualElementInner}></div>
          <div className={styles.visualElementGrid}></div>
          <div className={styles.visualElementContent}>
            <i className="bi bi-chat-square-text" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--secondary)' }}></i>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Let's chat about your project</h3>
            <p style={{ opacity: 0.8, maxWidth: '80%', margin: '0 auto' }}>
              We're here to turn your ideas into reality with our design and development know-how.
            </p>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
