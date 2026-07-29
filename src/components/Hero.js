'use client'

import HeroActions from '@/components/HeroActions'
import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/Hero.module.css'
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
      className={styles.heroSection}
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

        <div
          className={styles.heroVisual}
          aria-label="AI-assisted product delivery illustration"
          style={{ opacity: 1, transform: 'none' }}
        >
          <div className={styles.aiPipeline}>
            <div className={styles.pipelineHeader}>
              <span>AI-assisted product delivery</span>
              <span>From brief to release</span>
            </div>

            <div className={styles.pipelineRailWrap} aria-hidden="true">
              <svg className={styles.aiRailSvg} viewBox="0 0 520 72" preserveAspectRatio="none">
                <path className={styles.aiRailBase} d="M 12 36 H 508" />
                <path className={styles.aiRailTrace} d="M 12 36 H 508" />
                <circle className={styles.aiRailNode} cx="72" cy="36" r="8" />
                <circle className={styles.aiRailNode} cx="188" cy="36" r="8" />
                <circle className={styles.aiRailNode} cx="314" cy="36" r="8" />
                <circle className={styles.aiRailNode} cx="442" cy="36" r="8" />
              </svg>
            </div>

            <div className={styles.stageGrid}>
              <article className={`${styles.pipelineStage} ${styles.briefStage}`}>
                <span className={styles.stageEyebrow}>01 Scope</span>
                <strong>Keep the brief buildable.</strong>
                <div className={styles.briefLines} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <ul>
                  <li>Goals and constraints</li>
                  <li>Workflows and edge cases</li>
                  <li>Delivery risks and sequencing</li>
                </ul>
              </article>

              <article className={`${styles.pipelineStage} ${styles.aiStage}`}>
                <span className={styles.stageEyebrow}>02 Draft</span>
                <strong>LLMs speed up the options.</strong>
                <div className={styles.aiLaneGrid}>
                  {AI_LANES.map((lane) => (
                    <div key={lane.label} className={styles.aiLane}>
                      <span>{lane.label}</span>
                      <small>{lane.detail}</small>
                    </div>
                  ))}
                </div>
              </article>

              <article className={`${styles.pipelineStage} ${styles.reviewStage}`}>
                <span className={styles.stageEyebrow}>03 Review</span>
                <strong>Senior judgement trims the risk.</strong>
                <div className={styles.reviewChecks}>
                  {REVIEW_CHECKS.map((check) => (
                    <span key={check}>
                      <i className="bi bi-check2" aria-hidden="true" />
                      {check}
                    </span>
                  ))}
                </div>
              </article>

              <article className={`${styles.pipelineStage} ${styles.launchStage}`}>
                <span className={styles.stageEyebrow}>04 Launch</span>
                <strong>Ship with production awareness.</strong>
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
              </article>
            </div>
          </div>

          <div className={`${styles.artifact} ${styles.briefArtifact}`} aria-hidden="true">
            <div className={styles.artifactHeader}>
              <span>Brief</span>
              <span>Ready</span>
            </div>
            <div className={styles.blueprintFrame}>
              <svg className={styles.blueprintSvg} viewBox="0 0 320 160" preserveAspectRatio="none">
                <rect className={styles.blueprintGridLine} x="0" y="0" width="320" height="160" />
                <path className={styles.blueprintRoute} d="M 28 116 C 72 90, 106 72, 146 74 S 220 106, 292 50" />
                <circle className={styles.blueprintNode} cx="28" cy="116" r="6" />
                <circle className={styles.blueprintNode} cx="146" cy="74" r="6" />
                <circle className={styles.blueprintNode} cx="292" cy="50" r="6" />
              </svg>
            </div>
          </div>

          <div className={`${styles.artifact} ${styles.pipelineArtifact}`} aria-hidden="true">
            <div className={styles.artifactHeader}>
              <span>Pipeline</span>
              <span>In progress</span>
            </div>
            <div className={styles.pipelineBody}>
              <svg className={styles.pipelineSvg} viewBox="0 0 360 102" preserveAspectRatio="none">
                <path className={styles.pipelineRail} d="M 18 74 C 62 30, 126 30, 166 62 S 258 106, 342 34" />
                <path className={styles.pipelinePulse} d="M 18 74 C 62 30, 126 30, 166 62 S 258 106, 342 34" />
                <circle className={styles.pipelineNode} cx="18" cy="74" r="7" />
                <circle className={styles.pipelineNode} cx="166" cy="62" r="7" />
                <circle className={styles.pipelineNode} cx="342" cy="34" r="7" />
                <circle className={styles.pipelineNodeCore} cx="166" cy="62" r="3" />
              </svg>
              <div className={styles.flowBars} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className={`${styles.artifact} ${styles.releaseArtifact}`} aria-hidden="true">
            <div className={styles.artifactHeader}>
              <span>Release</span>
              <span>Controlled</span>
            </div>
            <div className={styles.releaseShell}>
              <div className={styles.releaseNav}>
                <span>Production checklist</span>
                <i className="bi bi-shield-check" aria-hidden="true" />
              </div>
              <div className={styles.releaseChart}>
                <svg className={styles.releaseSvg} viewBox="0 0 360 102" preserveAspectRatio="none">
                  <path className={styles.chartGrid} d="M 16 18 H 344 M 16 46 H 344 M 16 74 H 344" />
                  <path className={styles.chartLine} d="M 20 82 C 68 74, 104 58, 144 54 S 224 36, 292 24" />
                  <circle className={styles.chartPoint} cx="20" cy="82" r="5" />
                  <circle className={styles.chartPoint} cx="144" cy="54" r="5" />
                  <circle className={styles.chartPoint} cx="292" cy="24" r="5" />
                </svg>
              </div>
              <div className={styles.releaseMeters} aria-hidden="true">
                <span />
                <span />
              </div>
              <div className={styles.releaseChecks}>
                <span><i className="bi bi-check2" aria-hidden="true" /></span>
                <span><i className="bi bi-check2" aria-hidden="true" /></span>
                <span><i className="bi bi-check2" aria-hidden="true" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
