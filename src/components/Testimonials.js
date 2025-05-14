'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import styles from '../styles/component-css/Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with Flat 18 felt like having an in-house team. They were responsive, strategic, and nailed the design on the first try.",
      author: "Co-founder",
      role: "Fintech startup",
      rating: 5,
      color: "primary"
    },
    {
      quote: "Flat 18 rebuilt our web app from scratch and the performance boost was immediate. Page loads are faster, UX is cleaner, and our team can finally move fast again.",
      author: "Founder",
      role: "Payments processor platform",
      rating: 5,
      color: "secondary"
    },
    {
      quote: "They took our outdated site and gave it a clean, modern look without losing what made our brand special. The new site is performing better across every metric.",
      author: "Solopreneur",
      role: "Education website",
      rating: 5,
      color: "accent-purple"
    },
    {
      quote: "Flat 18 guided us through the Web3 space like pros. Their dashboard design is sharp, intuitive, and fully integrated with our smart contracts.",
      author: "CEO",
      role: "Ethereum investment project",
      rating: 5,
      color: "accent-teal"
    },
    {
      quote: "We’ve worked with bigger agencies that didn’t deliver half as much value. Flat 18 was fast, focused, and genuinely cared about the outcome.",
      author: "Founder",
      role: "DeFi dashboard",
      rating: 5,
      color: "accent-pink"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const autoplayRef = useRef(null)

  const startAutoplay = () => {
    stopAutoplay()
    autoplayRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
  }

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [testimonials.length])

  const handlePrev = () => {
    stopAutoplay()
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    startAutoplay()
  }

  const handleNext = () => {
    stopAutoplay()
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    )
    startAutoplay()
  }

  const handleDotClick = (index) => {
    stopAutoplay()
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    startAutoplay()
  }

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  }

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        <i className={i < rating ? "bi bi-star-fill" : "bi bi-star"}></i>
      </span>
    ))
  }

  return (
    <section className={styles.testimonialsWrapper} id="testimonials" ref={sectionRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.backgroundGrid}></div>
        <div className={styles.backgroundDots}></div>
      </div>

      <motion.div
        className="container"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className={styles.sectionHeading}
          variants={headingVariants}
        >
          <span className={styles.sectionLabel}>Testimonials</span>
          <h2 className={styles.gradientText}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Hear from the entrepreneurs and founders who have entrusted us with their digital vision
          </p>
        </motion.div>

        <div className={styles.testimonialsContainer}>
          <button
            className={styles.navButton}
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className={styles.testimonialsSlider}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`${styles.testimonialCard} ${styles[testimonials[2].color]}`}
              >
                <div className={styles.cardContent}>
                  <div className={styles.quoteIcon}>
                    <i className="bi bi-quote"></i>
                  </div>

                  <div className={styles.ratingContainer}>
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  <p className={styles.testimonialQuote}>"{testimonials[currentIndex].quote}"</p>

                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>
                      <div className={styles.avatarPlaceholder}>{testimonials[currentIndex].author[0]}</div>
                    </div>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{testimonials[currentIndex].author}</h4>
                      <p className={styles.authorRole}>{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.cardGlow}></div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className={styles.testimonialDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          className={styles.ctaContainer}
          variants={headingVariants}
        >
          <a href="#chat" className={styles.ctaButton}>
            <span>Become Our Next Success Story</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
