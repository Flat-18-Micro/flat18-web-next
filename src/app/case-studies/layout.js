import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Case Studies",
  description: "Open-source products and client launches shipped with clear positioning and execution.",
  image: '/og/case-studies.png',
  path: "/case-studies",
})

export default function Layout({ children }) {
  return children
}
