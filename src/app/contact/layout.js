import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Contact',
  description: 'Contact Flat 18 by email, Telegram, live chat, X or the client portal.',
  path: '/contact',
})

export default function Layout({ children }) {
  return children
}
