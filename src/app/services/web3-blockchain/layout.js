import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "Web3 UI/UX and blockchain development"
const description = "Senior Web3 UI/UX and blockchain development for wallets, payments, dApps and complex product flows that users can understand."
const path = "/services/web3-blockchain"

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  image: '/og/web3-blockchain.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: "Web3 UI/UX and blockchain development",
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
