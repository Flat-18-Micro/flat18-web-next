'use client'

export default function Tools() {
  const tools = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'Webflow', color: '#4353FF' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Vercel', color: '#000000' },
    { name: 'GitHub', color: '#181717' },
    { name: 'Stripe', color: '#008CDD' }
  ]

  return (
    <div className="content tools-wrapper">
      <div className="text-org">
        <h2 className="gradient-text blue">Tools We Use</h2>
        <p className="subtitle">Modern technologies for modern solutions</p>
      </div>
      <div className="tools-container">
        <div className="tile-flex-animated-container">
          <div className="provider-image-container">
            {tools.map((tool, index) => (
              <div key={index} className="tool-item">
                <div className="tool-logo-placeholder" style={{ background: tool.color }}>
                  {tool.name[0]}
                </div>
                <div className="tool-name">{tool.name}</div>
              </div>
            ))}
            {/* Duplicate the tools for seamless looping */}
            {tools.map((tool, index) => (
              <div key={`duplicate-${index}`} className="tool-item">
                <div className="tool-logo-placeholder" style={{ background: tool.color }}>
                  {tool.name[0]}
                </div>
                <div className="tool-name">{tool.name}</div>
              </div>
            ))}
          </div>
          <div className="providers-overlay right"></div>
          <div className="providers-overlay"></div>
        </div>
      </div>
      <style jsx>{`
        .tools-wrapper {
          padding: 6rem 0;
          overflow: hidden;
        }
        .text-org {
          text-align: center;
          margin-bottom: 4rem;
        }
        .subtitle {
          font-size: 1.2rem;
          color: var(--cw-3);
          margin-top: 1rem;
        }
        .tools-container {
          position: relative;
          max-width: 100%;
          overflow: hidden;
        }
        .tile-flex-animated-container {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
        }
        .provider-image-container {
          display: flex;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: max-content;
          animation: loopProviderFlex 60s linear forwards infinite;
        }
        .tool-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          margin: 0 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .tool-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.1);
        }
        .tool-logo-placeholder {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
        }
        .tool-name {
          font-size: 0.9rem;
          color: var(--cw-3);
          text-align: center;
        }
        .providers-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(to right, var(--bg-modern), transparent);
          z-index: 1;
        }
        .providers-overlay.right {
          left: auto;
          right: 0;
          background: linear-gradient(to left, var(--bg-modern), transparent);
        }
        @keyframes loopProviderFlex {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 768px) {
          .tile-flex-animated-container {
            height: 120px;
          }
          .tool-item {
            width: 100px;
            height: 100px;
            margin: 0 1rem;
          }
          .tool-logo-placeholder {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}