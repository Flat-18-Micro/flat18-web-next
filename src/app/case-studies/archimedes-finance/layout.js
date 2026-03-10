import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Archimedes Finance Case Study',
  description: 'Investor platform for tokenized assets, compliance workflows, and distribution reporting.',
  path: '/case-studies/archimedes-finance',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
