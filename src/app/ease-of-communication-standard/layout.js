import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Ease of Communication Standard",
  description: "The Flat 18 Ease of Communication Standard (F18 EoCS) for clear, plain-English communication.",
  image: '/og/communication-standard.png',
  path: "/ease-of-communication-standard",
})

export default function Layout({ children }) {
  return children
}
