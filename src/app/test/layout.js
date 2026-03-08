import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Test",
  description: "Internal test page.",
  path: "/test",
  noIndex: true,
})

export default function Layout({ children }) {
  return children
}
