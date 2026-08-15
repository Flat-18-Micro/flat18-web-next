import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "UI/UX design for SaaS and Web3 products"
const description = "UI/UX design for SaaS and Web3 products: research, user flows, prototypes and build-ready design systems from a senior product team."
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
  serviceType: "UI/UX design for digital products",
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
