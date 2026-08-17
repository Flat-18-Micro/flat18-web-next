import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "About",
  description: "Learn about Flat 18, a product design and web development studio for founders and teams building complex products.",
  image: '/og/about.png',
  path: "/about",
})

export default function Layout({ children }) {
  return children
}
