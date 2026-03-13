'use client'

export default function TestPage() {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the first card with a simple animation.'
    },
    {
      title: 'Card 2',
      description: 'This is the second card with a simple animation.'
    },
    {
      title: 'Card 3',
      description: 'This is the third card with a simple animation.'
    }
  ]

  return (
    <main>
      <h1>Animation Test Page</h1>
      
      <section style={{ padding: '40px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2>Card Animation Test</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
