import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import styles from '@/styles/component-css/PageStyles.module.css'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function AiPromptEngineeringPage() {
  return (
    <main>
      
      <section className={styles.pageWrapper}>
                <Breadcrumbs />
        
        <div className={styles.backgroundGradient}></div>
        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Prompt and LLM workflows</h1>
            <div className={styles.badge}>Reliable AI-assisted work</div>
            <div className={styles.textContent}>
              <p>We design and test LLM workflows for teams that need more than ad hoc prompts. The goal is repeatable output, clear review points and useful integration with the product or team process.</p>
              <h2>What we offer</h2>
              <ul>
                <li>Prompt systems for product, design and development workflows</li>
                <li>Structured output patterns for JSON, Markdown and tables</li>
                <li>Review checkpoints and fallback paths</li>
                <li>Context, memory and retrieval patterns where useful</li>
              </ul>
              <p>Prompt work is strongest when it is connected to a real product, internal tool or delivery process. We can build that connection as part of the engagement.</p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
