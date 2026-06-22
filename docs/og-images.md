# OG Image Requirements

This document lists every route that emits Open Graph metadata and the text that should appear on its OG image. It is derived from the current metadata configuration in `src/lib/seo.ts` and the route layouts in `src/app`.

## Defaults
- Default OG image: `/og/home.png`
- Default OG title: `Flat 18 - Senior Design + Engineering for Founders`
- Default OG description: `Senior design and engineering to ship conversion-ready websites and MVPs in 2-12 weeks.`

## Public pages
| Route | OG image | OG title (text) | OG description (text) | Notes |
| --- | --- | --- | --- | --- |
| `/` | `/og/home.png` | `Flat 18 - Senior Design + Engineering for Founders` | `Senior design and engineering to ship conversion-ready websites and MVPs in 2-12 weeks.` | Default metadata from `siteConfig`. |
| `/about` | `/og/about.png` | `About | Flat 18` | `Learn about Flat 18, a senior-only design and engineering team building conversion-ready websites and MVPs for founders.` |  |
| `/services` | `/og/services.png` | `Services | Flat 18` | `Product and UX design, web engineering, fintech and web3 delivery, plus retainers for ongoing momentum.` |  |
| `/services/ui-ux-design` | `/og/ui-ux-design.png` | `UI/UX Design Services | Flat 18` | `Senior UI/UX design with research, prototypes, and design systems that make products clear, usable, and conversion-ready.` |  |
| `/services/web-development` | `/og/web-development.png` | `Web Development Services | Flat 18` | `Senior web engineering for conversion-ready websites and MVPs built with Next.js and React.` |  |
| `/services/app-development` | `/og/app-development.png` | `App Development Services | Flat 18` | `Custom web app development for MVPs, dashboards, and internal tools built by a senior team.` |  |
| `/services/api-integration` | `/og/api-integrations.png` | `API Integration Services | Flat 18` | `API integration services to connect products with payments, data platforms, and third-party systems.` |  |
| `/services/maintenance-support` | `/og/maintenance-support.png` | `Maintenance & Support Services | Flat 18` | `Ongoing maintenance, monitoring, and support to keep websites and apps secure and performant.` |  |
| `/services/web3-blockchain` | `/og/web3-blockchain.png` | `Web3 & Blockchain Services | Flat 18` | `Secure Web3 and blockchain delivery for wallets, smart contracts, and decentralised apps with senior engineering.` |  |
| `/services/ai-seeded-design` | `/og/ai-seeded-design.png` | `AI-Seeded Design & Graphics | Flat 18` | `AI-seeded design to accelerate concepting, visual iteration, and production-ready assets.` |  |
| `/services/ai-augmented-development` | `/og/ai-augmented-development.png` | `AI-Augmented Development | Flat 18` | `AI-augmented development workflows for faster delivery and cleaner, maintainable code.` |  |
| `/services/ai-prompt-engineering` | `/og/ai-prompt-engineering.png` | `AI Prompt Engineering | Flat 18` | `Prompt engineering for reliable LLM outputs, structured workflows, and production-ready AI systems.` |  |
| `/case-studies` | `/og/case-studies.png` | `Case Studies | Flat 18` | `Open-source products and client launches shipped with clear positioning and execution.` |  |
| `/case-studies/archimedes-finance` | `/og/case-studies.png` | `Archimedes Finance Case Study | Flat 18` | `Investor platform for tokenised assets, compliance workflows, and distribution reporting.` | Shared case study OG image. |
| `/case-studies/forgingblock-dashboard` | `/og/case-studies.png` | `ForgingBlock Dashboard Case Study | Flat 18` | `Invoice, cash-flow and payout clarity for merchant payment teams.` | Shared case study OG image. |
| `/case-studies/forgingblock-website` | `/og/case-studies.png` | `ForgingBlock Website Redesign Case Study | Flat 18` | `Benefit-first marketing site redesign with improved hierarchy, trust signals, and SEO consistency.` | Shared case study OG image. |
| `/case-studies/hashboard` | `/og/case-studies.png` | `Zettahash Hashboard Case Study | Flat 18` | `Transparency dashboard for mining performance, treasury status, and governance activity.` | Shared case study OG image. |
| `/case-studies/natal-charts` | `/og/case-studies.png` | `Natal Charts Case Study | Flat 18` | `Turning dense ephemeris data into a calm, explorable chart product experience.` | Shared case study OG image. |
| `/case-studies/pulseops` | `/og/case-studies.png` | `PulseOps Case Study | Flat 18` | `Self-hosted network operations for SOHO operators and small MSPs.` | Shared case study OG image. |
| `/case-studies/social-publisher` | `/og/case-studies.png` | `Social Publisher Case Study | Flat 18` | `Platform-aware social scheduling for small teams, agencies, and creators.` | Shared case study OG image. |
| `/pricing` | `/og/pricing.png` | `Pricing | Flat 18` | `Transparent pricing for subscription and fixed-scope engagements with a senior team.` |  |
| `/founder` | `/og/founder-version.png` | `Founder Version | Flat 18` | `A blunt, founder-first overview of how Flat 18 ships conversion-ready websites and MVPs in weeks, not months.` |  |
| `/privacy` | `/og/privacy.png` | `Privacy Policy | Flat 18` | `How Flat 18 handles data, cookies, and privacy across our services.` |  |
| `/terms` | `/og/terms.png` | `Terms of Service | Flat 18` | `The Flat 18 terms of service and how we work together.` |  |
| `/ease-of-communication-standard` | `/og/communication-standard.png` | `Ease of Communication Standard | Flat 18` | `The Flat 18 Ease of Communication Standard (F18 EoCS) for clear, plain-English communication.` |  |

## Internal / noindex pages
| Route | OG image | OG title (text) | OG description (text) | Notes |
| --- | --- | --- | --- | --- |
| `/chat` | `/og/home.png` | `Chat | Flat 18` | `Start a chat with the Flat 18 team.` | `noIndex: true` and uses default OG image. |
| `/test` | `/og/home.png` | `Test | Flat 18` | `Internal test page.` | `noIndex: true` and uses default OG image. |
| `/scroll-test` | `/og/home.png` | `Scroll Test | Flat 18` | `Internal scroll test page.` | `noIndex: true` and uses default OG image. |
