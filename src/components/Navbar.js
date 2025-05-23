'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/component-css/Navbar.module.css'

export default function Navbar({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const testimonials = [
    {
      quote: "Working with Flat 18 felt like having an in-house team. They were responsive, strategic, and nailed the design on the first try.",
      author: "Co-founder",
      role: "Fintech startup",
      rating: 5,
      color: "primary"
    },
    {
      quote: "Flat 18 rebuilt our web app from scratch and the performance boost was immediate. Page loads are faster, UX is cleaner, and our team can finally move fast again.",
      author: "Founder",
      role: "Payments processor platform",
      rating: 5,
      color: "secondary"
    },
    {
      quote: "They took our outdated site and gave it a clean, modern look without losing what made our brand special. The new site is performing better across every metric.",
      author: "Solopreneur",
      role: "Education website",
      rating: 5,
      color: "accent-purple"
    },
    {
      quote: "Flat 18 guided us through the Web3 space like pros. Their dashboard design is sharp, intuitive, and fully integrated with our smart contracts.",
      author: "CEO",
      role: "Ethereum investment project",
      rating: 5,
      color: "accent-teal"
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
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/images/flat18_256x256.avif"
              alt="Flat 18 Logo"
              width={42}
              height={42}
            />
          </div>
          <div className={styles.brandName}>Flat 18</div>
        </Link>

        <button
          className={styles.menuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>

        <nav
          className={`${styles.menuWrapper} ${isMobileMenuOpen ? styles.menuWrapperOpen : ''}`}
          aria-label="Main navigation"
        >
          <ul className={styles.menu}>
            <li>
              <Link href="/#work" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Work</span>
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>
                <span>About</span>
              </Link>
            </li>
            <li>
              <a
                href="https://accounts.flat18.co.uk/client/login"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Client Portal</span>
              </a>
            </li>
            <li className={styles.cta}>
              <a href="#chat" className="btn btn-primary btn-lg" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="btn-text">Start a Project</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
