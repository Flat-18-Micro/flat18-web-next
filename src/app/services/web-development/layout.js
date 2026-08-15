import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = 'Web development for SaaS, Web3 and product teams'
const description = 'Senior web development for SaaS, Web3 and product teams: product design, full-stack engineering, integrations and dependable launch support.'
const path = '/services/web-development'

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  keywords: [
    'web development studio',
    'SaaS web development',
    'Web3 web development',
    'Next.js development',
    'React development',
    'full-stack development',
    'MVP development',
    'LLM-assisted development',
    'website performance',
  ],
  image: '/og/web-development.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: 'Full-stack product development',
})

export default function WebDevelopmentLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  )
}
