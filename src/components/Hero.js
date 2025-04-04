'use client'

export default function Hero() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>We Craft Websites & Apps</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
        Full-service Design & Development solutions for startups and businesses of all sizes!
      </p>
      <div>
        <a href="#chat" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: '#19fdb2', color: '#000', textDecoration: 'none', borderRadius: '30px', marginRight: '1rem' }}>
          Start Your Project
        </a>
        <a href="#work" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none', borderRadius: '30px' }}>
          View Our Work
        </a>
      </div>
    </div>
  )
}