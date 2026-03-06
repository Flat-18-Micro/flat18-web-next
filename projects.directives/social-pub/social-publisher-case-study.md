# Social Publisher (by Flat 18) -- Portfolio Case Study

## Snapshot
- Product: Social Publisher (by Flat 18)
- Category: Multi-platform social publishing and scheduling
- Status: Bootstrap spec + build in progress (pre-launch)
- Target users: Small teams, solo creators, agencies, and startup marketing teams
- Core promise: A simpler, more affordable scheduling workflow without sacrificing reliability
- Stack: Vue 3 + Vite (JS), SCSS design system, Cloudflare Pages + Workers, Neon Postgres, Cloudflare R2
- Role: [Insert your role and scope]
- Timeline: [Insert timeline]

## Problem / Necessity
Social teams face three compounding issues:
1. Fragmented platform rules (text limits, media constraints, and permission differences).
2. Operational overhead from managing many accounts, variants, and approvals.
3. Reliability risks in scheduling where missed or duplicated posts have brand impact.

The market has solutions, but many are either overbuilt for smaller teams or priced for enterprise. The need is for a focused, cost-efficient publisher that still respects platform differences and delivers dependable scheduling.

## Solution (What we built)
Social Publisher centers on a clean, opinionated workflow:
- Compose once, then tailor per-platform variants.
- Validate content against platform capability rules before publish.
- Preview how posts will render (clearly labeled as estimated).
- Schedule posts on a drag-and-drop calendar.
- Track logs, retries, and outcomes in a single view.
- Bring your own AI provider keys to generate copy without bundling AI costs into pricing.

## Why this needed to be open source
Open source is not a vanity choice here; it is a strategic requirement:
- Trust and auditability: teams can inspect how credentials, validation, and scheduling behave.
- Integration velocity: contributors can add or update platform connectors as APIs evolve.
- Portability: agencies can self-host or adapt workflows to client policies.
- Risk mitigation: community visibility helps identify platform changes and edge cases faster.
- Distribution: transparent code lowers adoption friction and builds long-term credibility.

Note: If public release is intended, insert the final license and governance model here.

## Importance of creating this
Social publishing is a repeatable, revenue-critical workflow for modern teams. A tool that is affordable, reliable, and explicit about platform differences reduces operational risk and unlocks consistency across channels. This project also establishes a reusable architecture for future content tools built by Flat 18.

## Product & Architecture Highlights
- Capability matrix that drives validation, UI warnings, and connector behavior.
- Separate interactive APIs (Pages Functions) from scheduled publishing (Workers + queues).
- Idempotent, retry-aware publishing pipeline with structured logs.
- Media handling designed for scale using R2 and database-backed metadata.
- Design system and layout tuned for fast scanning and dense workflows.

## Roadmap (Execution Plan)
- Phase 0: Foundation (app scaffold, auth, design tokens, storage bindings)
- Phase 1: Core composer (variants, media, validation, previews)
- Phase 2: Scheduling + calendar (drag/drop, jobs, logs, retries)
- Phase 3: Connectors + AI (Bluesky/X first, BYO AI keys)
- Phase 4: Hardening (security, error handling, audit, tests)

## Differentiators
- Platform-aware validation instead of "one size fits all" scheduling.
- Transparent status and retry controls to reduce publishing risk.
- BYO AI model keys to keep costs predictable and data boundaries clear.
- Open architecture for platform connectors and capability updates.

## Outcomes & Metrics (Replace with real data)
| Metric | Target / Result | Notes |
|---|---|---|
| Time to schedule a multi-platform post | [Insert] | Baseline vs. current tools |
| Publishing reliability (success rate) | [Insert] | Based on logs |
| Weekly active workspaces | [Insert] | Traction indicator |
| Cost per workspace | [Insert] | Hosting + API overhead |

## Risks & Mitigations
- Platform API volatility -> Connector abstraction + capability matrix.
- Scheduling reliability -> Worker/queue pipeline with idempotency and retries.
- Security/credential risk -> Encrypted storage + strict logging hygiene.
- Adoption trust -> Open-source transparency + clear roadmap.

## Portfolio Summary (VC-style narrative)
Social Publisher is a focused, scalable publishing platform designed to remove friction for teams that need dependable scheduling without enterprise cost or complexity. The build emphasizes a clean workflow, platform-specific validation, and a robust scheduling backbone. Open-source architecture unlocks trust, extensibility, and distribution while keeping the product flexible for agencies and independent teams.

## Links
- Live demo: [Insert URL]
- Source repo: [Insert URL]
- Press/asset kit: `docs/portfolio/social-publisher-post-asset-kit.md`
