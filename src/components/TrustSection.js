import styles from '@/styles/component-css/TrustSection.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const trustCards = [
  {
    icon: 'bi-compass',
    title: 'Product judgement before prompting',
    text: 'We clarify the product, users, workflows and edge cases before code generation starts.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Real architecture',
    text: 'Systems are structured for maintainability, not assembled as disposable prompt output.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Accelerated implementation',
    text: 'LLMs help us explore, scaffold and iterate faster across frontend, backend and content.',
  },
  {
    icon: 'bi-check2-square',
    title: 'Human review and refinement',
    text: 'Every meaningful output is reviewed, tested and shaped by senior developers.',
  },
]

export default function TrustSection() {
  return (
    <section
      className={styles.trustSection}
      id="senior-control"
      data-bg-color={getSectionBackground('trust')}
      data-text-color={getSectionTextColor('trust')}
      aria-labelledby="trust-heading"
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.heading}>
          <span className="label-uppercase">Quality control</span>
          <h2 id="trust-heading" className={styles.title}>
            LLMs accelerate the work. Senior developers protect the outcome.
          </h2>
          <p className={styles.intro}>
            We use LLMs to move faster through scaffolding, interface exploration, implementation, documentation and iteration. The important decisions stay with experienced developers: architecture, data modelling, security, integrations, performance, testing and launch readiness.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {trustCards.map((card) => (
            <article key={card.title} className={styles.card}>
              <i className={`bi ${card.icon}`} aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
