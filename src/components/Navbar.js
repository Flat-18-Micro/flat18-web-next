'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/component-css/Navbar.module.css'
import { analytics } from '@/lib/analytics'

export default function Navbar({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)
  const servicesMenuRef = useRef(null)
  const servicesButtonRef = useRef(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen)
    if (!isServicesMenuOpen) {
      analytics.nav.megaMenuOpen()
    }
  }

  // Close services menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target) &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setIsServicesMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsServicesMenuOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Services data for mega menu
  const services = [
    {
      title: "Product & UX",
      description: "User-centered design that drives outcomes and engagement.",
      href: "/services/ui-ux-design"
    },
    {
      title: "Web Engineering",
      description: "Fast, scalable development with quality assurance.",
      href: "/services/web-development"
    },
    {
      title: "Web3 & Emerging",
      description: "Blockchain integration and decentralized applications.",
      href: "/services/web3-blockchain"
    },
    {
      quote: "We’ve worked with bigger agencies that didn’t deliver half as much value. Flat 18 was fast, focused, and genuinely cared about the outcome.",
      author: "Founder",
      role: "DeFi dashboard",
      rating: 5,
      color: "accent-pink"
    }
  ]

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
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
        <nav className={`${styles.desktopNav} hidden lg:flex`}>
          <ul className={styles.menu}>
            <li>
              <Link href="/#work" className={styles.link}>
                <span>Work</span>
              </Link>
            </li>
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
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.menuToggle} lg:hidden`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <nav
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
