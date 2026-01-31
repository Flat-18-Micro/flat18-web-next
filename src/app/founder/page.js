import Link from 'next/link'
import styles from '@/styles/component-css/FounderPage.module.css'

export const metadata = {
  title: 'Flat 18 - Founder Version',
  description: 'A blunt, founder-first overview of how Flat 18 ships conversion-ready websites and MVPs in weeks, not months.'
}

export default function FounderPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.kicker}>Founder version</div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1 className={styles.title}>Ship a conversion-ready site or MVP in 2-12 weeks.</h1>
              <p className={styles.subtitle}>
                Flat 18 is a senior-only design + engineering team. We cut fluff, ship weekly, and stay close to the founder.
              </p>
              <div className={styles.ctaRow}>
                <a className={styles.primaryCta} href="#founder-cta">Book a 20-min fit call</a>
                <a className={styles.secondaryCta} href="mailto:hello@flat18.co.uk">Email hello@flat18.co.uk</a>
              </div>
              <p className={styles.heroNote}>If we are not a fit, we will tell you in 15 minutes.</p>
            </div>

            <aside className={styles.heroPanel}>
              <div className={styles.panelTag}>What you get</div>
              <ul className={styles.panelList}>
                <li>Founder-level product direction</li>
                <li>Design + engineering in one team</li>
                <li>Weekly shipping and clear updates</li>
                <li>Fixed pricing and clean scope</li>
              </ul>
              <div className={styles.panelFooter}>
                <span>Typical delivery</span>
                <strong>2-12 weeks</strong>
              </div>
            </aside>
          </div>

          <div className={styles.proofRow}>
            <div className={styles.proofCard}>
              <div className={styles.proofValue}>20+</div>
              <div className={styles.proofLabel}>Projects launched</div>
            </div>
            <div className={styles.proofCard}>
              <div className={styles.proofValue}>12+</div>
              <div className={styles.proofLabel}>Years shipping</div>
            </div>
            <div className={styles.proofCard}>
              <div className={styles.proofValue}>48h</div>
              <div className={styles.proofLabel}>Small task turnaround</div>
            </div>
            <div className={styles.proofCard}>
              <div className={styles.proofValue}>2</div>
              <div className={styles.proofLabel}>Senior team size</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Fit check</h2>
          <p className={styles.sectionLead}>Brutal honesty saves everyone time.</p>
          <div className={styles.splitGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>We are a fit if you...</h3>
              <ul className={styles.list}>
                <li>Need a site or MVP that converts, not just looks nice</li>
                <li>Want a senior partner who ships, not an agency middle layer</li>
                <li>Prefer clear scope, clear pricing, and fast feedback loops</li>
                <li>Want the same team from kickoff to launch</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>We are not a fit if you...</h3>
              <ul className={styles.list}>
                <li>Need a 6-month procurement cycle or multiple approvals</li>
                <li>Want large teams and lots of meetings</li>
                <li>Require a deck before we can talk about scope</li>
                <li>Are optimizing for the cheapest quote</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What we ship</h2>
          <p className={styles.sectionLead}>Focused outputs with measurable outcomes.</p>
          <div className={styles.offerGrid}>
            <div className={styles.offerCard}>
              <h3 className={styles.offerTitle}>Conversion websites</h3>
              <p>Messaging, UX, and performance-first builds that turn interest into pipeline.</p>
              <span className={styles.offerMeta}>Landing systems, product pages, pricing flows</span>
            </div>
            <div className={styles.offerCard}>
              <h3 className={styles.offerTitle}>MVPs + dashboards</h3>
              <p>Launch the product behind the story with a senior team that can ship fast.</p>
              <span className={styles.offerMeta}>Web apps, admin panels, integrations</span>
            </div>
            <div className={styles.offerCard}>
              <h3 className={styles.offerTitle}>Fintech + Web3 (optional)</h3>
              <p>Complex flows handled cleanly with security-first engineering.</p>
              <span className={styles.offerMeta}>Wallets, payments, compliance UX</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How it runs</h2>
          <p className={styles.sectionLead}>Simple milestones, weekly shipping, no surprises.</p>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.timelineBadge}>Week 0</span>
              <div>
                <h4>Fit call + scope</h4>
                <p>Goals, timeline, and a clear plan before we start.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelineBadge}>Week 1</span>
              <div>
                <h4>Messaging + UX</h4>
                <p>Structure, copy direction, and core flows locked in.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelineBadge}>Weeks 2-6</span>
              <div>
                <h4>Build + QA</h4>
                <p>Senior engineers ship weekly with real progress, not placeholders.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelineBadge}>Launch</span>
              <div>
                <h4>Deploy + iterate</h4>
                <p>Release, monitor, and improve with a focused backlog.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Pricing floor</h2>
          <p className={styles.sectionLead}>Pick the engagement that matches the scope.</p>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Subscription</h3>
              <p className={styles.price}>GBP 2,995 / month</p>
              <p>Best for ongoing momentum and fast iteration.</p>
            </div>
            <div className={styles.pricingCard}>
              <h3>Fixed scope</h3>
              <p className={styles.price}>GBP 995 - 12k+</p>
              <p>Defined deliverables with a fixed timeline.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="founder-cta" className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div>
              <h2>Ready to move?</h2>
              <p>Book a fit call or send a brief. We respond quickly.</p>
            </div>
            <div className={styles.ctaRow}>
              <Link className={styles.primaryCta} href="/#chat">Book a fit call</Link>
              <Link className={styles.secondaryCta} href="/#pricing">See pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
