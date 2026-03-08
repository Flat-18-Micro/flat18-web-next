import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "UI/UX Design Services"
const description = "Senior UI/UX design with research, prototypes, and design systems that make products clear, usable, and conversion-ready."
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
