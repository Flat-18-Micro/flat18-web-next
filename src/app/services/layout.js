import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Product design and web development services",
  description: "Product design, web development and ongoing product support for founders and teams building dependable software with dense workflows and technical systems.",
  image: '/og/services.png',
  path: "/services",
})

export default function Layout({ children }) {
  return children
}
