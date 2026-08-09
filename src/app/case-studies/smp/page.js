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
    src: '/images/case-studies/smp/01-overview-devices.png',
    alt: 'SMP staff operations dashboard on a laptop alongside the employee portal on a tablet',
    caption: 'The operational picture, shared clearly',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px',
    isPrimary: true,
    priority: true,
  },
  {
    src: '/images/case-studies/smp/02-attendance-devices.png',
    alt: 'SMP attendance review on a laptop beside employee check-in on a tablet',
    caption: 'Attendance, with context',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    src: '/images/case-studies/smp/03-leave-devices.png',
    alt: 'SMP leave approvals on a laptop and a leave request form on a tablet',
    caption: 'Leave without the paper chase',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
]

const journeySteps = [
  {
    eyebrow: '01 / The problem',
    title: 'Everyday people work was split between paper, messages and memory.',
    copy: 'A manager might need to check who arrived, approve leave, find an expiring document and answer a pay question—all while employees need a simple way to see their own information. The work was ordinary; the trail was not.',
    image: mediaItems[0].src,
    alt: mediaItems[0].alt,
    mediaIndex: 0,
  },
  {
    eyebrow: '02 / The product shape',
    title: 'We gave the office and the employee a clear view of the same work.',
    copy: 'SMP separates the admin workspace from employee self-service without creating two disconnected systems. Attendance, leave, records, documents, messages and policy settings all refer back to the same company context.',
    image: mediaItems[1].src,
    alt: mediaItems[1].alt,
    mediaIndex: 1,
  },
  {
    eyebrow: '03 / The outcome',
    title: 'A routine request now leaves a useful record behind.',
    copy: 'A person can submit a request on a tablet. An administrator can review it with the right balance and dates. The decision, change and follow-up stay visible, so the team spends less time asking what happened.',
    image: mediaItems[2].src,
    alt: mediaItems[2].alt,
    mediaIndex: 2,
  },
]

const proofPoints = [
  {
    value: '2 views',
    label: 'One shared system',
    detail: 'A focused admin workspace and straightforward employee self-service.',
  },
  {
    value: '1 trail',
    label: 'For every change',
    detail: 'Decisions, corrections and updates remain easier to inspect later.',
  },
  {
    value: 'Plain English',
    label: 'At the point of work',
    detail: 'People can understand what is happening without HR-system theatre.',
  },
]

export default function SMPCaseStudyPage() {
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
              <span className={styles.heroKicker}>Selected work / People operations made simple</span>
              <h1 className={styles.productHeroTitle}>SMP</h1>
              <p className={styles.productHeroSubtitle}>
                Small organisations should not need a maze of forms, spreadsheets and private messages to run
                everyday people operations. Flat18 built Staff Management Portal around the practical work:
                attendance, leave, employee records, documents, messages and a clear history of what changed.
              </p>
              <div className={styles.productHeroActions}>
                <a href="https://smp.flat18.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View live product
                </a>
                <a href="#story" className="btn btn-secondary">Read the build story</a>
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
              <button type="button" className={styles.productHeroImageButton} onClick={() => setLightboxIndex(0)} aria-label="Open SMP overview mockup in viewer">
                <Image src={mediaItems[0].src} alt={mediaItems[0].alt} width={1536} height={1024} sizes="(max-width: 768px) 100vw, 640px" className={styles.productHeroImage} priority />
                <span className={styles.productHeroBadge}>Web and tablet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>Development journey</span>
            <h2>From fragmented admin to a calm, accountable operating rhythm.</h2>
            <p>
              SMP starts with a simple idea: a people process is only useful when the person doing it can see
              what to do next, and the organisation can see what happened afterwards.
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
                <button type="button" className={styles.productJourneyImageButton} onClick={() => setLightboxIndex(step.mediaIndex)} aria-label={`Open ${step.alt} in viewer`}>
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
              <h2>Designed around the routine moments that usually create follow-up work.</h2>
            </div>
            <p>
              Each view removes a different uncertainty: who is expected, whether an attendance record needs
              attention, what leave has been requested, and which employee documents need a check.
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            <article className={`${styles.productFeatureCard} ${styles.productFeatureCardLarge}`}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => setLightboxIndex(1)} aria-label="Open attendance mockup in viewer">
                <Image src={mediaItems[1].src} alt={mediaItems[1].alt} fill sizes="(max-width: 768px) 100vw, 720px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Attendance</span>
                <h3>Make the workday visible without making people chase the system.</h3>
                <p>Employees can check in with the right location context. Administrators can review sessions, spot exceptions and make corrections with a reason rather than silently editing a row.</p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => setLightboxIndex(2)} aria-label="Open leave mockup in viewer">
                <Image src={mediaItems[2].src} alt={mediaItems[2].alt} fill sizes="(max-width: 768px) 100vw, 420px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Leave</span>
                <h3>Let employees ask clearly and managers decide with context.</h3>
                <p>Balances, dates, request status and approval actions sit in the same flow, replacing the usual exchange of forms, reminders and ‘have you seen this?’ messages.</p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => setLightboxIndex(0)} aria-label="Open SMP overview mockup in viewer">
                <Image src={mediaItems[0].src} alt={mediaItems[0].alt} fill sizes="(max-width: 768px) 100vw, 420px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Records and documents</span>
                <h3>Keep the operational record where the people work happens.</h3>
                <p>Employee information, documents, salary updates, messages and policy settings are organised around the person and the organisation, not scattered across specialist tools.</p>
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
                <CaseStudyMediaFlow items={mediaItems} onOpen={setLightboxIndex} ariaLabel="SMP product mockup carousel" />
              </div>
              <div className={styles.openSourcePanel}>
                <h4>Designed for everyday confidence</h4>
                <p>SMP gives an organisation a clear record of who did what, while giving employees a simpler way to see and manage their own work information.</p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live product</span>
                <span className={styles.metaItem}>Diagnosis: fragmented people operations</span>
                <span className={styles.metaItem}>Solution: one role-aware portal</span>
                <span className={styles.metaItem}>Outcome: clearer records and fewer chasers</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 designed and built SMP as a practical staff-management product, not a bloated HR suite. It helps a small organisation complete ordinary tasks consistently and leave an understandable trail behind.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}><h3>Problem found</h3><p>Attendance, leave, employee records, documents and messages often live in separate places, making routine questions hard to answer and easy to miss.</p></div>
                <div className={styles.infoCard}><h3>Flat18 diagnosis</h3><p>The issue was not a lack of forms. The product needed to show the right context to the right person, then preserve the decision without adding administration.</p></div>
                <div className={styles.infoCard}><h3>Solution shipped</h3><p>We built a role-aware portal for attendance, leave, employee profiles, documents, salary records, benefits, messages, notifications and policy settings.</p></div>
                <div className={styles.infoCard}><h3>Customer value</h3><p>Teams can see what needs attention, employees can self-serve simple requests, and managers can understand the history without reconstructing it from email.</p></div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Mapped the employee and administrator journeys from sign-in through attendance, leave, records, documents and communication</li>
                  <li>Designed distinct desktop and tablet experiences that make each person’s next action clear</li>
                  <li>Built location-aware attendance and correction flows that retain the reason for a change</li>
                  <li>Joined documents, salary updates, benefits, notifications and audit history into a coherent product language</li>
                </ul>
              </div>

              <div className={styles.listBlock}>
                <h4>Stack</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Vue 3</span>
                  <span className={styles.chip}>Vite</span>
                  <span className={styles.chip}>Cloudflare Pages</span>
                  <span className={styles.chip}>Cloudflare Workers</span>
                  <span className={styles.chip}>D1</span>
                  <span className={styles.chip}>R2</span>
                  <span className={styles.chip}>Capacitor</span>
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
              <h2>Need people operations to feel less scattered?</h2>
              <p>Flat18 can turn a tangle of routine work, unclear hand-offs and private knowledge into a product your team can use with confidence.</p>
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
