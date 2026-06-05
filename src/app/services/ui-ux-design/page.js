import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function UiUxDesignPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>UI/UX design</h1>
            <div className={styles.badge}>Clear product interfaces</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 designs clear, usable interfaces for MVPs, internal tools and complete products. We use AI tools to explore faster, but product judgement, accessibility and handover quality stay human-led.
              </p>

              <h2>What matters</h2>
              <ul>
                <li>Simple flows before polished screens</li>
                <li>Interfaces that support the product goal</li>
                <li>Accessible patterns and responsive layouts</li>
                <li>Designs that engineers can build cleanly</li>
              </ul>

              <h2>What we deliver</h2>
              <p>
                Design work stays close to the build, so ideas are shaped by real technical constraints.
              </p>

              <ul>
                <li>User flows and information architecture</li>
                <li>Wireframes, prototypes and interface direction</li>
                <li>Design systems and component patterns</li>
                <li>Responsive and accessible screen designs</li>
                <li>Developer-ready notes and handover</li>
              </ul>

              <h2>Design process</h2>
              <ol>
                <li><strong>Frame:</strong> users, goals and constraints.</li>
                <li><strong>Map:</strong> flows, screens and key decisions.</li>
                <li><strong>Design:</strong> interface system and core states.</li>
                <li><strong>Validate:</strong> review usability, accessibility and feasibility.</li>
                <li><strong>Handover:</strong> prepare build-ready design notes.</li>
              </ol>

              <h2>Tools</h2>
              <ul>
                <li>Figma for interface design and prototypes</li>
                <li>AI image tools for fast visual exploration where useful</li>
                <li>Code prototypes when interaction needs to be tested directly</li>
              </ul>

              <h2>Need a clearer product interface?</h2>
              <p>
                Tell us what users need to do and where the current flow breaks down.
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
