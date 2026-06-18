import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'F18 Pay Case Study',
  description: 'How Flat18 shaped F18 Pay into a merchant payment system for store setup, invoices, payment requests, wallet controls, and public checkout.',
  path: '/case-studies/f18-pay',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
