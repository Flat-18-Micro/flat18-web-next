'use client'

import HeroActions from '@/components/HeroActions'
import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/Hero.module.css'
import orbPaletteStyles from '@/styles/component-css/HeroOrbPalette.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const PROOF_POINTS = [
  {
    icon: 'bi-code-slash',
    title: 'Built with care',
    text: 'Experienced developers guide the architecture, security and launch.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'From idea to launch',
    text: 'Smart tools help us turn a clear brief into working software sooner.',
  },
  {
    icon: 'bi-box-arrow-up-right',
    title: 'Ready for what’s next',
    text: 'You keep the code, knowledge and control to grow your product.',
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
          <TitleWords as="h1" className={styles.heroHeading}>
            We turn <span className={styles.heroSerifAccent}>ideas</span> into <span className={styles.heroSerifAccent}>robust products</span> your users will love<span className={styles.heroHeart} aria-hidden="true"><svg viewBox="0 0 48 44" role="presentation"><path d="M24 40S4 28.2 4 14.8C4 8.8 8.3 4 14.1 4c4.3 0 7.8 2.7 9.9 6.2C26.1 6.7 29.6 4 33.9 4 39.7 4 44 8.8 44 14.8 44 28.2 24 40 24 40Z" /></svg></span>.
          </TitleWords>

          <p className={styles.heroSubheading}>
            Designing and developing apps, websites and services — with 10+ years’ senior engineering experience and trusted, long-term client partnerships.
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
