import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'ForgingBlock Dashboard Case Study',
  description: 'Payments experience for merchants monitoring invoices, cash flow, and payouts.',
  path: '/case-studies/forgingblock-dashboard',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
