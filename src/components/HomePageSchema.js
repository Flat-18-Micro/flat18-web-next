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
    "description": "Flat 18 is an expert-led design and development studio using LLMs to accelerate curated MVPs, complete product builds and long-term product work without losing senior engineering control.",
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
      "name": "LLM-accelerated design and development services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Curated MVPs",
            "description": "Fast first versions scoped, designed, built and reviewed by experienced full-stack developers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete product builds",
            "description": "End-to-end product design, frontend, backend, integrations, QA, deployment and handover."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LLM workflow design",
            "description": "AI-assisted workflows, prompts, review systems and internal tools for faster delivery."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly product team",
            "description": "Ongoing senior design and development capacity for continuous product momentum."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Existing product takeover",
            "description": "Codebase audits, refactors, stabilisation and continued product delivery."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-stack integrations",
            "description": "APIs, payments, data flows and third-party services built into maintainable products."
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
