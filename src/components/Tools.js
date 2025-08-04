'use client'

import styles from '../styles/component-css/Tools.module.css'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Tools() {
  const tools = [
    { name: 'Infura', logo: '/images/tools/infura_wordmark_red.svg', bgColor: 'rgba(255, 74, 0, 0.3)' },
    { name: 'Vue.js', logo: '/images/tools/vuejs.svg', bgColor: 'rgba(65, 184, 131, 0.3)' },
    { name: 'Cloudflare', logo: '/images/tools/cloudflare.svg', bgColor: 'rgba(255, 128, 0, 0.3)' },
    { name: 'Webflow', logo: '/images/tools/Webflow_logo_2023.svg', bgColor: 'rgba(0, 0, 255, 0.3)' },
    { name: 'WalletConnect', logo: '/images/tools/Logo.svg', bgColor: 'rgba(0, 122, 255, 0.3)' },
    { name: 'Node.js', logo: '/images/tools/Node.js_logo.svg', bgColor: 'rgba(88, 101, 242, 0.3)' },
    { name: 'Neon', logo: '/images/tools/iddKu5-cyx_logos.webp', bgColor: 'rgba(0, 255, 255, 0.3)' },
    { name: 'GitHub', logo: '/images/tools/github.webp', bgColor: 'rgba(36, 41, 46, 0.3)' },
    { name: 'BTCPay', logo: '/images/tools/btcpay-logo-white-txt.svg', bgColor: 'rgba(0, 255, 0, 0.3)' },
    { name: 'Vercel', logo: '/images/tools/vercel.webp', bgColor: 'rgba(0, 0, 0, 0.3)' },
    { name: 'Stripe', logo: '/images/tools/Stripe_Logo,_revised_2016.svg', bgColor: 'rgba(0, 0, 255, 0.3)' },
    { name: 'Affinity', logo: '/images/tools/Affinity_Designer_2-logo.svg', bgColor: 'rgba(0, 0, 255, 0.3)' },
    { name: 'ChatGPT', logo: '/images/tools/chatgpt.svg', bgColor: 'rgba(0, 255, 0, 0.3)' },
    { name: 'DeepSeek', logo: '/images/tools/DeepSeek_logo.svg', bgColor: 'rgba(0, 0, 255, 0.3)' },
    { name: 'Le Chat', logo: '/images/tools/Mistral_AI_logo_(2025–).svg', bgColor: 'rgba(255, 0, 255, 0.3)' }
  ]

  return (
    <section className={styles.toolsSection}>
      <div className="container">
        <div className={styles.toolsHeader}>
          <h2 className={styles.toolsTitle}>Tools We Trust</h2>
          <p className={styles.toolsSubtitle}>Best-in-class tech for every build</p>
        </div>

        <div className={styles.toolsContainer}>
          <div className={styles.marqueeTrack}>
            <motion.div
              className={`${styles.toolsList} ${styles.scrollRow}`}
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            >
              {[...tools, ...tools].map((tool, index) => (
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
