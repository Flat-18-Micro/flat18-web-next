'use client'

export default function Tools() {
  const tools = [
    { name: 'Infura', logo: '/images/tools/infura.svg' },
    { name: 'Vue.js', logo: '/images/tools/vuejs.svg' },
    { name: 'Cloudflare', logo: '/images/tools/cloudflare.svg' },
    { name: 'Webflow', logo: '/images/tools/webflow.svg' },
    { name: 'WalletConnect', logo: '/images/tools/walletconnect.svg' },
    { name: 'Node.js', logo: '/images/tools/nodejs.svg' },
    { name: 'Neon', logo: '/images/tools/neon.svg' },
    { name: 'GitHub', logo: '/images/tools/github.svg' },
    { name: 'BTCPay', logo: '/images/tools/btcpay.svg' },
    { name: 'Vercel', logo: '/images/tools/vercel.svg' },
    { name: 'Stacks', logo: '/images/tools/stacks.svg' },
    { name: 'Affinity', logo: '/images/tools/affinity.svg' },
    { name: 'ChatGPT', logo: '/images/tools/chatgpt.svg' },
    { name: 'DeepSeek', logo: '/images/tools/deepseek.svg' },
    { name: 'Le Chat', logo: '/images/tools/lechat.svg' }
  ]

  return (
    <section className="tools-section">
      <div className="container">
        <div className="tools-header">
          <h3 className="tools-title">Technologies We Use</h3>
        </div>
        <div className="tools-container">
          <div className="tools-list">
            {tools.map((tool, index) => (
              <div key={index} className="tool-item">
                <div className="tool-logo-placeholder">
                  {tool.name[0]}
                </div>
                <div className="tool-name">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .tools-section {
          padding: 3rem 0;
          background-color: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .tools-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .tools-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--white);
          margin: 0;
        }
        
        .tools-container {
          width: 100%;
          overflow: hidden;
        }
        
        .tools-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          padding: 1rem 0;
        }
        
        .tool-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100px;
          transition: transform 0.3s ease;
        }
        
        .tool-item:hover {
          transform: translateY(-5px);
        }
        
        .tool-logo-placeholder {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(25, 253, 178, 0.1), rgba(68, 163, 219, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary);
          margin-bottom: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .tool-name {
          font-size: 0.85rem;
          color: var(--cw-2);
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .tools-list {
            gap: 1rem;
          }
          
          .tool-item {
            width: 80px;
          }
          
          .tool-logo-placeholder {
            width: 50px;
            height: 50px;
            font-size: 1.25rem;
          }
          
          .tool-name {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  )
}
