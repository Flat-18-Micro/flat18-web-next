import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

const screenshots = [
  ['02-overview-desktop.png', 'Overview dashboard showing the shared balance, member shares and attribution gap.'],
  ['01-onboarding-desktop.png', 'Onboarding flow for adding a shared membership and first cardholder.'],
  ['03-receipts-desktop.png', 'Searchable receipts ledger with merchant, date, cardholder and points visible.'],
  ['04-cardholders-desktop.png', 'Cardholder view with personal earned, redeemed and remaining balances.'],
  ['05-trends-desktop.png', 'Spending trends grouped by month, category and cardholder.'],
  ['06-receipt-editor.png', 'Receipt capture and review form with editable OCR fields.'],
  ['07-settings.png', 'Membership settings for currency, reporting period and account scope.'],
  ['08-overview-mobile.png', 'Mobile overview with stacked cards and bottom navigation.'],
]

const principles = [
  ['Evidence before certainty', 'OCR accelerates capture, but every field is reviewed before it changes the ledger.'],
  ['Shared account, personal accountability', 'The membership remains shared while each receipt is assigned to the person who earned it.'],
  ['Missing is a valid state', 'Unknown balances, approximate dates and unrecorded points stay visible instead of being guessed.'],
]

export default function PlatinumPointsCaseStudyPage() {
  return (
    <div className={`${styles.page} ${styles.productCasePage}`}>
      <section className={`${styles.hero} ${styles.productHero}`}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.productHeroGrid}>
            <div className={styles.productHeroContent}>
              <span className={styles.heroKicker}>Selected work / Shared account clarity</span>
              <h1 className={styles.productHeroTitle}>Platinum Points</h1>
              <p className={styles.productHeroSubtitle}>A mobile-first rewards ledger for households and small teams sharing one Platinum membership. Flat18 shaped the product around receipt evidence, personal tallies and clear reconciliation.</p>
              <div className={styles.productHeroActions}><a href="#story" className="btn btn-primary">Read the build story</a></div>
              <div className={styles.productProofGrid}>
                <div className={styles.productProofCard}><span className={styles.productProofValue}>OCR</span><span className={styles.productProofLabel}>On-device capture</span><p>Receipt data stays reviewable before it affects the ledger.</p></div>
                <div className={styles.productProofCard}><span className={styles.productProofValue}>1 → many</span><span className={styles.productProofLabel}>Shared membership</span><p>One account can keep separate tallies for every cardholder.</p></div>
                <div className={styles.productProofCard}><span className={styles.productProofValue}>CSV</span><span className={styles.productProofLabel}>Portable records</span><p>Search, correct and export the records when the group needs them.</p></div>
              </div>
            </div>
            <div className={styles.productHeroVisual}>
              <div className={styles.productHeroImageButton}><Image src="/images/case-studies/platinum-points/screenshots/02-overview-desktop.png" alt="Platinum Points overview dashboard showing shared balance and cardholder progress" width={1440} height={900} sizes="(max-width: 768px) 100vw, 640px" className={styles.productHeroImage} priority /><span className={styles.productHeroBadge}>Working prototype</span></div>
            </div>
          </div>
        </div>
      </section>
      <section id="story" className={styles.productStorySection}><div className={styles.container}><div className={styles.productSectionIntro}><span className={styles.caseStudyTag}>Development journey</span><h2>One membership, everyone’s fair share.</h2><p>A shared rewards balance tells an account how many points exist, but not who earned them or why the number differs from the receipts people remember saving. Platinum Points turns those receipts into an accountable, searchable ledger without pretending incomplete records are complete.</p></div><div className={styles.productJourneyGrid}>{principles.map(([title, copy], index) => <article key={title} className={styles.productJourneyCard}><div className={styles.productJourneyCopy}><span>0{index + 1} / Product principle</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
      <section className={styles.productShowcaseSection}><div className={styles.container}><div className={styles.productShowcaseHeader}><div><span className={styles.caseStudyTag}>Product surfaces</span><h2>Designed around the records people actually need to explain.</h2></div><p>From onboarding and capture to cardholder balances and spending trends, each surface keeps the evidence and the uncertainty close at hand.</p></div><div className={styles.productGalleryGrid}>{screenshots.map(([file, alt], index) => <figure key={file} className={index === 0 ? styles.productGalleryFeature : styles.productGalleryItem}><Image src={`/images/case-studies/platinum-points/screenshots/${file}`} alt={alt} width={1440} height={900} sizes="(max-width: 768px) 100vw, 520px" /><figcaption>{alt}</figcaption></figure>)}</div><p className={styles.productDisclaimer}>Platinum Points is an independent companion product and is not affiliated with or endorsed by PriceSmart. Screenshots use synthetic demo data.</p></div></section>
      <Contact /><Footer />
    </div>
  )
}
