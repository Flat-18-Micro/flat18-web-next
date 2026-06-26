'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from '@/styles/component-css/CaseStudyMediaFlow.module.css'

function getInitialActiveIndex(items, initialActiveIndex) {
  if (!Array.isArray(items) || items.length === 0) {
    return 0
  }

  if (
    Number.isInteger(initialActiveIndex) &&
    initialActiveIndex >= 0 &&
    initialActiveIndex < items.length
  ) {
    return initialActiveIndex
  }

  const primaryIndex = items.findIndex((item) => item?.isPrimary)
  return primaryIndex >= 0 ? primaryIndex : 0
}

function getRelativeIndex(index, activeIndex, total) {
  if (total <= 1) {
    return 0
  }

  const half = Math.floor(total / 2)
  const raw = index - activeIndex

  if (raw > half) {
    return raw - total
  }

  if (raw < -half) {
    return raw + total
  }

  return raw
}

export default function CaseStudyMediaFlow({
  items = [],
  onOpen,
  ariaLabel = 'Case study screenshot carousel',
  initialActiveIndex,
}) {
  const [activeIndex, setActiveIndex] = useState(() =>
    getInitialActiveIndex(items, initialActiveIndex)
  )

  if (!items.length) {
    return null
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % items.length)
  }

  const handleCardClick = (index) => {
    if (index === activeIndex) {
      onOpen?.(index)
      return
    }

    setActiveIndex(index)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goToPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goToNext()
    }
  }

  return (
    <div className={styles.mediaFlowCarousel}>
      <div
        className={styles.mediaFlowViewport}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.mediaFlowStage}>
          {items.map((item, index) => {
            const offset = getRelativeIndex(index, activeIndex, items.length)
            const distance = Math.abs(offset)
            const isActive = offset === 0
            const isVisible = distance <= 2
            const direction = offset < 0 ? -1 : 1

            const tileWidth = isActive
              ? 'clamp(290px, 64cqw, 470px)'
              : distance === 1
                ? 'clamp(190px, 40cqw, 300px)'
                : 'clamp(150px, 28cqw, 220px)'

            const shift = isActive
              ? '0px'
              : distance === 1
                ? 'clamp(150px, 28cqw, 210px)'
                : 'clamp(250px, 42cqw, 320px)'

            const style = {
              '--media-tile-bg': `url("${item.src}")`,
              '--flow-width': tileWidth,
              '--flow-shift':
                direction < 0 ? `calc(-1 * ${shift})` : shift,
              '--flow-rotate': isActive
                ? '0deg'
                : `${direction * (distance === 1 ? 28 : 42)}deg`,
              '--flow-scale': isActive ? 1 : distance === 1 ? 0.88 : 0.74,
              '--flow-opacity': isActive ? 1 : distance === 1 ? 0.7 : 0.42,
              '--flow-z': isActive ? 4 : distance === 1 ? 3 : 2,
              '--flow-depth': isActive ? '140px' : distance === 1 ? '-22px' : '-92px',
              '--flow-saturation': isActive ? 1 : distance === 1 ? 0.9 : 0.78,
              '--flow-brightness': isActive ? 1 : distance === 1 ? 0.88 : 0.76,
              '--flow-frame-width': isActive ? '92%' : distance === 1 ? '90%' : '84%',
              '--flow-caption-opacity': isActive ? 1 : distance === 1 ? 0.78 : 0.55,
            }

            return (
              <figure
                key={item.src}
                className={styles.mediaFlowCard}
                style={style}
                data-active={isActive ? 'true' : 'false'}
                data-visible={isVisible ? 'true' : 'false'}
              >
                <div className={styles.mediaFlowShell}>
                  <button
                    type="button"
                    className={styles.mediaFlowButton}
                    onClick={() => handleCardClick(index)}
                    aria-label={
                      isActive
                        ? `Open ${item.alt} in viewer`
                        : `Bring ${item.alt} into focus`
                    }
                  >
                    <span className={styles.mediaFlowFrame}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes={item.sizes}
                        className={styles.mediaFlowImage}
                        priority={Boolean(item.priority && isActive)}
                      />
                    </span>
                  </button>

                  {item.caption ? (
                    <figcaption className={styles.mediaFlowCaption}>
                      {item.caption}
                    </figcaption>
                  ) : null}
                </div>
              </figure>
            )
          })}
        </div>

        {items.length > 1 ? (
          <>
            <button
              type="button"
              className={`${styles.mediaFlowNavButton} ${styles.mediaFlowNavPrev}`}
              onClick={goToPrevious}
              aria-label="Previous screenshot"
            >
              <i className="bi bi-chevron-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className={`${styles.mediaFlowNavButton} ${styles.mediaFlowNavNext}`}
              onClick={goToNext}
              aria-label="Next screenshot"
            >
              <i className="bi bi-chevron-right" aria-hidden="true"></i>
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}
