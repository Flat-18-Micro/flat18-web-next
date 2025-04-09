'use client'

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
    <div className="content stats-wrapper">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div 
              ref={el => countersRef.current[index] = el} 
              className="animated-counter" 
              data-target={stat.value}
            >
              0
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .stats-wrapper {
          padding: 5rem 0;
          background: linear-gradient(to right, var(--bg-modern-dark), var(--bg-modern), var(--bg-modern-dark));
          margin-top: 50px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          max-width: var(--content-inner);
          margin: 0 auto;
          padding: 0 2rem;
        }
        .stat-card {
          text-align: center;
        }
        .animated-counter {
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 1rem;
          position: relative;
        }
        .animated-counter::after {
          content: '+';
          position: absolute;
          font-size: 2.5rem;
          margin-left: 0.2rem;
        }
        .stat-label {
          font-size: 1.2rem;
          color: var(--cw-3);
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
