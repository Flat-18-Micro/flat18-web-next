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
To change section background colors, edit the `SECTION_BACKGROUNDS` object in `/src/hooks/useScrollBackground.js`:

```javascript
export const SECTION_BACKGROUNDS = {
  // Dark theme colors (default)
  dark: {
    hero: '#080a10',           // Dark base - deepest dark
    stats: '#0f1118',          // Dark accent - slightly lighter
    features: '#15181e',       // Modern dark - blue-grey tint
    featuredWork: '#0e1014',   // Modern dark variant - subtle difference
    howItWorks: '#0a0c10',     // Blue dark - cooler tone
    pricing: '#0d1117',        // Blue dark variant - github-like
    faq: '#090a0d',            // Modern dark 2 - very dark
    contact: '#0b1429',        // Blue dark with hint - warmer blue
    portfolio: '#12151b',      // Slightly lighter than base
    tools: '#0f1118',          // Dark accent (repeat for rhythm)
    testimonials: '#15181e',   // Modern dark (repeat for rhythm)
    footer: '#0e1014'          // Modern dark variant (repeat for rhythm)
  },
  // Light theme colors
  light: {
    hero: '#ffffff',           // Pure white
    stats: '#f8f9fa',          // Light grey
    features: '#f1f3f4',       // Slightly darker grey
    featuredWork: '#e8eaed',   // Medium light grey
    howItWorks: '#e1e3e6',     // Darker grey
    pricing: '#f5f6f7',        // Very light grey
    faq: '#f0f2f5',            // Light blue-grey
    contact: '#e4e6ea',        // Medium grey
    portfolio: '#f8f9fa',      // Light grey (repeat for rhythm)
    tools: '#f1f3f4',          // Slightly darker grey (repeat)
    testimonials: '#e8eaed',   // Medium light grey (repeat)
    footer: '#e1e3e6'          // Darker grey (repeat)
  }
}
```

### Color Guidelines
- **Dark Theme**: Use dark blues, greys, and blacks (#080a10 to #15181e range)
- **Light Theme**: Use light greys and whites (#e1e3e6 to #ffffff range)
- **Contrast**: Ensure adjacent sections have enough visual contrast
- **Rhythm**: Consider repeating colors for visual rhythm and flow

### Adding New Sections
1. Add the section name to the `SECTION_BACKGROUNDS` object
2. Define colors for both dark and light themes
3. Add `data-bg-color={getSectionBackground('sectionName')}` to your section element
4. Import `getSectionBackground` from `@/hooks/useScrollBackground`

### Example: Adding a New Section
```javascript
// In useScrollBackground.js
export const SECTION_BACKGROUNDS = {
  dark: {
    // ... existing sections
    newSection: '#0c0f15',     // Your custom dark color
  },
  light: {
    // ... existing sections  
    newSection: '#f2f4f6',     // Your custom light color
  }
}

// In your component
import { getSectionBackground } from '@/hooks/useScrollBackground'

export default function NewSection() {
  return (
    <section data-bg-color={getSectionBackground('newSection')}>
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
- 0.8s cubic-bezier transition for smooth color changes on `#main-content`
- Section backgrounds are transparent with `!important` override
- Content maintains proper z-index layering

### Theme Support
- Automatically detects light/dark theme from document class
- Falls back to dark theme if detection fails
- Helper function `getCurrentTheme()` for theme detection

## Troubleshooting

### Colors Not Changing
1. Check that sections have `data-bg-color` attributes
2. Verify `getSectionBackground()` is imported and used correctly
3. Ensure section names match the `SECTION_BACKGROUNDS` object keys

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
