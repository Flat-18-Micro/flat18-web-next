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
                Flat 18 provides ongoing design and development support for products that need steady improvement after launch. You get senior technical judgement, LLM-assisted delivery speed and clear ownership without hiring a full internal team.
              </p>

              <h2>Why Flat 18 for support?</h2>
              <ul>
                <li>Senior technical support with direct communication</li>
                <li>Product improvements, refactors and releases handled together</li>
                <li>LLM-assisted speed for analysis, implementation and documentation</li>
                <li>Clear priorities, practical reporting and no agency theatre</li>
              </ul>

              <h2>What we can help with</h2>
              <p>
                Launch is only the start. We help keep the product useful, stable and ready for the next commercial step.
              </p>

              <h3>Product improvements</h3>
              <p>
                We design, build and release new features, refinements and workflow improvements against a clear priority list.
              </p>

              <h3>Refactors and stabilisation</h3>
              <p>
                We clean up fragile areas, improve maintainability and reduce the cost of future changes.
              </p>

              <h3>Security and reliability</h3>
              <p>
                We review dependencies, monitor risk, apply updates and check production behaviour before problems become expensive.
              </p>

              <h3>Performance optimisation</h3>
              <p>
                We analyse and tune the product for speed, stability and usability across devices.
              </p>

              <h3>Release support</h3>
              <p>
                We help plan releases, test changes, document decisions and keep stakeholders clear on what shipped.
              </p>

              <h2>How monthly support works</h2>
              <p>
                The monthly product team route gives you ongoing capacity without losing senior context between tasks.
              </p>
              <ul>
                <li><strong>Queue:</strong> Add product, design and engineering requests as they arise.</li>
                <li><strong>Prioritise:</strong> We agree the most useful next task together.</li>
                <li><strong>Ship:</strong> We design, build, review and document the work.</li>
                <li><strong>Repeat:</strong> Pause when you are done or keep momentum month to month.</li>
              </ul>

              <h2>Need continuous momentum?</h2>
              <p>
                Tell us what needs improving and how often you need changes shipped. We will recommend whether monthly support is the right route.
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
