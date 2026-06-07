import styles from '@/styles/component-css/TrustSection.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const trustCards = [
  {
    icon: 'bi-compass',
    title: 'Senior direction',
    text: 'Architecture, trade-offs and implementation stay developer-led.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Fast iteration',
    text: 'LLMs help explore UI, code, content and tests quickly.',
  },
  {
    icon: 'bi-check2-square',
    title: 'Curated output',
    text: 'We refine, test and integrate. We do not ship raw AI output.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Production awareness',
    text: 'Data, permissions, deployment and maintainability are considered from the start.',
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
          <h2 id="trust-heading" className={styles.title}>
            AI speed. Senior control.
          </h2>
          <p className={styles.intro}>
            LLMs accelerate the work. Experienced developers make the calls.
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
