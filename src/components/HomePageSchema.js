const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Flat 18 - Design & Engineering Studio for Founders",
  "description": "For founders tired of chasing progress. Flat 18 builds conversion-ready websites and MVPs, shipped in 2-12 weeks.",
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
    "description": "Flat 18 offers senior product design and engineering for the modern web. From conversion-ready marketing sites to MVPs and fintech platforms, we serve founders who want steady progress and clean delivery.",
    "url": "https://flat18.co.uk",
    "telephone": "+44-0000-000000",
    "email": "studio@flat18.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United Kingdom"
    },
    "priceRange": "££",
    "openingHours": "Mo,Tu,We,Th,Fr 12:00-20:00",
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
      "name": "Design + Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product & UX Design",
            "description": "Positioning, UX, UI, and design systems that move users to action."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Engineering",
            "description": "Senior engineering for fast, secure, and maintainable builds."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVPs & Web Apps",
            "description": "Launch-ready MVPs, dashboards, and internal tools."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fintech & Payments",
            "description": "Payment flows, wallet integrations, and compliance-aware UX."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maintenance & Support",
            "description": "Ongoing retainers for product iteration and support."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Integrations",
            "description": "Seamless integration with third-party APIs and back-end services."
          }
        }
      ]
    }
  }
}

export default function HomePageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
    />
  )
}
