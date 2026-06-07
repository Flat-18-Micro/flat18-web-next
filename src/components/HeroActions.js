'use client'

import Link from 'next/link'

import { analytics } from '@/lib/analytics'
import styles from '@/styles/component-css/Hero.module.css'

export default function HeroActions() {
  return (
    <div className={styles.heroActions}>
      <a
        href="#contact"
        className="btn btn-primary btn-icon btn-lg"
        onClick={() => analytics.hero.bookCall()}
      >
        <span className="btn-text">Start a project</span>
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
  )
}
