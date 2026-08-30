import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'
import contactStyles from '@/styles/component-css/ContactPage.module.css'

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

        <div className={contactStyles.contactPageContainer}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>Contact Flat 18</h1>
            <div className={styles.badge}>We usually reply Monday to Friday, 12:00-20:00 UTC.</div>

          </div>
        </div>

        <Contact />

        <div className={contactStyles.contactPageContainer}>

          <aside className={contactStyles.clientPortal} aria-labelledby="client-portal-heading">
            <div>
              <p className={contactStyles.cardKicker}>Already working with us?</p>
              <h2 id="client-portal-heading" className={contactStyles.cardTitle}>Open your client portal</h2>
              <p className={contactStyles.cardBody}>Existing clients can use the portal to access their project space.</p>
            </div>
            <a
              href="https://accounts.flat18.co.uk/client/login"
              className="btn btn-secondary btn-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-text">Open client portal</span>
              <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </a>
          </aside>

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
      </section>
      <Footer />
    </main>
  )
}
