import Image from 'next/image'
import TitleWords from '@/components/TitleWords'
import WhoThisIsForMobileObserver from '@/components/WhoThisIsForMobileObserver'
import styles from '@/styles/component-css/WhoThisIsForSection.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const founderScenarios = [
  {
    title: 'The AI-built prototype is cracking',
    image: '/images/who-for/01.webp',
    description:
      'AI tools got you moving. Now the build is brittle, inconsistent and hard to debug.',
    action:
      'We rebuild the rough version into something shippable.',
  },
  {
    title: 'The MVP works, but nobody trusts it yet',
    image: '/images/who-for/02.webp',
    description:
      'The idea works, but onboarding, dashboard polish or credibility still lags behind.',
    action:
      'We sharpen the UX, flows and foundations.',
  },
  {
    title: 'You need to ship before the market moves',
    image: '/images/who-for/03.webp',
    description:
      'The window is open, but slow discovery and vague estimates will waste it.',
    action:
      'Senior developers use AI carefully to accelerate the right work.',
  },
  {
    title: 'Your backlog is bigger than your team',
    image: '/images/who-for/04.webp',
    description:
      'Features, bugs and experiments are piling up beyond your team\'s senior capacity.',
    action:
      'We prioritise and ship the work that moves the product.',
  },
  {
    title: 'The first version got traction and now needs to grow up',
    image: '/images/who-for/05.webp',
    description:
      'Traction is real. Now UX, performance, data, billing or integrations need to mature.',
    action:
      'We move products from working prototype to business foundation.',
  },
  {
    title: 'You need judgement, not just hands on keyboards',
    image: '/images/who-for/06.webp',
    description:
      'You need more than ticket output: better questions, risk spotting and technical judgement.',
    action:
      'Flat 18 brings senior product, design and engineering judgement.',
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
          <span className="label-uppercase">For founders stuck between prototype and product</span>
          <TitleWords as="h2" id="who-this-is-for-heading" className={styles.title}>
            You're probably here because...
          </TitleWords>
          <p className={styles.intro}>
            You have an idea, prototype, MVP or product that matters, but is not strong enough to trust yet. Flat 18 turns rough momentum into something people can use, trust and pay for.
          </p>
        </div>

        <ul className={styles.cardGrid} aria-label="Founder and product situations">
          {founderScenarios.map((scenario, index) => (
            <li key={scenario.title} className={styles.cardItem}>
              <article
                className={styles.card}
                style={{ '--scenario-delay': `${(index * 5) + 0.6}s` }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
                  <div className={styles.cardArt} aria-hidden="true">
                    <Image
                      src={scenario.image}
                      alt=""
                      fill
                      sizes="72px"
                    />
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.description}</p>
                </div>
                <p className={styles.actionLine}>
                  <span>What we do</span>
                  {scenario.action}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className={styles.ctaPanel}>
          <p>
            If this sounds familiar, send the product, prototype or idea. We'll tell you what to fix first.
          </p>
          <div className={styles.ctaActions}>
            <a href="#contact" className="btn btn-primary">
              Get a product review
            </a>
            <a href="/case-studies" className="btn btn-secondary">
              See case studies
            </a>
          </div>
        </div>
      </div>
      <WhoThisIsForMobileObserver />
    </section>
  )
}
