'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/component-css/Navbar.module.css'
import { analytics, trackSignalEvent } from '@/lib/analytics'
import { ThemeSwitcher } from '@/app/providers'

export default function Navbar({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        {/* Brand */}
        <Link href="/" className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/images/flat18_256x256.avif"
              alt="Flat 18 logo"
              width={42}
              height={42}
            />
          </div>
          <div className={styles.brandName}>flat 18</div>
          <span className="hidden xl:block max-w-[180px] text-xs font-bold uppercase tracking-wider leading-tight text-secondary">
            Digital product agency
          </span>
        </Link>

        {/* AI-led badge - visible on desktop when not scrolled */}
        {/* {!isScrolled && (

        )} */}

        {/* Desktop Navigation */}
        <nav className={`${styles.desktopNav} hidden lg:flex`} aria-label="Primary">
          <ul className={styles.menu}>
            <li>
              <Link
                href="/services"
                className={styles.link}
                data-cta-source="nav"
                data-signal-label="nav_services"
                onClick={() => trackSignalEvent('nav_services')}
              >
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                href="/selected-work"
                className={styles.link}
                data-cta-source="nav"
                data-signal-label="nav_work"
                onClick={() => trackSignalEvent('nav_work')}
              >
                <span>Work</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#process"
                className={styles.link}
                data-cta-source="nav"
                data-signal-label="nav_process"
                onClick={() => trackSignalEvent('nav_process')}
              >
                <span>Process</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#pricing"
                className={styles.link}
                data-cta-source="nav"
                data-signal-label="nav_pricing"
                onClick={() => trackSignalEvent('nav_pricing')}
              >
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={styles.link}
                data-cta-source="nav"
                data-signal-label="nav_contact"
                onClick={() => trackSignalEvent('nav_contact')}
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>

          <ThemeSwitcher className={styles.themeSwitcher} />

          {/* CTA Button */}
          <div className={styles.cta}>
            <Link
              href="/contact"
              className="btn btn-primary btn-icon"
              data-cta-source="nav"
              data-signal-label="nav_start_a_project"
              onClick={() => {
                trackSignalEvent('nav_start_a_project')
                analytics.nav.bookCall()
              }}
            >
              <span className="btn-text">Start a project</span>
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.menuToggle} lg:hidden`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <nav
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''} lg:hidden`}
          aria-label="Mobile navigation"
        >
          <div className={styles.mobileMenuContent}>
            <ul className={styles.mobileMenuList}>
              <li>
                <Link
                  href="/#process"
                  className={styles.mobileLink}
                  data-cta-source="nav"
                  data-signal-label="nav_mobile_process"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    trackSignalEvent('nav_mobile_process')
                  }}
                >
                  <span className={styles.mobileLinkLabel}>Process</span>
                  <span className={styles.mobileLinkDescription}>Fast work, reviewed before it ships</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={styles.mobileLink}
                  data-cta-source="nav"
                  data-signal-label="nav_mobile_services"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    trackSignalEvent('nav_mobile_services')
                  }}
                >
                  <span className={styles.mobileLinkLabel}>Services</span>
                  <span className={styles.mobileLinkDescription}>Design and build dependable software</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/selected-work"
                  className={styles.mobileLink}
                  data-cta-source="nav"
                  data-signal-label="nav_mobile_work"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    trackSignalEvent('nav_mobile_work')
                  }}
                >
                  <span className={styles.mobileLinkLabel}>Selected Work</span>
                  <span className={styles.mobileLinkDescription}>Real product builds</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className={styles.mobileLink}
                  data-cta-source="nav"
                  data-signal-label="nav_mobile_pricing"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    trackSignalEvent('nav_mobile_pricing')
                  }}
                >
                  <span className={styles.mobileLinkLabel}>Pricing</span>
                  <span className={styles.mobileLinkDescription}>MVPs, builds and retained support</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/memory-lane"
                  className={styles.mobileLink}
                  data-cta-source="nav"
                  data-signal-label="nav_mobile_memory_lane"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    trackSignalEvent('nav_mobile_memory_lane')
                  }}
                >
                  <span className={styles.mobileLinkLabel}>Memory lane</span>
                  <span className={styles.mobileLinkDescription}>Previous site deployments</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={styles.mobileLink}
                  data-cta-source="nav"
                  data-signal-label="nav_mobile_contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    trackSignalEvent('nav_mobile_contact')
                  }}
                >
                  <span className={styles.mobileLinkLabel}>Contact</span>
                  <span className={styles.mobileLinkDescription}>Contact page</span>
                </Link>
              </li>
            </ul>

            {/* Mobile CTA Group */}
            <div className={styles.mobileCTAGroup}>
              <ThemeSwitcher className={styles.mobileThemeSwitcher} showLabel />
              <Link
                href="/contact"
                className="btn btn-primary w-full"
                data-cta-source="nav"
                data-signal-label="nav_mobile_start_a_project"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  trackSignalEvent('nav_mobile_start_a_project')
                  analytics.nav.bookCall()
                }}
              >
                <span className="btn-text">Start a project</span>
              </Link>
              <a href="mailto:hello@flat18.co.uk" className={styles.emailLink}>
                hello@flat18.co.uk
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
