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
        <span className="btn-text">Chat with us</span>
        <i className="bi bi-arrow-right" aria-hidden="true" />
      </a>
      <Link
        href="/#pricing"
        className="btn btn-secondary btn-lg"
        data-cta-source="hero"
        data-signal-label="hero_pricing_link"
        onClick={() => {
          trackSignalEvent('hero_pricing_link')
          analytics.hero.ctaClick('See pricing')
        }}
      >
        <span className="btn-text">See pricing</span>
      </Link>
    </div>
  )
}
