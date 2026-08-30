'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/HowItWorks.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const STAGES = [
  {
    number: '01',
    title: 'Scope',
    description: 'We turn the idea into a buildable plan.',
    details: 'Goal · users · workflows · risks',
    accent: '#6f8fff',
    lines: [
      { type: 'path', d: 'M85.572 91l-15 0c-2 0-3-1-3-3l0-3c0-2.667-1.971-6.046-4-8-2.033-1.958-4.84-3.561-8-5-1.896-.864-1.099-3.97 1-4 4.488-.064 8.056 1.438 11 4l2-20c0-1 .667-2 2-2 1.333 0 2 1 2 2l1 15c1.333-.667 2.667-.333 4 1 2.333-1.333 4.667 0 5 2 1.333-1.333 3.667 0 4 2l2 0c1 0 2 1 2 3l0 7c0 2-4 6-4 6-1.333 1.667-1.667 3-2 3' },
      { type: 'path', d: 'M14.428 9l15 0c2 0 3 1 3 3l0 3c0 2.667 1.971 6.046 4 8 2.033 1.958 4.84 3.561 8 5 1.896.864 1.099 3.97-1 4-4.488.064-8.056-1.438-11-4l-2 20c0 1-.667 2-2 2-1.333 0-2-1-2-2l-1-15c-1.333.667-2.667.333-4-1-2.333 1.333-4.667 0-5-2-1.333 1.333-3.667 0-4-2l-2 0c-1 0-2-1-2-3l0-7c0-2 4-6 4-6 1.333-1.667 1.667-3 2-3' },
      { type: 'path', d: 'M54.5 37.5l8 0 0 8' },
      { type: 'path', d: 'M62.5 54.5l0 8-8 0' },
      { type: 'path', d: 'M45.5 62.5l-8 0 0-8' },
      { type: 'path', d: 'M37.5 45.5l0-8 8 0' },
      { type: 'circle', cx: '50', cy: '50', r: '6' }
    ]
  },
  {
    number: '02',
    title: 'Draft',
    description: 'LLMs help produce fast UI, code and documentation options.',
    details: 'Interface · code · content · docs',
    accent: '#b28aff',
    lines: [
      { type: 'path', d: 'M50 21c-13.3 0-24 10.7-24 24 0 9.2 5.2 16.2 12.8 21v8h22.4v-8c7.6-4.8 12.8-11.8 12.8-21 0-13.3-10.7-24-24-24Z' },
      { type: 'path', d: 'M32 44c0-10 8-17 18-17' },
      { type: 'path', d: 'M43 74V52M57 74V52M50 74V50' },
      { type: 'path', d: 'M50 50c-4 0-5-4-8-4-3 0-3 5 0 6h16c3-1 3-6 0-6-3 0-4 4-8 4Z' },
      { type: 'path', d: 'M38.8 74h22.4M38.8 78h22.4' },
      { type: 'path', d: 'M38.8 74v6c0 4 3.2 7 7.2 7h8c4 0 7.2-3 7.2-7v-6' },
      { type: 'path', d: 'M45 87v3h10v-3' },
      { type: 'path', d: 'M23.196 64.244C19.297 58.825 17 52.179 17 45c0-7.884 2.771-15.127 7.392-20.805', strokeDasharray: '4 6' },
      { type: 'path', d: 'M75.608 24.195C80.228 29.874 83 37.116 83 45c0 8.761-3.421 16.729-9 22.64', strokeDasharray: '4 6' },
      { type: 'path', d: 'M30.95 84.196V69.413l-3.411 3.411 3.411-3.411 3.411 3.411' },
      { type: 'path', d: 'M30.95 76.804v14.783l3.411-3.411-3.411 3.411-3.411-3.411' },
      { type: 'path', d: 'M68.217 13.5H83l-3.411-3.411 3.411 3.411-3.411 3.411' },
      { type: 'path', d: 'M75.608 13.5H17l3.411 3.411L17 13.5l3.411-3.411' }
    ]
  },
  {
    number: '03',
    title: 'Build',
    description: 'Senior developers shape, test and connect the product.',
    details: 'Frontend · backend · data · integrations',
    accent: '#63c6aa',
    lines: [
      { type: 'path', d: 'M88 20v50c0 2.208-1.792 4-4 4H16c-2.208 0-4-1.792-4-4V20c0-2.208 1.792-4 4-4h68c2.208 0 4 1.792 4 4Z' },
      { type: 'path', d: 'M12 26h76' },
      { type: 'circle', cx: '18', cy: '21', r: '1.2', fill: 'currentColor' },
      { type: 'circle', cx: '23', cy: '21', r: '1.2', fill: 'currentColor' },
      { type: 'circle', cx: '28', cy: '21', r: '1.2', fill: 'currentColor' },
      { type: 'path', d: 'm20 36 5 4-5 4M29 44h14M20 52h17M41 52h14M20 60h11M35 60h14' },
      { type: 'circle', cx: '66', cy: '40', r: '5' },
      { type: 'circle', cx: '74', cy: '54', r: '4' },
      { type: 'circle', cx: '61', cy: '58', r: '4' },
      { type: 'path', d: 'm69.5 43.5 2.5 6.5M63 44.5l-1.5 9.5M65 57l5-2' },
      { type: 'circle', cx: '66', cy: '40', r: '1.6' },
      { type: 'path', d: 'M66 35v-3M71 40h3M66 45v3M61 40h-3' },
      { type: 'path', d: 'M25 82h50M36 82v4h28v-4' }
    ]
  },
  {
    number: '04',
    title: 'Review',
    description: 'We check quality, security and release readiness.',
    details: 'Quality · security · release · handover',
    accent: '#d6aa6d',
    lines: [
      { type: 'path', d: 'M22 51l28-14 28 14-28 14-28-14Z' },
      { type: 'path', d: 'M22 51v26.727L50 93l28-15.273V51' },
      { type: 'path', d: 'M36 44l26.727 13.971' },
      { type: 'path', d: 'm39.818 68.818-5.091 5.091 5.091 5.091M60.182 68.818l5.091 5.091-5.091 5.091M55.091 66.273 44.909 81.546' },
      { type: 'path', d: 'M50 32V18M44 24l6-6 6 6M37 32c-6.627-3.314-11.196-7.314-14.274-12M63 32c6.627-3.314 11.196-7.314 14.274-12' },
      { type: 'circle', cx: '21', cy: '17', r: '3' },
      { type: 'circle', cx: '50', cy: '12', r: '3' },
      { type: 'circle', cx: '79', cy: '17', r: '3' },
      { type: 'path', d: 'M18 17h-5M82 17h5' }
    ]
  }
]

const AUTO_ADVANCE_MS = 3800
const CARD_POSITIONS = [
  { x: 0, y: 0, rotate: 0, scale: 1 },
  { x: -12, y: 14, rotate: -4, scale: 0.97 },
  { x: 14, y: 27, rotate: 4.5, scale: 0.94 },
  { x: -8, y: 39, rotate: -6, scale: 0.91 }
]

const circleToPath = (circle) => {
  const cx = Number(circle.cx)
  const cy = Number(circle.cy)
  const radius = Number(circle.r)
  const k = 0.5522848

  return [
    `M${cx - radius} ${cy}`,
    `C${cx - radius} ${cy - radius * k}, ${cx - radius * k} ${cy - radius}, ${cx} ${cy - radius}`,
    `C${cx + radius * k} ${cy - radius}, ${cx + radius} ${cy - radius * k}, ${cx + radius} ${cy}`,
    `C${cx + radius} ${cy + radius * k}, ${cx + radius * k} ${cy + radius}, ${cx} ${cy + radius}`,
    `C${cx - radius * k} ${cy + radius}, ${cx - radius} ${cy + radius * k}, ${cx - radius} ${cy}Z`
  ].join(' ')
}

const rectToPath = (rect) => `M${rect.x} ${rect.y}h${rect.width}v${rect.height}H${rect.x}Z`

const lineToPath = (line) => {
  if (line.type === 'circle') return circleToPath(line)
  if (line.type === 'rect') return rectToPath(line)
  return line.d
}

function StageArtwork({ stage }) {
  const paths = useMemo(() => stage.lines.map(lineToPath), [stage])

  return (
    <g className={styles.artworkSecondary}>
      {stage.lines.map((line, index) => (
        <path
          key={index}
          d={paths[index]}
          fill={line.fill}
          strokeDasharray={line.strokeDasharray}
        />
      ))}
    </g>
  )
}

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const stageFrameRef = useRef(null)
  const activeStage = STAGES[activeIndex]

  useEffect(() => {
    const element = stageFrameRef.current

    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView || isPaused) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % STAGES.length)
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(timer)
  }, [isInView, isPaused])

  const selectStage = (index) => {
    setActiveIndex(index)
    setIsPaused(true)
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false)
    }
  }

  return (
    <section
      className={styles.processSection}
      id="process"
      data-bg-color={getSectionBackground('howItWorks')}
      data-text-color={getSectionTextColor('howItWorks')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionLabel}>Process</span>
            <TitleWords as="h2" className={styles.sectionTitle}>Build with confidence</TitleWords>
          </div>
        </div>

        <div
          ref={stageFrameRef}
          className={styles.stageFrame}
          style={{ '--stage-accent': activeStage.accent }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={handleBlur}
        >
          <div className={styles.stageCopy}>
            <div className={styles.stageMeta}>
              <span>Flat 18 / delivery map</span>
              <span className={styles.liveStatus}>
                <span className={styles.statusDot} aria-hidden="true" />
                {isPaused ? 'Paused' : 'Live sequence'}
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeStage.title}
                className={styles.processCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.stageNumber}>{activeStage.number}</span>
                <TitleWords as="h3" className={styles.stageTitle}>{activeStage.title}</TitleWords>
                <p className={styles.stageDescription}>{activeStage.description}</p>
                <p className={styles.stageDetails}>{activeStage.details}</p>
              </motion.article>
            </AnimatePresence>

            <div className={styles.stageControls}>
              <div className={styles.stageMarkers} aria-label="Process stages">
                {STAGES.map((stage, index) => (
                  <button
                    key={stage.title}
                    type="button"
                    className={`${styles.stageMarker} ${index === activeIndex ? styles.stageMarkerActive : ''}`}
                    aria-label={`Show ${stage.title}`}
                    aria-current={index === activeIndex ? 'step' : undefined}
                    onClick={() => selectStage(index)}
                  >
                    {stage.number}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className={styles.pauseButton}
                aria-label={isPaused ? 'Resume process animation' : 'Pause process animation'}
                onClick={() => setIsPaused((paused) => !paused)}
              >
                <span aria-hidden="true">{isPaused ? '▶' : 'Ⅱ'}</span>
                {isPaused ? 'Play' : 'Pause'}
              </button>
            </div>
          </div>

          <div className={styles.stageArtwork} aria-hidden="true">
            <div className={styles.artworkLabel}>
              <span></span>
              <span>{activeStage.number} / 04</span>
            </div>
            <div className={styles.artworkHalo} />
            <div className={styles.artworkDeck}>
              {STAGES.map((stage, index) => {
                const stackPosition = (index - activeIndex + STAGES.length) % STAGES.length
                const position = CARD_POSITIONS[stackPosition]

                return (
                  <motion.div
                    key={stage.number}
                    className={styles.artworkCard}
                    style={{ '--card-accent': stage.accent }}
                    animate={{ ...position, zIndex: STAGES.length - stackPosition }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={styles.artworkCardMeta}>
                      <span>Flat 18 / {stage.number}</span>
                      <span>{stage.title}</span>
                    </div>
                    <svg className={styles.artworkCardSvg} viewBox="0 0 100 100" fill="none">
                      <StageArtwork stage={stage} />
                    </svg>
                    <div className={styles.artworkCardFooter}>
                      <span>Delivery stage</span>
                      <span>{stage.number} / 04</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            {/* <p className={styles.artworkCaption}>
              LLMs accelerate the work. Senior developers make the calls.
            </p> */}
          </div>
        </div>

        <div className={styles.processBottom}>
          <div className={styles.ctaContent}>
            <TitleWords as="h3">Fast output. Senior review.</TitleWords>
            <p>Nothing reaches release as raw AI output.</p>
          </div>
          <a
            href="#contact"
            className="btn btn-primary"
            data-cta-source="process"
            data-signal-label="process_start_a_project"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
