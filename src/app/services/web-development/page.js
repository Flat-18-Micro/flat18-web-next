import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import styles from '@/styles/component-css/PageStyles.module.css'

// Metadata is now handled in layout.js

export default function WebDevelopmentPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Web development for SaaS, Web3 and product teams</h1>
            <div className={styles.badge}>Senior product design, engineering and launch support</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 is a senior web development studio for teams building or improving digital products. We combine product design, full-stack engineering, integrations and launch support, with LLMs used carefully to speed up the right work.
              </p>

              <h2>When a product team needs a delivery partner</h2>
              <ul>
                <li>You need one accountable team for UX, UI and full-stack delivery</li>
                <li>An MVP or internal product needs a reliable route to launch</li>
                <li>A half-built product needs clearer scope, stronger engineering and fewer hand-offs</li>
                <li>Performance, accessibility, integrations or maintenance are holding the product back</li>
              </ul>

              <h2>What we can take on</h2>
              <p>
                We can take a product from concept to launch, or take over a partly built service and give it a clearer, safer path forward.
              </p>

              <ul>
                <li>Product discovery, UX and interface design</li>
                <li>Frontend, backend, APIs, authentication and data layers</li>
                <li>Third-party integrations, deployment and release planning</li>
                <li>Performance, accessibility, security and maintainability reviews</li>
                <li>Documentation, handover and ongoing development support</li>
              </ul>

              <h2>How delivery stays on track</h2>
              <ol>
                <li><strong>Frame:</strong> agree the product goal, users, constraints and delivery risks.</li>
                <li><strong>Plan:</strong> turn the work into clear milestones, prototypes and technical decisions.</li>
                <li><strong>Build:</strong> deliver in small reviewable increments with senior engineering oversight.</li>
                <li><strong>Harden:</strong> test the product, tighten performance and document the important decisions.</li>
                <li><strong>Launch:</strong> deploy, monitor and hand over with a clear support plan.</li>
              </ol>

              <h2>Relevant product builds</h2>
              <p>
                See how we shaped operational products for <Link href="/selected-work/smp">SMP</Link>, <Link href="/selected-work/client-desk">Client Desk</Link> and the <Link href="/selected-work/forgingblock-dashboard">ForgingBlock Dashboard</Link>.
              </p>

              <h2>Ready to move a product forward?</h2>
              <p>
                <Link href="/contact">Tell us what you need to launch, prove or fix</Link>. We will suggest a practical route and likely timeline.
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
