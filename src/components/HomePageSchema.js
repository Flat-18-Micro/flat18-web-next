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
    "description": "Flat 18 is a senior development and design studio using LLMs to deliver curated MVPs, dashboards and full-stack product builds faster.",
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
      "name": "Productised design and development routes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Curated MVP Sprint",
            "description": "Focused first versions with product scoping, UX/UI direction, full-stack MVP build, deployment support and handover notes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Product Build",
            "description": "End-to-end product planning, interface design, frontend and backend development, integrations, testing and deployment."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly Product Team",
            "description": "Ongoing monthly development capacity for feature iteration, UX improvements, technical maintenance and product experiments."
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
