'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/styles/component-css/Breadcrumbs.module.css'

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // Skip rendering breadcrumbs on homepage
  if (pathname === '/') return null
  
  // Create breadcrumb items from pathname
  const pathSegments = pathname.split('/').filter(segment => segment)
  
  // Generate breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`
      // Format the label (capitalize and replace hyphens with spaces)
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      return { label, path }
    })
  ]
  
  useEffect(() => {
    // Add breadcrumb structured data
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://flat18.co.uk${item.path}`
      }))
    }
    
    // Add the schema to the page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)
    
    // Clean up on unmount
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach(s => {
        if (s.text.includes('"@type":"BreadcrumbList"')) {
          document.head.removeChild(s)
        }
      })
    }
  }, [breadcrumbItems])
  
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <div className="container">
        <ol className={styles.breadcrumbsList}>
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1
            
            return (
              <li key={item.path} className={styles.breadcrumbItem}>
                {isLast ? (
                  <span aria-current="page" className={styles.currentPage}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.path} className={styles.breadcrumbLink}>
                    {item.label}
                  </Link>
                )}
                
                {!isLast && (
                  <span className={styles.separator} aria-hidden="true">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
