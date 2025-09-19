# Flat 18 Website Revamp — Agent Implementation Directives (v2.0)

> Flat 18 is an AI-led, subscription-based development and design agency. Follow this directive exactly as implementation steps. Do not overwrite this file. Implement code and components as described. Keep copy changes limited to those marked “approved micro-edits.”

---

## 0) Guardrails

- **Copy**: Reuse current marketing copy unless “approved micro-edit.” Keep tone senior, calm, human.
- **AI positioning**: One badge in hero, one reassurance line on process page, one FAQ entry. No extra AI buzzwords or animations.
- **Look & feel**: Use Finch’s large-type hierarchy, spacing, tonal backgrounds, card framing. Keep Flat 18 palette.
- **Performance**: LCP < 2.5s (4G), CLS < 0.05, INP < 200ms. JS per route ≤ 180kB gzip.
- **Accessibility**: WCAG 2.2 AA. All controls keyboard-accessible, visible focus, reduced motion honors `prefers-reduced-motion`.
- **Tech**: Next.js 14 App Router, TypeScript, Tailwind, shadcn/ui, `next/image`, Umami, Meta Pixel.

---

## 1) Current vs Target Experience Snapshot

| Area | Current flat18.co.uk | Target (Finch-inspired) |
| --- | --- | --- |
| Hero | Dark gradient, stat cards, direct CTAs | Keep structure; introduce Finch-style vertical rhythm, foreground badge, and tighter CTA groupings.
| Scrolling | Section-to-section with moderate whitespace | Use oversized section padding (~112–128px), alternating tonal panels, and anchored section labels similar to Finch’s chapter feel.
| Work preview | Row of cards with smaller imagery | Promote large, edge-to-edge imagery with overlay labels and micro-interactions (scale/fade on hover) like Finch case cards.
| Navigation | Simple sticky header | Upgrade to Finch-like mega menu with structured columns and discrete typography.
| Typography | Sans/sans pairing, modest sizes | Increase display sizes (clamp to 4.5–6rem for hero, 2.5rem for section intros), add contrasting label styles, maintain system font fallback.

Keep this table open while building; every section below assumes this target state.

---

## 2) Experience Principles to Mirror from Finch

1. **Chaptered journey**: Each section gets a labelled, uppercase preheading with tracking and divider.
2. **Layered depth**: Alternate solid dark panels, gradient washes, glass cards (3–5% opacity).
3. **Asymmetric grids**: Use 60/40 or 70/30 splits; let imagery/callouts bleed on desktop, padded on mobile.
4. **On-scroll subtlety**: Only short fades/slides (150–200ms, easing). Disable on reduced-motion.
5. **Spotlight CTAs**: Primary CTAs in pill buttons with icon arrows; secondary as outlined pills. Consistent spacing/iconography.

---

## 3) Visual System Updates

- **Palette tokens** (`:root` in `app/(site)/layout.tsx`): Keep `--cobalt`, `--violet`, `--aqua`, `--bg`, `--fg`. Add:
  - `--surface-dim: rgba(255,255,255,0.03)`
  - `--surface-glass: rgba(12,16,24,0.68)`
  - `--border-soft: rgba(255,255,255,0.08)`
  - `--border-strong: rgba(255,255,255,0.16)`
- **Typography**:
  - Primary: Inter or Plus Jakarta Sans.
  - Headings: Playfair Display or similar high-contrast serif.
  - Scale: Display headings larger, `leading-tight` for display, `leading-relaxed` for body.
  - Tailwind config: Add font families. Use `text-balance` on headlines.
  - Scale: Hero H1 `clamp(3rem, 4.5vw, 5.5rem)`, section heading `clamp(2rem, 3vw, 3.5rem)`, body 18–20px with `leading-relaxed`.
  - use public/fonts/bwgradual_webfonts for h1-h3 and differentiate sections of headers by using different font weights instead of different colours.
- **Iconography**: Bootstrap Icons. Outline for secondary, filled for metrics.
- **Shadows**: Use one soft shadow (`shadow-[0_20px_60px_-40px_rgba(47,129,247,0.9)]`) for cards.
- **Attributes**:
  - Uppercase labels with increased letter-spacing (`tracking-[0.08em]`).
  - Subtle tonal backgrounds, glass overlays.
  - Large-type hierarchy (clamp values as above).

---

## 4) Layout, Grid, and Containers

- **Container**: Max 1280px, `px-6 sm:px-8`. On XL, allow hero/case imagery to bleed with `lg:px-0`.
- **Grid**: Tailwind grid/flex, 12-column model. Use `lg:grid-cols-[4fr_3fr]` or `lg:grid-cols-2`.
- **Spacing**: Section `py-28` (mobile `py-20`). Inner gaps: `gap-12` (2-col), `gap-16` (multi-card).
- **Surface cards**: `rounded-3xl`, `border border-border-soft`, `bg-surface-dim`, `backdrop-blur-sm`.

---

## 5) Navigation & Header

### 5.1 Header
- Sticky, transparent header. On scroll past hero (~64px), add `bg-[#0b0d12]/85` and border (via IntersectionObserver).
- Left: “Flat 18” wordmark. Right: `AI-led. Senior-built.` badge (≥1024px, until scrolled).
- Nav: `Work`, `Services`, `Process`, `Pricing`, `About`, `Blog`.
- CTA: “Book a call” pill with icon arrow.

### 5.2 Mega Menu
- `Services` opens Finch-style 4-column panel:
  1. **Product & UX** — outcome sentence.
  2. **Web Engineering** — velocity + QA.
  3. **Web3 & Emerging** — existing copy.
  4. **Retainers** — ongoing support.
- Bottom: `See all services`, CTA `Book a discovery call`.
- Accessibility: `aria-expanded`, `aria-controls`, focus trap, ESC/overlay close, restores focus on route change.

### 5.3 Mobile Drawer
- Full-height overlay, 340px wide slide-in.
- Nav items: muted uppercase labels, inline descriptions (as Finch).
- CTA group pinned bottom, include email link.

---

## 6) Footer

- 4 columns: Company, Services, Work, Contact. Uppercase column headings, small dividers.
- Bottom: © year, company number placeholder, social icons (LinkedIn, GitHub, Twitter). Only `hover:text-white` transitions.

---

## 7) Homepage Blueprint (`app/(site)/page.tsx` + components)

Use existing copy unless noted.

### 7.1 Hero
- Left: badge, H1, supporting line.
- CTA cluster: primary `Book a call`, secondary `See pricing`.
- Trust strip: single-row pill, logos 72–96px wide.
- Right/Bottom: stat cards, taller with vertical dividers (Finch style).

**Checklist**:
- [ ] Hero: `max-w-4xl` copy, `gap-8` spacing.
- [ ] Stats: glassy cards, outlined border.
- [ ] `AILedBadge` text matches “AI-led. Senior-built.”

### 7.2 Services Snapshot
- 2×2 grid. Each card: icon, service name, 2 bullet promises, `See deliverables →` micro-CTA.
- Finch card style: tinted background, border, arrow icon on hover.

### 7.3 Process Overview
- Four-step horizontal timeline with numbered badges. Use `lg:grid-cols-4`, card top border accent `--violet`.

### 7.4 Featured Work
- Show three case studies. Each: large image (3:2), overlay label on hover, stat pill at bottom.
- Below: `View all work` text link.

### 7.5 Testimonials/Logos
- If testimonials exist, use horizontal scroll cards. Otherwise, keep trust strip.

---

## 8) Services

### 8.1 `/services`
- Intro block (title, paragraph).
- Finch-style feature table:
  - Top: four cards (Design, Build, Web3, Retainer), tagline + bullet list.
  - Secondary: horizontal accordion or tabs, summarising deliverables vs outcomes.
- Bottom CTA strip: `Book a call` + `See pricing`.

### 8.2 `/services/[slug]`
- Section order (as v1.0), Finch styling:
  1. Hero band: breadcrumb, title, subheading.
  2. “What you get” list in glass card.
  3. “How it works” 3-step vertical timeline (left rule, step numbers).
  4. Timeline band, gradient background.
  5. “Recent examples” cards (case study MDX).
  6. “Tech we use” icon grid.
  7. Slim FAQ (reuse global data, filter by slug).
  8. CTA strip with dual actions.
- Add sticky TOC on ≥1280px (Finch-style right rail).
- Headings get `id` for deep linking.

---

## 9) Work / Case Studies

### 9.1 `/work`
- Intro: uppercase label, heading, supporting text (Finch style).
- Filter controls (chips, `aria-pressed` toggles).
- Cards: full-width image, overlay gradient, bottom-left project name, bottom-right stat pill. On hover, image scales 1.03, text lifts.

### 9.2 `/work/[slug]`
Section order:
1. Hero: Title, subtitle (role + stack), CTA `Launch site` if URL.
2. Overview: 2-col; left “The brief”, right key stats badges.
3. What we did: bullet list in surface card.
4. Results: highlight bar, large numbers.
5. Gallery: 3–5 images, `next/image`, `sizes="(min-width: 1024px) 960px, 100vw"`.
6. Tech & Services: icon grid.
7. CTA: `Book a call` with trust note.
- Sticky in-page nav for desktop; stacked headings on mobile.

---

## 10) Pricing

### 10.1 Pricing Section Directives
- Rebuild pricing section in Finch-style large-type, card-framed layout.  
- Two clear plan options:  
  - **Monthly**: £2,995 / month  
  - **Quarterly**: £2,495 / month (billed £7,485 every 3 months, ~15% discount).  
- Include toggle/switcher (monthly ↔ quarterly) with animated indicator.  
- Add badge: “Best value” for Quarterly.  
- “What’s included” list (retain current copy):  
  - Queued tasks in as little as 48 hrs  
  - Unlimited scopes & revisions queue  
  - Application staging  
  - AI & custom graphics  
  - Complete service management  
  - Support directly from your developer  
  - Pause/resume week-by-week; unused time banked  

**Design requirements**:  
- Layout: 2-column card with pricing toggle, plan details, and CTA cluster.  
- CTA buttons: “Let’s talk about pricing” and “Book a call.”  
- Add subtle animated background motif (rotating shapes) like Finch.  
- Responsive: stack vertically on mobile.  

**Acceptance criteria**:  
- Currency switcher retained, but limited to GBP, USD, EUR, JPY.  
- Toggle works with keyboard, with ARIA labels on plan cards.  

### 10.2 Example Project Costs
Add an “Examples” block below pricing toggle with estimated hours and costs. Show at least 4 sample projects:

- **Landing Page / Marketing Site**: ~40 hrs → ~£1,500–£2,000. Best fit: one month.  
- **Web App MVP**: ~120 hrs → ~£4,500–£5,000. Best fit: quarterly (discount).  
- **E-commerce / Dashboard Build**: ~200 hrs → ~£7,500+. Best fit: quarterly.  
- **Full-stack SaaS w/ Admin Panel**: ~300+ hrs → ~£10k+. Best fit: multiple quarters.  

**Design requirements**:  
- Grid of cards: project type, hours, cost range, and “best value” highlight (monthly vs quarterly).  
- Include micro-CTA: “Talk to us about your scope.”  

**Acceptance criteria**:  
- Cards render in 2×2 grid on desktop, stacked on mobile.  
- Automatically highlight best-value option (if est. cost > £5k, suggest quarterly).  

---

## 11) Process Page

- 4-step vertical journey, each in glass card with number chips.
- Rename delivery step: **Build, review, refine**.
- After final step: “Code and design reviewed with AI tooling for speed and quality.”

---

## 12) Axis Page

- Hero: `Axis` label, title, supporting text (lighter-lift engagements).
- Two columns: left value proposition, right sample engagements. CTAs to `/pricing` and `/contact`.
- Finch-style muted gradient background.

---

## 13) FAQ

- Centralise data: `content/faqs/common.yml`.
- Add Q/A:
  - **Q**: Do you just rely on AI?
  - **A**: No. We use AI to accelerate routine work. Senior designers and engineers make every final decision.
- Render context-specific lists on pricing, services, contact pages.

---

## 14) Content & Data Plumbing

- Keep MDX for services/work/blog. Frontmatter matches current format.
- `content/site.json`: nav, trust logos, social handles. Add `finchStyle` flags if needed.
- `getTrustLogos`: at least 4 logos, 72px height.

---

## 15) Analytics & Events

- Use `lib/analytics.ts` helper. Fire Umami events:
  - `book_call_click` (hero, header, pricing CTA)
  - `cta_hero_click`
  - `lead_form_submit`
  - `pricing_view`
  - `case_study_view`
  - `newsletter_signup`
- Events trigger on mount for pricing/case study via `useEffect` in client components.

---

## 16) Performance & Accessibility Checklist

- [ ] No layout shift on header sticky state.
- [ ] `next/font` with `display: swap`, max 2 font families.
- [ ] Hero image (if used): AVIF/WebP + LQIP.
- [ ] Focus outlines visible on dark (`outline-white/90`).
- [ ] Scroll animations in `motion.div` respect `prefers-reduced-motion`.
- [ ] AA contrast for text/buttons (check cobalt on dark).

---

## 17) SEO & Metadata

- Use Next metadata API per route, Finch-style concise copy. Titles < 60 chars, meta descriptions 150–160 chars.
- `lib/seo.ts` helper: centralise defaults (OG image, description, site name).
- JSON-LD:
  - `Organization`, `Website`, `SearchAction` on home.
  - `BreadcrumbList` on nested pages.
  - `Article` on blog posts.
- Generate `sitemap.xml` + `robots.txt` via app routes or `next-sitemap`.

---

## 18) Testing & QA

- **Unit/component**: Mega menu open/close, focus trap, lead form validation, analytics hooks.
- **E2E**: Keyboard navigation from header through hero CTAs; submit lead form; switch service detail; open case study.
- **Visual acceptance**: Compare hero, services grid, case card, pricing columns to Finch (capture screenshots).
- **Performance**: Lighthouse mobile; ensure budgets hit. Document metrics in PR.

---

## 19) Implementation Order

1. Baseline: design tokens, spacing, global layout.
2. Navigation: header, mega menu, mobile drawer, footer.
3. Home: hero, services snapshot, process timeline, featured work.
4. Services: index + detail, sticky TOC.
5. Work: filters, case study template, gallery.
6. Pricing: two-column, lead form, AI microcopy.
7. Process & Axis: copy tweaks, layout, gradients.
8. FAQ/Data: centralise FAQs, shared data on all pages.
9. Analytics/SEO: events, metadata, JSON-LD, sitemap.
10. Perf/A11y: bundle size, focus states, reduced-motion.

---

## 20) Handover Notes

- Finch feel: prioritise spacing, paddings, gutters, layered cards.
- Keep hero copy and service descriptions. Only adjust typography/surfaces.
- Only use approved AI messaging.
- Before PR close: record Lighthouse + Axe results, list Umami events triggered.

---

## 21) Themes (Light/Dark)

- Default: system `prefers-color-scheme`.
- `<ThemeProvider>` in `app/providers.tsx`:
  - Reads system preference on load.
  - Overrides with `localStorage.theme` if set.
  - Exposes `setTheme` to update and persist theme.
  - Applies `light` or `dark` class on root `<html>`.
- Theme switcher in header, mega menu, footer:
  - Bootstrap Icons: sun (light), moon (dark).
  - Toggle updates theme via `ThemeProvider`.
  - Accessible labels, keyboard navigation.
- Tailwind: `darkMode: 'class'`. Root `<html>` has `class="light"` or `class="dark"`.
- CSS tokens for both themes:
  - Light: light backgrounds, dark text, cobalt/violet/aqua accents.
  - Dark: current default tokens.
- Theme switching: `transition-colors duration-200`. Disable transitions if `prefers-reduced-motion`.
- Components/pages must respond to theme changes (backgrounds, text, borders, shadows).
 