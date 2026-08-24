import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

const TERMS_SECTIONS = [
  {
    title: 'What these terms cover',
    body: <>These terms apply when you buy services from FLAT 18 MICROSYSTEMS DEVELOPMENT LLC, also referred to as Flat 18. “You” means the customer; “we”, “us” and “our” mean Flat 18. The agreed scope, price and payment details in your proposal or invoice form part of these terms.</>,
  },
  {
    title: 'Services and scope',
    body: <>We agree the work and deliverables before work starts. Per-project packages are for smaller, clearly scoped tasks. Monthly delivery is for ongoing work billed by month. New requirements or work outside the agreed scope may need a new price and timeline.</>,
  },
  {
    title: 'Prices and payment',
    body: <>Prices shown on the website are starting prices, not a promise that every project will cost that amount. The final price is the one agreed in writing or shown on your invoice. Payment is due as stated on the invoice, and we start work after payment and scope agreement unless we agree otherwise. We issue invoices through Invoice Ninja in GBP, USD or EUR, with the payment methods available in that portal.</>,
  },
  {
    title: 'Currency and crypto prices',
    body: <>We may show a converted GBP, USD or EUR price based on your browser settings or your selection. Crypto amounts are estimates only and are recalculated at checkout. The fiat currency and amount on the Invoice Ninja invoice control the payment.</>,
  },
  {
    title: 'Monthly delivery',
    body: <>Monthly delivery is billed in advance for each month. You can ask us to pause or resume it for a future month. Retainer discounts apply only where they are stated in an invoice or separate written agreement. Unused time does not roll over unless we agree otherwise.</>,
  },
  {
    title: 'Your part',
    body: <>Please provide accurate information, access, content and feedback when requested. Delays may change the delivery date. You are responsible for having permission to use materials you provide, keeping your own backups and complying with laws that apply to your business or content.</>,
  },
  {
    title: 'Changes, costs and third parties',
    body: <>We will tell you before carrying out work that changes the agreed scope or price. Domains, hosting, software, stock assets and other third-party costs are extra unless included in writing. Third-party services have their own terms, availability and limitations.</>,
  },
  {
    title: 'Ownership and support',
    body: <>After full payment, you may use the final deliverables for the agreed purpose. We keep ownership of our pre-existing tools, templates and general know-how. Third-party licences still apply. Unless your proposal says otherwise, report defects in our work within one month of delivery and we will fix them; new features and revisions are new work.</>,
  },
  {
    title: 'Cancellation and refunds',
    body: <>Tell us as soon as possible if you need to cancel or pause work. We follow the cancellation or refund terms in your proposal or invoice and any rights that apply by law. Once work has started, we may charge for work completed and non-refundable third-party costs.</>,
  },
  {
    title: 'Confidentiality, liability and law',
    body: <>We handle confidential information with reasonable care and process personal information under our privacy policy. We may show completed work in our portfolio unless you ask us in writing to keep it private. We are not responsible for indirect losses such as lost sales or opportunities, and nothing in these terms limits liability that the law does not allow us to limit. These terms are governed by the laws of Trinidad and Tobago.</>,
  },
]

export default function TermsPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Flat 18 terms of service</h1>
            <div className={styles.badge}>Updated: 24 August 2026</div>
            <p className={styles.textContent}>
              These terms explain how we work together in plain English. If you buy as a consumer, nothing here removes rights that the law gives you.
            </p>

            <div className={`${styles.textContent} ${styles.legalContent}`}>
              <ol role="list" className="terms-list">
                {TERMS_SECTIONS.map((section) => (
                  <li key={section.title}>
                    <h2>{section.title}</h2>
                    <p>{section.body}</p>
                  </li>
                ))}
              </ol>

              <p>
                Questions about these terms? Email <a href="mailto:hello@flat18.co.uk">hello@flat18.co.uk</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
