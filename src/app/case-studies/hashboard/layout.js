import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Zettahash Hashboard Case Study',
  description: 'How Flat18 consolidated mining, treasury, market, and governance signals into a stakeholder transparency dashboard.',
  path: '/case-studies/hashboard',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
