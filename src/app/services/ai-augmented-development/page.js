'use client'
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
            <h1 className={styles.pageHeading}>AI-Augmented Development</h1>
            <div className={styles.badge}>Faster, Smarter Code</div>
            <div className={styles.textContent}>
              <p>Flat 18 uses AI-assisted workflows to speed up development while improving code quality and maintainability.</p>
              <h2>Capabilities</h2>
              <ul>
                <li>Co-pilot integrations and fine-tuned LLMs for coding support</li>
                <li>Code scaffolding and refactoring using AI-generated templates</li>
                <li>Automated test generation and inline documentation</li>
                <li>Context-aware linting, debugging, and suggestions</li>
              </ul>
              <p>We build with AI, not just for AI. Accelerate your roadmap with intelligent development practices.</p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
