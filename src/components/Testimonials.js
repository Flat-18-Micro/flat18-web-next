'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from '../styles/component-css/Testimonials.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with Flat 18 felt like having an in-house team. They were responsive, strategic, and nailed the direction fast.",
      author: "Co-founder",
      role: "B2B SaaS",
      rating: 5,
      color: "primary"
    },
    {
      quote: "They rebuilt our web app and the product finally felt clean and reliable. The team could ship again without fear.",
      author: "Founder",
      role: "Fintech platform",
      rating: 5,
      color: "secondary"
    },
    {
      quote: "They took our outdated site and made the story obvious. Cleaner UX, clearer messaging, and a site we're proud to send.",
      author: "Solopreneur",
      role: "Education product",
      rating: 5,
      color: "accent-blue"
    },
    {
      quote: "They translated complex workflows into a UI our customers actually understand. That alone was worth it.",
      author: "Head of Product",
      role: "Ops software",
      rating: 5,
      color: "accent-teal"
    },
    {
      quote: "We've worked with bigger agencies that didn't deliver half as much value. Flat 18 was fast, focused, and cared about the outcome.",
      author: "Founder",
      role: "Marketplace",
      rating: 5,
      color: "accent-pink"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const autoplayRef = useRef(null)

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1
      }
    })
  }

  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Reduced scroll speed for more control

    // Apply the scroll
    carouselRef.current.scrollLeft = scrollLeft - walk;

    // After dragging ends, snap to the nearest card
    if (Math.abs(walk) > 5) {
      // We're actively dragging with significant movement
      clearTimeout(carouselRef.current.snapTimeout);
      carouselRef.current.snapTimeout = setTimeout(() => {
        // Get the cards
        const cards = carouselRef.current.querySelectorAll(`.${styles.testimonialCard}`);

        if (cards.length === 0) return;

        // Convert NodeList to Array for easier manipulation
        const cardsArray = Array.from(cards);

        // Find which card is closest to the center of the viewport
        const containerRect = carouselRef.current.getBoundingClientRect();
        const containerCenter = containerRect.left + (containerRect.width / 2);

        let closestCardIndex = 0;
        let minDistance = Number.MAX_VALUE;

        cardsArray.forEach((card, idx) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + (cardRect.width / 2);
          const distance = Math.abs(cardCenter - containerCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestCardIndex = idx;
          }
        });

        // Snap to the closest card
        scrollToCard(closestCardIndex);
      }, 150); // Small delay to ensure we've stopped dragging
    }
  };

  const handleTouchStart = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Reduced scroll speed for more control

    // Apply the scroll
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Snap to the nearest card after touch ends
    if (carouselRef.current) {
      // Get the cards
      const cards = carouselRef.current.querySelectorAll(`.${styles.testimonialCard}`);

      if (cards.length === 0) return;

      // Convert NodeList to Array for easier manipulation
      const cardsArray = Array.from(cards);

      // Find which card is closest to the center of the viewport
      const containerRect = carouselRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + (containerRect.width / 2);

      let closestCardIndex = 0;
      let minDistance = Number.MAX_VALUE;

      cardsArray.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + (cardRect.width / 2);
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestCardIndex = idx;
        }
      });

      // Snap to the closest card
      setTimeout(() => {
        scrollToCard(closestCardIndex);
      }, 50);
    }
  };

  const scrollToCard = useCallback((index) => {
    if (!carouselRef.current) return;

    // Ensure index is within bounds
    const boundedIndex = Math.max(0, Math.min(index, testimonials.length - 1));

    // Get the carousel and card dimensions
    const carouselWidth = carouselRef.current.offsetWidth;
    const cards = Array.from(carouselRef.current.querySelectorAll(`.${styles.testimonialCard}`));

    if (cards.length === 0) return;

    // Account for the ::before pseudo-element in our calculations
    // The actual cards start after the pseudo-element
    const actualCards = cards;
    const targetCard = actualCards[boundedIndex];

    if (!targetCard) return;

    // Get the container dimensions
    const containerRect = carouselRef.current.getBoundingClientRect();

    // Calculate the scroll position needed to center this card
    const cardOffsetLeft = targetCard.offsetLeft;
    const cardWidth = targetCard.offsetWidth;

    // Calculate the position that would center the card in the viewport
    const scrollPosition = cardOffsetLeft - (containerRect.width / 2) + (cardWidth / 2);

    // Ensure we don't scroll beyond the bounds
    const maxScroll = carouselRef.current.scrollWidth - carouselWidth;
    const adjustedScrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));

    // Scroll to the card with smooth animation
    carouselRef.current.scrollTo({
      left: adjustedScrollPosition,
      behavior: 'smooth'
    });

    // Update active index
    setActiveIndex(boundedIndex);

    // Remove any existing highlight classes
    actualCards.forEach(card => {
      card.classList.remove(styles.activeCard);
    });

    // Add highlight class to the active card with a slight delay to match scroll animation
    setTimeout(() => {
      if (targetCard) {
        targetCard.classList.add(styles.activeCard);
      }
    }, 300);
  }, [testimonials.length]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      scrollToCard(nextIndex);
    }, 8000);
  }, [activeIndex, testimonials.length, scrollToCard, stopAutoplay]);

  // Initialize the active card when component mounts
  useEffect(() => {
    if (carouselRef.current) {
      // Set initial active card
      const initialCard = carouselRef.current.querySelector(`.${styles.testimonialCard}:nth-child(${activeIndex + 1})`);
      if (initialCard) {
        initialCard.classList.add(styles.activeCard);
      }
    }
  }, [activeIndex]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const cards = carouselRef.current.querySelectorAll(`.${styles.testimonialCard}`);

      if (cards.length === 0) return;

      // Convert NodeList to Array for easier manipulation
      const cardsArray = Array.from(cards);

      // Find which card is closest to the center of the viewport
      const containerRect = carouselRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + (containerRect.width / 2);

      let closestCardIndex = 0;
      let minDistance = Number.MAX_VALUE;

      cardsArray.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + (cardRect.width / 2);
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestCardIndex = idx;
        }
      });

      // Only update if the index has changed and is valid
      if (closestCardIndex !== activeIndex && closestCardIndex >= 0 && closestCardIndex < testimonials.length) {
        setActiveIndex(closestCardIndex);

        // Update visual state to match the current scroll position
        cards.forEach((card, idx) => {
          if (idx === closestCardIndex) {
            card.classList.add(styles.activeCard);
          } else {
            card.classList.remove(styles.activeCard);
          }
        });
      }
    };

    // Throttle the scroll handler for better performance
    let scrollTimeout;
    let lastScrollTime = 0;
    const throttledHandleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime > 100) { // Throttle to once every 100ms
        lastScrollTime = now;
        handleScroll();
      } else {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 100);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', throttledHandleScroll);
      // Initial check to highlight the active card
      setTimeout(handleScroll, 100);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', throttledHandleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [activeIndex, testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        <i className={i < rating ? "bi bi-star-fill" : "bi bi-star"}></i>
      </span>
    ));
  };

  return (
    <section
      className={styles.testimonialsSection}
      id="testimonials"
      ref={sectionRef}
      data-bg-color={getSectionBackground('testimonials')}
      data-text-color={getSectionTextColor('testimonials')}
    >
      <div className={styles.backgroundElements}>
        <div></div>
        <div className={styles.backgroundGrid}></div>
      </div>

      <motion.div
        className="container"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className={styles.sectionHeader} variants={headingVariants}>
          <span className={styles.sectionTag}>Testimonials</span>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <p className={styles.sectionSubtitle}>
            Founders, product leads, and teams who shipped with us
          </p>
        </motion.div>

        <div className={styles.carouselContainer}>
          <div className={styles.carouselOverlay}></div>
          <div
            className={styles.carouselTrack}
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`${styles.testimonialCard} ${styles[testimonial.color]}`}
                custom={index}
                variants={cardVariants}
              >
                <div className={styles.cardInner}>
                  <div className={styles.quoteMarkTop}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11H6.5C5.67 11 5 10.33 5 9.5V9C5 7.34 6.34 6 8 6H8.5C9.05 6 9.5 5.55 9.5 5V4.5C9.5 3.95 9.05 3.5 8.5 3.5H8C4.96 3.5 2.5 5.96 2.5 9V15C2.5 16.66 3.84 18 5.5 18H10C11.66 18 13 16.66 13 15V14C13 12.34 11.66 11 10 11ZM21.5 11H18C17.17 11 16.5 10.33 16.5 9.5V9C16.5 7.34 17.84 6 19.5 6H20C20.55 6 21 5.55 21 5V4.5C21 3.95 20.55 3.5 20 3.5H19.5C16.46 3.5 14 5.96 14 9V15C14 16.66 15.34 18 17 18H21.5C23.16 18 24.5 16.66 24.5 15V14C24.5 12.34 23.16 11 21.5 11Z" fill="currentColor" fillOpacity="0.2"/>
                    </svg>
                  </div>

                  <div className={styles.testimonialContent}>
                    <div className={styles.ratingStars}>
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className={styles.testimonialText}>{testimonial.quote}</p>

                    <div className={styles.testimonialAuthor}>
                      <div className={styles.authorInitial}>
                        {testimonial.author[0]}
                      </div>
                      <div className={styles.authorDetails}>
                        <h4 className={styles.authorName}>{testimonial.author}</h4>
                        <p className={styles.authorRole}>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.quoteMarkBottom}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11H6.5C5.67 11 5 10.33 5 9.5V9C5 7.34 6.34 6 8 6H8.5C9.05 6 9.5 5.55 9.5 5V4.5C9.5 3.95 9.05 3.5 8.5 3.5H8C4.96 3.5 2.5 5.96 2.5 9V15C2.5 16.66 3.84 18 5.5 18H10C11.66 18 13 16.66 13 15V14C13 12.34 11.66 11 10 11ZM21.5 11H18C17.17 11 16.5 10.33 16.5 9.5V9C16.5 7.34 17.84 6 19.5 6H20C20.55 6 21 5.55 21 5V4.5C21 3.95 20.55 3.5 20 3.5H19.5C16.46 3.5 14 5.96 14 9V15C14 16.66 15.34 18 17 18H21.5C23.16 18 24.5 16.66 24.5 15V14C24.5 12.34 23.16 11 21.5 11Z" fill="currentColor" fillOpacity="0.2"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.carouselControls}>
            <button
              className={`${styles.carouselArrow} ${styles.prevArrow}`}
              onClick={() => {
                const prevIndex = activeIndex > 0 ? activeIndex - 1 : testimonials.length - 1;
                scrollToCard(prevIndex);
                // Add visual feedback for the button press
                const button = document.querySelector(`.${styles.prevArrow}`);
                if (button) {
                  button.classList.add(styles.arrowPressed);
                  setTimeout(() => button.classList.remove(styles.arrowPressed), 200);
                }
              }}
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <div className={styles.carouselIndicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ''}`}
                  onClick={() => {
                    scrollToCard(index);
                    // Add visual feedback for the indicator press
                    const indicator = document.querySelector(`.${styles.indicator}:nth-child(${index + 1})`);
                    if (indicator) {
                      indicator.classList.add(styles.indicatorPressed);
                      setTimeout(() => indicator.classList.remove(styles.indicatorPressed), 200);
                    }
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>

            <button
              className={`${styles.carouselArrow} ${styles.nextArrow}`}
              onClick={() => {
                const nextIndex = (activeIndex + 1) % testimonials.length;
                scrollToCard(nextIndex);
                // Add visual feedback for the button press
                const button = document.querySelector(`.${styles.nextArrow}`);
                if (button) {
                  button.classList.add(styles.arrowPressed);
                  setTimeout(() => button.classList.remove(styles.arrowPressed), 200);
                }
              }}
              aria-label="Next testimonial"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

        <motion.div className={styles.ctaWrapper} variants={headingVariants}>
          <a href="#chat" className="btn btn-primary">
            <span>Become Our Next Success Story</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
