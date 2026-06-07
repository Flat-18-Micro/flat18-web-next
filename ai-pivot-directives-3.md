Here’s a cleaner, more decisive replacement directives document. It’s tighter, more Designjoy-inspired structurally, and less likely to produce a landing page that reads like a procurement appendix wearing a hoodie.

Flat 18 Landing Page Redesign Directives

Objective

Redesign the Flat 18 landing page around the new business position:

Flat 18 is a senior development and design studio that uses LLMs and AI workflows to help founders and teams ship better digital products faster. The value is not “AI-generated code”. The value is experienced full-stack developers using LLMs expertly to accelerate product strategy, design, development, testing, documentation and delivery.

The page should feel:

* Clear
* Premium
* Fast-moving
* Technically credible
* Productised
* Easy to scan
* Conversion-focused

The redesign should take structural inspiration from Designjoy: simple sections, short copy, obvious offers, repeated CTAs and a direct commercial proposition. Do not visually clone Designjoy.

⸻

1. Core Positioning

Primary message

Ship better products faster with expert use of LLMs and AI

This should be the central idea of the page.

Flat 18 should be framed as the team clients hire when they want:

* A serious MVP
* A dashboard or internal tool
* A full-stack product
* A polished web experience
* A faster path from rough idea to working product
* Senior judgement instead of disposable AI output

Supporting position

LLMs are the acceleration layer. Senior developers are the quality control.

Use this idea throughout the page. It directly handles the biggest trust issue: that AI-assisted development might mean weak, generic, chaotic or unmaintainable code.

⸻

2. Copy Rules

Every section should be easy to understand in one glance.

General rules

* Use short, direct headings.
* Prefer headings of 3-7 words.
* Keep section intro copy to one short sentence.
* Avoid long compound headings.
* Avoid generic agency language.
* Avoid “AI agency” hype.
* Avoid vague claims like “unlock innovation”.
* Use productised language.
* Make the offer obvious.
* Repeatedly answer: what do we build, who is it for, why is it faster, why is it safe?

Tone

Use language that feels:

* Senior
* Calm
* Clear
* Commercially useful
* Technically credible
* Confident, but not inflated

Avoid language that feels:

* Like “vibe coding”
* Like cheap prompt engineering
* Like a slow traditional agency
* Like generic SaaS filler
* Like an AI wrapper pretending to be a studio

Copy compression rule

If a heading cannot be understood in one glance, rewrite it.

If subtext needs more than one sentence, cut it down.

If a card needs a paragraph to explain itself, the card is doing too much.

⸻

3. Hero Section

Goal

The hero should instantly explain the offer:

Flat 18 helps founders and teams ship better products faster by combining senior full-stack development with expert LLM use.

Hero headline

Use this headline:

Ship better products faster with expert use of LLMs and AI

Recommended visual treatment:

* Use Dela Gothic One for the main headline.
* Use a narrow italic serif accent for selected words.
* Accent only the words:
    * better
    * faster
    * AI

Suggested JSX structure:

<h1 className={styles.heroHeading}>
  Ship <span className={styles.heroSerifAccent}>better</span> products{' '}
  <span className={styles.heroSerifAccent}>faster</span> with expert use of LLMs and{' '}
  <span className={styles.heroSerifAccent}>AI</span>
</h1>

Do not overuse the serif accent elsewhere. It should feel intentional, not decorative confetti.

Hero subtext

Use short, direct copy:

Flat 18 turns rough product ideas into polished MVPs, dashboards and full-stack systems.

Alternative:

Senior developers using LLMs to scope, design, build and ship serious product work faster.

Hero CTAs

Use two clear CTAs:

Start a project
See pricing

Primary CTA should lead to the contact/start-project section.
Secondary CTA should scroll to pricing.

Hero proof row

Use three compact proof points:

Senior control
Architecture, security and release stay in expert hands.
Weeks, not months
LLMs speed up drafts, tests, docs and build decisions.
Code you own
Repository, roadmap and technical decisions included.

Keep these short. Do not expand them into mini essays. The hero should not need a reading chair.

⸻

4. Design Direction

Overall visual direction

Preserve the current dark, premium, technical visual direction.

The page should feel like:

* A senior product studio
* A technical editorial system
* A product engineering partner
* A sharper alternative to generic AI MVP agencies

It should not feel like:

* A crypto template
* A loud AI SaaS landing page
* A portfolio site with vague services
* A design agency pretending to code
* A code shop pretending to do product strategy

Designjoy-inspired layout principles

Use Designjoy as a structural reference only:

* One strong claim per section
* One short explanation per section
* Simple cards
* Clear pricing
* Repeated CTAs
* Very scannable layout
* Minimal copy burden
* Obvious next step

Do not copy its visual identity, typography, colours, animations or exact layout.

⸻

5. Typography

Font pairing

Use:

Display / hero / major section headings:
Dela Gothic One, 400
Hero serif accent:
Colitez Serif Italic, 400
Fallback: Cormorant Garamond Italic
Body / UI / buttons / cards:
Inter, 400-700

Font rules

* Use Dela Gothic One only for major brand/display headings.
* Use Inter for body copy, buttons, navigation, cards and smaller UI headings.
* Use Colitez Serif Italic sparingly for hero emphasis.
* Avoid Dela Gothic One for dense paragraph text, small labels, forms or long card headings.
* Do not shrink headings to fix awkward wrapping. Rewrite the heading first.
* Avoid aggressive negative tracking on Dela unless absolutely necessary.
* Keep the hero heading large, bold and readable.
* Smaller card titles should use Inter, not Dela.

Font stack

Recommended variables:

--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-display: 'Dela Gothic One', 'Inter', system-ui, sans-serif;
--font-heading: 'Dela Gothic One', 'Inter', system-ui, sans-serif;
--font-heading-bold: 'Dela Gothic One', 'Inter', system-ui, sans-serif;
--font-editorial: 'Colitez Serif', 'Cormorant Garamond', Georgia, 'Times New Roman', serif;

Editorial accent class

Use:

.heroSerifAccent {
  display: inline-block;
  font-family: var(--font-editorial);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.055em;
  transform: scaleX(0.92) translateY(-0.015em);
  transform-origin: center;
}

Adjust only if the accent words look too theatrical or too detached from the headline.

⸻

6. Recommended Page Structure

Use this section order:

1. Hero
2. Work proof
3. AI speed, senior control
4. Three ways to build
5. Simple gated process
6. Pricing
7. Final CTA
8. Footer

Keep the structure simple. Do not add unnecessary sections just because there is space.

⸻

7. Work Proof Section

Purpose

Show that Flat 18 can build real product work, not just nice marketing pages.

Section heading

Work that proves it

Section subtext

Real product builds, not pitch-deck theatre.

Card structure

Each work card should include:

* Project name
* Project type
* Short description
* Key product value
* CTA or “View work” link

Copy style

Keep project copy concise.

Example:

Investor dashboard MVP
A secure dashboard for tokenised asset workflows, approvals, reporting and client records.
Built to turn a complex financial product idea into something testable.

Avoid long case study copy in the card itself. Link to deeper case studies if needed.

⸻

8. AI Speed, Senior Control Section

Purpose

Explain the core trust argument.

LLMs make the process faster. Senior developers keep the work usable, secure and maintainable.

Section heading

AI speed. Senior control.

Section subtext

LLMs accelerate the work. Experienced developers make the calls.

Value cards

Use four cards:

Senior direction
Architecture, trade-offs and implementation stay developer-led.
Fast iteration
LLMs help explore UI, code, content and tests quickly.
Curated output
We refine, test and integrate. We do not ship raw AI output.
Production awareness
Data, permissions, deployment and maintainability are considered from the start.

Keep the cards short. This section should reassure quickly, not become a manifesto.

⸻

9. Three Ways to Build

Purpose

Make the engagement models instantly understandable.

Section heading

Three ways to build

Section subtext

Choose the level of product help you need.

Offer cards

Use these three cards:

MVP Sprint

For focused first versions.

Include:

* Product scoping
* UX/UI direction
* Full-stack MVP build
* LLM-assisted implementation
* Deployment support

CTA:

Start an MVP

Product Build

For serious end-to-end launches.

Include:

* Product planning
* Interface design
* Frontend and backend development
* Authentication, database and integrations
* Testing and release support

CTA:

Plan a build

Monthly Studio

For ongoing product work.

Include:

* Feature delivery
* UX improvements
* Technical support
* Refactoring
* Product experiments

CTA:

Work monthly

Naming rule

Keep offer names short. Avoid over-explaining in the title.

⸻

10. Simple Gated Process

Purpose

Show how Flat 18 works without making the process feel slow.

Section heading

A simple gated process

Section subtext

Fast work, reviewed before it ships.

Process steps

Use four steps:

Scope

We turn the idea into a buildable plan.

Draft

LLMs help produce fast UI, code and documentation options.

Build

Senior developers shape, test and connect the product.

Review

We check quality, security and release readiness.

Process principle

The process should feel fast, but controlled.

Avoid implying that the client is paying for chaotic AI generation. The message is: fast output, senior review, structured delivery.

⸻

11. Pricing Section

Purpose

Make the commercial path obvious.

Pricing should feel confident, productised and easy to compare.

Section heading

Pricing for serious product work

Section subtext

Clear routes for MVPs, builds and retained product support.

Pricing cards

Curated MVP Sprint

Short description:

For focused first versions.

Include:

* Product scoping
* UX/UI direction
* Full-stack MVP build
* Deployment support
* Handover notes

CTA:

Start an MVP

Complete Product Build

Short description:

For serious end-to-end launches.

Include:

* Product planning
* Interface design
* Frontend and backend development
* Auth, database and integrations
* Testing and deployment

CTA:

Plan a build

Monthly Product Team

Short description:

For ongoing product work.

Include:

* Monthly development capacity
* Feature iteration
* UX improvements
* Technical maintenance
* Product experiments

CTA:

Work monthly

Pricing copy rules

* Be clear about what each option is for.
* Keep bullet points short.
* Avoid vague “everything you need” language.
* CTAs should match the engagement model.
* Pricing cards should not feel like a legal schedule.

⸻

12. Final CTA Section

Purpose

End the page with a clear conversion prompt. Do not leave a long empty gap before the footer.

Heading

Ready to ship something better?

Alternative:

Have a product idea that needs momentum?

Subtext

Flat 18 can help you shape, build and ship it faster with senior developers directing the LLM-assisted process.

CTAs

Start a project
Email us

Keep this section simple and direct.

⸻

13. Navigation

Navigation should stay minimal.

Recommended nav items:

Work
Process
Pricing
Contact

Primary nav CTA:

Start a project

Avoid overloading the navigation with every possible service page. The landing page should drive decision-making, not provide a museum map.

⸻

14. Buttons and CTAs

Button style

Buttons should use Inter, not Dela Gothic One.

Recommended:

.btn {
  font-family: var(--font-sans);
  font-weight: 700;
}

CTA copy

Use direct action labels:

Start a project
See pricing
Start an MVP
Plan a build
Work monthly
Email us

Avoid:

Learn more
Explore solutions
Unlock potential
Get started today

The last one sounds like someone sold a webinar in 2016 and never recovered.

⸻

15. Metadata and SEO

Update metadata to match the new positioning.

Meta title

Flat 18 - Ship better products faster with expert use of LLMs and AI

Meta description

Flat 18 is a senior development and design studio using LLMs to deliver curated MVPs, dashboards and full-stack product builds faster.

Suggested keyword direction

Keep keywords focused on:

* MVP development
* AI-assisted development
* LLM product development
* Full-stack development studio
* Product design
* Dashboard development
* Web app development
* Startup product development
* Senior developers
* UX and engineering

Avoid stuffing the metadata with every trend under the sun. Search engines are machines, not gullible interns.

⸻

16. Existing Copy to Tighten

Hero proof points

Use:

Senior control
Architecture, security and release stay in expert hands.
Weeks, not months
LLMs speed up drafts, tests, docs and build decisions.
Code you own
Repository, roadmap and technical decisions included.

Section headings

Prefer:

Work that proves it
AI speed. Senior control.
Three ways to build
A simple gated process
Pricing for serious product work
Ready to ship something better?

Avoid longer versions unless they add real clarity.

Subtext examples

Use short lines like:

Real product builds, not pitch-deck theatre.
LLMs accelerate the work. Experienced developers make the calls.
Choose the level of product help you need.
Fast work, reviewed before it ships.
Clear routes for MVPs, builds and retained product support.

⸻

17. Layout and Spacing

Required layout improvements

* Reduce excessive vertical dead space.
* Keep section intros compact.
* Make card grids easy to scan.
* Keep pricing visible and confident.
* Ensure the final CTA appears before the footer.
* Avoid making the page feel bloated.
* Use repeated but not excessive CTAs.

Mobile requirements

* Hero must remain readable on mobile.
* Serif accent words must not create awkward wrapping.
* Card text must not become too small.
* Proof points should stack cleanly.
* CTAs should be full-width only where appropriate.
* Avoid tiny low-contrast labels.

Readability

* Important body text should be readable without zooming.
* Avoid overly low-contrast grey text.
* Keep paragraph line-height comfortable.
* Use Inter for longer text.

⸻

18. Components to Reuse

Use reusable components for:

* Section headers
* Proof cards
* Work cards
* Offer cards
* Process steps
* Pricing cards
* CTA blocks

Do not hard-code inconsistent card structures unless the existing architecture makes that unavoidable.

⸻

19. Technical Implementation Notes

Font files

Use local self-hosted fonts.

Expected fonts:

Dela Gothic One:
public/fonts/dela-gothic-one/dela-gothic-one-v19-latin-regular.woff2
Colitez Serif Italic:
public/fonts/colitez-serif/ColitezSerif-Italic.otf
Cormorant Garamond fallback:
public/fonts/cormorant-garamond/cormorant-garamond-v21-latin-regular.woff2
public/fonts/cormorant-garamond/cormorant-garamond-v21-latin-italic.woff2
public/fonts/cormorant-garamond/cormorant-garamond-v21-latin-600.woff2
public/fonts/cormorant-garamond/cormorant-garamond-v21-latin-600italic.woff2
Inter:
public/fonts/inter-v20-latin/

CSS checks

Fix this selector formatting if present:

 :root.light, body.light {

Change to:

:root.light, body.light {

Also check that --font-editorial prioritises Colitez before Cormorant:

--font-editorial: 'Colitez Serif', 'Cormorant Garamond', Georgia, 'Times New Roman', serif;

Do not put Georgia before Colitez, or the browser may use Georgia first. That would be a self-inflicted papercut.

⸻

20. Conversion Checklist

The finished page should answer these questions quickly:

1. What does Flat 18 do?
2. Who is it for?
3. What products can Flat 18 build?
4. How do LLMs make the process faster?
5. Why is the result still trustworthy?
6. What work proves the claim?
7. How does the process work?
8. What engagement model should the client choose?
9. What should the visitor do next?

If a section does not answer one of these questions, simplify it or remove it.

⸻

21. Final Standard

The final landing page should feel like:

A senior product studio that uses LLMs intelligently to move faster without surrendering judgement.

Not:

An AI agency promising magic.

Not:

A traditional agency with AI sprinkled on top.

Not:

A developer portfolio trying to sell retainers.

The page should be clear enough that a founder understands the offer in under 30 seconds and credible enough that a serious buyer does not dismiss it as AI hype.