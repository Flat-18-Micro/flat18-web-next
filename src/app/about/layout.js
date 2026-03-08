import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "About",
  description: "Learn about Flat 18, a senior-only design and engineering team building conversion-ready websites and MVPs for founders.",
  image: '/og/about.png',
  path: "/about",
})

export default function Layout({ children }) {
  return children
}
