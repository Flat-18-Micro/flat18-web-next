import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "Long-term product support"
const description = "Ongoing senior design and development capacity for product improvements, releases, refactors and support."
const path = "/services/maintenance-support"

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  image: '/og/maintenance-support.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: "Product support",
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
