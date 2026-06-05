import styles from '../styles/component-css/Testimonials.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const reasons = [
  {
    icon: 'bi-terminal',
    title: 'LLMs do the heavy lifting',
    text: 'We use LLMs to draft approaches, generate boilerplate, explore options, write tests and prepare documentation quickly.',
  },
  {
    icon: 'bi-person-check',
    title: 'Senior developers keep control',
    text: 'Experienced engineers own the architecture, integration choices, code review, security checks and final product decisions.',
  },
  {
    icon: 'bi-box',
    title: 'You get a product, not a prompt',
    text: 'The output is working software with clear scope, production standards, handover notes and a roadmap you can keep using.',
  },
  {
    icon: 'bi-shield-lock',
    title: 'AI speed without shortcuts',
    text: 'We avoid using LLMs where judgement, privacy, resilience or commercial risk need direct human attention.',
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
          <span className="label-uppercase">Why founders choose Flat 18</span>
          <h2 id="why-flat18" className={styles.sectionTitle}>
            Experience, judgement and the right tools
          </h2>
          <p className={styles.sectionSubtitle}>
            LLMs make production work faster. Senior full-stack developers make sure the result is useful, maintainable and safe to own.
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
            The advantage is not the tool by itself. It is senior people using the tool with taste, technical depth and responsibility.
          </p>
          <a href="#chat" className="btn btn-secondary">
            Discuss your project
          </a>
        </div>
      </div>
    </section>
  )
}
