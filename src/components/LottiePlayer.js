'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const LazyLottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => null,
})

const DEFAULT_INTERSECTION_OPTIONS = {
  root: null,
  rootMargin: '0px 0px 200px 0px',
  threshold: 0,
}

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return prefersReducedMotion
}

function resolveAnimation(moduleOrData) {
  if (!moduleOrData) {
    return null
  }

  if (typeof moduleOrData === 'object' && 'default' in moduleOrData) {
    return moduleOrData.default
  }

  return moduleOrData
}

export default function LottiePlayer({
  animationData,
  animationDataSrc,
  loadOnVisible = true,
  intersectionOptions = DEFAULT_INTERSECTION_OPTIONS,
  placeholder = null,
  className,
  style,
  playerClassName,
  playerStyle,
  disableOnReducedMotion = true,
  prefersReducedMotionFallback = null,
  onAnimationLoaded,
  onDOMLoaded,
  lottieRef,
  ...rest
}) {
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(!loadOnVisible)
  const [resolvedAnimation, setResolvedAnimation] = useState(() => resolveAnimation(animationData))
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!loadOnVisible) {
      setShouldLoad(true)
      return
    }

    const node = containerRef.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observerInstance.disconnect()
        }
      })
    }, intersectionOptions)

    observer.observe(node)

    return () => observer.disconnect()
  }, [loadOnVisible, intersectionOptions])

  useEffect(() => {
    setResolvedAnimation(resolveAnimation(animationData))
  }, [animationData])

  useEffect(() => {
    if (!shouldLoad) {
      return
    }

    if (resolvedAnimation || !animationDataSrc) {
      return
    }

    let isCancelled = false

    const load = async () => {
      try {
        const loaded = await animationDataSrc()
        if (!isCancelled) {
          setResolvedAnimation(resolveAnimation(loaded))
        }
      } catch (error) {
        console.error('Failed to load Lottie animation', error)
      }
    }

    load()

    return () => {
      isCancelled = true
    }
  }, [animationDataSrc, resolvedAnimation, shouldLoad])

  const shouldRespectReducedMotion = disableOnReducedMotion && prefersReducedMotion
  const shouldRenderAnimation = shouldLoad && resolvedAnimation && !shouldRespectReducedMotion

  const handleDomLoaded = (event) => {
    onDOMLoaded?.(event)
    onAnimationLoaded?.(event)
  }

  return (
    <div ref={containerRef} className={className} style={style}>
      {shouldRespectReducedMotion
        ? prefersReducedMotionFallback
        : shouldRenderAnimation
          ? (
            <LazyLottie
              {...rest}
              lottieRef={lottieRef}
              animationData={resolvedAnimation}
              className={playerClassName}
              style={playerStyle}
              onDOMLoaded={handleDomLoaded}
            />
          )
          : placeholder}
    </div>
  )
}
