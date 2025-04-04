'use client'

import { useState } from 'react'
import Button from './Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically handle form submission
    // For now, we'll just console.log the data
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="content contact-wrapper" id="chat">
      <div className="text-org">
        <h2 className="gradient-text red">Let's Start Your Project</h2>
        <p className="subtitle">Book a free consultation to discuss your needs</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-block">
            <div className="info-icon">
              <i className="bi bi-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>hello@flat18.co.uk</p>
          </div>
          <div className="info-block">
            <div className="info-icon">
              <i className="bi bi-geo-alt"></i>
            </div>
            <h3>Location</h3>
            <p>London, United Kingdom</p>
          </div>
          <div className="info-block">
            <div className="info-icon">
              <i className="bi bi-clock"></i>
            </div>
            <h3>Working Hours</h3>
            <p>Mon-Fri: 9:00 - 18:00 GMT</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectType">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select type</option>
                <option value="website">Website</option>
                <option value="webapp">Web Application</option>
                <option value="mobile">Mobile App</option>
                <option value="ecommerce">E-commerce</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="timeline">Timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
              >
                <option value="">Select timeline</option>
                <option value="1-2">1-2 months</option>
                <option value="3-6">3-6 months</option>
                <option value="6-12">6-12 months</option>
                <option value="ongoing">Ongoing</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select budget</option>
                <option value="3k-5k">£3,000 - £5,000 /month</option>
                <option value="5k-10k">£5,000 - £10,000 /month</option>
                <option value="10k+">£10,000+ /month</option>
                <option value="custom">Custom budget</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell us about your project and requirements"
              ></textarea>
            </div>
          </div>
          <div className="form-submit">
            <Button variant="hero" type="submit">Start Your Project</Button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .contact-wrapper {
          padding: 6rem 0;
        }
        .text-org {
          text-align: center;
          margin-bottom: 4rem;
        }
        .subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-top: 1rem;
        }
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-block {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
        }
        .info-icon {
          font-size: 2rem;
          color: var(--accent-color);
          margin-bottom: 1rem;
        }
        .info-block h3 {
          margin: 0 0 0.5rem;
          color: var(--text-primary);
        }
        .info-block p {
          margin: 0;
          color: var(--text-secondary);
        }
        .contact-form {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group.full-width {
          grid-column: 1 / -1;
        }
        label {
          color: var(--text-primary);
          font-size: 0.9rem;
        }
        input, textarea, select {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          padding: 0.75rem;
          color: var(--text-primary);
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: var(--accent-color);
        }
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1em;
        }
        textarea {
          resize: vertical;
        }
        .form-submit {
          margin-top: 2rem;
          text-align: right;
        }
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
} 