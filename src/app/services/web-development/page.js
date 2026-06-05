import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

// Metadata is now handled in layout.js

export default function WebDevelopmentPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Complete product builds</h1>
            <div className={styles.badge}>Design, engineering and launch</div>
            <div className={styles.textContent}>
              <p>
                Flat 18 builds complete digital products for teams that need design and engineering handled together. We use LLMs to speed up drafting, implementation and documentation, with senior developers controlling the architecture and quality.
              </p>

              <h2>Why choose Flat 18?</h2>
              <ul>
                <li>One team for product thinking, UX, UI and full-stack engineering</li>
                <li>LLM-assisted speed without handing quality over to the model</li>
                <li>Clear milestones, practical scope and direct communication</li>
                <li>Production standards for performance, accessibility and maintainability</li>
              </ul>

              <h2>What we build</h2>
              <p>
                We can take a product from concept to launch or take over a partially built product and give it a clearer path forward.
              </p>

              <h3>Product strategy and UX</h3>
              <p>
                We clarify the offer, users, flows and acceptance criteria before the build starts, so speed does not become guesswork.
              </p>

              <h3>Frontend and backend engineering</h3>
              <p>
                We build the interface, data layer, API routes, authentication, integrations and deployment pipeline needed for a working product.
              </p>

              <h3>LLM-assisted engineering workflow</h3>
              <p>
                LLMs help us generate options, boilerplate, test cases and documentation faster. Senior developers review, refactor and harden the result.
              </p>

              <h3>Performance and accessibility</h3>
              <p>
                We check speed, responsive behaviour, accessibility and usability so the product feels credible in front of real users.
              </p>

              <h3>Handover and support</h3>
              <p>
                You get the code, documentation and next-step recommendations. We can hand over or stay involved through a monthly product team retainer.
              </p>

              <h2>Our Approach</h2>
              <ol>
                <li><strong>Frame:</strong> Goals, users, constraints, risks and success metrics.</li>
                <li><strong>Generate:</strong> LLM-assisted options, prototypes and implementation drafts.</li>
                <li><strong>Engineer:</strong> Senior full-stack build, integration and review.</li>
                <li><strong>Harden:</strong> Testing, security checks, performance passes and documentation.</li>
                <li><strong>Launch:</strong> Deployment, analytics, handover and support options.</li>
              </ol>

              <h2>Technologies we use</h2>
              <ul>
                <li>Next.js, React, and Vue.js</li>
                <li>Node.js for server-side logic</li>
                <li>Vercel, Netlify, AWS for hosting and deployment</li>
                <li>Headless CMS and content workflows where useful</li>
                <li>GraphQL and REST APIs</li>
                <li>CSS Modules, Tailwind CSS, Styled Components</li>
              </ul>

              <h2>Ready to build the product?</h2>
              <p>
                Tell us what you need to launch, prove or fix. We will recommend the right route and likely timeline.
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
