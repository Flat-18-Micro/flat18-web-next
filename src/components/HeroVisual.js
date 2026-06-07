'use client'

import { useCallback, useEffect, useRef } from 'react'
import styles from '@/styles/component-css/Hero.module.css'
import LottiePlayer from '@/components/LottiePlayer'

const heroAnimation = () => import('@/public/lottiefiles/ea6225fb-859a-4eb1-9706-1f52f789d436.json')
const BASE_SPEED = 0.1
const SCROLL_SPEED = 1.2
const SCROLL_BOOST_WINDOW = 220
const MOUSE_SPEED = 2
const MOUSE_DEADZONE = 4

export default function HeroVisual() {
  const lottieWrapperRef = useRef(null)
  const lottieRef = useRef(null)
  const scrollStateRef = useRef({
    rafId: null,
    lastScrollTime: 0,
    currentSpeed: BASE_SPEED,
  })
  const mouseStateRef = useRef({
    isActive: false,
    targetSpeed: null,
  })

  // Warm up the animation chunk once the browser is idle
  useEffect(() => {
    const prefetch = () => {
      heroAnimation().catch(() => undefined)
    }

    if (typeof window === 'undefined') {
      return
    }

    let idleId

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(prefetch)
    } else {
      idleId = window.setTimeout(prefetch, 1200)
    }

    return () => {
      if ('cancelIdleCallback' in window && typeof idleId === 'number') {
        window.cancelIdleCallback(idleId)
      } else if (idleId) {
        clearTimeout(idleId)
      }
    }
  }, [])

  const setLottieSpeed = useCallback((speed) => {
    const player = lottieRef.current
    if (!player) {
      return
    }

    const direction = speed < 0 ? -1 : 1
    player.setDirection?.(direction)
    player.setSpeed?.(Math.abs(speed))
  }, [])

  const applyThemeToLottie = useCallback(() => {
    if (!lottieWrapperRef.current) {
      return
    }

    const lottieContainer = lottieWrapperRef.current.querySelector('svg')
    if (!lottieContainer) {
      return
    }

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
    const elementsToRecolor = lottieContainer.querySelectorAll('[fill="rgb(230,230,230)"], [style*="fill:rgb(230,230,230)"]')
    const darkElements = lottieContainer.querySelectorAll('[fill="rgb(0,0,0)"], [fill="black"], [style*="fill:rgb(0,0,0)"]')

    elementsToRecolor.forEach(element => {
      element.style.fill = primaryColor
    })

    darkElements.forEach(element => {
      element.style.fill = primaryColor
    })

    scrollStateRef.current.currentSpeed = BASE_SPEED
    setLottieSpeed(BASE_SPEED)

    if (typeof window !== 'undefined' && window.liquidGL?.registerDynamic) {
      const dynamicTarget = lottieWrapperRef.current.querySelector('.liquidgl-dynamic')
      window.liquidGL.registerDynamic(dynamicTarget || lottieWrapperRef.current)
    }
  }, [setLottieSpeed])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleLiquidInit = () => {
      const target = lottieWrapperRef.current?.querySelector('.liquidgl-dynamic') || lottieWrapperRef.current
      if (target && window.liquidGL?.registerDynamic) {
        window.liquidGL.registerDynamic(target)
      }
    }

    window.addEventListener('liquidgl:init', handleLiquidInit)
    handleLiquidInit()

    return () => {
      window.removeEventListener('liquidgl:init', handleLiquidInit)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const tick = (time) => {
      const { lastScrollTime, currentSpeed } = scrollStateRef.current
      const msSinceScroll = time - lastScrollTime
      const isMouseActive = mouseStateRef.current.isActive && typeof mouseStateRef.current.targetSpeed === 'number'
      const targetSpeed = isMouseActive
        ? mouseStateRef.current.targetSpeed
        : msSinceScroll < SCROLL_BOOST_WINDOW
          ? SCROLL_SPEED
          : BASE_SPEED

      // Ease toward the target speed for a smooth in/out feel.
      const easedSpeed = currentSpeed + (targetSpeed - currentSpeed) * 0.12
      scrollStateRef.current.currentSpeed = easedSpeed

      setLottieSpeed(easedSpeed)

      const shouldContinue = isMouseActive || msSinceScroll < 1000 || Math.abs(easedSpeed - BASE_SPEED) > 0.01
      if (shouldContinue) {
        scrollStateRef.current.rafId = window.requestAnimationFrame(tick)
      } else {
        scrollStateRef.current.rafId = null
      }
    }

    const startRaf = () => {
      if (!scrollStateRef.current.rafId) {
        scrollStateRef.current.rafId = window.requestAnimationFrame(tick)
      }
    }

    const handleScroll = () => {
      scrollStateRef.current.lastScrollTime = performance.now()
      startRaf()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    const wrapper = lottieWrapperRef.current

    const handleMouseMove = (event) => {
      if (!wrapper) {
        return
      }

      const rect = wrapper.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const deltaX = event.clientX - centerX
      const absDeltaX = Math.abs(deltaX)

      if (absDeltaX < MOUSE_DEADZONE) {
        mouseStateRef.current.isActive = false
        mouseStateRef.current.targetSpeed = null
      } else {
        mouseStateRef.current.isActive = true
        mouseStateRef.current.targetSpeed = deltaX > 0 ? MOUSE_SPEED : -MOUSE_SPEED
      }

      startRaf()
    }

    const handleMouseLeave = () => {
      mouseStateRef.current.isActive = false
      mouseStateRef.current.targetSpeed = null
      startRaf()
    }

    if (wrapper) {
      wrapper.addEventListener('mousemove', handleMouseMove)
      wrapper.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (wrapper) {
        wrapper.removeEventListener('mousemove', handleMouseMove)
        wrapper.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (scrollStateRef.current.rafId) {
        window.cancelAnimationFrame(scrollStateRef.current.rafId)
        scrollStateRef.current.rafId = null
      }
    }
  }, [setLottieSpeed])

  return (
    <div className={`${styles.lottieCol} animation`} ref={lottieWrapperRef} aria-hidden="true">
      <LottiePlayer
        animationDataSrc={heroAnimation}
        autoplay
        loop={true}
        lottieRef={lottieRef}
        loadOnVisible={true}
        intersectionOptions={{ root: null, rootMargin: '0px', threshold: 0 }}
        playerClassName={`${styles.themedLottie} liquidgl-dynamic`}
        data-liquid-dynamic="realtime"
        prefersReducedMotionFallback={null}
        onAnimationLoaded={applyThemeToLottie}
      />
    </div>
  )
}
