'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { overlayVariants, modalVariants } from '@/lib/motion'
import styles from '@/styles/component-css/CaseStudies.module.css'

export default function CaseStudyLightbox({ images, activeIndex, onClose, onNext, onPrev }) {
  const isOpen = Number.isInteger(activeIndex) && images?.[activeIndex]
  const current = isOpen ? images[activeIndex] : null

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNext()
      if (event.key === 'ArrowLeft') onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className={styles.lightboxOverlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className={styles.lightboxContent}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.lightboxImageWrap}>
              <button
                type="button"
                className={styles.lightboxClose}
                onClick={onClose}
                aria-label="Close image viewer"
              >
                <i className="bi bi-x-lg" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className={`${styles.lightboxNavButton} ${styles.lightboxNavPrev}`}
                onClick={onPrev}
                aria-label="Previous image"
              >
                <i className="bi bi-chevron-left" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className={`${styles.lightboxNavButton} ${styles.lightboxNavNext}`}
                onClick={onNext}
                aria-label="Next image"
              >
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
              </button>
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className={styles.lightboxImage}
                priority
              />
            </div>
            <div className={styles.lightboxMeta}>
              <div className={styles.lightboxCaption}>
                <span className={styles.lightboxTitle}>{current.caption || current.alt}</span>
                {current.caption && current.caption !== current.alt ? (
                  <span className={styles.lightboxAlt}>{current.alt}</span>
                ) : null}
              </div>
              <span className={styles.lightboxCounter}>
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
