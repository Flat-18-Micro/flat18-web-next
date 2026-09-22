'use client'

import HeroActions from '@/components/HeroActions'
import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/Hero.module.css'
import orbPaletteStyles from '@/styles/component-css/HeroOrbPalette.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function Hero() {
  return (
    <section
      className={`${styles.heroSection} ${orbPaletteStyles.heroPalette}`}
      data-bg-color={getSectionBackground('hero')}
      data-text-color={getSectionTextColor('hero')}
      data-hero-build="true"
    >
      {/* <div className={styles.heroRule} aria-hidden="true" /> */}
      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-6 sm:px-8`}>
        <div className={styles.heroContent}>
          <div className={styles.availabilityStatus} role="status">
            <span>2 client spaces left</span>
          </div>

          <TitleWords as="h1" className={styles.heroHeading}>
            We turn <span className={styles.heroSerifAccent}>ideas</span> into <span className={styles.heroSerifAccent}>robust products</span> your users will love<span className={styles.heroHeart} aria-hidden="true"><svg viewBox="0 0 48 44" role="presentation"><path d="M24 40S4 28.2 4 14.8C4 8.8 8.3 4 14.1 4c4.3 0 7.8 2.7 9.9 6.2C26.1 6.7 29.6 4 33.9 4 39.7 4 44 8.8 44 14.8 44 28.2 24 40 24 40Z" /></svg></span>.
          </TitleWords>

          <p className={styles.heroSubheading}>
            Designing and developing apps, websites and services — with 10+ years’ senior engineering experience and trusted, long-term client partnerships.
          </p>

          <HeroActions />
        </div>

      </div>
      <div className={`${styles.orb} ${orbPaletteStyles.orb}`} aria-hidden="true" />
    </section>
  )
}
