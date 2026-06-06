import styles from '../styles/component-css/Testimonials.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const reasons = [
  {
    icon: 'bi-person-check',
    title: 'Senior direction',
    text: 'Experienced developers shape the architecture, implementation path and trade-offs.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Faster iteration',
    text: 'LLMs help us test interface ideas, implementation routes and content variants quickly.',
  },
  {
    icon: 'bi-sliders',
    title: 'Curated output',
    text: 'We do not ship raw AI output. We edit, refine, test and integrate the work properly.',
  },
  {
    icon: 'bi-shield-lock',
    title: 'Production awareness',
    text: 'We think beyond the demo: data, permissions, deployment, maintainability and future changes.',
  },
]

export default function Testimonials() {
  return (
    <section
      className={styles.testimonialsSection}
      id="ai-speed-control"
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
            LLMs can produce code quickly. The difference is knowing what to ask for, what to reject, what to refactor and how to turn rapid output into a product that can survive real users.
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
            LLMs are the acceleration layer. Senior developers are the quality control.
          </p>
          <a href="#chat" className="btn btn-secondary">
            Discuss your project
          </a>
        </div>
      </div>
    </section>
  )
}
