'use client'

import { useEffect } from 'react'
import Button from './Button'

export default function Hero() {
  useEffect(() => {
    // Animation script for typing effect
    const heroHeading = document.querySelector(".hero-heading.animation-target")
    if (heroHeading) {
      heroHeading.style['min-height'] = heroHeading.getBoundingClientRect().height + 'px'
      const targetText = heroHeading.textContent.trim()
      const words = targetText.split(" ")
      let wordIndex = 0
      let charIndex = 0
      
      heroHeading.innerHTML = ""
      heroHeading.setAttribute("aria-live", "polite")

      const typeWord = () => {
        if (wordIndex < words.length) {
          let wordContainer
          if (charIndex === 0) {
            wordContainer = document.createElement("span")
            wordContainer.classList.add("word")
            heroHeading.append(wordContainer)
          } else {
            wordContainer = heroHeading.querySelectorAll(".word")[wordIndex]
          }

          const currentWord = words[wordIndex]
          if (charIndex < currentWord.length) {
            let newCharacter = document.createElement("span")
            newCharacter.classList.add("character")
            newCharacter.innerHTML = currentWord.charAt(charIndex).replace(/ /g, '&nbsp;')
            wordContainer.append(newCharacter)
            charIndex++
            setTimeout(() => {
              requestAnimationFrame(typeWord)
            }, 50)
          } else {
            charIndex = 0
            wordIndex++
            requestAnimationFrame(typeWord)
          }
        }
      }

      requestAnimationFrame(typeWord)
    }
  }, [])

  return (
    <div className="content hero">
      <div className="content-video-wrapper hero">
        <div className="hero-animation-wrapper">
          <div className="hero-background-video">
            <div className="animation-segment top"></div>
            <div className="animation-segment left"></div>
            <div className="animation-segment right"></div>
            <div className="animation-segment bottom"></div>
            <style jsx>{`
              :root {
                --hero-speed1: 30s;
              }
              .hero-background-video {
                transform-style: preserve-3d;
                transform: translate(-50%,-50%) perspective(.75cm);
              }
              .hero-animation-wrapper {
                animation: rotate-bg 100s linear infinite;
              }
              .animation-segment.left, .animation-segment.right {
                animation: warps var(--hero-speed1) linear infinite;
              }
              .animation-segment.top {
                animation: warp-covers var(--hero-speed1) linear infinite;
              }
              .animation-segment.bottom {
                animation: warp-covers var(--hero-speed1) linear reverse infinite;
              }
              @keyframes warps {
                0% { background-position-x: 0px; }
                100% { background-position-x: -400px; }
              }
              @keyframes warp-covers {
                0% { background-position-y: 0; }
                100% { background-position-y: 225px; }
              }
              @keyframes rotate-bg {
                from { transform: rotate(0); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
      </div>
      <div className="hero-text-cta">
        <div className="btn-flex">
          <a href="#faq" className="limited-availability-prompt">
            <div className="badge inline-badge">
              <div className="status good"></div>
              <div className="text-block-6">Open for New Projects</div>
              <div className="icon right in-badge">&#xF431;</div>
            </div>
          </a>
        </div>
        <div className="hero-heading-wrapper">
          <h1 className="hero-heading animation-target">We Craft Websites & Apps</h1>
          <div className="hero-heading invisible">Human-made Websites & Apps</div>
        </div>
        <h2 className="hero-h2">
          Full-service Design & Development solutions for <span className="text-span-3">startups</span> Everyone!
        </h2>
        <div className="btn-flex">
          <Button variant="hero" href="#chat">Start Your Project</Button>
        </div>
      </div>
    </div>
  )
} 