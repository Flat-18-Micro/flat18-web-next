import styles from '@/styles/component-css/HowItWorks.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Shape',
      description: 'We clarify the product idea, audience, workflows, must-have features and commercial goal.',
      details: 'Idea, users, workflows, risks'
    },
    {
      number: '02',
      title: 'Plan',
      description: 'We define the build path, technical stack, interface direction and delivery priorities.',
      details: 'Stack, interface direction, delivery priorities'
    },
    {
      number: '03',
      title: 'Generate and build',
      description: 'We use LLMs to accelerate scaffolding, implementation, content and iteration while senior developers direct the work.',
      details: 'Scaffolds, implementation, content, iteration'
    },
    {
      number: '04',
      title: 'Refine and ship',
      description: 'We review, test, polish, deploy and hand over a product that is ready to use or demonstrate.',
      details: 'Review, QA, deployment, handover'
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
          <h2 className={styles.sectionTitle}>A simple guided process</h2>
          <p className={styles.sectionDescription}>
            A fast build still needs clear decisions. We keep the path visible from first scope to launch.
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
            <p>LLMs are the acceleration layer. Senior developers are the quality control.</p>
          </div>
          <a href="#chat" className="btn btn-primary">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
