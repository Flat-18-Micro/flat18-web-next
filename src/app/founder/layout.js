import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Founder Version",
  description: "A blunt, founder-first overview of how Flat 18 ships conversion-ready websites and MVPs in weeks, not months.",
  image: '/og/founder-version.png',
  path: "/founder",
})

export default function Layout({ children }) {
  return children
}
