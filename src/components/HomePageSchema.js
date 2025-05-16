'use client'

import { useEffect } from 'react'

export default function HomePageSchema() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !document) return

    // Add structured data for the homepage
    const homePageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Flat 18 - Premium Web3, AI & Full-Stack Development Agency",
      "description": "Flat 18 is a premium design and development studio for startups and technology entrepreneurs. We specialise in Web3, DeFi, full-stack applications, AI-augmented workflows, and security-focused builds.",
      "url": "https://flat18.co.uk",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Flat 18",
        "url": "https://flat18.co.uk"
      },
      "about": {
        "@type": "Organization",
        "name": "Flat 18",
        "url": "https://flat18.co.uk",
        "logo": "https://flat18.co.uk/images/flat18_256x256.avif"
      },
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Flat 18",
        "image": "https://flat18.co.uk/static/advert-flat-18-f18-og_1-p-2000.webp",
        "description": "Flat 18 offers premium design and engineering for the modern web. From Web3 and DeFi platforms to AI-assisted development and custom interfaces, we serve founders who demand performance, polish, and dependability.",
        "url": "https://flat18.co.uk",
        "telephone": "+44-0000-000000",
        "email": "studio@flat18.co.uk",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "United Kingdom"
        },
        "priceRange": "££",
        "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
        "sameAs": [
          "https://x.com/f18_dev",
          "https://github.com/vswee"
        ],
        "founder": {
          "@type": "Person",
          "name": "Ed Swee"
        },
        "foundingDate": "2020-01-01",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Expert web development using Next.js, React, and modern frameworks."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web3 Development",
                "description": "Specialised Web3 and DeFi development services."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Augmented Development",
                "description": "Development services augmented with AI technologies."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Prompt Engineering",
                "description": "Structured prompt engineering for large language models across creative and technical domains."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Seeded Design & Graphics",
                "description": "Generative AI-powered graphics and design workflows guided by brand identity and creative direction."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "API Integration",
                "description": "Seamless integration with third-party APIs and back-end services."
              }
            }
          ]
        }
      }
    }

    try {
      // Check if a schema already exists to avoid duplicates
      const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]')
      let schemaExists = false

      existingSchemas.forEach(s => {
        try {
          if (s.text && s.text.includes('"@type":"WebPage"')) {
            schemaExists = true
          }
        } catch (err) {
          console.error('Error checking existing schema:', err)
        }
      })

      // Only add if no schema exists
      if (!schemaExists) {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(homePageSchema)
        script.id = 'homepage-schema'
        document.head.appendChild(script)
      }
    } catch (error) {
      console.error('Error adding schema to page:', error)
    }

    // Clean up on unmount
    return () => {
      try {
        const script = document.getElementById('homepage-schema')
        if (script) {
          document.head.removeChild(script)
        } else {
          const scripts = document.querySelectorAll('script[type="application/ld+json"]')
          scripts.forEach(s => {
            try {
              if (s.text && s.text.includes('"@type":"WebPage"')) {
                document.head.removeChild(s)
              }
            } catch (err) {
              console.error('Error removing schema:', err)
            }
          })
        }
      } catch (error) {
        console.error('Error cleaning up schema:', error)
      }
    }
  }, [])

  return null
}
