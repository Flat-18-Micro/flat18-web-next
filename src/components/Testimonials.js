'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/component-css/Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Flat 18 reimagined our digital identity with pixel-perfect design and cutting-edge engineering.",
      author: "Anonymous",
      role: "Private Project"
    },
    {
      quote: "We needed a high-performance site with complex functionality. Flat 18 delivered flawlessly — every interaction feels effortless.",
      author: "Anonymous",
      role: "Private Project"
    },
    {
      quote: "Their frontend expertise and attention to UX helped us delight users across multiple platforms.",
      author: "Anonymous",
      role: "Private Project"
    },
    {
      quote: "Flat 18 brought our Web3 dashboard to life — sleek, secure, and perfectly integrated with our ecosystem.",
      author: "Anonymous",
      role: "Private Project"
    },
    {
      quote: "The DeFi app Flat 18 built combined rock-solid backend logic with a clean, intuitive interface. They're true pros.",
      author: "Anonymous",
      role: "Private Project"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

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

  return (
    <section className={styles.testimonialsWrapper} id="testimonials">
      <div className={styles.backgroundGradient}></div>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.textOrg}>
          <h2 className={styles.gradientText}>What Our Clients Say</h2>
        </div>

        <div className={styles.testimonialsSlider}>
          <div
            className={styles.testimonialsTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>
                  <i className="bi bi-quote"></i>
                </div>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <div className={styles.avatarPlaceholder}>{testimonial.author[0]}</div>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.author}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.testimonialDots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
