import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Scroll Test",
  description: "Internal scroll test page.",
  path: "/scroll-test",
  noIndex: true,
})

export default function Layout({ children }) {
  return children
}
