/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-sans)'],
        'display': ['var(--font-display)'],
        'mono': ['var(--font-mono)'],
        'playfair': ['var(--font-playfair)'],
        'bwgradual': ['var(--font-bwgradual)'],
      },
      colors: {
        // Finch-inspired Flat 18 palette
        'cobalt': 'var(--cobalt)',
        'violet': 'var(--violet)',
        'aqua': 'var(--aqua)',
        'bg': 'var(--bg)',
        'fg': 'var(--fg)',

        // Surface colors
        'surface-dim': 'var(--surface-dim)',
        'surface-glass': 'var(--surface-glass)',
        'border-soft': 'var(--border-soft)',
        'border-strong': 'var(--border-strong)',

        // Legacy colors for compatibility
        'bg-modern': 'var(--bg-modern)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'white': 'var(--color-white)',
        'black': 'var(--color-black)',

        // Text colors
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
      },
      maxWidth: {
        'content': '1280px', // Finch-style max container width
        'content-inner': '960px',
        'text-content': '720px',
      },
      fontSize: {
        'display': 'var(--text-display)',
        'section-heading': 'var(--text-section-heading)',
      },
      letterSpacing: {
        'label': '0.08em',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}