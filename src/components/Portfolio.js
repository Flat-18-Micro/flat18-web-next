'use client'

export default function Portfolio() {
  const projects = [
    {
      title: 'WalletScrutiny',
      description: 'WalletScrutiny helps everyday bitcoin users verify the legitimacy and security of their wallet by ensuring it is truly open-source.',
      image: '/images/wallet-scrutiny-logo.webp',
      link: 'https://walletscrutiny.com',
      technologies: [
        { name: 'JavaScript', percentage: '40%', colorClass: 'js-key-colour' },
        { name: 'HTML5', percentage: '30%', colorClass: 'html5-tech-used' },
        { name: 'SCSS', percentage: '30%', colorClass: 'scss-key-colour' }
      ],
      status: 'Current version'
    },
    {
      title: 'F18 Pay',
      description: 'Bitcoin, ETH and ERC-20 token payments processor built to run in serverless environments.',
      image: '/images/f18-pay-224.webp',
      link: 'https://pay.flat18.co.uk',
      technologies: [
        { name: 'JavaScript', percentage: '100%', colorClass: 'js-key-colour' }
      ],
      status: 'Live'
    },
    {
      title: 'Zettahash DAO',
      description: 'Zettahash website built in Webflow and designed to be processed in Node within a GitHub Pages environment.',
      image: '/images/zettahash-2024.webp',
      link: 'https://zettahash-static.webflow.io',
      technologies: [
        { name: 'Webflow', percentage: '100%', colorClass: 'webflow-key-colour' }
      ],
      status: 'Live',
      framework: {
        name: 'Webflow',
        logo: '/images/webflow-icon-4095338614.png'
      }
    }
  ]

  return (
    <div className="content portfolio-wrapper" id="work">
      <div className="text-org">
        <h2 className="gradient-text blue">Our Recent Work</h2>
        <p className="subtitle">Projects we've delivered for our clients</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-tile compact">
            <div className="work-tile-image compact">
              <div className="project-logo-placeholder">{project.title[0]}</div>
            </div>
            <div className="work-tile-text">
              <h3 className="work-ile-title compact">{project.title}</h3>
              <div className="work-tile-text">{project.description}</div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="link">
                <div>Visit Website</div>
                <div className="icon small">&#xF1C5;</div>
              </a>
              <div className="technology-wrapper">
                <div className="technologies-used">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`technology ${tech.colorClass} ${tech.percentage === '100%' ? '_100' : tech.percentage === '50%' ? '_50' : ''}`}
                    ></div>
                  ))}
                </div>
                <ul className="work-list">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="list-item">
                      <div className={`technology-colour-key ${tech.colorClass}`}></div>
                      <div className="technology-name">{tech.name}</div>
                      <div className="technology-pc">{tech.percentage}</div>
                    </li>
                  ))}
                </ul>
                {project.framework && (
                  <div className="framework-credit-wrapper">
                    <div className="framework-logo">{project.framework.name[0]}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="badge subtle">{project.status}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .portfolio-wrapper {
          padding: 6rem 0;
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
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 0 2rem;
        }
        .work-tile {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          transition: transform 0.3s ease;
        }
        .work-tile.compact {
          display: flex;
          flex-direction: column;
        }
        .work-tile:hover {
          transform: translateY(-5px);
        }
        .work-tile-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }
        .work-tile-image.compact {
          max-width: 120px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-logo-placeholder {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          background-color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: white;
        }
        .work-ile-title {
          font-size: 1.5rem;
          color: var(--white);
          margin-bottom: 0.5rem;
        }
        .work-ile-title.compact {
          font-size: 1.3rem;
        }
        .work-tile-text {
          color: var(--cw-3);
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--cw-1);
          text-decoration: none;
          margin-bottom: 1.5rem;
          transition: color 0.2s ease;
        }
        .link:hover {
          color: var(--white);
        }
        .icon.small {
          font-size: 1rem;
        }
        .technology-wrapper {
          margin-top: auto;
        }
        .technologies-used {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .technology {
          width: 20px;
          height: 20px;
          border-radius: 4px;
        }
        .technology._100 {
          width: 100%;
        }
        .technology._50 {
          width: 50%;
        }
        .js-key-colour {
          background-color: #f7df1e;
        }
        .html5-tech-used {
          background-color: #e34f26;
        }
        .scss-key-colour {
          background-color: #c69;
        }
        .webflow-key-colour {
          background-color: #4353ff;
        }
        .work-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .list-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .technology-colour-key {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }
        .technology-name {
          flex-grow: 1;
          color: var(--cw-4);
          font-size: 0.9rem;
        }
        .technology-pc {
          color: var(--cw-5);
          font-size: 0.9rem;
        }
        .framework-credit-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 1rem;
        }
        .framework-logo {
          height: 24px;
          width: 24px;
          border-radius: 4px;
          background-color: var(--blue-2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
          color: white;
        }
        .badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--cw-5);
        }
        .badge.subtle {
          background-color: rgba(255, 255, 255, 0.05);
        }
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
