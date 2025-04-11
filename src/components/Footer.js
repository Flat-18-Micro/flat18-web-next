'use client'

import Link from 'next/link'
import styles from '../styles/component-css/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <div className={styles.footerGradient}></div>
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerBrandContainer}>
            <Link href="/" className={styles.footerBrand} aria-label="Flat 18 Home">
              <div className={styles.footerLogo}>F18</div>
            </Link>
            <p className={styles.footerTagline}>Modern web development for crypto & blockchain projects</p>
          </div>
          
          <div className={styles.footerContent}>
            <div className={styles.footerBlock}>
              <h3 className={styles.footerBlockTitle}>Contact</h3>
              <ul className={styles.footerLinksList}>
                <li>
                  <a href="#chat" className={styles.footerLink}>
                    <span>Live Chat</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/flat18_bot" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                    <span>Telegram</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@flat18.co.uk" className={styles.footerLink}>
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className={styles.footerBlock}>
              <h3 className={styles.footerBlockTitle}>Quick Links</h3>
              <ul className={styles.footerLinksList}>
                <li>
                  <Link href="/#work" className={styles.footerLink}>
                    <span>Our Work</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className={styles.footerLink}>
                    <span>Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className={styles.footerLink}>
                    <span>How It Works</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className={styles.footerBlock}>
              <h3 className={styles.footerBlockTitle}>Company</h3>
              <ul className={styles.footerLinksList}>
                <li>
                  <Link href="/about" className={styles.footerLink}>
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className={styles.footerLink}>
                    <span>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className={styles.footerLink}>
                    <span>Careers</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className={styles.footerBlock}>
              <h3 className={styles.footerBlockTitle}>Legal</h3>
              <ul className={styles.footerLinksList}>
                <li>
                  <Link href="/privacy" className={styles.footerLink}>
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={styles.footerLink}>
                    <span>Terms of Service</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className={styles.footerLink}>
                    <span>Cookies</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>© {new Date().getFullYear()} Flat 18. All rights reserved.</div>
          <div className={styles.footerSocial}>
            <a href="https://twitter.com/flat18dev" className={styles.footerSocialLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="bi bi-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/flat18" className={styles.footerSocialLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="bi bi-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/company/flat18" className={styles.footerSocialLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
