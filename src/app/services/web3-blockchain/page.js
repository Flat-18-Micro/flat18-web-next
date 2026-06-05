import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function Web3BlockchainPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Web3 and blockchain delivery</h1>
            <div className={styles.badge}>Specialist technical experience</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 still brings deep experience in Bitcoin, Web3 products, wallets, payments and blockchain interfaces. We now treat that as specialist technical depth inside a broader product studio offer.
              </p>

              <h2>Where we can help</h2>
              <ul>
                <li>Over a decade of hands-on blockchain expertise</li>
                <li>Secure wallet and payment flows</li>
                <li>Clear user interfaces for complex technical products</li>
                <li>Senior review of architecture, risk and handover</li>
              </ul>

              <h2>What we build</h2>
              <p>
                We focus on product work where the technical layer needs to be handled carefully and explained clearly to users.
              </p>

              <ul>
                <li>Wallet, payment and transaction interfaces</li>
                <li>dApp frontends and product flows</li>
                <li>API and indexer integrations</li>
                <li>Security-minded product review</li>
                <li>Documentation and technical handover</li>
              </ul>

              <h2>Process</h2>
              <ol>
                <li><strong>Scope:</strong> define the product goal and technical risk.</li>
                <li><strong>Design:</strong> make complex flows understandable.</li>
                <li><strong>Build:</strong> implement the interface, integrations and data flows.</li>
                <li><strong>Review:</strong> check security, reliability and handover needs.</li>
              </ol>

              <h2>Technologies</h2>
              <ul>
                <li>Ethereum, ERC-20</li>
                <li>Bitcoin, Lightning Network</li>
                <li>Web3.js, ethers.js, wagmi</li>
                <li>IPFS and decentralised storage</li>
                <li>MetaMask, WalletConnect</li>
              </ul>

              <h2>Need specialist technical depth?</h2>
              <p>
                Tell us what you are building and where the technical risk sits.
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
