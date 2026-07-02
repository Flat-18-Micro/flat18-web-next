import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Selected work: Axis Finance',
  description:
    'How Flat18 helped private investors inspect positions, prices and alerts without handing over control, using read-only wallet tracking and narrow signals.',
  path: '/selected-work/axis-finance',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
