import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "Curated MVP development"
const description = "Fast, focused MVP design and development using LLM-assisted workflows under senior full-stack review."
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
  serviceType: "MVP development",
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
