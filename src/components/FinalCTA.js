import styles from '@/styles/component-css/FinalCTA.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function FinalCTA() {
  return (
    <section
      className={styles.finalSection}
      data-bg-color={getSectionBackground('finalCta')}
      data-text-color={getSectionTextColor('finalCta')}
      aria-labelledby="final-cta-heading"
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.content}>
          <h2 id="final-cta-heading" className={styles.title}>
            Have an MVP, dashboard or product idea that needs momentum?
          </h2>
          <p>
            Flat 18 can help you shape it, build it and ship it faster, with senior developers directing the LLM-assisted process from first concept to production-ready release.
          </p>
        </div>
        <div className={styles.actions}>
          <a href="#chat" className="btn btn-primary">
            Start a project
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
          <a href="mailto:hello@flat18.co.uk" className="btn btn-secondary">
            Email us
          </a>
        </div>
      </div>
    </section>
  )
}

