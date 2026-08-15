import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function UiUxDesignPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>UI/UX design for SaaS and Web3 products</h1>
            <div className={styles.badge}>Clear product interfaces that teams can build</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 is a senior UI/UX design partner for SaaS, Web3 and complex digital products. We turn unclear flows, dense information and technical constraints into interfaces that users can understand and engineers can build.
              </p>

              <h2>When to bring us in</h2>
              <ul>
                <li>A product is useful but difficult to navigate or explain</li>
                <li>A new feature needs a tested flow before engineering starts</li>
                <li>Your team needs a design system that holds together as the product grows</li>
                <li>A technical Web3 or data-heavy journey needs to feel calm and trustworthy</li>
              </ul>

              <h2>What a UI/UX engagement includes</h2>
              <p>
                Design work stays close to the build. That means decisions are shaped by product goals and technical constraints, not just a polished prototype.
              </p>

              <ul>
                <li>Product discovery, user journeys and information architecture</li>
                <li>Wireframes and clickable prototypes for the important flows</li>
                <li>Interface direction, design systems and component patterns</li>
                <li>Responsive, accessible screen designs and edge states</li>
                <li>Developer-ready files, notes and ongoing design support</li>
              </ul>

              <h2>How we work</h2>
              <ol>
                <li><strong>Understand:</strong> clarify the users, commercial goal and technical constraints.</li>
                <li><strong>Map:</strong> agree the journeys, key screens and decisions that matter.</li>
                <li><strong>Design:</strong> create the interface system, responsive states and prototype.</li>
                <li><strong>Review:</strong> test for usability, accessibility and build feasibility.</li>
                <li><strong>Ship:</strong> hand over clear specifications or build it with you.</li>
              </ol>

              <h2>Relevant work</h2>
              <p>
                See how we made dense information easier to use in <Link href="/selected-work/walletscrutiny">WalletScrutiny</Link>, and shaped a clearer analytics product in <Link href="/selected-work/signalmap">SignalMap</Link>.
              </p>

              <h2>Need a clearer product interface?</h2>
              <p>
                <Link href="/contact">Tell us what users need to do</Link> and where the current journey breaks down. We will recommend a practical first step.
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
