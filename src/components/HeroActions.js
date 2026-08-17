'use client'

import Link from 'next/link'

import { analytics, trackSignalEvent } from '@/lib/analytics'
import { openChatwootOrFallback } from '@/utils/chatwoot'
import styles from '@/styles/component-css/Hero.module.css'

export default function HeroActions() {
  return (
    <div className={styles.heroActions}>
      <a
        href="/contact#contact-form"
        className="btn btn-primary btn-icon btn-lg"
        data-cta-source="hero"
        data-signal-label="hero_button"
        onClick={(event) => {
          event.preventDefault()
          trackSignalEvent('hero_button')
          analytics.chat.open('hero')
          openChatwootOrFallback()
        }}
      >
        <span className="btn-text">Discuss your product</span>
        <i className="bi bi-arrow-right" aria-hidden="true" />
      </a>
      <Link
        href="/selected-work"
        className="btn btn-secondary btn-lg"
        data-cta-source="hero"
        data-signal-label="hero_selected_work_link"
        onClick={() => {
          trackSignalEvent('hero_selected_work_link')
          analytics.hero.ctaClick('See selected work')
        }}
      >
        <span className="btn-text">See selected work</span>
      </Link>
    </div>
  )
}
