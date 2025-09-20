// SEO helper for centralizing metadata and JSON-LD
import { Metadata } from 'next'

// Site configuration
export const siteConfig = {
  name: 'Flat 18',
  title: 'Flat 18 - Web3 & DeFi Development Agency',
  description: 'Premium web development and design for crypto, fintech, and digital platforms. Specialized in Web3, DeFi, and blockchain solutions.',
  url: 'https://flat18.co.uk',
  ogImage: '/static/advert-flat-18-f18-og_1-p-2000.webp',
  twitter: '@f18_dev',
  keywords: [
    'web3 development',
    'defi design',
    'crypto security',
    'btcpayserver',
    'blockchain apps',
    'wallet scrutiny',
    'full-stack development',
    'design agency',
    'next.js development',
    'react development',
    'crypto website',
    'blockchain development',
    'web3 design',
    'defi dashboard',
    'bitcoin payment integration'
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
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
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
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Web Development',
}

// Generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image || siteConfig.ogImage

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.title,
        },
      ],
    },
    twitter: {
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      images: [ogImage],
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
      contactType: 'customer service',
      url: `${siteConfig.url}/#chat`,
    },
    foundingDate: '2020',
    numberOfEmployees: '2-10',
    industry: 'Web Development',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Web3 Development',
      'DeFi Applications',
      'Blockchain Integration',
      'Cryptocurrency',
      'Smart Contracts',
      'Web Development',
      'UI/UX Design',
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
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
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
  price,
  currency = 'GBP',
}: {
  name: string
  description: string
  url: string
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
    serviceType: 'Web Development',
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
  home: () => generatePageMetadata({
    title: 'Web3 & DeFi Development Agency',
    description: 'Premium web development and design for crypto, fintech, and digital platforms. Specialized in Web3, DeFi, and blockchain solutions.',
    path: '',
  }),
  
  about: () => generatePageMetadata({
    title: 'About Us - Web3 Development Experts',
    description: 'Learn about Flat 18, a premium web development agency specializing in Web3, DeFi, and blockchain solutions for entrepreneurs.',
    path: '/about',
  }),
  
  services: () => generatePageMetadata({
    title: 'Services - Web3 & Blockchain Development',
    description: 'Comprehensive web development services including Web3 integration, DeFi applications, UI/UX design, and full-stack development.',
    path: '/services',
  }),
  
  work: () => generatePageMetadata({
    title: 'Our Work - Web3 & DeFi Projects',
    description: 'Explore our portfolio of Web3, DeFi, and blockchain projects. See how we help entrepreneurs build successful digital platforms.',
    path: '/work',
  }),
  
  pricing: () => generatePageMetadata({
    title: 'Pricing - Transparent Web Development Costs',
    description: 'Simple, transparent pricing for premium web development services. No hidden fees, flexible subscription model.',
    path: '/pricing',
  }),
  
  contact: () => generatePageMetadata({
    title: 'Contact Us - Start Your Web3 Project',
    description: 'Ready to start your Web3 or DeFi project? Get in touch with our team of experts for a free consultation.',
    path: '/contact',
  }),
  
  blog: () => generatePageMetadata({
    title: 'Blog - Web3 & Development Insights',
    description: 'Latest insights on Web3 development, DeFi trends, blockchain technology, and web development best practices.',
    path: '/blog',
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
