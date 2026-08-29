import Link from 'next/link'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ChatCtaLink from '@/components/ChatCtaLink'
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateServiceJsonLd,
  siteConfig,
} from '@/lib/seo'
import { audienceLandingPages } from '@/lib/audience-landing-pages'
import styles from '@/styles/component-css/AudienceLandingPage.module.css'

const serviceLinks = {
  saas: '/services/web-development',
  fintech: '/services/ui-ux-design',
  web3: '/services/web3-blockchain',
  'ai-development': '/services/ai-augmented-development',
  'prototype-rescue': '/services/ai-augmented-development',
  rescue: '/services/maintenance-support',
  mvp: '/services/app-development',
}

export default function AudienceLandingPage({ audience }) {
  const page = audienceLandingPages[audience]

  if (!page) {
    return null
  }

  const pageUrl = `${siteConfig.url}/${page.slug}`
  const serviceJsonLd = generateServiceJsonLd({
    name: page.title,
    description: page.description,
    url: pageUrl,
    serviceType: page.serviceType,
  })
  const faqJsonLd = generateFAQJsonLd(page.faqs)
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: siteConfig.url },
    { name: page.label, url: pageUrl },
  ])
  const relatedPages = Object.values(audienceLandingPages)
    .filter((candidate) => candidate.slug !== page.slug)
    .slice(0, 3)

  return (
    <div
      className={`${styles.page} swiss-ui`}
      data-audience={page.slug}
      style={{
        '--landing-accent': page.accent,
        '--landing-accent-soft': page.accentSoft,
        '--landing-accent-warm': page.accentWarm,
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className={`${styles.hero} swiss-audience-hero`} aria-labelledby={`${page.slug}-heading`}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={`${styles.heroGlow} swiss-audience-glow`} aria-hidden="true" />
        <div className={styles.container}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Flat 18</Link>
            <span aria-hidden="true">/</span>
            <span>{page.label}</span>
          </nav>

          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{page.eyebrow}</p>
              <h1 id={`${page.slug}-heading`}>{page.headline}</h1>
              <p className={styles.lead}>{page.lead}</p>
              <div className={styles.heroActions}>
                <ChatCtaLink className={`${styles.primaryCta} swiss-primary-cta`} source={`${page.slug}-hero`} signalLabel={`${page.slug}_hero_chat`} variant="icon">
                  {page.cta}
                </ChatCtaLink>
                <Link href="/selected-work" className={`${styles.secondaryCta} swiss-secondary-cta`}>
                  See selected work
                </Link>
              </div>
              <p className={styles.reassurance}>
                Product direction, interface design and full-stack delivery from one senior team.
              </p>
            </div>

            <div className={`${styles.productFrame} swiss-product-frame`} aria-label={`${page.visualLabel} example`}>
              <div className={`${styles.productHalo} swiss-product-halo`} aria-hidden="true" />
              <div className={styles.frameTopbar}>
                <span className={styles.frameMark}>F18</span>
                <span className={styles.frameTitle}>{page.visualLabel}</span>
                <span className={styles.frameStatus}>Live review</span>
              </div>
              <div className={styles.frameBody}>
                <div className={`${styles.signalRail} swiss-signal-rail`} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.frameMain}>
                  <div className={styles.metricRow}>
                    <div className={styles.metricPrimary}>
                      <span>Next useful action</span>
                      <strong>Clear and reviewable</strong>
                      <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </div>
                    <div className={`${styles.metricPulse} swiss-metric-pulse`} aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className={styles.visualCards}>
                    {page.visualCards.map((card, index) => (
                      <div className={styles.visualCard} key={card}>
                        <span>0{index + 1}</span>
                        <strong>{card}</strong>
                        <i className={`bi ${index === 0 ? 'bi-check2-circle' : index === 1 ? 'bi-layers' : 'bi-graph-up-arrow'}`} aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                  <div className={styles.frameFooter}>
                    <span>Built around the real work</span>
                    <span className={styles.footerLine} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.problemSection} aria-labelledby={`${page.slug}-problems`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>When the current product is not enough</p>
            <h2 id={`${page.slug}-problems`}>You may be here because...</h2>
          </div>
          <div className={styles.problemGrid}>
            {page.problems.map((problem, index) => (
              <article className={styles.problemCard} key={problem}>
                <span>0{index + 1}</span>
                <p>{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} aria-labelledby={`${page.slug}-services`}>
        <div className={styles.container}>
          <div className={styles.sectionHeadingSplit}>
            <div>
              <p className={styles.eyebrow}>How Flat 18 helps</p>
              <h2 id={`${page.slug}-services`}>One route from uncertainty to a product you can move forward.</h2>
            </div>
            <p>
              We work across the product decisions, interface and software delivery that need to join up for the next release to make sense.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {page.services.map((service, index) => (
              <article className={`${styles.serviceCard} swiss-audience-card`} key={service.title}>
                <div className={styles.serviceTopline}>
                  <span>0{index + 1}</span>
                  <i className={`bi ${service.icon}`} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <Link className={styles.textLink} href={serviceLinks[page.slug]}>
            Explore the relevant service <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.workSection} aria-labelledby={`${page.slug}-work`}>
        <div className={styles.container}>
          <div className={styles.sectionHeadingSplit}>
            <div>
              <p className={styles.eyebrow}>Selected work</p>
              <h2 id={`${page.slug}-work`}>Product work built around real complexity.</h2>
            </div>
            <p>These are not templates. Each project starts with the people, decisions and constraints that make the product difficult to get right.</p>
          </div>
          <div className={styles.workGrid}>
            {page.work.map((work) => (
              <Link className={`${styles.workCard} swiss-audience-card`} href={work.href} key={work.title}>
                <div className={styles.workMark} aria-hidden="true">{work.title.slice(0, 2).toUpperCase()}</div>
                <div>
                  <span>{work.tag}</span>
                  <h3>{work.title}</h3>
                  <p>{work.text}</p>
                </div>
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby={`${page.slug}-faq`}>
        <div className={styles.container}>
          <div className={styles.faqLayout}>
            <div>
              <p className={styles.eyebrow}>Before we start</p>
              <h2 id={`${page.slug}-faq`}>Useful questions, answered plainly.</h2>
              <p className={styles.faqLead}>If the work sounds familiar, send the current product or idea. We’ll help you find the next sensible move.</p>
            </div>
            <div className={styles.faqList}>
              {page.faqs.map((faq) => (
                <details key={faq.question} className={styles.faqItem}>
                  <summary>{faq.question}<i className="bi bi-plus-lg" aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closingSection} aria-labelledby={`${page.slug}-closing`}>
        <div className={styles.container}>
          <div className={`${styles.closingPanel} swiss-closing-panel`}>
            <div>
              <p className={styles.eyebrow}>A practical next step</p>
              <h2 id={`${page.slug}-closing`}>Tell us what needs to move.</h2>
              <p>Share the goal, the deadline and the part of the product that is hardest to untangle. We’ll reply with the best next route.</p>
            </div>
            <div className={styles.closingActions}>
              <ChatCtaLink className={`${styles.primaryCta} swiss-primary-cta`} source={`${page.slug}-closing`} signalLabel={`${page.slug}_closing_chat`} variant="icon">
                {page.cta}
              </ChatCtaLink>
              <Link href="/contact" className={`${styles.secondaryCta} swiss-secondary-cta`}>Use the contact form</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection} aria-labelledby={`${page.slug}-related`}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Other product routes</p>
          <h2 id={`${page.slug}-related`}>Explore a more specific fit.</h2>
          <div className={styles.relatedLinks}>
            {relatedPages.map((related) => (
              <Link href={`/${related.slug}`} key={related.slug}>
                <span>{related.label}</span>
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
