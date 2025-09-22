# Scroll Background System - Developer Guide

## Overview
The Flat 18 website features a dynamic scroll-based background color transition system that smoothly changes the main background color as users scroll through different sections.

## How It Works
- Each section has a `data-bg-color` attribute with its designated background color
- As users scroll, the system detects which section is most visible in the viewport
- The `#main-content` element's background color smoothly transitions to match the visible section
- Section backgrounds are set to transparent so the main background shows through

## Customizing Section Colors

### Easy Color Customization
To change section background and text colors, edit the CSS variables in `/src/styles/variables.css`:

```css
:root, :root.dark {
  /* Section background variables for theming */
  --section-bg-hero: var(--bg-dark);
  --section-bg-stats: var(--bg-dark-accent);
  --section-bg-features: var(--bg-modern);
  --section-bg-featured-work: var(--bg-modern-dark);
  --section-bg-how-it-works: var(--bg-blue-0);
  --section-bg-pricing: var(--bg-blue-1);
  --section-bg-faq: var(--bg-modern-dark-2);
  --section-bg-contact: var(--bg-blue-1-5);
  --section-bg-portfolio: var(--bg-dark-accent);
  --section-bg-tools: var(--bg-dark-accent);
  --section-bg-testimonials: var(--bg-modern);
  --section-bg-footer: var(--bg-modern-dark);
  /* Section text color variables for optimal contrast */
  --section-text-hero: var(--text-primary);
  --section-text-stats: var(--text-primary);
  --section-text-features: var(--text-primary);
  --section-text-featured-work: var(--text-primary);
  --section-text-how-it-works: var(--text-primary);
  --section-text-pricing: var(--text-primary);
  --section-text-faq: var(--text-primary);
  --section-text-contact: var(--text-primary);
  --section-text-portfolio: var(--text-primary);
  --section-text-tools: var(--text-primary);
  --section-text-testimonials: var(--text-primary);
  --section-text-footer: var(--text-primary);
}

:root.light {
  /* Section background variables for light theme */
  --section-bg-hero: var(--bg-dark);
  --section-bg-stats: var(--bg-dark-accent);
  --section-bg-features: var(--bg-modern);
  --section-bg-featured-work: var(--bg-modern-dark);
  --section-bg-how-it-works: var(--bg-blue-0);
  --section-bg-pricing: var(--bg-blue-1);
  --section-bg-faq: var(--bg-modern-dark-2);
  --section-bg-contact: var(--bg-blue-1-5);
  --section-bg-portfolio: var(--bg-dark-accent);
  --section-bg-tools: var(--bg-dark-accent);
  --section-bg-testimonials: var(--bg-modern);
  --section-bg-footer: var(--bg-modern-dark);
  /* Section text color variables for optimal contrast in light theme */
  --section-text-hero: var(--text-primary);
  --section-text-stats: var(--text-primary);
  --section-text-features: var(--text-primary);
  --section-text-featured-work: var(--text-primary);
  --section-text-how-it-works: var(--text-primary);
  --section-text-pricing: var(--text-primary);
  --section-text-faq: var(--text-primary);
  --section-text-contact: var(--text-primary);
  --section-text-portfolio: var(--text-primary);
  --section-text-tools: var(--text-primary);
  --section-text-testimonials: var(--text-primary);
  --section-text-footer: var(--text-primary);
}
```

### Color Guidelines
- **Dark Theme**: Use existing dark background variables (--bg-dark, --bg-modern, etc.)
- **Light Theme**: Use existing light background variables (automatically applied in :root.light)
- **Contrast**: Ensure adjacent sections have enough visual contrast
- **Rhythm**: Consider repeating colors for visual rhythm and flow

### Adding New Sections
1. Add CSS variables for the new section in `/src/styles/variables.css`
2. Define background and text color variables for both dark and light themes
3. Add both `data-bg-color` and `data-text-color` attributes to your section element
4. Import both `getSectionBackground` and `getSectionTextColor` from `@/hooks/useScrollBackground`

### Example: Adding a New Section
```css
/* In variables.css */
:root, :root.dark {
  /* ... existing variables */
  --section-bg-new-section: var(--bg-modern-dark);
  --section-text-new-section: var(--text-primary);
}

:root.light {
  /* ... existing variables */
  --section-bg-new-section: var(--bg-modern-dark);
  --section-text-new-section: var(--text-primary);
}
```

```javascript
// In your component
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

export default function NewSection() {
  return (
    <section
      data-bg-color={getSectionBackground('newSection')}
      data-text-color={getSectionTextColor('newSection')}
    >
      {/* Your content */}
    </section>
  )
}
```

## Technical Details

### Performance
- Uses `requestAnimationFrame` throttling for smooth scrolling
- Intersection Observer logic for efficient visibility detection
- Minimum 10% visibility threshold before triggering transitions

### CSS Transitions
- 0.8s cubic-bezier transition for smooth background and text color changes on `#main-content`
- Section backgrounds are transparent with `!important` override
- Content maintains proper z-index layering
- Text color automatically inherits from main element unless overridden

### Theme Support
- CSS variables automatically handle theme switching without JavaScript
- Background and text colors update simultaneously for optimal contrast
- No need for theme detection functions - CSS handles everything automatically

## Troubleshooting

### Colors Not Changing
1. Check that sections have `data-bg-color` attributes
2. Verify `getSectionBackground()` is imported and used correctly
3. Ensure section names match the CSS variable names (camelCase converts to kebab-case)
4. Verify CSS variables are defined in both `:root` and `:root.light` selectors

### Poor Contrast
1. Test colors in both light and dark themes
2. Use online contrast checkers for accessibility
3. Consider the visual flow between adjacent sections

### Performance Issues
1. Avoid too many rapid color changes
2. Test on lower-end devices
3. Consider reducing transition duration if needed

## Best Practices
- Use semantic color names in comments
- Test accessibility with screen readers
- Maintain consistent color temperature within themes
- Document any custom color choices for future developers
