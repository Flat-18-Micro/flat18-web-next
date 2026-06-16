'use client'

import { useState } from 'react'
import styles from '../styles/component-css/Contact.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'
import { openChatwoot } from '@/utils/chatwoot'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fetchGeoInsight = async () => {
    try {
      const response = await fetch('/api/geo-ip', { cache: 'no-store' })
      if (!response.ok) {
        console.warn('Geo lookup failed', response.status)
        return null
      }

      const payload = await response.json()
      return payload?.data || null
    } catch (error) {
      console.warn('Geo lookup error', error)
      return null
    }
  }

  const appendGeoMetadata = async (message) => {
    try {
      const geoData = await fetchGeoInsight()
      const geoMetadata = buildGeoMetadata(geoData)
      return `${message}\n\n---\nGeo Insight (auto-added)\n${geoMetadata}`
    } catch (error) {
      console.warn('Geo enrichment skipped', error)
      return message
    }
  }

  const buildGeoMetadata = (geoData) => {
    if (!geoData) {
      return 'Geo IP insight unavailable'
    }

    const locationParts = [geoData.city, geoData.country].filter(Boolean)
    const location = locationParts.length ? locationParts.join(', ') : 'Unknown location'
    const coordinates = (geoData.lat || geoData.lon)
      ? `${geoData.lat ?? '?'} , ${geoData.lon ?? '?'}`
      : 'Unknown coordinates'
    const accuracy = geoData.radius_km ? `±${geoData.radius_km} km` : 'n/a'
    const timezone = geoData.timezone || 'Unknown timezone'
    const network = geoData.network ? `Network: ${geoData.network}` : null
    const asn = geoData.asn || geoData.org
      ? `ASN: ${geoData.asn ?? 'n/a'}${geoData.org ? ` (${geoData.org})` : ''}`
      : null

    return [
      `IP: ${geoData.ip || 'Unknown IP'}`,
      location,
      `Timezone: ${timezone}`,
      `Coordinates: ${coordinates} (${accuracy})`,
      network,
      asn
    ].filter(Boolean).join('\n')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const messageWithGeo = await appendGeoMetadata(formData.message)

      const response = await fetch('https://mailgun-contact.cloudflare-7fd.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          message: messageWithGeo
        })
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
          budget: '',
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

  const visualGlowStyle = {
    position: 'absolute',
    inset: '-18%',
    background: 'radial-gradient(circle at 18% 18%, rgba(24, 58, 143, 0.16), transparent 36%), radial-gradient(circle at 84% 18%, rgba(154, 107, 52, 0.12), transparent 32%), radial-gradient(circle at 50% 78%, rgba(255, 255, 255, 0.08), transparent 40%)',
    opacity: 0.95,
    pointerEvents: 'none',
  }

  const visualIntroStyle = {
    display: 'grid',
    gap: '0.6rem',
    padding: '1.1rem 1.15rem 1.2rem',
    border: '1px solid var(--border-soft)',
    background: 'var(--surface-glass)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  }

  const visualEyebrowStyle = {
    fontSize: '.72rem',
    textTransform: 'uppercase',
    letterSpacing: '.14em',
    color: 'var(--text-tertiary)',
    fontWeight: 700,
  }

  const visualIntroTitleStyle = {
    margin: 0,
    color: 'var(--fg)',
    fontFamily: 'var(--font-heading)',
    fontSize: '1.55rem',
    lineHeight: 1.1,
    fontWeight: 600,
  }

  const visualIntroTextStyle = {
    margin: 0,
    color: 'var(--text-secondary)',
    fontSize: '.95rem',
    lineHeight: 1.65,
    maxWidth: '32ch',
  }

  const visualCtaStyle = {
    display: 'grid',
    gap: '0.85rem',
    padding: '1rem 1.05rem',
    border: '1px solid var(--border-soft)',
    background: 'var(--surface-glass)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  }

  const visualCtaTextStyle = {
    margin: 0,
    color: 'var(--text-secondary)',
    fontSize: '.95rem',
    lineHeight: 1.6,
  }

  const visualCtaActionsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.7rem',
  }

  return (
    <section
      className={styles.contactSection}
      id="contact-form"
      data-bg-color={getSectionBackground('contact')}
      data-text-color={getSectionTextColor('contact')}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Tell us what you want to build</h2>
          <p className={styles.subtitle}>
            Share the goal, deadline and current state. We will reply with the best route and next step.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div>
            <div className={styles.formCard}>
          {isSubmitted ? (
            <div className={styles.successState}>
              <h4>Thank you.</h4>
              <p className="text-tertiary">
                We have received your enquiry and will reply with the best next step.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Your name</label>
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
                  <label htmlFor="email" className={styles.label}>Email address</label>
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
                  <label htmlFor="projectType" className={styles.label}>Project type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select project type (optional)</option>
                    <option value="mvp-sprint">MVP Sprint</option>
                    <option value="complete-product">Product Build</option>
                    <option value="ongoing-studio">Ongoing Studio</option>
                    <option value="llm-workflow">LLM workflow or internal tool</option>
                    <option value="takeover">Take over an existing product</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="budget" className={styles.label}>Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select budget (optional)</option>
                    <option value="discovery">Discovery budget only</option>
                    <option value="3500-plus">Starting at £3,500</option>
                    <option value="12000-plus">Starting at £12,000</option>
                    <option value="30000-plus">£30,000+</option>
                    <option value="monthly">Monthly studio support</option>
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="message" className={styles.label}>Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="What are you building, who is it for, and what would make the first release useful?"
                    className={styles.textarea}
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div className={styles.formSubmit}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  style={{ color: 'var(--button-on-primary, #fff)' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <span>Start the conversation</span>
                      <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <i className={`bi bi-envelope ${styles.infoIcon}`} aria-hidden="true"></i>
            <span className={styles.infoText}>
              <a href="mailto:hello@flat18.co.uk" className={styles.infoLink}>hello@flat18.co.uk</a>
            </span>
          </div>

          <div className={styles.infoItem}>
            <i className={`bi bi-geo-alt ${styles.infoIcon}`} aria-hidden="true"></i>
            <span className={styles.infoText}>Remote-first team</span>
          </div>

          <div className={styles.infoItem}>
            <i className={`bi bi-clock ${styles.infoIcon}`} aria-hidden="true"></i>
            <span className={styles.infoText}>Mon-Fri: 12:00 - 20:00 UTC</span>
          </div>
        </div>
        </div>

        <div className={styles.visualElement}>
          <div style={visualGlowStyle} aria-hidden="true"></div>
          <div className={styles.visualElementContent}>
            <div style={visualCtaStyle}>
              <span style={visualEyebrowStyle}>Quick contact</span>
              <p style={visualCtaTextStyle}>
                Need a quicker back-and-forth? Open live chat or message us on Telegram.
              </p>
              <div style={visualCtaActionsStyle}>
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  onClick={openChatwoot}
                  aria-label="Open live chat"
                >
                  <span className="btn-text">Live chat</span>
                  <i className="bi bi-chat-dots" aria-hidden="true"></i>
                </button>
                <a
                  href="https://t.me/flat18_bot"
                  className="btn btn-secondary btn-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-text">Telegram</span>
                  <i className="bi bi-telegram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            {/* <div className={styles.assuranceItem}>
              <i className="bi bi-clock" aria-hidden="true"></i>
              <div>
                <h3>Fast, useful reply</h3>
                <p>We will reply with the route, likely timeline and next step within 1-2 working days.</p>
              </div>
            </div>
            <div className={styles.assuranceItem}>
              <i className="bi bi-shield-check" aria-hidden="true"></i>
              <div>
                <h3>Confidential by default</h3>
                <p>Your ideas, data and plans are treated with care.</p>
              </div>
            </div> */}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
