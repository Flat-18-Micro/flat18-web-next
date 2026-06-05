import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AboutPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Senior product builders using LLMs well</h1>


            <div className={styles.textContent}>
              <p>Flat 18 is a design and full-stack development studio for founders, operators and technical teams. We use LLMs to move faster, but senior developers still own the scope, architecture, code review and release quality.</p>

              <h2>What we build</h2>
              <p>We build curated MVPs, complete products, internal tools, dashboards, integrations and long-term product improvements. The goal is not a quick demo. It is a useful first release with foundations you can keep.</p>

              <h2>How LLMs fit</h2>
              <p>LLMs help with research, options, scaffolding, tests and documentation. They do not decide what should exist, what should be removed, or whether the work is safe to ship. That judgement stays with us.</p>

              <h2>Why experience matters</h2>
              <p>Flat 18 was formed in 2017. Our work includes production sites, product platforms, dashboards, finance interfaces and technical systems for demanding audiences. That experience matters more now, not less. Fast generation only helps when the people using it can spot weak UX, fragile architecture, security gaps and code that will cost you later.</p>

              <h2>How we work</h2>
              <p>We keep scope plain, decisions visible and handover practical. You can stay close to the detail or ask us to run it. Either way, you keep the code, documentation and product context when the project ends.</p>

              <p>If you need a serious first version or a complete product delivered faster than a traditional build cycle, that is the work we are built for.</p>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  )
}
