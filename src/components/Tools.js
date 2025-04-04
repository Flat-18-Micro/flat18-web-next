'use client'

export default function Tools() {
  return (
    <div className="content tools-wrapper">
      <div className="tile-flex-animated-container">
        <div className="provider-image-container"></div>
        <div className="providers-overlay right"></div>
        <div className="providers-overlay"></div>
      </div>
      <style jsx>{`
        [class*="provider-image-container"] {
          animation: loopProviderFlex 60s linear forwards infinite;
        }
        @keyframes loopProviderFlex {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(-75%);
          }
        }
      `}</style>
    </div>
  )
} 