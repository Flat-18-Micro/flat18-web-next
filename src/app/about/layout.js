import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "About",
  description: "Learn about Flat 18, a digital product agency that designs and builds software for teams with dense workflows and technical systems.",
  image: '/og/about.png',
  path: "/about",
})

export default function Layout({ children }) {
  return children
}
