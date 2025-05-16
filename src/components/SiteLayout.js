'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'

export default function SiteLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      {children}
    </>
  )
}
