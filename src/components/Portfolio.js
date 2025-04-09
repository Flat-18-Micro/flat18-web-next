'use client'

import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    {
      title: 'WalletScrutiny',
      description: 'Collaborative project with the Bitcoin Design Community to redesign the WalletScrutiny brand and website.',
      image: '/images/wallet-scrut.webp',
      link: 'https://walletscrutiny.com',
      technologies: [
        { name: 'JavaScript', percentage: '90%', colorClass: 'js-key-colour', cssClass: 'ws' },
        { name: 'HTML5', percentage: '5%', colorClass: 'html5-tech-used', cssClass: 'ws' },
        { name: 'SCSS', percentage: '5%', colorClass: 'scss-key-colour', cssClass: 'ws' }
      ],
      status: 'Current version'
    },
    {
      title: 'BTCPay Server',
      description: 'Clean, modern design for the BTCPay Server Main Landing page and Foundation Website.',
      image: '/images/btcpay.webp',
      link: 'https://btcpayserver.org',
      technologies: [
        { name: 'HTML5', percentage: '40%', colorClass: 'html5-tech-used' },
        { name: 'CSS', percentage: '30%', colorClass: 'css-key-colour' },
        { name: 'JavaScript', percentage: '30%', colorClass: 'js-key-colour', cssClass: 'btc' }
      ],
      status: 'Live'
    },
    {
      title: 'F18 Pay',
      description: 'Bitcoin, ETH and ERC-20 token payments processor built to run in serverless environments.',
      image: '/images/f18-pay-224.webp',
      link: 'https://pay.flat18.co.uk',
      technologies: [
        { name: 'JavaScript', percentage: '100%', colorClass: 'js-key-colour', cssClass: 'f18-pay' }
      ],
      status: 'Live'
    },
    {
      title: '# Hashboard',
      description: 'Web3 application enabling transparent operation and governance of the Zettahash DAO project.',
      image: '/images/creative-studies23.webp',
      link: 'https://hashboard.zettahash.org',
      technologies: [
        { name: 'Vue.js', percentage: '60%', colorClass: 'vue-key-colour', cssClass: 'f18' },
        { name: 'JavaScript', percentage: '40%', colorClass: 'js-key-colour' }
      ],
      status: 'Live'
    },
    {
      title: 'Zettahash DAO',
      description: 'Zettahash website built in Webflow and designed to be processed in Node within a GitHub Pages environment.',
      image: '/images/zettahash-2024.webp',
      link: 'https://zettahash-static.webflow.io',
      technologies: [
        { name: 'Webflow', percentage: '100%', colorClass: 'webflow-key-colour', cssClass: '_100' }
      ],
      status: 'Live',
      framework: {
        name: 'Webflow',
        logo: '/images/webflow-icon-4095338614.png'
      }
    },
    {
      title: 'BeraVote NFT Family',
      description: 'A concept sample for a BeraVote NFT project built in Webflow for maximum content manageability. We coupled this with extensive custom JS to enable serverless database management of NFT assets for the site gallery.',
      image: '/images/creative-studies2.webp',
      link: 'https://beravote-nft.pages.dev/',
      technologies: [
        { name: 'Webflow SiteBuilder', percentage: '50%', colorClass: 'webflow-key-colour', cssClass: '_50' },
        { name: 'JavaScript', percentage: '50%', colorClass: 'js-key-colour', cssClass: 'bv' }
      ],
      status: 'demo'
    },
    {
      title: 'Keevo Wallet',
      description: 'Redesign of Keevo Wallet website to achieve a look which can be described as "glossy", "high-quality" but also clean, modern and balancing "sophisticated" with "trendy".',
      image: '/images/keevo-tile.webp',
      technologies: [
        { name: 'HTML5', percentage: '30%', colorClass: 'html5-tech-used', cssClass: 'keevo' },
        { name: 'CSS', percentage: '40%', colorClass: 'css-key-colour' },
        { name: 'SCSS', percentage: '60%', colorClass: 'scss-key-colour', cssClass: 'keevo' }
      ],
      status: 'demo'
    },
    {
      title: 'Incognet',
      description: 'Refreshing the Incognet website with improved UX and a cleaner, more-appealing UI and graphics.',
      image: '/images/incognetio-tile.webp',
      technologies: [
        { name: 'PHP', percentage: '80%', colorClass: 'php-key-colour', cssClass: 'incognet' },
        { name: 'SCSS', percentage: '10%', colorClass: 'scss-key-colour', cssClass: 'incognet' }
      ],
      status: 'demo',
      framework: {
        name: 'PHP',
        logo: '/images/php-logo.png'
      }
    },
    {
      title: 'Zismo.io',
      description: 'A Peer-to-Peer bitcoin trading platform which also encourages face-to-face trading',
      image: '/images/zismo-tile.webp',
      technologies: [
        { name: 'PHP', percentage: '65%', colorClass: 'php-key-colour', cssClass: 'zismo' },
        { name: 'SCSS', percentage: '15%', colorClass: 'scss-key-colour', cssClass: 'zismo' },
        { name: 'JavaScript', percentage: '20%', colorClass: 'js-key-colour', cssClass: 'zismo' }
      ],
      status: 'demo'
    },
    {
      title: 'Naira Ex',
      description: 'Landing-page for a crypto debit card aimed at the Canadian and Nigerian market.',
      image: '/images/nairaex-tile.webp',
      technologies: [
        { name: 'HTML5', percentage: '30%', colorClass: 'html5-tech-used' },
        { name: 'CSS', percentage: '30%', colorClass: 'css-key-colour', cssClass: 'naira' },
        { name: 'JavaScript', percentage: '40%', colorClass: 'js-key-colour', cssClass: 'naira' }
      ],
      status: 'demo'
    },
    {
      title: 'P2P NFT',
      description: 'Peer-to-peer NFT trading platform',
      image: '/images/p2pnft-tile.webp',
      technologies: [
        { name: 'Vue.js', percentage: '80%', colorClass: 'vue-key-colour', cssClass: 'p2p' },
        { name: 'SCSS', percentage: '10%', colorClass: 'scss-key-colour', cssClass: 'p2p' },
        { name: 'JavaScript', percentage: '10%', colorClass: 'js-key-colour', cssClass: 'btc' }
      ],
      status: 'demo'
    },
    {
      title: 'WalletScrutiny (Early)',
      description: 'Earlier iterations of WalletScrutiny and experimental layouts, graphics, UX.',
      image: '/images/walletscrutiny-tile.webp',
      technologies: [
        { name: 'JavaScript', percentage: '90%', colorClass: 'js-key-colour', cssClass: 'ws' },
        { name: 'HTML5', percentage: '5%', colorClass: 'html5-tech-used', cssClass: 'ws' },
        { name: 'SCSS', percentage: '5%', colorClass: 'scss-key-colour', cssClass: 'ws' }
      ],
      status: 'archive'
    }
  ]

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="text-org">
          <h2 className="gradient-text ready">Work & Samples</h2>
          <p className="subtitle">Check out a few projects we've worked on.</p>
        </div>
        <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-tile compact">
            {project.image && (
              <Image
                src={project.image}
                alt={`${project.title} website graphic`}
                width={224}
                height={224}
                className="work-tile-image compact"
              />
            )}
            <div className="work-tile-text">
              <h3 className="work-ile-title compact">{project.title}</h3>
              <div className="work-tile-text">{project.description}</div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link">
                  <div>Visit Website</div>
                  <i className="bi bi-box-arrow-up-right icon small"></i>
                </a>
              )}
              <div className="technology-wrapper">
                <div className="technologies-used">
                  {project.technologies.map((tech, techIndex) => {
                    const techClasses = [
                      'technology',
                      tech.colorClass
                    ];

                    // Add cssClass from the technology object if available
                    if (tech.cssClass) {
                      techClasses.push(tech.cssClass);
                    }

                    return (
                      <div
                        key={techIndex}
                        className={techClasses.join(' ')}
                        style={{ width: tech.percentage }}
                      ></div>
                    );
                  })}
                </div>
                <ul className="work-list w-list-unstyled">
                  {project.technologies.map((tech, techIndex) => {
                    // Convert colorClass to colour-key class
                    let colorKeyClass = tech.colorClass;
                    if (colorKeyClass === 'js-key-colour') colorKeyClass = 'js-colour-key';
                    if (colorKeyClass === 'html5-tech-used') colorKeyClass = 'html5-colour-key';
                    if (colorKeyClass === 'scss-key-colour') colorKeyClass = 'scss-colour-key';
                    if (colorKeyClass === 'css-key-colour') colorKeyClass = 'css-colour-key';
                    if (colorKeyClass === 'php-key-colour') colorKeyClass = 'php-colour-key';
                    if (colorKeyClass === 'vue-key-colour') colorKeyClass = 'vue-colour-key';
                    if (colorKeyClass === 'webflow-key-colour') colorKeyClass = 'webflow-colour-key';

                    return (
                      <li key={techIndex} className="list-item">
                        <div className={`technology-colour-key ${colorKeyClass}`}></div>
                        <div className="technology-name">{tech.name}</div>
                        <div className="technology-pc">{tech.percentage}</div>
                      </li>
                    );
                  })}
                </ul>
                {project.framework && (
                  <div className="framework-credit-wrapper">
                    {project.framework.logo ? (
                      <Image
                        src={project.framework.logo}
                        alt={`${project.framework.name} logo`}
                        width={24}
                        height={24}
                        className="framework-logo"
                      />
                    ) : (
                      <div className="framework-logo-placeholder">
                        {project.framework.name[0]}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="badge subtle">{project.status}</div>
          </div>
        ))}
      </div>
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
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
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
        .css-key-colour {
          background-color: #264de4;
        }
        .php-key-colour {
          background-color: #777bb3;
        }
        .vue-key-colour {
          background-color: #42b883;
        }
        .webflow-key-colour {
          background-color: #4353ff;
        }

        /* Color key classes */
        .js-colour-key {
          background-color: #f7df1e;
        }
        .html5-colour-key {
          background-color: #e34f26;
        }
        .scss-colour-key {
          background-color: #c69;
        }
        .css-colour-key {
          background-color: #264de4;
        }
        .php-colour-key {
          background-color: #777bb3;
        }
        .vue-colour-key {
          background-color: #42b883;
        }
        .webflow-colour-key {
          background-color: #4353ff;
        }

        /* Project-specific classes */
        .ws {
          opacity: 0.8;
        }
        .btc {
          opacity: 0.9;
        }
        .bv {
          opacity: 0.85;
        }
        .incognet {
          opacity: 0.75;
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
          width: auto;
        }

        .framework-logo-placeholder {
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
        @media (max-width: 1200px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .work-tile {
            padding: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .work-tile {
            padding: 1.25rem;
          }

          .work-tile-image.compact {
            max-width: 70px;
          }

          .work-tile-text {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }

          .work-ile-title.compact {
            font-size: 1.1rem;
            margin-bottom: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .work-tile {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
