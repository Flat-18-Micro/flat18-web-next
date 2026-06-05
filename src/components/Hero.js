'use client'

import Link from 'next/link'

import styles from '@/styles/component-css/Hero.module.css'
import motionStyles from '@/styles/component-css/HeroMotion.module.css'
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

const PIPELINE_STAGES = ['Brief', 'LLM draft', 'Review', 'Launch']

const RELEASE_ROWS = [
  ['Architecture', 'Approved'],
  ['Interface', 'In build'],
  ['Tests', 'Passing'],
]

export default function Hero() {
  return (
    <section
      className={`${styles.heroSection} ${motionStyles.motionOverrides}`}
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
          <div className={`${styles.artifact} ${styles.briefArtifact}`}>
            <div className={styles.artifactHeader}>
              <span>Product spec</span>
              <span>01</span>
            </div>
            <div className={styles.blueprintFrame} aria-hidden="true">
              <svg className={styles.blueprintSvg} viewBox="0 0 320 178" focusable="false">
                <path className={styles.blueprintGridLine} d="M28 28H292M28 68H292M28 108H292M28 148H292" />
                <path className={styles.blueprintGridLine} d="M48 18V158M108 18V158M168 18V158M228 18V158M288 18V158" />
                <rect className={styles.blueprintPanel} x="42" y="34" width="92" height="54" rx="2" />
                <rect className={styles.blueprintPanel} x="194" y="94" width="72" height="42" rx="2" />
                <path className={styles.blueprintRoute} d="M58 128C88 75 126 110 150 62C172 18 232 44 274 80" />
                <circle className={styles.blueprintNode} cx="58" cy="128" r="6" />
                <circle className={styles.blueprintNode} cx="150" cy="62" r="6" />
                <circle className={styles.blueprintNode} cx="274" cy="80" r="6" />
              </svg>
            </div>
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

          <div className={`${styles.artifact} ${styles.pipelineArtifact}`}>
            <div className={styles.artifactHeader}>
              <span>Build loop</span>
              <span>LLM + senior review</span>
            </div>
            <div className={styles.pipelineBody}>
              <svg className={styles.pipelineSvg} viewBox="0 0 420 122" aria-hidden="true" focusable="false">
                <path className={styles.pipelineRail} d="M44 62H376" />
                <path className={styles.pipelinePulse} d="M44 62H376" />
                {PIPELINE_STAGES.map((stage, index) => {
                  const x = 44 + index * 110

                  return (
                    <g key={stage} className={styles.pipelineNodeGroup}>
                      <circle className={styles.pipelineNode} cx={x} cy="62" r="11" />
                      <circle className={styles.pipelineNodeCore} cx={x} cy="62" r="4" />
                      <text x={x} y="96" textAnchor="middle">{stage}</text>
                    </g>
                  )
                })}
              </svg>
              <div className={styles.codeBlock} aria-hidden="true">
                <span>{'scope.with(context)'}</span>
                <span>{'generate.components()'}</span>
                <span>{'review.ship()'}</span>
              </div>
            </div>
          </div>

          <div className={`${styles.artifact} ${styles.releaseArtifact}`}>
            <div className={styles.releaseShell}>
              <div className={styles.releaseNav}>
                <span>Launch board</span>
                <i className="bi bi-check-circle" aria-hidden="true" />
              </div>
              <div className={styles.releaseChart} aria-hidden="true">
                <svg viewBox="0 0 460 150" className={styles.releaseSvg} focusable="false">
                  <path className={styles.chartGrid} d="M34 36H424M34 74H424M34 112H424" />
                  <path className={styles.chartLine} d="M42 108C92 104 102 78 148 78C190 78 196 52 240 54C296 56 300 34 360 38C396 40 410 30 424 26" />
                  <circle className={styles.chartPoint} cx="148" cy="78" r="5" />
                  <circle className={styles.chartPoint} cx="240" cy="54" r="5" />
                  <circle className={styles.chartPoint} cx="424" cy="26" r="5" />
                </svg>
              </div>
              <div className={styles.releaseMetrics}>
                <div>
                  <span>Prototype</span>
                  <strong>7 days</strong>
                </div>
                <div>
                  <span>Build state</span>
                  <strong>Live</strong>
                </div>
              </div>
              <div className={styles.releaseList}>
                {RELEASE_ROWS.map(([label, status]) => (
                  <span key={label}>
                    <em>{label}</em>
                    <strong>{status}</strong>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
