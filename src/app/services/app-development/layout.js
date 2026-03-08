import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "App Development Services"
const description = "Custom web app development for MVPs, dashboards, and internal tools built by a senior team."
const path = "/services/app-development"

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  image: '/og/app-development.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: "App Development",
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
