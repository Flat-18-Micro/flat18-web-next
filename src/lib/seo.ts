// SEO helper for centralizing metadata and JSON-LD
import { Metadata } from 'next'

// Site configuration
export const siteConfig = {
  name: 'Flat 18',
  legalName: 'Flat 18 Microsystems Development LLC',
  title: 'Flat 18 - Senior Design + Engineering for Founders',
  description: 'Senior design and engineering to ship conversion-ready websites and MVPs in 2-12 weeks.',
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
    'startup websites',
    'conversion optimization',
    'Next.js agency',
    'React development',
    'design and engineering',
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
  category: 'Design & Engineering',
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
    industry: 'Design & Engineering',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Product Design',
      'UX Design',
      'Web Development',
      'MVP Development',
      'Conversion Optimization',
      'Fintech UX',
      'Web Performance',
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
    serviceType: serviceType || 'Design & Engineering',
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
    description: 'Learn about Flat 18, a senior-only design + engineering team building conversion-ready websites and MVPs for founders.',
    path: '/about',
  }),
  
  services: () => generatePageMetadata({
    title: 'Services',
    description: 'Product & UX design, web engineering, fintech/web3 delivery, and retainers for ongoing momentum.',
    path: '/services',
  }),
  
  caseStudies: () => generatePageMetadata({
    title: 'Case Studies',
    description: 'Recent Flat 18 launches and product stories shipped with clear positioning and execution.',
    path: '/case-studies',
  }),
  
  pricing: () => generatePageMetadata({
    title: 'Pricing',
    description: 'Transparent pricing for subscription and fixed-scope engagements with a senior team.',
    path: '/pricing',
  }),
  
  founder: () => generatePageMetadata({
    title: 'Founder Version',
    description: 'A blunt, founder-first overview of how Flat 18 ships conversion-ready websites and MVPs in weeks, not months.',
    path: '/founder',
  }),

  privacy: () => generatePageMetadata({
    title: 'Privacy Policy',
    description: 'How Flat 18 handles data, cookies, and privacy across our services.',
    path: '/privacy',
  }),

  terms: () => generatePageMetadata({
    title: 'Terms of Service',
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
