'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import bannerStyles from '@/styles/component-css/SaleBanner.module.css'
import { SUBSCRIPTION_PROMO, getSubscriptionPromoLabel } from '@/lib/pricing'

export default function SiteLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const promoActive = SUBSCRIPTION_PROMO.enabled
  const promoLabel = getSubscriptionPromoLabel()
  const bannerConfig = SUBSCRIPTION_PROMO.banner

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if page has scrolled more than 20px
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)

      // Apply class to body element when scrolled
      if (scrolled) {
        document.body.classList.add('is-scrolled')
      } else {
        document.body.classList.remove('is-scrolled')
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Initial check in case page is loaded already scrolled
    handleScroll()

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section'))

    if (!sections.length) {
      return
    }

    const collectTextNodes = (node, nodes = []) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === window.Node.TEXT_NODE && child.nodeValue.trim()) {
          nodes.push(child)
          return
        }

        if (child.nodeType === window.Node.ELEMENT_NODE && child.dataset?.scrollTitleWord !== 'true') {
          collectTextNodes(child, nodes)
        }
      })

      return nodes
    }

    const wrapTitleWords = (heading) => {
      if (heading.dataset.scrollTitleWords === 'true') {
        return
      }

      const textNodes = collectTextNodes(heading)

      textNodes.forEach((textNode) => {
        const fragment = document.createDocumentFragment()
        const parts = textNode.nodeValue.split(/(\s+)/)

        parts.forEach((part) => {
          if (!part) {
            return
          }

          if (/^\s+$/.test(part)) {
            fragment.appendChild(document.createTextNode(part))
            return
          }

          const word = document.createElement('span')
          word.dataset.scrollTitleWord = 'true'
          word.textContent = part
          fragment.appendChild(word)
        })

        textNode.replaceWith(fragment)
      })

      heading.dataset.scrollTitleWords = 'true'
    }

    const wrapSectionTitles = () => {
      sections.forEach((section) => {
        section.querySelectorAll('h1, h2, h3').forEach(wrapTitleWords)
      })
    }

    wrapSectionTitles()

    const setSectionState = (section, isInView) => {
      section.classList.add('scrolled')
      section.classList.toggle('scrolled-in', isInView)
      section.classList.toggle('scrolled-out', !isInView)
    }

    const isInitiallyInView = (section) => {
      const rect = section.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.85 && rect.bottom > 0
    }

    sections.forEach((section) => {
      setSectionState(section, isInitiallyInView(section))
    })

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => setSectionState(section, true))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isInView = entry.intersectionRatio >= 0.15
          setSectionState(entry.target, isInView)
        })
      },
      {
        threshold: 0.15
      }
    )

    sections.forEach((section) => observer.observe(section))

    const wrapTimeouts = [0, 120, 360].map((delay) => window.setTimeout(wrapSectionTitles, delay))
    const titleObserver = new MutationObserver(wrapSectionTitles)
    titleObserver.observe(document.querySelector('main'), {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
      titleObserver.disconnect()
      wrapTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId))
    }
  }, [pathname])

  return (
    <>
      {promoActive && bannerConfig ? (
        <div className={bannerStyles.saleBanner} role="region" aria-label="Subscription promotion">
          <div className={bannerStyles.bannerContent}>
            <span className={bannerStyles.bannerBadge}>{promoLabel}</span>
            <span className={bannerStyles.bannerMessageFull}>{bannerConfig.message}</span>
            <span className={bannerStyles.bannerMessageShort}>{bannerConfig.shortMessage || bannerConfig.message}</span>
            <Link className={bannerStyles.bannerLink} href={bannerConfig.href}>
              {bannerConfig.cta}
            </Link>
          </div>
        </div>
      ) : null}
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar isScrolled={isScrolled} />
      <main id="main-content">
        {children}
      </main>
    </>
  )
}
