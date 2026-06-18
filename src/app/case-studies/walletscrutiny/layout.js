import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'WalletScrutiny Case Study',
  description:
    'How Flat18 helped shape WalletScrutiny into a clearer Bitcoin wallet security site, with stronger search, review pages, and methodology-led presentation.',
  path: '/case-studies/walletscrutiny',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
