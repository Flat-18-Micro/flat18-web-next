import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Natal Charts Case Study',
  description: 'How Flat18 turned ephemeris data, time-zone logic, relationship scoring, current transits, and interpretation notes into a clear browser product.',
  path: '/case-studies/natal-charts',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
