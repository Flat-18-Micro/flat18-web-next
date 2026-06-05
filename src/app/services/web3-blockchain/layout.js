import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "Web3 and blockchain delivery"
const description = "Specialist product and integration work for wallets, payments, dApps and blockchain interfaces."
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
  serviceType: "Web3 and blockchain development",
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
