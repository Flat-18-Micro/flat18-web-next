'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/component-css/AgentCursor.module.css'

export default function AgentCursor() {
  const cursorRef = useRef(null)
  const restTimerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!cursor || !finePointer.matches || reducedMotion.matches) return undefined
    document.documentElement.classList.add('agent-cursor-active')

    const handleMove = (event) => {
      cursor.dataset.resting = 'false'
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) rotate(-10deg)`
      cursor.dataset.visible = 'true'

      window.clearTimeout(restTimerRef.current)
      restTimerRef.current = window.setTimeout(() => {
        cursor.dataset.resting = 'true'
        cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) rotate(0deg)`
      }, 120)
    }

    const handleDown = () => { cursor.dataset.active = 'true' }
    const handleUp = () => { cursor.dataset.active = 'false' }

    window.addEventListener('pointermove', handleMove, { passive: true })
    window.addEventListener('pointerdown', handleDown, { passive: true })
    window.addEventListener('pointerup', handleUp, { passive: true })

    return () => {
      window.clearTimeout(restTimerRef.current)
      document.documentElement.classList.remove('agent-cursor-active')
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerdown', handleDown)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [])

  return (
      <span ref={cursorRef} className={styles.cursor} aria-hidden="true">
        <svg viewBox="0 0 699 857" role="presentation" preserveAspectRatio="none">
          <path d="M319.229 70.584C302.412 57.429 279.565 55.017 260.371 64.371C241.178 73.725 229 93.206 229 114.558L229 854.447C229 878.617 243.618 900.387 265.99 909.534C288.362 918.682 314.044 913.39 330.979 896.145C406.924 818.801 503.526 720.422 540.082 683.193C549.728 673.369 562.482 667.194 576.17 665.719C628.052 660.128 765.184 645.351 873.226 633.708C897.312 631.113 917.421 614.177 924.075 590.884C930.729 567.59 922.6 542.588 903.519 527.662C744.989 403.647 463.256 183.254 319.229 70.584Z" transform="translate(-228.5 -58.227507)" fill="currentColor" />
        </svg>
      </span>
  )
}
