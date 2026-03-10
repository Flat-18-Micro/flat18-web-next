import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Zettahash Hashboard Case Study',
  description: 'Transparency dashboard for mining performance, treasury status, and governance activity.',
  path: '/case-studies/hashboard',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
