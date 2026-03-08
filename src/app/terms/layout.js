import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "The Flat 18 terms of service and how we work together.",
  image: '/og/terms.png',
  path: "/terms",
})

export default function Layout({ children }) {
  return children
}
