import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/HowItWorks.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Scope',
      description: 'We turn the idea into a buildable plan.',
      details: 'Goal, users, workflows and risks'
    },
    {
      number: '02',
      title: 'Draft',
      description: 'LLMs help produce fast UI, code and documentation options.',
      details: 'Interface, code, content and docs'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Senior developers shape, test and connect the product.',
      details: 'Frontend, backend, data and integrations'
    },
    {
      number: '04',
      title: 'Review',
      description: 'We check quality, security and release readiness.',
      details: 'Quality, security, release and handover'
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
          <TitleWords as="h2" className={styles.sectionTitle}>A simple gated process</TitleWords>
          <p className={styles.sectionDescription}>
            Fast work, reviewed before it ships.
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
                  <TitleWords as="h3" className={styles.stepTitle}>{step.title}</TitleWords>
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
            <TitleWords as="h3">Fast output. Senior review.</TitleWords>
            <p>LLMs are the acceleration layer. Senior developers are the quality control.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
