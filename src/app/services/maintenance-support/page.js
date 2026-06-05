import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function MaintenanceSupportPage() {
  return (
    <main>
      
      <section className={styles.pageWrapper}>
        <div className={styles.backgroundGradient}></div>
        
        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Long-term product support</h1>
            <div className={styles.badge}>Ongoing senior product capacity</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 provides ongoing design and development support for products that need steady improvement after launch. You get senior judgement, LLM-assisted speed and clear ownership without hiring a full internal team.
              </p>

              <h2>What you get</h2>
              <ul>
                <li>Senior technical support with direct communication</li>
                <li>Product improvements, refactors and releases</li>
                <li>LLM-assisted analysis, implementation and documentation</li>
                <li>Clear priorities and practical reporting</li>
              </ul>

              <h2>What we can help with</h2>
              <p>
                Launch is only the start. We help keep the product useful, stable and ready for the next commercial step.
              </p>

              <ul>
                <li>New features and workflow improvements</li>
                <li>Refactors and stabilisation</li>
                <li>Security, dependency and reliability work</li>
                <li>Performance and accessibility improvements</li>
                <li>Release planning, QA and documentation</li>
              </ul>

              <h2>How monthly support works</h2>
              <p>
                The monthly product team route gives you ongoing capacity without losing senior context between tasks.
              </p>
              <ul>
                <li><strong>Queue:</strong> Add product, design and engineering requests as they arise.</li>
                <li><strong>Prioritise:</strong> Agree the most useful next task.</li>
                <li><strong>Ship:</strong> Design, build, review and document the work.</li>
                <li><strong>Repeat:</strong> Pause when done or keep momentum month to month.</li>
              </ul>

              <h2>Need continuous momentum?</h2>
              <p>
                Tell us what needs improving and how often you need changes shipped. We will say whether monthly support is the right route.
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
