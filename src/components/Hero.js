'use client'

import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroHeadingRef = useRef(null)

  useEffect(() => {
    // Animation script for typing effect
    const heroHeading = heroHeadingRef.current
    if (heroHeading) {
      const originalText = heroHeading.textContent
      const words = originalText.split(' ')

      // Set min-height to prevent layout shifts
      heroHeading.style.minHeight = `${heroHeading.offsetHeight}px`

      // Clear the heading to prepare for animation
      heroHeading.innerHTML = ''

      // Create a function to type each word character by character
      let wordIndex = 0
      let charIndex = 0

      const typeWord = () => {
        if (wordIndex < words.length) {
          // Create or get the current word container
          let wordContainer
          if (charIndex === 0) {
            wordContainer = document.createElement('span')
            wordContainer.classList.add('word')
            heroHeading.appendChild(wordContainer)
          } else {
            wordContainer = heroHeading.lastChild
          }

          const currentWord = words[wordIndex]
          if (charIndex < currentWord.length) {
            const char = document.createElement('span')
            char.classList.add('character')
            char.textContent = currentWord[charIndex]
            wordContainer.appendChild(char)
            charIndex++
            setTimeout(typeWord, 50) // Delay between characters
          } else {
            // Add a space after the word (but not as a separate element)
            if (wordIndex < words.length - 1) { // Don't add space after the last word
              wordContainer.innerHTML += ' '
            }
            charIndex = 0
            wordIndex++
            setTimeout(typeWord, 100) // Delay between words
          }
        }
      }

      // Start the typing animation
      setTimeout(typeWord, 500) // Initial delay
    }
  }, [])

  return (
    <section className="hero-section">
      <div className="content-video-wrapper hero">
        {/* <div className="hero-animation-wrapper">
          <div className="hero-background-video">
            <div className="animation-segment top"></div>
            <div className="animation-segment left"></div>
            <div className="animation-segment right"></div>
            <div className="animation-segment bottom"></div>
          </div>
        </div> */}
      </div>
      <div className="container">
        <div className="hero-text-cta">
          <div className="btn-flex">
            <a href="#faq" className="limited-availability-prompt">
              <div className="badge inline-badge">
                <div className="status good"></div>
                <div className="text-block-6">Open for New Projects</div>
                <i className="bi bi-arrow-right-circle icon right in-badge"></i>
              </div>
            </a>
          </div>
          <div className="hero-heading-wrapper">
            <h1 className="hero-heading" ref={heroHeadingRef}>Beautiful Design. Clean Code. One Team.</h1>
          </div>
          <h2 className="hero-h2">
            Full-service Design & Development solutions for <span className="text-span-3">startups</span> and businesses of all sizes!
          </h2>
          <p className="hero-description">
            At Flat 18, we combine creative design with technical expertise to build digital experiences that engage users and drive results. Our subscription model ensures consistent, high-quality support for your digital presence.
          </p>
          <div className="hero-cta-group">
            <a href="#chat" className="btn hero">
              <div className="button-background hero"></div>
              <div className="button-text hero">Start Your Project</div>
              <i className="bi bi-arrow-right icon right"></i>
            </a>
            <a href="#work" className="btn">
              <div className="button-background"></div>
              <div className="button-text">View Our Work</div>
              <i className="bi bi-arrow-right icon right"></i>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 90vh;
          padding: 6rem 0;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}