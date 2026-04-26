import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Archimedes Finance Case Study',
  description: 'How Flat18 organised KYC, tokenisation, reporting, and client communication into one auditable investment platform.',
  path: '/case-studies/archimedes-finance',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
