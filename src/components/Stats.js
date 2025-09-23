'use client'

import { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'
import styles from '../styles/component-css/Stats.module.css'
import animationData from '@/animations/Showreel_-Web-gallery-[remix] (2).json'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

export default function Stats() {
  const countersRef = useRef([])
  const sectionRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const statsSection = sectionRef.current
    const lottieInstance = animationRef.current

    if (!statsSection || !lottieInstance) {
      return
    }

    statsSection.style.setProperty('--stats-animation-progress', '0')
    lottieInstance.stop()

    let frameRequest = null

    const syncAnimationWithScroll = () => {
      frameRequest = null

      const rect = statsSection.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const scrollableDistance = rect.height + viewportHeight

      if (scrollableDistance <= 0) {
        return
      }

      const distanceIntoView = viewportHeight - rect.top
      const progress = Math.min(Math.max(distanceIntoView / scrollableDistance, 0), 1)
      const totalFrames = lottieInstance.getDuration(true)

      statsSection.style.setProperty('--stats-animation-progress', progress.toFixed(4))

      if (!totalFrames) {
        requestSync()
        return
      }

      lottieInstance.goToAndStop(progress * totalFrames, true)
    }

    const requestSync = () => {
      if (frameRequest !== null) {
        return
      }

      frameRequest = requestAnimationFrame(syncAnimationWithScroll)
    }

    window.addEventListener('scroll', requestSync, { passive: true })
    window.addEventListener('resize', requestSync)
    syncAnimationWithScroll()

    return () => {
      window.removeEventListener('scroll', requestSync)
      window.removeEventListener('resize', requestSync)

      statsSection.style.removeProperty('--stats-animation-progress')

      if (frameRequest !== null) {
        cancelAnimationFrame(frameRequest)
      }
    }
  }, [])

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

        const symbol = counter.dataset.symbol || (counter.dataset.noPlus === 'true' ? '' : '+')
        counter.textContent = `${currentValue}${symbol}`

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = `${target}${symbol}`
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
    { value: 20, label: 'Projects shipped' },
    { value: 100, label: 'Client Satisfaction', symbol:'%' },
    { value: 12, label: 'Years in the game' },
    { value: '2', label: 'Team members\n(yes, really)', noPlus: true }
  ]

  return (
    <section
      ref={sectionRef}
      className={`${styles['stats-wrapper']} statsSection`}
      data-bg-color={getSectionBackground('stats')}
      data-text-color={getSectionTextColor('stats')}
    >
      <div className='container'>
      <div className={styles['animation-viewport']}>
        <div className={styles['stats-animation']}>
          <Lottie
            lottieRef={animationRef}
            animationData={animationData}
            autoplay={false}
            loop={false}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
      </div>
      <div className='container'>
        <div className={styles['stats-grid']}>
          {stats.map((stat, index) => (
            <div key={index} className={styles['stat-card']}>
              <div
                ref={el => countersRef.current[index] = el}
                className={styles['animated-counter']}
                data-target={stat.value}
                data-no-plus={stat.noPlus}
                data-symbol={stat.symbol}
              >
                0
              </div>
              <div
                className={styles['stat-label']}
                dangerouslySetInnerHTML={{ __html: stat.label.replace('\n', '<br />') }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
