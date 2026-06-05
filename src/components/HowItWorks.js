import styles from '@/styles/component-css/HowItWorks.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Scope',
      description: 'Define the outcome, users, constraints and success criteria.',
      details: 'Brief, user flow, risks, acceptance criteria'
    },
    {
      number: '02',
      title: 'Draft',
      description: 'Use LLMs for options, scaffolds, components and test ideas.',
      details: 'Product drafts, code scaffolds, test ideas'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Turn useful drafts into the product: UI, APIs, data, auth and deployment.',
      details: 'Frontend, backend, APIs, data, deployment'
    },
    {
      number: '04',
      title: 'Review',
      description: 'Check security, performance, accessibility and handover notes.',
      details: 'Code review, QA, documentation, roadmap'
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
          <h2 className={styles.sectionTitle}>A simple gated process</h2>
          <p className={styles.sectionDescription}>
            LLMs help at each stage. Every stage still has a human decision point.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <article
              key={index}
              className={styles.processCard}
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
            <h3>Fast should still be maintainable.</h3>
            <p>Each release is designed to launch, learn and improve.</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
