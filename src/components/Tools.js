'use client'

import styles from '../styles/component-css/Tools.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export default function Tools() {
  const prefersReducedMotion = useReducedMotion()
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
    { name: 'Le Chat', logo: '/images/tools/Mistral_AI_logo_(2025–).svg' }
  ]
  const toolList = prefersReducedMotion ? tools : [...tools, ...tools]

  return (
    <section
      className={styles.toolsSection}
      data-bg-color={getSectionBackground('tools')}
      data-text-color={getSectionTextColor('tools')}
    >
      <div className="container">
        <div className={styles.toolsHeader}>
          <h2 className={styles.toolsTitle}>Tooling we ship with</h2>
          <p className={styles.toolsSubtitle}>Reliable stack choices that keep builds fast and maintainable</p>
        </div>

        <div className={styles.toolsContainer}>
          <div className={styles.marqueeTrack}>
            <motion.div
              className={`${styles.toolsList} ${styles.scrollRow}`}
              initial={{ x: 0 }}
              animate={prefersReducedMotion ? { x: 0 } : { x: '-50%' }}
              transition={prefersReducedMotion ? { duration: 0 } : { repeat: Infinity, duration: 30, ease: 'linear' }}
            >
              {toolList.map((tool, index) => (
                <div key={index} className={`${styles.toolItem} ${styles.scrollItem}`}>
                  <div
                    className={styles.toolLogoContainer}
                  >
                    {tool.logo.endsWith('.svg') ? (
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className={styles.toolLogo}
                        loading="lazy"
                        width={100}
                        height={40}
                        style={{ objectFit: 'contain' }}
                      />
                    ) : (
                      <Image
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className={styles.toolLogo}
                        width={100}
                        height={40}
                        style={{ objectFit: 'contain' }}
                        quality={70}
                      />
                    )}
                  </div>
                  {<div className={styles.toolName}>{tool.name}</div>}
                </div>
              ))}
            </motion.div>
          </div>

          <div className={styles.toolsGradient}></div>
        </div>
      </div>
    </section>
  )
}
