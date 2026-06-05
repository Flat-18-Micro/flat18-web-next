'use client'

import Link from 'next/link'
import styles from '../styles/component-css/Footer.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function Footer() {
  return (
    <footer
      className={styles.footer}
      aria-labelledby="footer-heading"
      data-bg-color={getSectionBackground('footer')}
      data-text-color={getSectionTextColor('footer')}
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.footerMainContent}>
          <div className={styles.footerContentWrapper}>
            <div className={styles.footerGrid}>
              <div className={styles.brandColumn}>
                <Link href="/" className={styles.footerBrand} aria-label="Flat 18 Home">
                  <div className={styles.footerLogo}>
                    <span className={styles.logoText}>F18</span>
                  </div>
                  <span className={styles.brandName}>Flat 18</span>
                </Link>
                <p className={styles.footerTagline}>
                  Senior design and full-stack development for LLM-accelerated MVPs, complete products and product teams.
                </p>

                {/* Social icons */}
                <div className={styles.socialIcons}>
                  <a href="https://x.com/f18_dev" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="bi bi-twitter-x" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/vswee" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="bi bi-github" aria-hidden="true"></i>
                  </a>
                  <a href="https://t.me/flat18_bot" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <i className="bi bi-telegram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>Services</h3>
                <ul className={styles.linksList}>
                  <li>
                    <Link href="/services/app-development" className={styles.footerLink}>
                      Curated MVPs
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development" className={styles.footerLink}>
                      Complete product builds
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ai-augmented-development" className={styles.footerLink}>
                      LLM workflow design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/maintenance-support" className={styles.footerLink}>
                      Long-term product support
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>Company</h3>
                <ul className={styles.linksList}>
                  <li>
                    <Link href="https://accounts.flat18.co.uk/client/login" className={styles.footerLink}>
                      <span>Client portal</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#work" className={styles.footerLink}>
                      Our work
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className={styles.footerLink}>
                      Case studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/#process" className={styles.footerLink}>
                      Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className={styles.footerLink}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/ease-of-communication-standard" className={styles.footerLink}>
                      Communication standard
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>Contact</h3>
                <ul className={styles.linksList}>
                  <li>
                    <a href="#chat" className={styles.footerLink}>
                      Start a project
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@flat18.co.uk" className={styles.footerLink}>
                      hello@flat18.co.uk
                    </a>
                  </li>
                  <li>
                    <Link href="/#pricing" className={styles.footerLink}>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <a href="https://t.me/flat18_bot" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.footerBottom}>
              <div className={styles.footerCopyright}>
                © {new Date().getFullYear()} Flat 18. All rights reserved.
              </div>
              <div className={styles.footerMeta}>
                <div className={styles.footerLegal}>
                  <Link href="/privacy" className={styles.legalLink}>
                    Privacy policy
                  </Link>
                  <Link href="/terms" className={styles.legalLink}>
                    Terms of service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
