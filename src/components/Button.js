'use client'

export default function Button({ children, variant = 'default', className = '', href, onClick }) {
  const baseClasses = 'btn'
  const variantClasses = {
    default: '',
    menu: 'menu',
    hero: 'hero',
    'link-light': 'link inline on-light-bg'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  const content = (
    <>
      <div className={`button-background ${variant}`}></div>
      <div className={`button-text ${variant}`}>{children}</div>
      <div className="icon right">&#xF135;</div>
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <div className={classes} onClick={onClick}>
      {content}
    </div>
  )
} 