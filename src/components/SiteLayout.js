'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'

export default function SiteLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Check if page has scrolled more than 20px (for general scrolled state)
      const scrolled = currentScrollY > 20
      setIsScrolled(scrolled)

      // Apply class to body element when scrolled
      if (scrolled) {
        document.body.classList.add('is-scrolled')
      } else {
        document.body.classList.remove('is-scrolled')
      }

      // Determine if navbar should be visible based on scroll direction and position
      if (currentScrollY > 200) {
        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsNavbarVisible(false)
        } else {
          // Scrolling up
          setIsNavbarVisible(true)
        }
      } else {
        // Always show navbar when at the top (less than 40px)
        setIsNavbarVisible(true)
      }

      // Update the last scroll position
      lastScrollY.current = currentScrollY
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

  return (
    <>
      <Navbar isScrolled={isScrolled} isVisible={isNavbarVisible} />
      {children}
    </>
  )
}
