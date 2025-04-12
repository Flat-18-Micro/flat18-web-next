'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/component-css/Navbar.module.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
