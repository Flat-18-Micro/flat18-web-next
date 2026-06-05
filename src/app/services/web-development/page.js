import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
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
            <h1 className={styles.pageHeading}>Complete product builds</h1>
            <div className={styles.badge}>Design, engineering and launch</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 builds complete digital products for teams that need design and engineering handled together. LLMs speed up drafting, implementation and documentation. Senior developers control the architecture and quality.
              </p>

              <h2>Why choose this route?</h2>
              <ul>
                <li>One team for UX, UI and full-stack engineering</li>
                <li>LLM-assisted speed under senior review</li>
                <li>Clear milestones, practical scope and direct communication</li>
                <li>Production standards for performance, accessibility and maintainability</li>
              </ul>

              <h2>What we build</h2>
              <p>
                We can take a product from concept to launch or take over a partially built product and give it a clearer path forward.
              </p>

              <ul>
                <li>Product strategy, UX and interface design</li>
                <li>Frontend, backend, APIs, auth and data layers</li>
                <li>Integrations, deployment and release planning</li>
                <li>Performance, accessibility and maintainability checks</li>
                <li>Documentation, handover and support options</li>
              </ul>

              <h2>Our approach</h2>
              <ol>
                <li><strong>Frame:</strong> goals, users, constraints and risks.</li>
                <li><strong>Draft:</strong> LLM-assisted options, prototypes and implementation starts.</li>
                <li><strong>Build:</strong> senior full-stack engineering and review.</li>
                <li><strong>Harden:</strong> testing, security, performance and documentation.</li>
                <li><strong>Launch:</strong> deployment, analytics, handover and support options.</li>
              </ol>

              <h2>Typical stack</h2>
              <ul>
                <li>Next.js, React and modern frontend frameworks</li>
                <li>Node.js, APIs and serverless functions</li>
                <li>Postgres, Supabase, Neon and practical data layers</li>
                <li>Vercel, Cloudflare, AWS and GitHub Actions</li>
                <li>REST, GraphQL and third-party integrations</li>
              </ul>

              <h2>Ready to build the product?</h2>
              <p>
                Tell us what you need to launch, prove or fix. We will suggest the right route and likely timeline.
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
