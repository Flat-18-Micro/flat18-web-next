import styles from '@/styles/component-css/HowItWorks.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Frame the problem',
      description: 'We clarify outcomes, constraints, risks and acceptance criteria before LLMs touch the work.',
      details: 'Brief, scope, users, technical constraints, success metrics'
    },
    {
      number: '02',
      title: 'Generate options',
      description: 'LLMs help us explore approaches, draft components, compare paths and expose trade-offs quickly.',
      details: 'Prompted exploration, prototypes, code drafts, test ideas'
    },
    {
      number: '03',
      title: 'Engineer the product',
      description: 'Senior developers shape the architecture, implement the right solution and integrate the moving parts.',
      details: 'Frontend, backend, APIs, data models, deployment'
    },
    {
      number: '04',
      title: 'Review, test and harden',
      description: 'We review for security, performance and reliability before release, then document the handover clearly.',
      details: 'Code review, QA, accessibility, documentation, support'
    }
  ]

  return (
    <section
      className={styles.processSection}
      id="process"
      data-bg-color={getSectionBackground('howItWorks')}
      data-text-color={getSectionTextColor('howItWorks')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeading}>
          <span className="label-uppercase">Process</span>
          <h2 className={styles.sectionTitle}>How we use LLMs without losing control</h2>
          <p className={styles.sectionDescription}>
            LLMs accelerate research, drafting and implementation. Senior engineers own the architecture, security, quality and handover.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <article
              key={index}
              className={styles.processCard}
              data-liquid-prebuild="true"
            >
                <div className={styles.cardHeader}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <p className={styles.stepDetails}>{step.details}</p>
                </div>
            </article>
          ))}
        </div>

        <div className={styles.processBottom}>
          <div className={styles.ctaContent}>
            <h3>Speed should not mean guesswork.</h3>
            <p>We keep the process clear so the product can move quickly without losing quality.</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
