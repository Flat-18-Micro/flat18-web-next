import { siteConfig } from '@/lib/seo'

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": siteConfig.title,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "isPartOf": {
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url
  },
  "about": {
    "@type": "Organization",
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/images/flat18_256x256.avif`,
    "sameAs": [
      "https://x.com/f18_dev",
      "https://github.com/vswee"
    ]
  },
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "image": `${siteConfig.url}${siteConfig.ogImage}`,
    "description": "Flat 18 offers senior product design and engineering for the modern web. From conversion-ready marketing sites to MVPs and fintech platforms, we serve founders who want steady progress and clean delivery.",
    "url": siteConfig.url,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United Kingdom"
    },
    "priceRange": "££",
    "sameAs": [
      "https://x.com/f18_dev",
      "https://github.com/vswee"
    ],
    "founder": {
      "@type": "Person",
      "name": "Ed Swee"
    },
    "foundingDate": "2017",
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
