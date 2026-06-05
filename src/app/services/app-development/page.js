import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AppDevelopmentPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Curated MVP development</h1>
            <div className={styles.badge}>Fast first versions, built properly</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 designs and builds focused MVPs for founders and teams who need a usable first version quickly. LLMs help us move faster. Senior developers keep the scope, code and release quality under control.
              </p>

              <h2>What makes it work</h2>
              <ul>
                <li>Clear scope before build starts</li>
                <li>Senior full-stack review throughout</li>
                <li>LLM-assisted drafting, testing and documentation</li>
                <li>Code you can launch, learn from and keep improving</li>
              </ul>

              <h2>What we deliver</h2>
              <p>
                The right MVP is not the biggest version of the idea. It is the smallest useful product that can prove demand, support a demo or unlock the next stage.
              </p>

              <ul>
                <li>Product flow and interface direction</li>
                <li>Frontend, backend, data models and integrations</li>
                <li>Deployment, documentation and handover</li>
                <li>A practical next-step roadmap</li>
              </ul>

              <h2>How the sprint works</h2>
              <ol>
                <li><strong>Frame:</strong> users, constraints, risk and success criteria.</li>
                <li><strong>Design:</strong> flow, interface direction and build plan.</li>
                <li><strong>Build:</strong> LLM-assisted implementation under senior review.</li>
                <li><strong>Harden:</strong> test, refine, document and hand over.</li>
              </ol>

              <h2>Typical stack</h2>
              <ul>
                <li>Next.js, React and modern frontend frameworks</li>
                <li>Node.js, serverless functions and API routes</li>
                <li>Postgres, Neon, Supabase and practical data layers</li>
                <li>Vercel, Cloudflare, GitHub Actions and monitored deployment</li>
              </ul>

              <h2>Ready to test the idea properly?</h2>
              <p>
                Send the idea, target user and deadline. We will suggest the leanest route to a credible first version.
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
