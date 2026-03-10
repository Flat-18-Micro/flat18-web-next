# Zettahash Hashboard Case Study

## Executive summary

The Hashboard is the primary transparency dashboard for the Zettahash DAO. It consolidates mining performance, treasury status, market context, and governance activity into a single web experience that helps tokenholders understand project health and participate in decisions.

This case study documents the product intent, user needs, UX decisions, and implementation approach used to build the frontend.

## Background and context

Zettahash operates mining infrastructure and a DAO governance layer. Tokenholders and contributors need a fast way to verify performance, understand finances, and engage with proposals without jumping across multiple tools.

The Hashboard is the interface that connects these needs into one destination, with a focus on clarity, trust, and actionable next steps.

## Problem statement

Project information is distributed across multiple services (mining stats, wallets, markets, governance, community). Without a single dashboard, users must stitch together data from different tools, which introduces friction and erodes confidence.

## Goals

- Create a single, trustworthy source for operational and financial visibility.
- Present mining and treasury data in a readable, high-signal format.
- Surface governance proposals in context to drive participation.
- Provide clear next actions for both new and existing tokenholders.

## Audience

- Tokenholders who want quick performance visibility.
- Contributors who need governance context.
- Prospective partners who want a snapshot of project health.
- Community members who prefer a single place for updates.

## Scope

Included

- Mining performance overview and demo gauges.
- Treasury and core wallet balances.
- Market context via embedded charts.
- Snapshot proposals and governance links.
- Community entry points (Discord, Telegram, forum).

Out of scope

- Full trading terminal or exchange functionality.
- Custodial wallet features or account recovery.
- Advanced on-chain analytics beyond the project context.

## Product strategy

1. Reduce time-to-insight
   - Lead with summary cards and key metrics.
   - Prioritize trends and deltas over raw tables.

2. Reduce friction
   - Provide clear calls to action: connect wallet, view balances, vote, or purchase ZH.

3. Preserve trust
   - Keep data sources visible and consistent.
   - Avoid heavy, opaque transformations on critical metrics.

## Information architecture

- Overview
  - High-level operational summary
  - Quick access to core actions
- Mining
  - Hashrate, revenue, and site breakdowns
- Treasury
  - Wallet balances and vesting status
- Market
  - Embedded market charts and links
- Governance
  - Snapshot proposals and status
- Community
  - Forum and chat entry points

## Key user journeys

1. Tokenholder check-in
   - Open Hashboard
   - Scan overview metrics
   - Drill into mining or treasury

2. Governance participant
   - Open governance section
   - Review active proposals
   - Jump to Snapshot to vote

3. New visitor
   - Read headline metrics
   - Use market links
   - Connect wallet or purchase ZH

## Visual and interaction design

- High-contrast cards and panels improve scanability.
- Dense data is grouped into short, labeled tiles to reduce cognitive load.
- Charts are used for trends, while totals are kept large and static for quick scanning.
- The design favors readable layouts over heavy decoration to keep focus on data integrity.

## Data and integrations

- Middleware service supplies project data and aggregates sources.
- Snapshot is used for governance proposal context.
- External widgets provide market charts and exchange links.
- Wallet connectivity supports tokenholder personalization.

## Technical implementation

- Frontend built with Vue 3 and Vite.
- State managed with Vuex.
- Charts and widgets embed external market and governance data.
- Styling handled via SCSS modules and reusable UI components.

## Accessibility and performance

- Data density is balanced with whitespace and consistent sizing.
- Interactive elements remain large enough for touch use.
- Use of SVGs and lightweight charts keeps the UI responsive.

## Risks and mitigations

- Data latency or outages
  - Mitigation: clear empty states and fallback messaging.

- Overwhelming new users with dense data
  - Mitigation: progressive disclosure and summary-first layouts.

- Governance fatigue
  - Mitigation: highlight active proposals and show status clearly.

## Outcomes and next steps

- Expected impact: higher clarity and faster comprehension for tokenholders.
- Next steps:
  - Replace concept screenshots with real captures.
  - Add user testing notes and baseline metrics.
  - Expand governance interactions (in-app voting when feasible).

## Screenshots and mockups

See:

- `screenshots/README.md`
- `mockups/README.md`

