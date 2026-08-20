import Link from 'next/link'
import TitleWords from '@/components/TitleWords'
import ChatCtaLink from '@/components/ChatCtaLink'
import styles from '@/styles/component-css/WhoThisIsForSection.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const situations = [
  {
    title: 'Prototype needs to become a product',
    action: 'We make brittle first builds clear, stable and ready to ship.',
  },
  {
    title: 'Launch, backlog or product direction needs momentum',
    action: 'We focus the work and make the calls that get a credible release out.',
  },
  {
    title: 'You need a technical co-founder',
    action: 'We bring senior product and engineering judgement from first decision to release.',
  },
]

export default function WhoThisIsForSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="who-this-is-for-heading"
      data-who-this-is-for
      data-bg-color={getSectionBackground('whoThisIsFor')}
      data-text-color={getSectionTextColor('whoThisIsFor')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeader}>
          <span className="label-uppercase">When Flat 18 fits</span>
          <TitleWords as="h2" id="who-this-is-for-heading" className={styles.title}>
            Top reasons teams call us.
          </TitleWords>
        </div>

        <ol className={styles.cardGrid} aria-label="Product situations Flat 18 can help with">
          {situations.map((situation, index) => (
            <li key={situation.title} className={styles.card}>
              <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{situation.title}</h3>
              <p>{situation.action}</p>
            </li>
          ))}
        </ol>

        <div className={styles.ctaPanel}>
          <p>Send the product link, prototype or idea. We’ll tell you what to fix first.</p>
          <div className={styles.ctaActions}>
            <ChatCtaLink className="btn btn-primary" source="who-this-is-for" signalLabel="who_this_is_for_cta">
              Chat with us
            </ChatCtaLink>
            <Link href="/selected-work" className="btn btn-secondary">See selected work</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
