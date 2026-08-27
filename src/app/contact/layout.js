import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Contact',
  description: 'Tell Flat 18 what you want to build and get a clear next step.',
  path: '/contact',
})

export default function Layout({ children }) {
  return children
}
