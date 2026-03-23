import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Natal Charts Case Study',
  description: 'Turning dense ephemeris data into a calm, explorable chart product experience.',
  path: '/case-studies/natal-charts',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
