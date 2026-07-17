'use client'

import Link from 'next/link'

import { analytics } from '@/lib/analytics'
import { openChatwootOrFallback } from '@/utils/chatwoot'
import styles from '@/styles/component-css/Hero.module.css'

export default function HeroActions() {
  return (
    <div className={styles.heroActions}>
      <a
        href="/contact#contact-form"
        className="btn btn-primary btn-icon btn-lg"
        onClick={(event) => {
          event.preventDefault()
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
        onClick={() => analytics.hero.ctaClick('See pricing')}
      >
        <span className="btn-text">See pricing</span>
      </Link>
    </div>
  )
}
