import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function Web3BlockchainPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Web3 UI/UX and blockchain development</h1>
            <div className={styles.badge}>Product clarity for wallets, payments and dApps</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 designs and builds Web3 products that people can use with confidence. We combine specialist blockchain experience with senior product design and engineering for wallets, payments, dApps and technical platforms.
              </p>

              <h2>Where a Web3 product needs care</h2>
              <ul>
                <li>Wallet connection, transaction and payment flows that need to feel safe and clear</li>
                <li>Complex on-chain states, fees and approvals that must be explained without noise</li>
                <li>Web3 UI/UX that makes a dApp useful for people beyond the core technical audience</li>
                <li>Senior review of product scope, architecture, risk and handover</li>
              </ul>

              <h2>What we design and build</h2>
              <p>
                We focus on the product layer where technical choices have a direct effect on trust, conversion and support burden.
              </p>

              <ul>
                <li>Wallet, payment and transaction interfaces</li>
                <li>dApp frontends, dashboards and product flows</li>
                <li>API, indexer and wallet-provider integrations</li>
                <li>Security-minded UI reviews, including risky states and recovery paths</li>
                <li>Documentation, release support and technical handover</li>
              </ul>

              <h2>How we reduce delivery risk</h2>
              <ol>
                <li><strong>Scope:</strong> define the user outcome, technical dependencies and risks.</li>
                <li><strong>Model:</strong> map the states users will see before implementation starts.</li>
                <li><strong>Build:</strong> implement the interface, integrations and reliable data flows.</li>
                <li><strong>Review:</strong> check risky actions, edge cases, release readiness and handover.</li>
              </ol>

              <h2>Relevant Web3 work</h2>
              <p>
                Explore our work for <Link href="/selected-work/btcpayserver">BTCPay Server</Link>, <Link href="/selected-work/f18-pay">F18 Pay</Link> and <Link href="/selected-work/axis-finance">Axis Finance</Link>.
              </p>

              <h2>Need a Web3 product team?</h2>
              <p>
                <Link href="/contact">Tell us what you are building</Link>, the decisions users need to make and where the technical risk sits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
