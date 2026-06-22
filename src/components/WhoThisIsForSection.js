import TitleWords from '@/components/TitleWords'
import styles from '@/styles/component-css/WhoThisIsForSection.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const founderScenarios = [
  {
    title: 'The AI-built prototype is cracking',
    description:
      'You used tools like Cursor, Lovable, Bolt, v0 or Replit to get something moving quickly. Now the product is hard to extend, awkward to debug, visually inconsistent, or not quite safe to put in front of serious users.',
    action:
      'We turn promising but fragile first versions into structured, polished and genuinely shippable products.',
  },
  {
    title: 'The MVP works, but nobody trusts it yet',
    description:
      'The core idea exists, but the experience feels rough. The dashboard is clunky, onboarding is unclear, the interface lacks polish, or the product does not yet feel credible enough for customers, investors or partners.',
    action:
      'We refine the product, interface, flows and technical foundations so it feels like a serious business.',
  },
  {
    title: 'You need to ship before the market moves',
    description:
      'You have a real opportunity, but cannot afford months of slow discovery, vague estimates and agency theatre. You need useful progress quickly, without creating technical debt that punishes you later.',
    action:
      'We use LLMs and AI-assisted development carefully, with senior developers controlling the architecture, code quality and product direction.',
  },
  {
    title: 'Your backlog is bigger than your team',
    description:
      'You have features to build, bugs to fix, experiments to ship and no spare senior capacity to manage it all properly.',
    action:
      'We act as a focused product and development partner, helping you prioritise what matters and ship the work that moves the product forward.',
  },
  {
    title: 'The first version got traction and now needs to grow up',
    description:
      'The product worked well enough to prove the idea, but now it needs better structure, cleaner UX, stronger performance, proper data handling, billing, admin tools or integrations.',
    action:
      'We help move early products from "it works" to "we can build a business on this".',
  },
  {
    title: 'You need judgement, not just hands on keyboards',
    description:
      'You do not just want someone to complete tickets. You want someone who can question weak ideas, spot product risks, simplify the build and help you make better technical decisions.',
    action:
      'Flat 18 gives you senior development and design judgement, accelerated by expert use of LLMs and AI.',
  },
]

export default function WhoThisIsForSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="who-this-is-for-heading"
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
            You have an idea, prototype, MVP or product that is close enough to matter, but not strong enough to trust yet. Maybe it was built quickly with AI tools. Maybe the first version proved the concept. Maybe the backlog has simply outgrown the team. Flat 18 helps turn that rough momentum into a product people can use, trust and pay for.
          </p>
        </div>

        <ul className={styles.cardGrid} aria-label="Founder and product situations">
          {founderScenarios.map((scenario, index) => (
            <li key={scenario.title} className={styles.cardItem}>
              <article className={styles.card}>
                <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
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
            If one of these sounds familiar, send us the product, prototype or idea. We'll tell you what we would fix first.
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
    </section>
  )
}
