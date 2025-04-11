'use client'

import Link from 'next/link'
import styles from '../styles/component-css/Button.module.css'

export default function Button({ 
  children, 
  variant = 'primary', 
  size, 
  fullWidth, 
  href, 
  onClick,
  className = '',
  ...props 
}) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    size && styles[size],
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ')
  
  if (href) {
    // If href starts with http or https, use a regular anchor tag
    if (href.startsWith('http')) {
      return (
        <a 
          href={href} 
          className={buttonClasses} 
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      )
    }
    
    // Otherwise use Next.js Link component
    return (
      <Link 
        href={href} 
        className={buttonClasses} 
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <button 
      className={buttonClasses} 
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
