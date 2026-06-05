import styles from '../styles/component-css/Testimonials.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const reasons = [
  {
    icon: 'bi-terminal',
    title: 'Fast drafts',
    text: 'Research, scaffolding, UI options, tests and documentation move faster.',
  },
  {
    icon: 'bi-person-check',
    title: 'Technical judgement',
    text: 'Architecture, integrations, security and product behaviour are reviewed by senior developers.',
  },
  {
    icon: 'bi-box',
    title: 'One product system',
    text: 'UX, code, data and release choices stay connected.',
  },
  {
    icon: 'bi-shield-lock',
    title: 'Ownable output',
    text: 'You leave with a working repo, clear decisions and next steps.',
  },
]

export default function Testimonials() {
  return (
    <section
      className={styles.testimonialsSection}
      data-bg-color={getSectionBackground('testimonials')}
      data-text-color={getSectionTextColor('testimonials')}
      aria-labelledby="why-flat18"
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeader}>
          <span className="label-uppercase">Why it works</span>
          <h2 id="why-flat18" className={styles.sectionTitle}>
            AI speed, senior control
          </h2>
          <p className={styles.sectionSubtitle}>
            LLMs cut drafting time. Our value is knowing what to keep, change and ship.
          </p>
        </div>

        <div className={styles.reasonGrid}>
          {reasons.map((reason) => (
            <article key={reason.title} className={styles.reasonCard}>
              <i className={`bi ${reason.icon}`} aria-hidden="true" />
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.evidenceRow}>
          <p>
            No prompt demos. Reviewed software you can build on.
          </p>
          <a href="#chat" className="btn btn-secondary">
            Discuss your project
          </a>
        </div>
      </div>
    </section>
  )
}
