import Image from 'next/image'
import TitleWords from '@/components/TitleWords'
import WhoThisIsForMobileObserver from '@/components/WhoThisIsForMobileObserver'
import styles from '@/styles/component-css/WhoThisIsForSection.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const founderScenarios = [
  {
    title: 'Your AI-built prototype is cracking',
    image: '/images/who-for/01.webp',
    description:
      'AI tools helped you move fast. Now the build is brittle, inconsistent and hard to trust.',
    action:
      'We turn the rough version into something shippable.',
  },
  {
    title: 'Your MVP works, but people do not trust it yet',
    image: '/images/who-for/02.webp',
    description:
      'The core idea is there, but the onboarding, interface or credibility still feels unfinished.',
    action:
      'We sharpen the UX, flows and product foundations.',
  },
  {
    title: 'The launch window is open, but the product is not ready',
    image: '/images/who-for/03.webp',
    description:
      'A deadline, demo, investor conversation or market opportunity is close, and slow delivery will waste it.',
    action:
      'We use senior judgement and AI carefully to accelerate the right work.',
  },
  {
    title: 'Your backlog is bigger than your team',
    image: '/images/who-for/04.webp',
    description:
      'Features, bugs and experiments are piling up faster than your team can sensibly handle.',
    action:
      'We prioritise and ship the work that actually moves the product.',
  },
  {
    title: 'Your first version has traction and needs to grow up',
    image: '/images/who-for/05.webp',
    description:
      'Users, leads or internal demand are showing up. Now UX, performance, data, billing or integrations need to mature.',
    action:
      'We move products from working prototype to business foundation.',
  },
  {
    title: 'You need senior judgement before more code',
    image: '/images/who-for/06.webp',
    description:
      'More output will not help if the direction is wrong. You need sharper questions, risk spotting and technical judgement.',
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
          <span className="label-uppercase">For products that are close, but not ready</span>
          <TitleWords as="h2" id="who-this-is-for-heading" className={styles.title}>
            You're probably here because...
          </TitleWords>
          {/* <p className={styles.intro}>
            You have the spark, the messy build, or the first signs of traction. Flat 18 helps turn that fragile early version into a product that feels clear, credible and ready to use.
          </p> */}
        </div>

        <ul className={styles.cardGrid} aria-label="Founder and product situations">
          {founderScenarios.map((scenario, index) => (
            <li key={scenario.title} className={styles.cardItem}>
              <article
                className={styles.card}
                style={{ '--scenario-delay': `${(index * 3) + 0.45}s` }}
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
