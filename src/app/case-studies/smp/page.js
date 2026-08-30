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
  {
    src: '/images/case-studies/smp/04-mobile-employee-screens.png',
    alt: 'SMP employee mobile app showing home, attendance, benefits and records on three smartphones',
    caption: 'Employee self-service, on the phone',
    sizes: '(max-width: 768px) 100vw, 720px',
  },
]

const productStories = [
  {
    eyebrow: '01 / Admin console',
    title: 'Give the office one calm place to run the work that cannot be missed.',
    copy: 'The admin console is the operational centre of SMP. It brings together the day’s attendance, leave requests, employee profiles, expiring documents, benefits, messages and reports, so an administrator can see what needs attention before it turns into a chase. Each employee also has a connected record for their attendance, leave, documents, benefits, messages, salary history and audit trail. That gives a manager the context to make a decision, without assembling it from a spreadsheet, inbox and filing cabinet.',
    image: mediaItems[0].src,
    alt: mediaItems[0].alt,
    mediaIndex: 0,
  },
  {
    eyebrow: '02 / Mobile employee app',
    title: 'Make the employee experience useful when work happens.',
    copy: 'The companion mobile app gives employees a secure, direct route into their own day: sign in, check in or out, request leave, read messages, review documents, see benefits and keep their profile current. Location is used only when a person explicitly signs in or signs out; it is not background tracking. That means a shift can start with a clear action and an understandable result, while the employee retains a simple view of their own work information wherever they are.',
    image: mediaItems[3].src,
    alt: mediaItems[3].alt,
    mediaIndex: 3,
  },
  {
    eyebrow: '03 / Benefits and compensation',
    title: 'Let people see the value of their employment discreetly and in good time.',
    copy: 'Benefits should not be buried in a welcome pack, and salary changes should not arrive as corridor news. SMP lets an administrator assign company benefits to the right employee and lets that employee see their active benefits in their own signed-in area. Salary and compensation updates are posted against the employee record with an effective date and a note, then made available through the employee’s private records and notifications. The result is timely, role-aware communication that makes sensitive information clearer without putting it on a shared noticeboard.',
    image: mediaItems[3].src,
    alt: mediaItems[3].alt,
    mediaIndex: 3,
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
                attendance, leave, employee records, documents, benefits, compensation updates, messages and a
                clear history of what changed.
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
            <span className={styles.caseStudyTag}>Three connected product stories</span>
            <h2>From fragmented admin to a calm, accountable operating rhythm.</h2>
            <p>
              SMP gives administrators and employees different views of the same organisation. The admin console
              helps the office manage work. The mobile app helps employees act on it. Private records and timely
              notifications help both sides stay informed without unnecessary back-and-forth.
            </p>
          </div>

          <div className={styles.productJourneyGrid}>
            {productStories.map((step) => (
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
              <h2>Designed around the routine moments that create follow-up work.</h2>
            </div>
            <p>
              Each view removes a different uncertainty: what needs an administrator’s attention, how an employee
              can act for themselves, and where private employment information can be reviewed safely.
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            <article className={`${styles.productFeatureCard} ${styles.productFeatureCardLarge}`}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => setLightboxIndex(1)} aria-label="Open attendance mockup in viewer">
                <Image src={mediaItems[1].src} alt={mediaItems[1].alt} fill sizes="(max-width: 768px) 100vw, 720px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Admin console</span>
                <h3>See the day’s operations, then move from signal to action.</h3>
                <p>The dashboard turns a dispersed set of people tasks into a practical review queue: who is signed in, what attendance needs attention, which leave requests are waiting, which documents are expiring and where messages need a reply. Detailed employee views keep the decision, its evidence and the record together.</p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => setLightboxIndex(3)} aria-label="Open mobile employee app mockup in viewer">
                <Image src={mediaItems[3].src} alt={mediaItems[3].alt} fill sizes="(max-width: 768px) 100vw, 420px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Mobile self-service</span>
                <h3>Let employees complete the next task without finding the office first.</h3>
                <p>From a secure signed-in home, an employee can check in or out, request leave, open messages and see their own documents, records and benefits. The app is built around explicit actions, especially for location-aware attendance, rather than persistent monitoring.</p>
              </div>
            </article>

            <article className={styles.productFeatureCard}>
              <button type="button" className={styles.productFeatureImageButton} onClick={() => setLightboxIndex(3)} aria-label="Open benefits and records mobile mockup in viewer">
                <Image src={mediaItems[3].src} alt={mediaItems[3].alt} fill sizes="(max-width: 768px) 100vw, 420px" className={styles.productFeatureImage} />
              </button>
              <div className={styles.productFeatureCopy}>
                <span>Private pay and benefits</span>
                <h3>Make important employment updates clear, personal and timely.</h3>
                <p>Benefits are assigned by the organisation and shown in the employee’s own account. Salary and compensation changes carry an effective date and explanatory note, while notifications and messages draw the employee back to the information without exposing it to colleagues. Sensitive updates are therefore clear to the person affected and auditable for the organisation.</p>
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
                <p>SMP gives an organisation a clear record of who did what, while giving employees a simpler, private way to see and manage their own work information, benefits and compensation updates.</p>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.metaRow}>
                <span className={styles.statusPill}>Live product</span>
                <span className={styles.metaItem}>Diagnosis: fragmented people operations</span>
                <span className={styles.metaItem}>Solution: role-aware admin and employee views</span>
                <span className={styles.metaItem}>Outcome: clearer records, private updates and fewer chasers</span>
              </div>

              <p className={styles.caseStudyIntro}>
                Flat18 designed and built SMP as a practical staff-management product, not a bloated HR suite. It helps a small organisation run ordinary tasks consistently, gives employees a useful mobile experience, and makes sensitive employment updates easier to receive privately and understand.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}><h3>Problem found</h3><p>Attendance, leave, employee records, benefits and salary communication often live in different places. That makes routine questions hard to answer and sensitive changes easy to deliver poorly.</p></div>
                <div className={styles.infoCard}><h3>Flat18 diagnosis</h3><p>The issue was not a lack of forms. The product needed to show the right context to the right role, give people a useful self-service route, then preserve the decision without adding administration.</p></div>
                <div className={styles.infoCard}><h3>Solution shipped</h3><p>We built an admin console and mobile employee app for attendance, leave, profiles, documents, salary records, benefits, messages, notifications and policy settings.</p></div>
                <div className={styles.infoCard}><h3>Customer value</h3><p>Teams can see what needs attention, employees can act and check their own information, and private employment updates can arrive with the context and timing they deserve.</p></div>
              </div>

              <div className={styles.listBlock}>
                <h4>What Flat18 handled</h4>
                <ul className={styles.checkList}>
                  <li>Mapped the employee and administrator journeys from secure sign-in through attendance, leave, records, benefits, compensation updates and communication</li>
                  <li>Designed distinct admin-console and mobile experiences that make each person’s next action clear</li>
                  <li>Built location-aware attendance and correction flows that retain the reason for a change</li>
                  <li>Joined documents, salary updates, benefits, notifications and audit history into a coherent, role-aware product language</li>
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
