import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'ForgingBlock Dashboard Case Study',
  description: 'How Flat18 turned scattered merchant payment signals into a calm workflow for invoices, cash flow, and payout status.',
  path: '/case-studies/forgingblock-dashboard',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
