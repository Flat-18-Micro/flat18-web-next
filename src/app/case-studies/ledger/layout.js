import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Ledger Case Study',
  description: 'How Flat18 shaped a simple money-tracking app for informal loans, project budgets, shared costs, receipts, and read-only records people can trust.',
  path: '/case-studies/ledger',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
