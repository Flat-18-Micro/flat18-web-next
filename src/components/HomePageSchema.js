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
    "description": "Flat 18 is a development and design studio using LLMs in the hands of experienced full-stack developers to deliver curated MVPs, dashboards and complete product builds faster.",
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
            "name": "Curated MVP Sprint",
            "description": "Fast first versions scoped, designed, built and reviewed by experienced full-stack developers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Product Build",
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
            "name": "Monthly Studio Support",
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
