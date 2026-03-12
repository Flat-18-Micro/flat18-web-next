'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/component-css/Navbar.module.css'
import { analytics } from '@/lib/analytics'

export default function Navbar({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const liquidInitialized = useRef(false)
  const [liquidReady, setLiquidReady] = useState(false)
  const [html2CanvasReady, setHtml2CanvasReady] = useState(false)

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

  useEffect(() => {
    if (typeof window === 'undefined') return

    const setReadyFromWindow = () => {
      if (window.__html2canvasReady || window.html2canvas) {
        setHtml2CanvasReady(true)
      }
      if (window.__liquidGLReady || window.liquidGL) {
        setLiquidReady(true)
      }
    }

    setReadyFromWindow()

    const handleHtml2CanvasReady = () => setHtml2CanvasReady(true)
    const handleLiquidReady = () => setLiquidReady(true)

    window.addEventListener('html2canvas:ready', handleHtml2CanvasReady)
    window.addEventListener('liquidgl:ready', handleLiquidReady)

    return () => {
      window.removeEventListener('html2canvas:ready', handleHtml2CanvasReady)
      window.removeEventListener('liquidgl:ready', handleLiquidReady)
    }
  }, [])

  useEffect(() => {
    if (!liquidReady || !html2CanvasReady || typeof window === 'undefined') return

    if (!liquidInitialized.current && window.liquidGL) {
      liquidInitialized.current = true
      window.liquidGL({ target: '.liquidGL', shadow: false })
    }

    const renderer = window.__liquidGLRenderer__
    if (renderer?.canvas) {
      renderer.canvas.style.opacity = isScrolled ? '1' : '0'
      if (isScrolled && renderer.render) {
        renderer.render()
      }
    }
  }, [liquidReady, html2CanvasReady, isScrolled])

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8 liquidGL`}>
        {/* Brand */}
        <Link href="/" className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/images/flat18_256x256.avif"
              alt="Flat 18 Logo"
              width={42}
              height={42}
            />
          </div>
          <div className={styles.brandName}>flat 18</div>
        </Link>

        {/* AI-led badge - visible on desktop when not scrolled */}
        {/* {!isScrolled && (

        )} */}

        {/* Desktop Navigation */}
        <nav className={`${styles.desktopNav} hidden lg:flex`} aria-label="Primary">
          <ul className={styles.menu}>
            <li>
              <Link href="/#work" className={styles.link}>
                <span>Work</span>
              </Link>
            </li>
            {/* <li>
              <Link href="/case-studies" className={styles.link}>
                <span>Case Studies</span>
              </Link>
            </li> */}
            <li>
              <Link href="/#pricing" className={styles.link}>
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="https://accounts.flat18.co.uk/client/login" className={styles.link}>
                <span>Client Portal</span>
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <div className={styles.cta}>
            <a
              href="#chat"
              className="btn btn-primary btn-icon"
              onClick={() => analytics.nav.bookCall()}
            >
              <span className="btn-text">Book a fit check</span>
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </a>
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
                <Link href="/#work" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={styles.mobileLinkLabel}>Work</span>
                  <span className={styles.mobileLinkDescription}>Our latest projects</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={styles.mobileLinkLabel}>Case Studies</span>
                  <span className={styles.mobileLinkDescription}>Deep dives & launches</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={styles.mobileLinkLabel}>Services</span>
                  <span className={styles.mobileLinkDescription}>What we offer</span>
                </Link>
              </li>
              <li>
                <Link href="/process" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={styles.mobileLinkLabel}>Process</span>
                  <span className={styles.mobileLinkDescription}>How we work</span>
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={styles.mobileLinkLabel}>Pricing</span>
                  <span className={styles.mobileLinkDescription}>Transparent rates</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={styles.mobileLinkLabel}>About</span>
                  <span className={styles.mobileLinkDescription}>Our story</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={styles.mobileLinkLabel}>Blog</span>
                  <span className={styles.mobileLinkDescription}>Insights & updates</span>
                </Link>
              </li>
            </ul>

            {/* Mobile CTA Group */}
            <div className={styles.mobileCTAGroup}>
              <a
                href="#chat"
                className="btn btn-primary w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  analytics.nav.bookCall()
                }}
              >
                <span className="btn-text">Book a fit check</span>
              </a>
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
