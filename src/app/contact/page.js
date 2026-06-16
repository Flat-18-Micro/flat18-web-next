import Link from 'next/link'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'
import contactStyles from '@/styles/component-css/ContactPage.module.css'
import { siteConfig } from '@/lib/seo'

const contactOptions = [
  {
    kicker: 'Best for detailed briefs',
    title: 'Email',
    description: 'Send the goal, scope, deadline and any notes you already have. It is the best route for a proper brief and anything you want in writing.',
    href: `mailto:${siteConfig.email}?subject=Project%20enquiry`,
    action: siteConfig.email,
    icon: 'bi-envelope',
    external: false,
  },
  {
    kicker: 'Best for quick questions',
    title: 'Live chat',
    description: 'Open live chat if you want a faster back-and-forth while you are already on the site.',
    href: '/chat?data=intro',
    action: 'Open chat',
    icon: 'bi-chat-dots',
    external: false,
  },
  {
    kicker: 'Best if Telegram is easier',
    title: 'Telegram',
    description: 'Use Telegram for short messages and quick replies.',
    href: 'https://t.me/flat18_bot',
    action: 'Message on Telegram',
    icon: 'bi-telegram',
    external: true,
  },
  {
    kicker: 'Best for current clients',
    title: 'Client portal',
    description: 'Use the portal if you already work with us and need access to your project space.',
    href: 'https://accounts.flat18.co.uk/client/login',
    action: 'Open portal',
    icon: 'bi-person-badge',
    external: true,
  },
]

const publicProfiles = [
  {
    label: 'X',
    href: 'https://x.com/f18_dev',
    icon: 'bi-twitter-x',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vswee',
    icon: 'bi-github',
  },
]

export default function ContactPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={contactStyles.pageGlow} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Contact Flat 18</h1>
            <div className={styles.badge}>We usually reply Monday to Friday, 12:00-20:00 UTC.</div>

            <div className={styles.textContent}>
              <p>Choose the quickest route for the kind of message you have.</p>
              <p>Email is best for a proper brief. Live chat is best for a fast reply. Telegram is useful if that is the channel you already use. The portal is for existing clients who need access to their project space.</p>
            </div>

            <div className={contactStyles.contactGrid}>
              {contactOptions.map((option) => {
                const linkClassName = option.external
                  ? 'btn btn-secondary btn-icon'
                  : 'btn btn-primary btn-icon'

                const isInternalRoute = option.href.startsWith('/')
                const isMailLink = option.href.startsWith('mailto:')
                const action = isInternalRoute ? (
                  <Link href={option.href} className={linkClassName}>
                    <span className="btn-text">{option.action}</span>
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </Link>
                ) : isMailLink ? (
                  <a href={option.href} className={linkClassName}>
                    <span className="btn-text">{option.action}</span>
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </a>
                ) : (
                  <a
                    href={option.href}
                    className={linkClassName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-text">{option.action}</span>
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </a>
                )

                return (
                  <article key={option.title} className={contactStyles.contactCard}>
                    <div className={contactStyles.cardHeader}>
                      <div className={contactStyles.cardIcon} aria-hidden="true">
                        <i className={`bi ${option.icon}`}></i>
                      </div>
                      <div>
                        <p className={contactStyles.cardKicker}>{option.kicker}</p>
                        <h2 className={contactStyles.cardTitle}>{option.title}</h2>
                      </div>
                    </div>
                    <p className={contactStyles.cardBody}>{option.description}</p>
                    <div className={contactStyles.cardActions}>{action}</div>
                  </article>
                )
              })}
            </div>

            <div className={contactStyles.publicProfiles} aria-label="Public profiles">
              <span className={contactStyles.publicLabel}>Public profiles</span>
              {publicProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  className={contactStyles.publicLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bi ${profile.icon} ${contactStyles.publicIcon}`} aria-hidden="true"></i>
                  <span>{profile.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  )
}
