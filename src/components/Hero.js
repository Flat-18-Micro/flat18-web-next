'use client'

import HeroActions from '@/components/HeroActions'
import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/Hero.module.css'
import orbPaletteStyles from '@/styles/component-css/HeroOrbPalette.module.css'
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

export default function Hero() {
  return (
    <section
      className={`${styles.heroSection} ${orbPaletteStyles.heroPalette}`}
      data-bg-color={getSectionBackground('hero')}
      data-text-color={getSectionTextColor('hero')}
    >
      {/* <div className={styles.heroRule} aria-hidden="true" /> */}
      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-6 sm:px-8`}>
        <div className={styles.heroContent}>
          <span className="label-uppercase">Flat 18 / Product design and web development</span>
          <TitleWords as="h1" className={styles.heroHeading}>
            Build <span className={styles.heroSerifAccent}>better</span> products <span className={styles.heroSerifAccent}>faster</span> with expert use of LLMs and <span className={styles.heroSerifAccent}>AI</span>.
          </TitleWords>

          <p className={styles.heroSubheading}>
            We help founders and product teams turn messy workflows, dense data and technical constraints into clear, reliable products people can use.
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

      </div>
      <div className={`${styles.orb} ${orbPaletteStyles.orb}`} aria-hidden="true" />
    </section>
  )
}
