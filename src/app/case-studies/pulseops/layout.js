import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'PulseOps Case Study',
  description: 'How Flat18 identified a visibility gap for small network operators and turned it into a credible self-hosted product proposition.',
  path: '/case-studies/pulseops',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
