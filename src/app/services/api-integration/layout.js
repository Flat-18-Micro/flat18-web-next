import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "API Integration Services"
const description = "API integration services to connect products with payments, data platforms, and third-party systems."
const path = "/services/api-integration"

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  image: '/og/api-integrations.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: "API Integration",
})

export default function Layout({ children }) {
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
