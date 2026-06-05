import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "UI/UX design"
const description = "Clear product interface design, prototypes and design systems for MVPs, internal tools and complete products."
const path = "/services/ui-ux-design"

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  image: '/og/ui-ux-design.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: "UI/UX Design",
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
