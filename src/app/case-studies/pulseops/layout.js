import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'PulseOps Case Study',
  description: 'Self-hosted network operations for SOHO operators and small MSPs.',
  path: '/case-studies/pulseops',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
