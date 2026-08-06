'use client'

import HeroActions from '@/components/HeroActions'
import TitleWords from '@/components/TitleWords'
import LottiePlayer from '@/components/LottiePlayer'
import styles from '@/styles/component-css/Hero.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const loadHeroAiPipelineAnimation = async () => {
  const response = await fetch('/lottiefiles/ea6225fb-859a-4eb1-9706-1f52f789d436.json')

  if (!response.ok) {
    throw new Error(`Unable to load hero animation (${response.status})`)
  }

  return response.json()
}

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

export default function Hero() {
  return (
    <section
      className={styles.heroSection}
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

        <div
          className={styles.heroVisual}
          aria-label="AI-assisted product delivery animation"
        >
          <LottiePlayer
            animationDataSrc={loadHeroAiPipelineAnimation}
            autoplay
            loop
            className={styles.heroAnimation}
            playerClassName={styles.heroAnimationPlayer}
            playerStyle={{ width: '100%', height: '100%' }}
            loadOnVisible
            intersectionOptions={{ root: null, rootMargin: '0px', threshold: 0 }}
            prefersReducedMotionFallback={null}
          />
        </div>
      </div>

    </section>
  )
}
