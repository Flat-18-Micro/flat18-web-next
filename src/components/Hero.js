'use client'

import { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import HeroActions from '@/components/HeroActions'
import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/Hero.module.css'
import motionStyles from '@/styles/component-css/HeroMotion.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const PROOF_POINTS = [
  {
    icon: 'bi-code-slash',
    title: 'Senior control',
    text: 'Architecture, security and release stay in expert hands.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Weeks, not months',
    text: 'LLMs speed up drafts, tests, docs and build decisions.',
  },
  {
    icon: 'bi-box-arrow-up-right',
    title: 'Code you own',
    text: 'Repository, roadmap and technical decisions included.',
  },
]

const AI_LANES = [
  { label: 'Scope', detail: 'Risks, flows, priorities' },
  { label: 'UI', detail: 'Screens, states, copy' },
  { label: 'Code', detail: 'Frontend, backend, data' },
  { label: 'Tests', detail: 'Checks, fixtures, edge cases' },
  { label: 'Docs', detail: 'Handover, roadmap, notes' },
]

const REVIEW_CHECKS = [
  'Architecture',
  'Security',
  'Release',
]

const SHIP_SIGNALS = [
  'MVP ready',
  'Repo owned',
  'Roadmap clear',
]

export default function Hero() {
  const lottieRef = useRef(null)
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Fetch the lottie animation data
    fetch('/lottiefiles/ea6225fb-859a-4eb1-9706-1f52f789d436.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load animation:', err))
  }, [])

  useEffect(() => {
    if (lottieRef.current && animationData) {
      lottieRef.current.play()
    }
  }, [animationData])

  return (
    <section
      className={`${styles.heroSection} ${motionStyles.motionOverrides}`}
      data-bg-color={getSectionBackground('hero')}
      data-text-color={getSectionTextColor('hero')}
    >
      {/* <div className={styles.heroRule} aria-hidden="true" /> */}
      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-6 sm:px-8`}>
        <div className={styles.heroContent}>
          <TitleWords as="h1" className={styles.heroHeading}>
            Ship <span className={styles.heroSerifAccent}>better</span> products <span className={styles.heroSerifAccent}>faster</span> with expert use of LLMs and <span className={styles.heroSerifAccent}>AI</span>
          </TitleWords>

          <p className={styles.heroSubheading}>
            Flat 18 turns rough product ideas into polished MVPs, dashboards and full-stack systems.
          </p>

          <HeroActions />

          <div className={styles.proofRow} aria-label="Delivery proof">
            {PROOF_POINTS.map((point) => (
              <div key={point.title} className={styles.proofItem}>
                <i className={`bi ${point.icon}`} aria-hidden="true" />
                <div>
                  <strong>{point.title}</strong>
                  <span>{point.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="AI-assisted product delivery animation">
          {animationData && (
            <Lottie
              ref={lottieRef}
              animationData={animationData}
              loop
              autoplay={false}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
      </div>

    </section>
  )
}
