'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
  return (
    <div className="navbar-no-shadow">
      <div className="navbar-no-shadow-container">
        <div className="container-regular">
          <div className="navbar-wrapper">
            <Link href="/" className="navbar-brand">
              <div className="homepage-loader">
                <div className="navbar-logo">F18</div>
              </div>
              <div className="words-laft-eitheeen">Flat 18</div>
            </Link>
            <nav className="nav-menu-wrapper">
              <div className="div-block">
                <ul className="nav-menu">
                  <li>
                    <a href="#chat" className="nav-link">Chat</a>
                  </li>
                  <li>
                    <a href="/#pricing" className="nav-link">Pricing</a>
                  </li>
                  <li>
                    <a href="https://accounts.flat18.co.uk/client/login" className="nav-link">Login</a>
                  </li>
                  <li>
                    <a href="/#wordsExperimentsSliderContainerWrapper" className="nav-link">Work</a>
                  </li>
                  <li className="mobile-margin-top-10">
                    <div className="nav-button-wrapper">
                      <Button variant="menu">Get started</Button>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}