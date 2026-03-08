import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "Web3 & Blockchain Services"
const description = "Secure Web3 and blockchain delivery for wallets, smart contracts, and decentralized apps with senior engineering."
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
  serviceType: "Web3 & Blockchain Development",
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
