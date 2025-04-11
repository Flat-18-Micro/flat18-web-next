'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/component-css/TestPage.module.css'

export default function TestPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once when the section comes into view
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Once we've seen it, we can disconnect the observer
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  const cards = [
    {
      title: 'Card 1',
      description: 'This is the first card with a simple animation.'
    },
    {
      title: 'Card 2',
      description: 'This is the second card with a simple animation.'
    },
    {
      title: 'Card 3',
      description: 'This is the third card with a simple animation.'
    }
  ]

  return (
    <main>
      <h1>Animation Test Page</h1>
      
      <section ref={sectionRef} style={{ padding: '40px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2>Card Animation Test</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: index * 0.2 // Stagger the animations
                }}
                whileHover={{ 
                  y: -8,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
