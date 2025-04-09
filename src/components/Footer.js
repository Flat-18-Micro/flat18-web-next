'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-dark" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-brand-container">
            <Link href="/" className="footer-brand" aria-label="Flat 18 Home">
              <div className="footer-logo">F18</div>
            </Link>
            <p className="footer-tagline">Modern web development for crypto & blockchain projects</p>
          </div>

          <div className="footer-content">
            <div className="footer-block">
              <h3 className="title-small">Contact</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#chat" className="footer-link">
                    <span>Live Chat</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/flat18_bot" className="footer-link" target="_blank" rel="noopener noreferrer">
                    <span>Telegram</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@flat18.co.uk" className="footer-link">
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-block">
              <h3 className="title-small">Quick Links</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/#work" className="footer-link">
                    <span>Our Work</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="footer-link">
                    <span>Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="footer-link">
                    <span>How It Works</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-block">
              <h3 className="title-small">Company</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/about" className="footer-link">
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="footer-link">
                    <span>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="footer-link">
                    <span>Careers</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-block">
              <h3 className="title-small">Legal</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/privacy" className="footer-link">
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="footer-link">
                    <span>Terms of Service</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="footer-link">
                    <span>Cookies</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">© {new Date().getFullYear()} Flat 18. All rights reserved.</div>
          <div className="footer-social">
            <a href="https://twitter.com/flat18dev" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="bi bi-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/flat18" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="bi bi-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/company/flat18" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .footer-dark {
          background-color: var(--bg-modern-dark);
          padding: 5rem 0 2rem;
          position: relative;
          overflow: hidden;
        }

        .footer-dark::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(to right,
            transparent,
            rgba(25, 253, 178, 0.3),
            transparent
          );
        }

        .footer-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 3rem;
        }

        .footer-brand-container {
          flex: 1;
          min-width: 200px;
          max-width: 300px;
        }

        .footer-brand {
          display: inline-block;
          margin-bottom: 1.5rem;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .footer-brand:hover {
          transform: translateY(-3px);
        }

        .footer-logo {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--primary), var(--blue-2));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--black);
          box-shadow: 0 4px 20px rgba(25, 253, 178, 0.2);
        }

        .footer-tagline {
          color: var(--cw-3);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .footer-content {
          display: flex;
          flex-wrap: wrap;
          gap: 4rem;
          flex: 2;
        }

        .footer-block {
          min-width: 160px;
        }

        .title-small {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--white);
          position: relative;
          display: inline-block;
        }

        .title-small::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--primary);
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          display: inline-block;
          margin-bottom: 1.25rem;
          color: var(--cw-2);
          text-decoration: none;
          transition: all 0.2s ease;
          font-size: 1rem;
          position: relative;
          padding-bottom: 2px;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: var(--white);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-link:focus {
          outline: none;
          color: var(--white);
        }

        .icon.small.x-small {
          font-size: 1.1rem;
          color: var(--primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright {
          color: var(--cw-3);
          font-size: 0.95rem;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--cw-2);
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }

        .footer-social-link:hover {
          background-color: var(--primary);
          color: var(--black);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .footer-wrapper {
            flex-direction: column;
            gap: 2rem;
          }

          .footer-brand-container {
            max-width: 100%;
          }

          .footer-content {
            gap: 3rem 2rem;
          }

          .footer-block {
            min-width: 140px;
            flex: 1 0 40%;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .footer-dark {
            padding: 4rem 0 2rem;
          }

          .footer-content {
            flex-direction: column;
            gap: 2.5rem;
          }

          .footer-block {
            width: 100%;
          }

          .footer-link {
            font-size: 0.95rem;
          }

          .title-small {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </footer>
  )
}
