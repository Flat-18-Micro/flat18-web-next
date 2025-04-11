'use client'

import styles from '../styles/component-css/Stats.module.css'
import { useEffect, useRef } from 'react'

export default function Stats() {
  const countersRef = useRef([])
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const animateCounter = (counter, target) => {
      const duration = 2000
      const startTime = performance.now()
      const startValue = 0
      
      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        // Easing function for smoother animation
        const easeOutQuad = progress * (2 - progress)
        const currentValue = Math.floor(easeOutQuad * (target - startValue) + startValue)
        
        counter.textContent = currentValue
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target
        }
      }
      
      requestAnimationFrame(updateCounter)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = parseInt(counter.getAttribute('data-target'), 10)
          animateCounter(counter, target)
          observer.unobserve(counter)
        }
      })
    }, options)

    countersRef.current.forEach(counter => {
      if (counter) {
        observer.observe(counter)
      }
    })

    return () => {
      countersRef.current.forEach(counter => {
        if (counter) {
          observer.unobserve(counter)
        }
      })
    }
  }, [])

  const stats = [
    { value: 20, label: 'Projects Completed' },
    { value: 100, label: 'Client Satisfaction' },
    { value: 12, label: 'Years Experience' },
    { value: 2, label: 'Team Members (Yes, really)' }
  ]

  return (
    <div className={styles['content']}>
      <div className='container'>

      <div className={styles['stats-grid']}>
        {stats.map((stat, index) => (
          <div key={index} className={styles['stat-card']}>
            <div 
              ref={el => countersRef.current[index] = el} 
              className={styles['animated-counter']} 
              data-target={stat.value}
            >
              0
            </div>
            <div className={styles['stat-label']}>{stat.label}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
