# Hero Animation Redesign Directions

## Purpose

The current hero animation shows product delivery artefacts: a brief, a gated loop and a launch chart. It supports the page, but it does not make the new Flat 18 position clear enough.

The hero animation should make one idea visible fast:

**Flat 18 uses LLMs and AI workflows under senior developer control to help clients launch better apps and MVPs faster.**

The animation should not look like generic AI magic, prompt theatre or an abstract technology demo. It should show expert handling: inputs are shaped, AI accelerates the work, senior judgement filters the output, and the client receives a robust product they own.

## What The Animation Must Communicate

- AI is the acceleration layer, not the whole service.
- Senior developers direct, review and improve the output.
- The process is faster because scoping, design, code, tests and documentation move in parallel.
- The result is stronger because quality gates, architecture decisions and release checks are still handled by experts.
- Clients get a working MVP, app, dashboard or full-stack product, not disposable generated code.

## Motion Principles

- Keep it calm, precise and premium.
- Use clear sequencing rather than busy particles.
- Show progress from rough idea to shipped product.
- Make the AI layer feel powerful but governed.
- Let quality gates visibly approve, reject or refine output.
- Avoid sci-fi clichés: glowing brains, robot hands, floating chat bubbles, neon vortexes and magic sparkle clouds.
- Avoid animations that imply the product appears instantly without human review.
- Keep loops short enough to feel fast, but not frantic.
- Respect reduced-motion settings with a static, fully legible version.

## Recommended Visual Language

Use an interface-like system rather than an illustration.

Possible elements:

- A client brief entering the system.
- Compact AI work lanes for scope, UI, code, tests and docs.
- A senior review layer that checks, edits and approves.
- A product surface assembling from approved parts.
- A release signal showing readiness, ownership and handover.

The visual should feel like an expert operating room for product delivery: clean, structured, measured and decisive.

## Creative Direction Options

### Option 1: The Expert AI Pipeline

This is the clearest direction and should be the default exploration.

The hero visual becomes a left-to-right delivery pipeline:

1. **Brief**
   A rough client idea enters as a compact document card with a few highlighted constraints.

2. **AI Acceleration**
   The brief splits into parallel lanes: scope, interface, code, tests and docs. Each lane builds quickly with short line reveals and progress pulses.

3. **Senior Control**
   A review layer sits above or across the lanes. It marks decisions as approved, revised or blocked. This is the key differentiator: AI output is handled, not blindly accepted.

4. **Launch**
   Approved parts converge into a product window with a clean dashboard/app surface, release checks and repository ownership.

Motion style:

- Brief pans up and fades in.
- Work lanes trace in sequence, then run in parallel.
- Review gates snap into place with check, revise and ship states.
- Final product surface builds from approved modules.
- The loop can replay when the hero scrolls back into view.

Why it fits:

- It directly visualises "LLMs are the acceleration layer. Senior developers are the quality control."
- It makes speed and robustness feel connected.
- It is easy to explain without extra copy.

Risks:

- Too many lanes could feel cluttered on mobile.
- Needs careful timing so it reads as product delivery, not a loading screen.

### Option 2: From Prompt To Product, With Review Gates

This direction is more narrative and more dramatic.

The visual starts with a messy input: rough notes, goals, risks and unknowns. AI transforms those notes into candidate artefacts, but the candidates must pass through senior review gates before they become part of the product.

Stages:

1. **Messy Input**
   A rough brief appears with fragments such as "MVP", "dashboard", "deadline", "payments", "auth" and "risk".

2. **AI Drafts**
   Multiple draft artefacts appear quickly: wireframe, schema, route, test, release note.

3. **Expert Review**
   Some artefacts are refined, some are rejected, some are approved. This makes the process feel robust rather than automatic.

4. **Product Assembly**
   Approved artefacts lock into an app frame.

Motion style:

- Input fragments float into a disciplined grid.
- Draft artefacts rise quickly from the AI layer.
- Review gates use restrained colour states: approved, revise, blocked.
- The product frame resolves last, with a calm launch-ready state.

Why it fits:

- It directly handles the buyer concern that AI output may be generic or weak.
- It makes senior judgement visible.
- It gives the hero a stronger story.

Risks:

- If the rejected/revised states are too prominent, the first impression may feel negative.
- Needs very tight visual hierarchy.

### Option 3: Parallel Build Room

This direction presents Flat 18 as a senior team using AI to compress product delivery time.

The hero visual becomes a compact operations board with several workstreams moving at once:

- Scope
- UX
- Frontend
- Backend
- Tests
- Docs
- Release

Each workstream advances in short bursts. AI acceleration is shown as a shared layer that speeds up drafts and checks, while senior review controls what moves forward.

Motion style:

- Workstream rows build in one by one.
- A subtle AI pulse runs across rows to show acceleration.
- Review markers approve work and move it to a launch column.
- The final state shows "Ready", "Repo", "Roadmap" and "Release".

Why it fits:

- Strongly communicates faster delivery without implying shortcuts.
- Good for a technical studio because it feels operational and credible.
- Works well with the existing proof points.

Risks:

- Could look like a project-management dashboard if it is too literal.
- Needs enough polish to feel premium rather than administrative.

### Option 4: Senior Control Layer

This direction focuses on trust.

The visual shows AI-generated options moving underneath a fixed senior control layer. The control layer inspects architecture, security, UX, tests and release readiness. Only approved signals reach the client product.

Stages:

1. AI suggestions appear as fast-moving cards below the control layer.
2. The control layer filters them through named checks.
3. Approved outputs assemble into the final product.
4. Ownership signals appear: repository, decisions, roadmap, handover.

Motion style:

- The AI layer moves quickly but softly in the background.
- The control layer is stable, sharp and slower.
- Approved outputs move forward with a clear pan-up and fade-in.
- Rejected output fades away quietly.

Why it fits:

- It makes the senior-developer USP very clear.
- It reassures clients who are wary of AI-assisted development.
- It can be visually restrained and premium.

Risks:

- It may communicate robustness more strongly than speed.
- The hero headline and proof row must carry the speed message clearly.

## Preferred Route

Start with **Option 1: The Expert AI Pipeline**.

It gives the best balance of speed, AI use, senior control and launch readiness. It also maps cleanly onto the current hero structure, so it can be implemented without rebuilding the whole section from scratch.

Recommended first implementation:

- Replace the current three artefact cards with one connected pipeline visual.
- Keep the hero text build-in already added.
- Keep replay-on-scroll behaviour.
- Build the visual from HTML/CSS/SVG so it stays sharp, responsive and lightweight.
- Use three clear stages on mobile: Brief, Review, Launch.
- Use four or five stages on desktop: Brief, AI draft, Senior review, Build, Launch.

## Suggested On-Screen Labels

Use short labels only:

- Brief
- AI draft
- Scope
- UI
- Code
- Tests
- Docs
- Review
- Revise
- Approved
- Launch
- Repo
- Roadmap
- Handover

Avoid longer labels inside the visual. Let the headline, subheading and proof row explain the offer.

## Timing Sketch

For the preferred pipeline direction:

- 0.00s: Hero headline words build in.
- 0.15s: Brief card pans up and fades in.
- 0.35s: AI lanes trace from the brief.
- 0.55s: Scope, UI, code, tests and docs cards build in with a tight cascade.
- 0.95s: Senior review gate appears.
- 1.15s: Approved checks resolve.
- 1.35s: Product window assembles.
- 1.65s: Launch, repo and roadmap signals settle.

Keep the full build under two seconds. After that, use only subtle ambient motion, such as a slow trace through the pipeline or a light progress pulse.

## Mobile Direction

Mobile should not try to preserve every desktop detail.

Use a simpler vertical flow:

1. Brief
2. AI draft
3. Senior review
4. Launch

Show two or three compact AI lanes at most. The key is readability: the user should understand the visual in one glance before scrolling.

## Accessibility And Performance Notes

- The animation must be decorative and should not carry critical copy that is unavailable elsewhere.
- Add `aria-label` text that describes the concept, for example: "AI-assisted product delivery pipeline with senior review gates".
- Honour `prefers-reduced-motion` by showing the final assembled state without timed movement.
- Avoid canvas unless there is a strong reason. SVG and CSS are enough for this direction.
- Keep animations transform- and opacity-based where practical.
- Do not add heavy libraries for this hero.

## Open Design Questions

- Should the AI layer be shown as one shared acceleration band, or as separate lanes for each task?
- Should review states include both "Revise" and "Approved", or only show approved states to keep the first impression more positive?
- Should the final product surface look like a dashboard, a web app shell, or a neutral product frame?
- Should the hero visual use project-specific hints from the current portfolio, or stay generic so it can represent all client work?
- Should the animation loop subtly after build-in, or stay still once the launch state is reached?
