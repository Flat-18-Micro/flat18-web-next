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

const PIPELINE_STEPS = [0, 1, 2, 3]

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

        <div className={styles.heroVisual} aria-label="Product delivery artefacts">
          <div className={`${styles.artifact} ${styles.briefArtifact}`}>
            <div className={styles.artifactHeader}>
              <span>Brief</span>
              <span>Scoped</span>
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
            <div className={styles.signalGrid} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={`${styles.artifact} ${styles.pipelineArtifact}`}>
            <div className={styles.artifactHeader}>
              <span>Loop</span>
              <span>Gated</span>
            </div>
            <div className={styles.pipelineBody}>
              <svg className={styles.pipelineSvg} viewBox="0 0 420 122" aria-hidden="true" focusable="false">
                <path className={styles.pipelineRail} d="M44 62H376" />
                <path className={styles.pipelinePulse} d="M44 62H376" />
                {PIPELINE_STEPS.map((step, index) => {
                  const x = 44 + index * 110

                  return (
                    <g key={step} className={styles.pipelineNodeGroup}>
                      <circle className={styles.pipelineNode} cx={x} cy="62" r="11" />
                      <circle className={styles.pipelineNodeCore} cx={x} cy="62" r="4" />
                    </g>
                  )
                })}
              </svg>
              <div className={styles.flowBars} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className={`${styles.artifact} ${styles.releaseArtifact}`}>
            <div className={styles.releaseShell}>
              <div className={styles.releaseNav}>
                <span>Launch</span>
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
              <div className={styles.releaseMeters} aria-hidden="true">
                <span />
                <span />
              </div>
              <div className={styles.releaseChecks} aria-hidden="true">
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
