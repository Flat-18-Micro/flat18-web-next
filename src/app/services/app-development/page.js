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
                Flat 18 designs and builds focused MVPs for founders who need a usable product quickly without accepting throwaway code. We use LLMs to accelerate research, scaffolding, interface drafts, tests and documentation, while senior developers own the product decisions.
              </p>

              <h2>What sets our MVP work apart?</h2>
              <ul>
                <li>Clear scope before we build, so the first version has a real purpose</li>
                <li>Senior full-stack developers reviewing architecture, code and security</li>
                <li>LLM-assisted speed for drafts, prototypes, tests and documentation</li>
                <li>Usable software you can launch, learn from and keep improving</li>
              </ul>

              <h2>What we can deliver</h2>
              <p>
                The right MVP is not the biggest version of your idea. It is the smallest useful product that can prove demand, support a demo or unlock the next stage.
              </p>

              <h3>Full-stack product build</h3>
              <p>
                We handle product flows, interface design, frontend, backend, data models, integrations, deployment and handover.
              </p>

              <h3>Prototype to production path</h3>
              <p>
                We can move from idea to clickable flow, then into a working build without separating design thinking from engineering reality.
              </p>

              <h3>Technical foundations</h3>
              <p>
                We make sensible stack choices for speed, maintainability and future handover, rather than chasing complexity too early.
              </p>

              <h3>LLM-assisted delivery</h3>
              <p>
                LLMs help us move faster, but every important output is reviewed by experienced developers before it becomes part of your product.
              </p>

              <h2>How the sprint works</h2>
              <ol>
                <li><strong>Frame:</strong> We define users, constraints, risk and success criteria.</li>
                <li><strong>Design:</strong> We map the product flow and interface direction.</li>
                <li><strong>Build:</strong> We use LLM-assisted workflows to accelerate implementation under senior review.</li>
                <li><strong>Harden:</strong> We test, refine, document and prepare the product for launch or handover.</li>
              </ol>

              <h2>Common stack choices</h2>
              <ul>
                <li>Next.js, React and modern frontend frameworks</li>
                <li>Node.js, serverless functions and API routes</li>
                <li>Postgres, Neon, Supabase and other practical data layers</li>
                <li>Vercel, Cloudflare, GitHub Actions and monitored deployment</li>
              </ul>

              <h2>Ready to test the idea properly?</h2>
              <p>
                Send us the idea, target user and deadline. We will tell you the leanest route to a credible first version.
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
