import HeroActions from '@/components/HeroActions'
import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/Hero.module.css'
import motionStyles from '@/styles/component-css/HeroMotion.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const PROOF_POINTS = [
  {
    icon: 'bi-code-slash',
    title: 'Senior control',
    text: 'Architecture, security and release stay in expert hands.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Weeks, not months',
    text: 'LLMs speed up drafts, tests, docs and build decisions.',
  },
  {
    icon: 'bi-box-arrow-up-right',
    title: 'Code you own',
    text: 'Repository, roadmap and technical decisions included.',
  },
]

const AI_LANES = [
  { label: 'Scope', detail: 'Risks, flows, priorities' },
  { label: 'UI', detail: 'Screens, states, copy' },
  { label: 'Code', detail: 'Frontend, backend, data' },
  { label: 'Tests', detail: 'Checks, fixtures, edge cases' },
  { label: 'Docs', detail: 'Handover, roadmap, notes' },
]

const REVIEW_CHECKS = [
  'Architecture',
  'Security',
  'Release',
]

const SHIP_SIGNALS = [
  'MVP ready',
  'Repo owned',
  'Roadmap clear',
]

export default function Hero() {
  return (
    <section
      className={`${styles.heroSection} ${motionStyles.motionOverrides}`}
      data-bg-color={getSectionBackground('hero')}
      data-text-color={getSectionTextColor('hero')}
    >
      {/* <div className={styles.heroRule} aria-hidden="true" /> */}
      <div className={`${styles.heroContainer} max-w-7xl mx-auto px-6 sm:px-8`}>
        <div className={styles.heroContent}>
          <TitleWords as="h1" className={styles.heroHeading}>
            Ship <span className={styles.heroSerifAccent}>better</span> products <span className={styles.heroSerifAccent}>faster</span> with expert use of LLMs and <span className={styles.heroSerifAccent}>AI</span>
          </TitleWords>

          <p className={styles.heroSubheading}>
            Flat 18 turns rough product ideas into polished MVPs, dashboards and full-stack systems.
          </p>

          <HeroActions />

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

        <div className={styles.heroVisual} aria-label="AI-assisted product delivery pipeline with senior review gates">
          <div className={styles.aiPipeline}>
            <div className={styles.pipelineHeader}>
              <span>Expert AI pipeline</span>
              <span>Senior controlled</span>
            </div>

            <div className={styles.pipelineRailWrap} aria-hidden="true">
              <svg className={styles.aiRailSvg} viewBox="0 0 640 96" focusable="false">
                <path className={styles.aiRailBase} d="M42 48H598" />
                <path className={styles.aiRailTrace} d="M42 48H598" />
                <circle className={styles.aiRailNode} cx="42" cy="48" r="8" />
                <circle className={styles.aiRailNode} cx="236" cy="48" r="8" />
                <circle className={styles.aiRailNode} cx="432" cy="48" r="8" />
                <circle className={styles.aiRailNode} cx="598" cy="48" r="8" />
              </svg>
            </div>

            <div className={styles.stageGrid}>
              <div className={`${styles.pipelineStage} ${styles.briefStage}`}>
                <div className={styles.stageEyebrow}>Brief</div>
                <strong>Rough idea</strong>
                <div className={styles.briefLines} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <ul>
                  <li>Goal</li>
                  <li>Users</li>
                  <li>Risk</li>
                </ul>
              </div>

              <div className={`${styles.pipelineStage} ${styles.aiStage}`}>
                <div className={styles.stageEyebrow}>AI draft</div>
                <strong>Parallel acceleration</strong>
                <div className={styles.aiLaneGrid}>
                  {AI_LANES.map((lane) => (
                    <div key={lane.label} className={styles.aiLane}>
                      <span>{lane.label}</span>
                      <small>{lane.detail}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${styles.pipelineStage} ${styles.reviewStage}`}>
                <div className={styles.stageEyebrow}>Senior review</div>
                <strong>Quality gate</strong>
                <div className={styles.reviewChecks}>
                  {REVIEW_CHECKS.map((check) => (
                    <span key={check}>
                      <i className="bi bi-check2" aria-hidden="true" />
                      {check}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${styles.pipelineStage} ${styles.launchStage}`}>
                <div className={styles.stageEyebrow}>Launch</div>
                <strong>Client-owned product</strong>
                <div className={styles.launchWindow} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.shipSignals}>
                  {SHIP_SIGNALS.map((signal) => (
                    <span key={signal}>{signal}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
