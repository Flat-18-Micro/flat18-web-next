'use client'

import { useEffect, useState } from 'react'
import Contact from './Contact'
import ContactStatic from './ContactStatic'

export default function ContactWrapper() {
  const [isStatic, setIsStatic] = useState(false)
  
  useEffect(() => {
    // Check if we're in a static environment (GitHub Pages)
    // by trying to make a request to the API endpoint
    fetch('/api/contact', { method: 'HEAD' })
      .then(response => {
        // If the response is 404, we're in a static environment
        if (response.status === 404) {
          setIsStatic(true)
        }
      })
      .catch(() => {
        // If there's an error, we're likely in a static environment
        setIsStatic(true)
      })
  }, [])
  
  return isStatic ? <ContactStatic /> : <Contact />
}
