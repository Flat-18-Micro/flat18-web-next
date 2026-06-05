import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function ApiIntegrationPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>API integrations</h1>
            <div className={styles.badge}>Reliable product connections</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 connects products to the services they depend on: payments, CRMs, analytics, data platforms, automation tools and internal systems. We keep integrations practical, secure and documented.
              </p>

              <h2>What matters</h2>
              <ul>
                <li>Senior engineers with broad integration experience</li>
                <li>Clear data contracts and error handling</li>
                <li>Security, auth and rate limits considered early</li>
                <li>Useful documentation for future changes</li>
              </ul>

              <h2>What we build</h2>
              <p>
                Integration work often sits inside a wider MVP or product build. We can also take it on as a focused technical project.
              </p>

              <ul>
                <li>Third-party API integrations</li>
                <li>Private APIs for products and internal tools</li>
                <li>Payment, email, analytics and CRM connections</li>
                <li>Webhooks, background jobs and data syncs</li>
                <li>Testing, monitoring and handover notes</li>
              </ul>

              <h2>Integration process</h2>
              <ol>
                <li><strong>Map:</strong> data, permissions and failure cases.</li>
                <li><strong>Design:</strong> choose the simplest reliable flow.</li>
                <li><strong>Build:</strong> implement, test and document.</li>
                <li><strong>Release:</strong> monitor the integration and hand over clearly.</li>
              </ol>

              <h2>Technologies We Work With</h2>
              <ul>
                <li>REST APIs</li>
                <li>GraphQL</li>
                <li>WebSockets and webhooks</li>
                <li>OAuth, JWT and signed requests</li>
                <li>OpenAPI documentation</li>
              </ul>

              <h2>Need systems connected?</h2>
              <p>
                Tell us what needs to talk to what, and what must not break.
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
