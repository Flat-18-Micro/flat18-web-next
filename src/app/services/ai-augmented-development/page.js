import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AiAugmentedDevelopmentPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>
        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>LLM-accelerated development</h1>
            <div className={styles.badge}>Fast delivery under senior control</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 uses LLMs as a serious engineering accelerator. They help us explore, draft, test and document faster. Experienced developers own the architecture, review and production decisions.
              </p>
              <h2>Where LLMs help</h2>
              <ul>
                <li>Turning a brief into product options and technical tasks</li>
                <li>Drafting components, API routes, tests and documentation</li>
                <li>Comparing implementation paths</li>
                <li>Speeding up refactors, debugging and handover notes</li>
              </ul>
              <h2>Where humans stay in control</h2>
              <ul>
                <li>Architecture, security, privacy and commercial risk</li>
                <li>Code review, performance and accessibility</li>
                <li>What to ship, cut or improve</li>
                <li>Scope, communication and maintainability</li>
              </ul>
              <p>
                The result is not a prompt demo. It is working software built faster because the tools are in experienced hands.
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
