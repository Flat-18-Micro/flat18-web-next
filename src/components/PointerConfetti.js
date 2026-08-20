'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/component-css/PointerConfetti.module.css'

const MOVE_IDLE_MS = 220
const TAU = Math.PI * 2
const COLOURS = ['#2340ff', '#4d62ff', '#9eb5ff', '#d6aa6d', '#f8f7f2']

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

export default function PointerConfetti() {
  const layerRef = useRef(null)

  useEffect(() => {
    const layer = layerRef.current
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lastMoveAt = 0

    const canBurst = () => finePointer.matches && !reducedMotion.matches

    const burst = (x, y, particleCount, strength) => {
      if (!layer || !canBurst()) return

      const fragment = document.createDocumentFragment()
      const angleOffset = Math.random() * TAU

      for (let index = 0; index < particleCount; index += 1) {
        const particle = document.createElement('span')
        const angle = angleOffset + (TAU * index) / particleCount + randomBetween(-.28, .28)
        const distance = randomBetween(24, 52) * strength
        const size = randomBetween(6, 11)

        particle.className = styles.particle
        particle.dataset.shape = index % 3 === 0 ? 'round' : 'square'
        particle.style.left = `${x}px`
        particle.style.top = `${y}px`
        particle.style.width = `${size}px`
        particle.style.height = `${index % 2 === 0 ? size : size * 1.85}px`
        particle.style.backgroundColor = COLOURS[index % COLOURS.length]
        particle.style.animationDuration = `${randomBetween(540, 780)}ms`
        particle.style.setProperty('--burst-x', `${Math.cos(angle) * distance}px`)
        particle.style.setProperty('--burst-y', `${Math.sin(angle) * distance}px`)
        particle.style.setProperty('--burst-rotation', `${randomBetween(-190, 190)}deg`)
        particle.addEventListener('animationend', () => particle.remove(), { once: true })
        fragment.appendChild(particle)
      }

      layer.appendChild(fragment)
    }

    const handlePointerMove = (event) => {
      const now = performance.now()

      if (now - lastMoveAt > MOVE_IDLE_MS) {
        burst(event.clientX, event.clientY, 9, 1.1)
      }

      lastMoveAt = now
    }

    const handlePointerDown = (event) => {
      if (!(event.target instanceof Element)) return
      burst(event.clientX, event.clientY, 14, 1.45)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      layer.replaceChildren()
    }
  }, [])

  return <div ref={layerRef} className={styles.layer} aria-hidden="true" />
}
