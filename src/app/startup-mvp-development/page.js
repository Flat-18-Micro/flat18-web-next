import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import ChatCtaLink from '@/components/ChatCtaLink'
import { generatePageMetadata } from '@/lib/seo'
import styles from '@/styles/component-css/PageStyles.module.css'

export const metadata = generatePageMetadata({
  title: 'Startup MVP development',
  description: 'Flat 18 helps startup founders turn a rough idea or fragile prototype into a credible product they can launch, test and improve.',
  path: '/startup-mvp-development',
  keywords: [
    'startup MVP development UK',
    'MVP development studio',
    'startup product development',
    'founder product sprint',
    'AI-assisted MVP development',
  ],
})

export default function StartupMvpDevelopmentPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient} />

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <p className={styles.badge}>For startup founders</p>
            <h1 className={styles.pageHeading}>Turn the idea into a product people can use</h1>

            <div className={styles.textContent}>
              <p>
                You have an opportunity, a deadline and a product that needs to earn its place. Flat 18 helps founders turn a rough idea, AI-built prototype or early MVP into a credible product to launch, test and improve.
              </p>

              <p>
                We combine product thinking, design and full-stack engineering. LLMs help us move quickly; senior developers keep the decisions, code and release quality under control.
              </p>

              <h2>When Flat 18 is a good fit</h2>
              <ul>
                <li>You need an MVP for a customer pilot, demo or fundraise.</li>
                <li>Your prototype works, but the experience or foundations are not yet trustworthy.</li>
                <li>You have early traction and need to improve the product without building a large in-house team.</li>
                <li>You need senior product and technical judgement before committing to a longer build.</li>
              </ul>

              <h2>What you leave with</h2>
              <ul>
                <li>A focused product scope, centred on the user and the decision you need to test.</li>
                <li>A clear interface and an end-to-end product flow.</li>
                <li>Working frontend, backend, data and integrations where they are needed.</li>
                <li>A deployed product, practical handover notes and a sensible next-step roadmap.</li>
              </ul>

              <h2>Start with a clear product review</h2>
              <p>
                Send us the idea, prototype or current product, along with the audience and deadline. We will look at the real constraints and suggest the leanest route to a credible next release. If we are not the right fit, we will say so.
              </p>

              <p>
                <ChatCtaLink
                  className="btn btn-primary"
                  source="startup-mvp-development"
                  signalLabel="startup_mvp_development_chat"
                  variant="icon"
                >
                  Discuss your product
                </ChatCtaLink>
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
