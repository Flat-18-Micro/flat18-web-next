'use client'

import Link from 'next/link'

import styles from '@/styles/component-css/Hero.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'
import HeroVisual from '@/components/HeroVisual'
import { getTwoLetterInitials } from '@/utils/initials'

const SOCIAL_PROOF_LABELS = ['Co-founder', 'Founder', 'Solopreneur', 'Head of Product', 'Founder']
const SOCIAL_PROOF_INITIALS = SOCIAL_PROOF_LABELS.map((label) => getTwoLetterInitials(label))

export default function Hero() {


  return (
    <section
      className={styles.heroSection}
      data-bg-color={getSectionBackground('hero')}
      data-text-color={getSectionTextColor('hero')}
    >
      <div className={styles.herobg} aria-hidden="true" />
      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>

        {/* ── Copy column ── */}
        <div className={styles.heroContent}>
          <div className={styles.heroKicker}>
            {/* <span className={styles.heroKickerBadge}>Fintech + Crypto</span> */}
            {/* <span className={styles.heroKickerText}>Product studio for founders building ambitious platforms</span> */}
          </div>

          <h1 className={styles.heroHeading}>
            <span className={styles.heroHeadingAccent}>Design & Development</span>
            <span className={styles.heroHeadingThin}>for modern Websites and Apps</span>
          </h1>

          <p className={styles.heroSubheading}>
            We help startups and technology companies launch and improve digital products in fintech and DeFi.
          </p>

          <div className={styles.heroActions}>
            <a
              href="#chat"
              className="btn btn-primary btn-icon btn-lg"
              onClick={() => analytics.hero.bookCall()}
            >
              <span className="btn-text">Chat with us</span>
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
            <Link
              href="/#pricing"
              className="btn btn-secondary btn-lg"
              onClick={() => analytics.hero.ctaClick('See pricing')}
            >
              <span className="btn-text">See pricing</span>
            </Link>
          </div>

          {/* Social proof */}
          <div className={styles.socialProof} aria-label="Social proof">
            <div className={styles.avatarStack} aria-hidden="true">
              {SOCIAL_PROOF_INITIALS.map((initials, index) => (
                <span
                  key={`${initials}-${index}`}
                  className={`${styles.avatar} ${styles[`avatar${index + 1}`]}`}
                >
                  {initials}
                </span>
              ))}
            </div>
            <p className={styles.socialProofText}>20+ projects delivered. Rated 5 stars by clients.</p>
          </div>
        </div>

        {/* ── HeroVisual element ── */}
        <HeroVisual />

      </div>
    </section>
  )
