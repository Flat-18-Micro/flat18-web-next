import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'SignalMap Case Study',
  description:
    'How Flat18 shaped SignalMap into a privacy-first analytics product with cookie-free tracking, edge ingest, aggregate reporting, and practical recommendations.',
  path: '/case-studies/signalmap',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
