import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Flat18 Geo Case Study',
  description: 'How Flat18 built Flat18 Geo, a Vercel IP geolocation API with lookup, refresh, and freshness endpoints backed by Neon Postgres and GitHub Actions.',
  path: '/case-studies/ipgeo',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
