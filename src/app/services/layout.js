import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Services",
  description: "Curated MVP sprints, complete product builds and monthly product team capacity from senior developers using LLMs with discipline.",
  image: '/og/services.png',
  path: "/services",
})

export default function Layout({ children }) {
  return children
}
