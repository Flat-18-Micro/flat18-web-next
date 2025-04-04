'use client'

import Button from './Button'

export default function HowItWorks() {
  return (
    <div className="content primere-btf-content content-build-in-target">
      <div className="text-org how-it-works">
        <h2 className="gradient-text yellow">The Flat 18 Way:</h2>
      </div>
      <div className="content sliding-work-showcase highlight-subtle-block how-it-works">
        {/* Step 1: Discover */}
        <div className="work-tile wide-work-tile transparent">
          <div className="work-tile-text">
            <div className="flex-header-tile">
              <h3 className="work-ile-title numbering-title">
                01 <span className="subtlise">Discover</span>
              </h3>
            </div>
            <div className="animation-wrapper framed">
              <div className="how-it-works-video step1-animation-container">
                {/* SVG animation content */}
                <svg width="100%" height="100%" viewBox="0 0 1121 1121" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  {/* Add the SVG content here */}
                </svg>
                <style jsx>{`
                  :root {
                    --step-1-animation-timing: 10s;
                  }
                  #initial-message-group, #response-group {
                    font-family: Arial, sans-serif;
                    font-weight: 400;
                  }
                  #initial-message-group {
                    opacity: 0;
                    transform: translate(-40px, 80px);
                    animation: initial-message-group var(--step-1-animation-timing) ease-in-out forwards infinite;
                  }
                  #user-blur {
                    transform: translate(40px, 0px);
                    animation: initial-message-group-blur var(--step-1-animation-timing) ease-in-out forwards infinite;
                  }
                  #initial-message-group > #read-status {
                    opacity: 0;
                    transform: translate(0px, 10px);
                    animation: initial-message-group-read-status var(--step-1-animation-timing) ease-in-out forwards infinite;
                  }
                  @keyframes initial-message-group {
                    0%, 5% {
                      opacity: 0;
                      transform: translate(-40px, 100px);
                    }
                    10%, 100% {
                      opacity: 1;
                      transform: translate(0px, 0px);
                    }
                  }
                  @keyframes initial-message-group-blur {
                    0%, 5% {
                      transform: translate(40px, 0px);
                    }
                    10%, 100% {
                      transform: translate(0px, 0px);
                    }
                  }
                  @keyframes initial-message-group-read-status {
                    0%, 15% {
                      opacity: 0;
                      transform: translate(0px, 10px);
                    }
                    20%, 100% {
                      opacity: 1;
                      transform: translate(0px, 0px);
                    }
                  }
                  #typing-indicator {
                    opacity: 0;
                    transform: translate(0px, 10px);
                    animation: typing-indicator var(--step-1-animation-timing) ease-in-out forwards infinite;
                  }
                  #typing-indicator circle:nth-child(1) {
                    animation: typing 1.5s infinite ease-in-out;
                    animation-delay: 0s;
                  }
                  #typing-indicator circle:nth-child(2) {
                    animation: typing 1.5s infinite ease-in-out;
                    animation-delay: 0.2s;
                  }
                  #typing-indicator circle:nth-child(3) {
                    animation: typing 1.5s infinite ease-in-out;
                    animation-delay: 0.4s;
                  }
                  @keyframes typing {
                    0% { opacity: 0.2; }
                    20% { opacity: 1; }
                    100% { opacity: 0.2; }
                  }
                `}</style>
              </div>
            </div>
            <div className="work-tile-text shrinkable">
              Chat with us about your project.<br />
              This Discovery session will help us understand exactly what you need.<br />
            </div>
            <Button href="#chat" variant="link-light">
              Start a Discovery session
            </Button>
          </div>
        </div>

        {/* Step 2: Develop */}
        <div className="work-tile wide-work-tile transparent">
          <div className="work-tile-text">
            <div className="flex-header-tile">
              <h3 className="work-ile-title numbering-title">
                02 <span className="subtlise">Develop</span>
              </h3>
            </div>
            <div className="animation-wrapper framed">
              <div className="how-it-works-video step2-animation-container">
                {/* SVG animation content */}
              </div>
            </div>
            <div className="work-tile-text shrinkable">
              We'll work closely with you to bring your vision to life, using the latest technologies and best practices.
            </div>
            <Button href="#pricing" variant="link-light">
              View our development process
            </Button>
          </div>
        </div>

        {/* Step 3: Deploy */}
        <div className="work-tile wide-work-tile transparent">
          <div className="work-tile-text">
            <div className="flex-header-tile">
              <h3 className="work-ile-title numbering-title">
                03 <span className="subtlise">Deploy</span>
              </h3>
            </div>
            <div className="animation-wrapper framed">
              <div className="how-it-works-video step3-animation-container">
                {/* SVG animation content */}
              </div>
            </div>
            <div className="work-tile-text shrinkable">
              Launch your project with confidence, knowing it's been thoroughly tested and optimized for performance.
            </div>
            <Button href="#work" variant="link-light">
              See our past deployments
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 