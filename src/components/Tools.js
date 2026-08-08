'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/component-css/Tools.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const tools = [
  { name: 'Infura', logo: '/images/tools/infura_wordmark_red.svg' },
  { name: 'Vue.js', logo: '/images/tools/vuejs.svg' },
  { name: 'Cloudflare', logo: '/images/tools/cloudflare.svg' },
  { name: 'Webflow', logo: '/images/tools/Webflow_logo_2023.svg' },
  { name: 'WalletConnect', logo: '/images/tools/Logo.svg' },
  { name: 'Node.js', logo: '/images/tools/Node.js_logo.svg' },
  { name: 'Neon', logo: '/images/tools/iddKu5-cyx_logos.webp' },
  { name: 'GitHub', logo: '/images/tools/github.webp' },
  { name: 'BTCPay', logo: '/images/tools/btcpay-logo-white-txt.svg' },
  { name: 'Vercel', logo: '/images/tools/vercel.webp' },
  { name: 'Stripe', logo: '/images/tools/Stripe_Logo,_revised_2016.svg' },
  { name: 'Affinity', logo: '/images/tools/Affinity_Designer_2-logo.svg' },
  { name: 'ChatGPT', logo: '/images/tools/chatgpt.svg' },
  { name: 'DeepSeek', logo: '/images/tools/DeepSeek_logo.svg' },
  { name: 'Le Chat', logo: '/images/tools/Mistral_AI_logo_(2025–).svg' },
]

const repeatTools = (source, count) => Array.from(
  { length: count },
  (_, index) => source[index % source.length],
)

const outerRingTools = repeatTools(tools.slice(0, 8), 36)
const innerRingTools = repeatTools(tools.slice(8), 30)
const outerRingAngles = Array.from({ length: outerRingTools.length }, (_, index) => index * (360 / outerRingTools.length))
const innerRingAngles = Array.from({ length: innerRingTools.length }, (_, index) => index * (360 / innerRingTools.length))

export default function Tools() {
  const cardRef = useRef(null)
  const stageRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage || !('IntersectionObserver' in window)) {
      setIsInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.18 },
    )

    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  const handlePointerMove = (event) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const glowX = ((event.clientX - rect.left) / rect.width) * 100
    const glowY = ((event.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--glow-x', `${glowX}%`)
    card.style.setProperty('--glow-y', `${glowY}%`)
    card.style.setProperty('--glow-intensity', '0.82')
    card.style.setProperty('--glow-radius', `${Math.min(360, Math.max(240, rect.width * 0.32))}px`)
  }

  const handlePointerLeave = () => {
    const card = cardRef.current
    if (!card) return

    card.style.setProperty('--glow-x', '50%')
    card.style.setProperty('--glow-y', '30%')
    card.style.setProperty('--glow-intensity', '0.42')
  }

  return (
    <section
      className={styles.toolsSection}
      id="stack"
      data-bg-color={getSectionBackground('tools')}
      data-text-color={getSectionTextColor('tools')}
      aria-labelledby="tools-heading"
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <article
          ref={cardRef}
          className={`${styles.magicBentoCard} ${styles.isGlowing}`}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div className={styles.cardCopy}>
            <h2 id="tools-heading">The stack behind the speed.</h2>
            <p>
              We know these tools end to end, from first interface to production. LLMs help us move from idea to working software at lightning speed; senior judgement keeps the result useful, secure and maintainable.
            </p>
          </div>

          <div
            ref={stageRef}
            className={styles.techStage}
            data-in-view={isInView}
            aria-label="Technology Flat18 works with"
          >
            <div className={styles.stageGlow} aria-hidden="true" />
            <div className={`${styles.ring} ${styles.outerRing}`} aria-hidden="true">
              <div className={styles.ringRotator}>
                {outerRingTools.map((tool, index) => (
                  <div
                    key={`${tool.name}-outer-${index}`}
                    className={styles.chickletPosition}
                    style={{
                      '--tile-angle': `${outerRingAngles[index]}deg`,
                    }}
                  >
                    <div className={styles.chicklet}>
                      <Image src={tool.logo} alt="" width={52} height={52} sizes="52px" className={styles.toolLogo} />
                      <span className={styles.toolName}>{tool.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.ring} ${styles.innerRing}`} aria-hidden="true">
              <div className={styles.ringRotator}>
                {innerRingTools.map((tool, index) => (
                  <div
                    key={`${tool.name}-inner-${index}`}
                    className={styles.chickletPosition}
                    style={{
                      '--tile-angle': `${innerRingAngles[index]}deg`,
                    }}
                  >
                    <div className={styles.chicklet}>
                      <Image src={tool.logo} alt="" width={52} height={52} sizes="52px" className={styles.toolLogo} />
                      <span className={styles.toolName}>{tool.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.stageCore} aria-hidden="true">
              <span>Brief</span>
              <i className="bi bi-arrow-right" />
              <span>Build</span>
              <i className="bi bi-arrow-right" />
              <span>Ship</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
