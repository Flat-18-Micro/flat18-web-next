import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "About",
  description: "Learn about Flat 18, a senior design and full-stack development studio using LLMs to ship serious products faster.",
  image: '/og/about.png',
  path: "/about",
})

export default function Layout({ children }) {
  return children
}
