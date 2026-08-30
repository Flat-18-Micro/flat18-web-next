'use client'

import Image from 'next/image'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseStudyLightbox from '@/components/CaseStudyLightbox'
import CaseStudyMediaFlow from '@/components/CaseStudyMediaFlow'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

const mediaItems = [
  {
    src: '/images/case-studies/client-desk/01-overview-devices.webp',
    alt: 'Client Desk relationship overview shown across a laptop and tablet',
    caption: 'Relationships at a glance',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true,
  },
  {
    src: '/images/case-studies/client-desk/02-inbox-laptop.webp',
    alt: 'Client Desk inbox showing relationship context, conversations, and a follow-up reminder',
    caption: 'Inbox with context',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    src: '/images/case-studies/client-desk/03-acquisition-tablet.webp',
    alt: 'Client Desk lead review queue with scoring, review actions, and campaign hand-off',
    caption: 'Lead review and outreach',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
]

const journeySteps = [
  {
    eyebrow: '01 / The problem',
    title: 'Relationship work gets lost between spreadsheets, inboxes, and good intentions.',
    copy: 'Small teams can see their contacts and messages. The hard part is knowing who needs a response, what has already happened, and which promising lead deserves a careful next step.',
    image: '/images/case-studies/client-desk/01-overview-devices.webp',
    alt: 'Client Desk shown on laptop and tablet devices',
    mediaIndex: 0,
  },
  {
    eyebrow: '02 / The product shape',
    title: 'We made the next useful action visible alongside the relationship.',
    copy: 'The workspace brings contacts, conversations, campaign activity, import history, follow-ups, and connectors into a quiet operating view. A team member can arrive, orient themselves, and act without reconstructing the story from several tools.',
    image: '/images/case-studies/client-desk/02-inbox-laptop.webp',
    alt: 'Client Desk inbox with a selected relationship and follow-up card',
    mediaIndex: 1,
  },
  {
    eyebrow: '03 / Better outreach',
    title: 'Lead acquisition ends in review, not a blind send.',
    copy: 'Scored candidates enter a review queue where a person can approve, reject, or investigate the fit before the contact becomes part of outreach. It keeps judgement in the loop while removing the surrounding admin.',
    image: '/images/case-studies/client-desk/03-acquisition-tablet.webp',
    alt: 'Client Desk lead-review workspace on a tablet',
    mediaIndex: 2,
  },
]

const proofPoints = [
  {
    value: '1 view',
    label: 'For relationship health',
    detail: 'Contacts, campaigns, conversations and follow-ups kept in a connected workspace.',
  },
  {
    value: 'Review-first',
    label: 'Lead acquisition',
    detail: 'Score and qualify promising contacts before they become outreach.',
  },
  {
    value: '6',
    label: 'Core operations',
    detail: 'Overview, contacts, campaigns, acquisition, inbox and follow-ups work as one loop.',
  },
]

export default function ClientDeskCaseStudyPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () => setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + mediaItems.length) % mediaItems.length))
  const showNext = () => setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % mediaItems.length))

  return (
    <div className={`${styles.page} ${styles.productCasePage}`}>
      <section className={`${styles.hero} ${styles.productHero}`}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.productHeroGrid}>
            <div className={styles.productHeroContent}>
              <span className={styles.heroKicker}>Selected work / Relationship operations</span>
              <h1 className={styles.productHeroTitle}>Client Desk</h1>
              <p className={styles.productHeroSubtitle}>
                Good relationships rarely fail because a team does not care. They fail because the context, the
                conversation, and the next action live in different places. Flat18 built Client Desk as a calmer CRM
                for finding the signal, carrying the context, and making the right next move.
              </p>
              <div className={styles.productHeroActions}>
                <a href="#story" className="btn btn-primary">Read the build story</a>
                <a href="#surfaces" className="btn btn-secondary">Explore the product</a>
              </div>
              <div className={styles.productProofGrid}>
                {proofPoints.map((point) => (
                  <div key={point.label} className={styles.productProofCard}>
                    <span className={styles.productProofValue}>{point.value}</span>
                    <span className={styles.productProofLabel}>{point.label}</span>
                    <p>{point.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.productHeroVisual}>
              <button
                type="button"
                className={styles.productHeroImageButton}
                onClick={() => setLightboxIndex(0)}
                aria-label="Open Client Desk product overview in viewer"
              >
                <Image
                  src={mediaItems[0].src}
                  alt={mediaItems[0].alt}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Desktop app</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From fragmented relationship work to an operating rhythm a team can trust.</h2>
            <p>
              Client Desk is not a contact database with more fields. It is an operational workspace that turns
              relationship maintenance into a series of clear, informed decisions.
            </p>
          </div>

          <div className={styles.productJourneyGrid}>
            {journeySteps.map((step) => (
              <article key={step.title} className={styles.productJourneyCard}>
                <div className={styles.productJourneyCopy}>
                  <span>{step.eyebrow}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
                <button
                  type="button"
                  className={styles.productJourneyImageButton}
                  onClick={() => setLightboxIndex(step.mediaIndex)}
                  aria-label={`Open ${step.alt} in viewer`}
                >
                  <Image src={step.image} alt={step.alt} fill sizes="(max-width: 768px) 100vw, 520px" className={styles.productJourneyImage} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="surfaces" className={styles.productShowcaseSection}>
        <div className={styles.container}>
          <div className={styles.productShowcaseHeader}>
            <div>
              <span className={styles.caseStudyTag}>Product surfaces</span>
              <h2>Built for the moments where a relationship needs attention.</h2>
            </div>
            <p>
              Each surface removes a different kind of uncertainty: what matters now, what has been said, where a lead
              came from, and whether the team is ready to reach out.
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            <article className={`${styles.productFeatureCard} ${styles.productFeatureCardLarge}`}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => setLightboxIndex(0)} aria-label="Open relationship overview image in viewer">
                <Image src={mediaItems[0].src} alt={mediaItems[0].alt} fill sizes="(max-width: 768px) 100vw, 720px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Overview</span>
                <h3>See the relationship work, not just the records.</h3>
                <p>The home view translates a busy workspace into useful signals: active contacts, campaign state, queues, connectors and the follow-ups that need a human check-in.</p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => setLightboxIndex(1)} aria-label="Open inbox image in viewer">
                <Image src={mediaItems[1].src} alt={mediaItems[1].alt} fill sizes="(max-width: 768px) 100vw, 420px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Inbox</span>
                <h3>Keep the conversation and its next step together.</h3>
                <p>Messages, contact context and follow-up prompts share one surface, so the person replying does not have to begin from a blank slate.</p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => setLightboxIndex(2)} aria-label="Open lead review image in viewer">
                <Image src={mediaItems[2].src} alt={mediaItems[2].alt} fill sizes="(max-width: 768px) 100vw, 420px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Acquisition</span>
                <h3>Turn prospecting into an accountable review process.</h3>
                <p>Candidate leads are scored, explained and staged for approval before they enter a campaign—making useful outreach easier to defend and improve.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={`${styles.caseStudyGrid} ${styles.caseStudyGridReverse}`}>
            <div className={styles.caseStudyMedia}>
              <div className={styles.mediaGrid}>
                <CaseStudyMediaFlow items={mediaItems} onOpen={setLightboxIndex} ariaLabel="Client Desk product mockup carousel" />
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Designed for a quieter operating day</h4>
                <p>Client Desk lets teams inspect a relationship, make a decision, and leave a useful record without having to stitch together the tools in between.</p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Desktop product</span>
                <span className={styles.metaItem}>Diagnosis: fragmented relationship operations</span>
                <span className={styles.metaItem}>Solution: one connected client workspace</span>
                <span className={styles.metaItem}>Outcome: clearer, more considered outreach</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 designed and built Client Desk as a relationship operations product: a focused place for the
                people a team knows, the work already in motion, and the follow-up that makes the difference.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}><h3>Problem found</h3><p>Contact data, incoming replies, campaign status and reminders were useful on their own but disconnected in the day-to-day work of staying in touch.</p></div>
                <div className={styles.infoCard}><h3>Flat18 diagnosis</h3><p>The product needed to make context easy to recover and make the next responsible action easy to see, without treating relationships like a production line.</p></div>
                <div className={styles.infoCard}><h3>Solution shipped</h3><p>We built a desktop workspace for contacts, campaigns, lead acquisition, imports, inbox review, follow-ups, settings and connector management.</p></div>
                <div className={styles.infoCard}><h3>Customer value</h3><p>Teams can qualify leads with care, reply with context, keep promises to follow up, and understand the health of their relationship work at a glance.</p></div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Mapped the operating loop from contact intake to lead review, campaign outreach, replies and follow-up</li>
                  <li>Designed a calm Vue 3 workspace that preserves the context around each relationship</li>
                  <li>Made lead-scoring reasons and review actions visible before contacts enter a campaign</li>
                  <li>Connected messaging, connector setup, campaign state and human reminders into one product language</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vue 3</span>
                  <span className={styles.chip}>Vite</span>
                  <span className={styles.chip}>Electron</span>
                  <span className={styles.chip}>Express</span>
                  <span className={styles.chip}>SQLite</span>
                  <span className={styles.chip}>Connector integrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Need relationship work to feel less scattered?</h2>
              <p>Flat18 can turn the useful signals hiding across your contacts, communications and campaigns into a product your team can genuinely operate.</p>
            </div>
            <div className={styles.ctaActions}>
              <a href="#chat" className="btn btn-primary">Chat with us</a>
              <a href="mailto:hello@flat18.co.uk" className="btn btn-secondary">Email hello@flat18.co.uk</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <CaseStudyLightbox images={mediaItems} activeIndex={lightboxIndex} onClose={closeLightbox} onNext={showNext} onPrev={showPrev} />
    </div>
  )
}
