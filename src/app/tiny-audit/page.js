import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import {
  generateBreadcrumbJsonLd,
  generatePageMetadata,
  generateServiceJsonLd,
  siteConfig,
} from '@/lib/seo'
import styles from '@/styles/component-css/TinyAuditPage.module.css'

const pageTitle = 'Tiny Audit'
const pageDescription = 'A focused review for an early product, MVP or AI-built prototype. Get three practical fixes and a clear next step from Flat 18.'
const pageUrl = `${siteConfig.url}/tiny-audit`

export const metadata = generatePageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/tiny-audit',
  keywords: ['product audit', 'MVP audit', 'AI prototype review', 'prototype production review'],
})

export default function TinyAuditPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: siteConfig.url },
    { name: pageTitle, url: pageUrl },
  ])
  const serviceJsonLd = generateServiceJsonLd({
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    serviceType: 'Product and prototype review',
  })

  return (
    <main className={`${styles.page} swiss-ui`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>A small first step</p>
              <h1>Find the next useful fix.</h1>
              <p className={styles.lead}>
                A focused review for an early product, rough MVP or AI-built prototype. We look for the issues most likely to slow the next release, then show you what to do first.
              </p>
              <div className={styles.actions}>
                <a href="#audit-contact" className="btn btn-primary">
                  Ask for a Tiny Audit
                  <i className="bi bi-arrow-down" aria-hidden="true" />
                </a>
                <Link href="/prototype-rescue" className="btn btn-secondary">Prototype rescue</Link>
              </div>
              <p className={styles.reassurance}>
                No long brief required. Send what you have and we&rsquo;ll confirm the timing and fixed fee before any work starts.
              </p>
            </div>

            <aside className={styles.heroCard}>
              <span className={styles.cardLabel}>What comes back</span>
              <h2>Three practical fixes.</h2>
              <p>Clear findings, prioritised for the next useful release — not a long report that disappears in a folder.</p>
              <ol>
                <li><span>01</span>Product friction worth removing</li>
                <li><span>02</span>Production risks worth addressing</li>
                <li><span>03</span>A sensible next move</li>
              </ol>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>What we look at</p>
              <h2>Useful judgement before a bigger commitment.</h2>
            </div>
            <p>We focus on the parts that affect whether the product can be understood, trusted and moved forward.</p>
          </div>

          <div className={styles.detailGrid}>
            <article className={styles.detailCard}>
              <span>01</span>
              <h3>Product friction</h3>
              <p>Where the flow is unclear, fragile or asking users to make decisions the product should handle.</p>
            </article>
            <article className={styles.detailCard}>
              <span>02</span>
              <h3>Production risk</h3>
              <p>Where code, data, permissions, integrations or deployment could create trouble later.</p>
            </article>
            <article className={styles.detailCard}>
              <span>03</span>
              <h3>Next release</h3>
              <p>What to fix, defer or test next — with a practical route into product work if you need it.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.boundarySection}>
        <div className={styles.container}>
          <div className={styles.boundaryPanel}>
            <div>
              <p className={styles.eyebrow}>What it is not</p>
              <h2>Not a full rebuild estimate.</h2>
            </div>
            <p>The Tiny Audit is a short decision aid. It gives you enough clarity to choose the next sensible step. If you want us to make the fixes, we can scope that work separately.</p>
          </div>
        </div>
      </section>

      <Contact
        id="audit-contact"
        title="Tell us where it’s stuck"
        subtitle="Share the product, prototype or idea, what feels uncertain and the next deadline that matters. Add a link in the message if it helps."
        messageLabel="What should we review?"
        messagePlaceholder="What are you building, where is it stuck, and what would you like us to look at?"
        source="tiny_audit"
      />
      <Footer />
    </main>
  )
}
