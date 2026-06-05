'use client'

import Link from 'next/link'

import styles from '@/styles/component-css/Hero.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const PROOF_POINTS = [
  {
    icon: 'bi-code-slash',
    title: 'Senior code review',
    text: 'Experienced engineers check the architecture, security and production details.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Prototype in days',
    text: 'LLMs speed up drafts, components, tests and documentation from the first sprint.',
  },
  {
    icon: 'bi-box-seam',
    title: 'Built for handover',
    text: 'You own the code, decisions and roadmap when the project moves on.',
  },
]

export default function Hero() {
  return (
    <section
      className={styles.heroSection}
      data-bg-color={getSectionBackground('hero')}
      data-text-color={getSectionTextColor('hero')}
    >
      <div className={styles.heroRule} aria-hidden="true" />
      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-6 sm:px-8`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            Expert-built products, accelerated by LLMs
          </h1>

          <p className={styles.heroSubheading}>
            We design and build curated MVPs and complete digital products at speed, using modern AI tools in the hands of senior full-stack developers.
          </p>

          <div className={styles.heroActions}>
            <a
              href="#chat"
              className="btn btn-primary btn-icon btn-lg"
              onClick={() => analytics.hero.bookCall()}
            >
              <span className="btn-text">Start a project</span>
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
            <Link
              href="/#pricing"
              className="btn btn-secondary btn-lg"
              onClick={() => analytics.hero.ctaClick('See pricing')}
            >
              <span className="btn-text">See pricing</span>
            </Link>
          </div>

          <div className={styles.proofRow} aria-label="Delivery proof">
            {PROOF_POINTS.map((point) => (
              <div key={point.title} className={styles.proofItem}>
                <i className={`bi ${point.icon}`} aria-hidden="true" />
                <div>
                  <strong>{point.title}</strong>
                  <span>{point.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Product delivery artefacts">
          <div className={`${styles.artifact} ${styles.specArtifact}`}>
            <div className={styles.artifactHeader}>Product spec</div>
            <dl className={styles.specList}>
              <div>
                <dt>Audience</dt>
                <dd>Founders and operators</dd>
              </div>
              <div>
                <dt>Problem</dt>
                <dd>Long build times and unclear scope</dd>
              </div>
              <div>
                <dt>Solution</dt>
                <dd>Curated MVP, fast iteration, clean handover</dd>
              </div>
            </dl>
          </div>

          <div className={`${styles.artifact} ${styles.codeArtifact}`} aria-hidden="true">
            <div className={styles.windowDots}>
              <span />
              <span />
              <span />
            </div>
            <pre>{`export async function createProject(input) {
  const plan = await scopeWithLLM(input)
  const product = await buildReviewed(plan)

  await runTests(product)
  return handover(product)
}`}</pre>
          </div>

          <div className={`${styles.artifact} ${styles.productArtifact}`}>
            <div className={styles.productShell}>
              <div className={styles.productNav}>
                <span>Acme</span>
                <i className="bi bi-check-circle" aria-hidden="true" />
              </div>
              <div className={styles.productMetrics}>
                <div>
                  <span>Activation</span>
                  <strong>64%</strong>
                </div>
                <div>
                  <span>Build</span>
                  <strong>Live</strong>
                </div>
              </div>
              <div className={styles.releaseList}>
                <span>Reviewed architecture</span>
                <span>Production deployment</span>
                <span>Handover notes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
