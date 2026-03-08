import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "Maintenance & Support Services"
const description = "Ongoing maintenance, monitoring, and support to keep websites and apps secure and performant."
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
  serviceType: "Maintenance & Support",
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
