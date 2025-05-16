'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function Web3BlockchainPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — Web3 & Blockchain Services'
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2
      }
    }
  }

  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <motion.div
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.pageContent}
            variants={contentVariants}
          >
            <h1 className={styles.pageHeading}>Web3 & Blockchain Services</h1>
            <div className={styles.badge}>Decentralised Digital Solutions</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 provides expert-led Web3 and blockchain services for startups and scale-ups. We deliver secure, scalable decentralised apps, smart contracts, and integrations—helping you harness the power of next-generation technologies.
              </p>

              <h2>Why Choose Flat 18 for Blockchain?</h2>
              <ul>
                <li>Over a decade of hands-on blockchain expertise</li>
                <li>Bespoke solutions tailored to your business model</li>
                <li>Security-first, fully audited code</li>
                <li>Clear process and ongoing support</li>
              </ul>

              <h2>Our Web3 & Blockchain Expertise</h2>
              <p>
                We design and build decentralised solutions that solve real business problems—combining deep technical skill with practical experience.
              </p>

              <h3>Smart Contract Development</h3>
              <p>
                We write and audit secure smart contracts for Ethereum, Polygon, and other EVM-compatible chains. Our contracts are robust, gas-efficient, and thoroughly tested.
              </p>

              <h3>Decentralised App (dApp) Development</h3>
              <p>
                We build user-friendly dApps that connect your users to blockchain features, combining intuitive front-ends with resilient back-ends.
              </p>

              <h3>Wallet Integration</h3>
              <p>
                We implement seamless wallet connections (MetaMask, WalletConnect, and more) to enable secure user authentication and transactions.
              </p>

              <h3>Token Creation & Tokenomics</h3>
              <p>
                We create bespoke tokens—utility, governance, or NFT—engineered for your specific use case and compliant with best practices.
              </p>

              <h3>Security Audits</h3>
              <p>
                Our team conducts comprehensive blockchain security audits, identifying vulnerabilities and safeguarding your project and users.
              </p>

              <h3>DeFi & Protocol Engineering</h3>
              <p>
                We architect and implement decentralised finance protocols—lending, trading, and staking—tailored to your requirements.
              </p>

              <h2>Our Blockchain Process</h2>
              <ol>
                <li><strong>Discovery:</strong> Define your objectives and technical needs.</li>
                <li><strong>Architecture:</strong> Design secure, scalable solutions.</li>
                <li><strong>Development:</strong> Write and audit smart contracts and dApps.</li>
                <li><strong>Testing & Security:</strong> Rigorous testing and independent audits.</li>
                <li><strong>Deployment:</strong> Launch on testnet and mainnet.</li>
                <li><strong>Ongoing Support:</strong> Continuous monitoring and updates.</li>
              </ol>

              <h2>Technologies We Use</h2>
              <ul>
                <li>Ethereum, ERC-20</li>
                <li>Bitcoin, Lightning Network</li>
                <li>Web3.js, ethers.js, wagmi</li>
                <li>IPFS (decentralised storage)</li>
                <li>MetaMask, WalletConnect</li>
              </ul>

              <h2>Ready to Launch Your Blockchain Project?</h2>
              <p>
                Contact Flat 18 to discuss your Web3 ambitions. Our expert team will help you build secure, innovative decentralised solutions that move your business forward.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
