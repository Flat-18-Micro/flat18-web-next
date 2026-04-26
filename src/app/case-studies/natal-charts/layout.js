import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Natal Charts Case Study',
  description: 'How Flat18 turned dense ephemeris, location, and scoring data into a calm product experience customers can explore and share.',
  path: '/case-studies/natal-charts',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
