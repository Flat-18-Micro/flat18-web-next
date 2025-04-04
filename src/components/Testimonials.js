'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Flat 18 transformed our online presence. Their attention to detail and technical expertise exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "/images/testimonials/avatar1.avif"
    },
    {
      quote: "Working with Flat 18 was a game-changer for our business. They delivered a beautiful, high-performing website on time and on budget.",
      author: "Michael Chen",
      role: "Founder, InnovateCo",
      avatar: "/images/testimonials/avatar2.avif"
    },
    {
      quote: "The team's expertise in modern web technologies helped us create an exceptional user experience for our customers.",
      author: "Emma Williams",
      role: "Product Manager, DigitalFlow",
      avatar: "/images/testimonials/avatar3.avif"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="content testimonials-wrapper" id="testimonials">
      <div className="text-org">
        <h2 className="gradient-text purple">What Our Clients Say</h2>
      </div>
      <div className="testimonials-slider">
        <div className="testimonials-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">&#xF756;</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <div className="avatar-placeholder">{testimonial.author[0]}</div>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .testimonials-wrapper {
          padding: 6rem 0;
          overflow: hidden;
        }
        .text-org {
          text-align: center;
          margin-bottom: 4rem;
        }
        .testimonials-slider {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
        }
        .testimonials-track {
          display: flex;
          transition: transform 0.5s ease;
        }
        .testimonial-card {
          flex: 0 0 100%;
          padding: 2rem;
          text-align: center;
        }
        .quote-icon {
          font-size: 2rem;
          color: var(--accent-color);
          margin-bottom: 1.5rem;
        }
        .testimonial-quote {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          background: var(--accent-color);
        }
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }
        .author-info {
          text-align: left;
        }
        .author-name {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin: 0;
        }
        .author-role {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
        }
        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: var(--text-secondary);
          opacity: 0.3;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        .dot.active {
          opacity: 1;
        }
      `}</style>
    </div>
  )
} 