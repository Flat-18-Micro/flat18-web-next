import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "How Flat 18 handles data, cookies, and privacy across our services.",
  image: '/og/privacy.png',
  path: "/privacy",
})

export default function Layout({ children }) {
  return children
}
