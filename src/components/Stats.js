'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '../styles/component-css/Stats.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'
import LottiePlayer from '@/components/LottiePlayer'

const loadStatsAnimation = () => import('@/animations/Showreel_-Web-gallery-[remix] (2).json')

export default function Stats() {
  const countersRef = useRef([])
  const sectionRef = useRef(null)
  const animationRef = useRef(null)
  const [isAnimationReady, setAnimationReady] = useState(false)
  const [areCountersReady, setCountersReady] = useState(false)

  useEffect(() => {
    const statsSection = sectionRef.current
    const lottieInstance = animationRef.current

    if (!statsSection || !lottieInstance || !isAnimationReady) {
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
  }, [isAnimationReady])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const symbolForCounter = (counter) => counter.dataset.symbol || (counter.dataset.noPlus === 'true' ? '' : '+')

    const animateCounter = (counter, target) => {
      const duration = 2000
      const startTime = performance.now()
      const startValue = 0

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const easeOutQuad = progress * (2 - progress)
        const currentValue = Math.floor(easeOutQuad * (target - startValue) + startValue)
        const symbol = symbolForCounter(counter)

        if (currentValue === 0 && symbol === '+') {
          counter.textContent = '0'
        } else {
          counter.textContent = `${currentValue}${symbol}`
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = `${target}${symbol}`
        }
      }

      requestAnimationFrame(updateCounter)
    }

    countersRef.current.forEach(counter => {
      if (!counter) {
        return
      }

      const symbol = symbolForCounter(counter)
      counter.textContent = symbol === '+' ? '0' : `0${symbol}`
    })

    const revealFrame = requestAnimationFrame(() => setCountersReady(true))

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

      cancelAnimationFrame(revealFrame)
    }
  }, [])

  const stats = [
    { value: 20, label: 'Projects launched' },
    { value: 12, label: 'Years shipping products' },
    { value: 48, label: 'Hour turnaround for small tasks', symbol: 'h', noPlus: true },
    { value: 2, label: 'Senior team size', noPlus: true }
  ]

  const formatStatValue = (stat) => {
    const suffix = stat.symbol ?? (stat.noPlus ? '' : '+')
    return `${stat.value}${suffix}`
  }

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
          <LottiePlayer
            animationDataSrc={loadStatsAnimation}
            lottieRef={animationRef}
            autoplay={false}
            loop={false}
            playerStyle={{ width: '100%', height: '100%' }}
            intersectionOptions={{ rootMargin: '0px 0px 300px 0px', threshold: 0 }}
            onAnimationLoaded={() => setAnimationReady(true)}
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
                className={`${styles['animated-counter']} ${areCountersReady ? styles['counter-visible'] : styles['counter-hidden']}`}
                data-target={stat.value}
                data-no-plus={stat.noPlus}
                data-symbol={stat.symbol}
              >
                {formatStatValue(stat)}
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
