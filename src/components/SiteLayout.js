'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default function SiteLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if page has scrolled more than 20px
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)

      // Apply class to body element when scrolled
      if (scrolled) {
        document.body.classList.add('is-scrolled')
      } else {
        document.body.classList.remove('is-scrolled')
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Initial check in case page is loaded already scrolled
    handleScroll()

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section'))

    if (!sections.length) {
      return
    }

    const setSectionState = (section, isInView) => {
      section.classList.add('scrolled')
      section.classList.toggle('scrolled-in', isInView)
      section.classList.toggle('scrolled-out', !isInView)
    }

    const isInitiallyInView = (section) => {
      const rect = section.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.85 && rect.bottom > 0
    }

    sections.forEach((section) => {
      setSectionState(section, isInitiallyInView(section))
    })

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => setSectionState(section, true))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isInView = entry.intersectionRatio >= 0.15
          setSectionState(entry.target, isInView)
        })
      },
      {
        threshold: 0.15
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar isScrolled={isScrolled} />
      <main id="main-content">
        {children}
      </main>
    </>
  )
}
