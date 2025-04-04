'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <section className="footer-dark">
      <div className="content">
        <div className="footer-wrapper">
          <Link href="/" className="footer-brand">
            <div className="footer-logo">F18</div>
          </Link>
          <div className="footer-content">
            <div className="footer-block">
              <div className="title-small">Contact</div>
              <a href="#chat" className="footer-link">
                <div className="icon small x-small">&#xF24B;</div>
                <div>Live Chat</div>
              </a>
              <a href="https://t.me/flat18_bot" className="footer-link">
                <div className="icon small x-small">&#xF5B3;</div>
                <div>Telegram</div>
              </a>
              <a href="mailto:hello@flat18.co.uk" className="footer-link">
                <div className="icon small x-small">&#xF4E7;</div>
                <div>Email</div>
              </a>
            </div>
            <div className="footer-block">
              <div className="title-small">Company</div>
              <a href="/about" className="footer-link">
                <div className="icon small x-small">&#xF4DA;</div>
                <div>About</div>
              </a>
              <a href="/blog" className="footer-link">
                <div className="icon small x-small">&#xF4F0;</div>
                <div>Blog</div>
              </a>
              <a href="/careers" className="footer-link">
                <div className="icon small x-small">&#xF4C3;</div>
                <div>Careers</div>
              </a>
            </div>
            <div className="footer-block">
              <div className="title-small">Legal</div>
              <a href="/privacy" className="footer-link">
                <div className="icon small x-small">&#xF47D;</div>
                <div>Privacy Policy</div>
              </a>
              <a href="/terms" className="footer-link">
                <div className="icon small x-small">&#xF4C5;</div>
                <div>Terms of Service</div>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div>© {new Date().getFullYear()} Flat 18. All rights reserved.</div>
        </div>
      </div>
      <style jsx>{`
        .footer-dark {
          background-color: var(--bg-modern-dark);
          padding: 4rem 0 2rem;
        }
        .content {
          max-width: var(--content);
          margin: 0 auto;
          padding: 0 2rem;
        }
        .footer-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 3rem;
        }
        .footer-brand {
          margin-bottom: 2rem;
          text-decoration: none;
        }
        .footer-logo {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background-color: var(--blue-2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: bold;
          color: white;
        }
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
        }
        .footer-block {
          min-width: 160px;
        }
        .title-small {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--cw-1);
        }
        .footer-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: var(--cw-3);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: var(--white);
        }
        .icon.small.x-small {
          font-size: 1rem;
        }
        .footer-copyright {
          text-align: center;
          color: var(--cw-4);
          font-size: 0.9rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 768px) {
          .footer-wrapper {
            flex-direction: column;
          }
          .footer-content {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
