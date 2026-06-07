import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/FinalCTA.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function FinalCTA() {
  return (
    <section
      className={styles.finalSection}
      id="contact"
      data-bg-color={getSectionBackground('finalCta')}
      data-text-color={getSectionTextColor('finalCta')}
      aria-labelledby="final-cta-heading"
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.content}>
          <TitleWords as="h2" id="final-cta-heading" className={styles.title}>
            Ready to ship something better?
          </TitleWords>
          <p>
            Flat 18 can help you shape, build and ship it faster with senior developers directing the LLM-assisted process.
          </p>
        </div>
        <div className={styles.actions}>
          <a href="mailto:hello@flat18.co.uk?subject=Start%20a%20project" className="btn btn-primary">
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
