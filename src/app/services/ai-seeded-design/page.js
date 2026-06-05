import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AiSeededDesignPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>
        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>AI-seeded design and graphics</h1>
            <div className={styles.badge}>Fast visual exploration</div>
            <div className={styles.textContent}>
              <p>We use generative AI to explore visual directions, assets and interface ideas faster. The tool helps with range and speed; senior design judgement decides what is useful.</p>
              <h2>Where it helps</h2>
              <ul>
                <li>Early visual directions and mood boards</li>
                <li>Hero assets, illustrations and interface references</li>
                <li>Rapid variants before a design route is chosen</li>
                <li>Production assets when the output is strong enough</li>
              </ul>
              <h2>Where we stay careful</h2>
              <ul>
                <li>Brand accuracy, accessibility and layout decisions</li>
                <li>Legal, privacy and usage risks</li>
                <li>Whether generated visuals belong in the final product</li>
              </ul>
              <p>AI-seeded design works best inside a product build, where visual exploration can move quickly without drifting away from the real interface.</p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
