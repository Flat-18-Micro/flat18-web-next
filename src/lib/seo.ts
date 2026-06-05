// SEO helper for centralising metadata and JSON-LD
import { Metadata } from 'next'

// Site configuration
export const siteConfig = {
  name: 'Flat 18',
  legalName: 'Flat 18 Microsystems Development LLC',
  title: 'Flat 18 - Expert-built products, accelerated by LLMs',
  description: 'Senior full-stack developers using LLMs to design and build curated MVPs and complete digital products quickly.',
  url: 'https://flat18.co.uk',
  ogImage: '/og/home.png',
  twitter: '@f18_dev',
  locale: 'en_GB',
  email: 'hello@flat18.co.uk',
  keywords: [
    'product design',
    'UX design',
    'web design',
    'web development',
    'MVP development',
    'LLM development studio',
    'AI-assisted development',
    'LLM product development',
    'AI product studio',
    'startup websites',
    'conversion optimisation',
    'Next.js agency',
    'React development',
    'design and engineering',
    'senior developers',
    'founder-led teams',
    'SaaS marketing site',
    'fintech UX',
    'web app development',
    'API integrations',
    'web performance'
  ],
}

// Default metadata
export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitter,
    site: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'Design and engineering',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/webclip.png',
  },
  manifest: '/manifest.json',
}

// Generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
  keywords,
}: {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image || siteConfig.ogImage
  const pageTitle = title || siteConfig.title
  const pageDescription = description || siteConfig.description
  const ogTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title

  return {
    title: pageTitle,
    description: pageDescription,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      title: ogTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: pageDescription,
      images: [ogImage],
      creator: siteConfig.twitter,
      site: siteConfig.twitter,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}

// JSON-LD structured data generators
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/flat18_256x256.avif`,
    sameAs: [
      'https://x.com/f18_dev',
      'https://github.com/vswee',
    ],
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'United Kingdom',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.email,
      url: `${siteConfig.url}/#chat`,
    },
    foundingDate: '2017',
    numberOfEmployees: '2-10',
    industry: 'Design and engineering',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Product design',
      'UX design',
      'Web development',
      'MVP development',
      'LLM-assisted development',
      'AI workflow design',
      'Full-stack engineering',
      'Conversion optimisation',
      'Fintech UX',
      'Web performance',
    ],
  }
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: 'en-GB',
  }
}

export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = siteConfig.name,
  image,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/flat18_256x256.avif`,
      },
    },
    image: image ? {
      '@type': 'ImageObject',
      url: image,
    } : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function generateServiceJsonLd({
  name,
  description,
  url,
  serviceType,
  price,
  currency = 'GBP',
}: {
  name: string
  description: string
  url: string
  serviceType?: string
  price?: number
  currency?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Worldwide',
    serviceType: serviceType || 'Design and engineering',
    offers: price ? {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
    } : undefined,
  }
}

export function generateFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Helper to generate JSON-LD script content
export function generateJsonLdScript(data: Record<string, any>): string {
  return JSON.stringify(data)
}

// Common page types
export const pageTypes = {
  about: () => generatePageMetadata({
    title: 'About',
    description: 'Learn about Flat 18, an expert-led design and development studio using LLMs to help founders ship serious products faster.',
    path: '/about',
  }),
  
  services: () => generatePageMetadata({
    title: 'Services',
    description: 'Curated MVPs, complete product builds, LLM workflow design and long-term product support from senior full-stack developers.',
    path: '/services',
  }),
  
  caseStudies: () => generatePageMetadata({
    title: 'Case studies',
    description: 'Recent Flat 18 launches and product stories shipped with clear product thinking, design and engineering.',
    path: '/case-studies',
  }),
  
  pricing: () => generatePageMetadata({
    title: 'Pricing',
    description: 'Pricing routes for MVP sprints, complete product builds and monthly product team capacity.',
    path: '/pricing',
  }),
  
  founder: () => generatePageMetadata({
    title: 'Founder version',
    description: 'A blunt, founder-first overview of how Flat 18 uses senior judgement and LLM speed to ship products faster.',
    path: '/founder',
  }),

  privacy: () => generatePageMetadata({
    title: 'Privacy policy',
    description: 'How Flat 18 handles data, cookies, and privacy across our services.',
    path: '/privacy',
  }),

  terms: () => generatePageMetadata({
    title: 'Terms of service',
    description: 'The Flat 18 terms of service and how we work together.',
    path: '/terms',
  }),

  easeOfCommunicationStandard: () => generatePageMetadata({
    title: 'Ease of Communication Standard',
    description: 'The Flat 18 Ease of Communication Standard (F18 EoCS).',
    path: '/ease-of-communication-standard',
  }),
}

const seoUtils = {
  siteConfig,
  defaultMetadata,
  generatePageMetadata,
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
  generateBreadcrumbJsonLd,
  generateArticleJsonLd,
  generateServiceJsonLd,
  generateFAQJsonLd,
  generateJsonLdScript,
  pageTypes,
}

export default seoUtils
