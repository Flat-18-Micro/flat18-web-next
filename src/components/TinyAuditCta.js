'use client'

import Link from 'next/link'
import { trackSignalEvent } from '@/lib/analytics'
import styles from '@/styles/component-css/TinyAuditCta.module.css'

export default function TinyAuditCta({ source = 'site' }) {
  const signalLabel = `tiny_audit_${source.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '')}`

  return (
    <section className={styles.section} aria-labelledby={`${signalLabel}-title`}>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>Before a bigger build</p>
          <h2 id={`${signalLabel}-title`}>Not sure what to fix first?</h2>
          <p className={styles.copy}>
            Have us review your prototype or early product. We&rsquo;ll identify the three changes most worth making next.
          </p>
        </div>
        <Link
          href="/tiny-audit"
          className={styles.link}
          data-cta-source={source}
          data-signal-label={signalLabel}
          onClick={() => trackSignalEvent(signalLabel)}
        >
          Get a Tiny Audit
          <i className="bi bi-arrow-up-right" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
