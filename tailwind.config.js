/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tt: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          beige: 'var(--color-beige)',
          sage: 'var(--color-sage)',
          rose: 'var(--color-rose-clay)',
          sand: 'var(--color-sand)',
          olive: 'var(--color-olive)',
          burgundy: 'var(--color-burgundy)',
          text: 'var(--color-text)',
          elevated: 'var(--color-elevated)',
          border: 'var(--color-border)',
          'border-strong': 'var(--color-border-strong)',
          muted: 'var(--color-text-muted)',
          'on-dark': 'var(--color-on-dark)',
          'on-dark-muted': 'var(--color-on-dark-muted)',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Libre Caslon Text"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': [
          'clamp(2.85rem,6.2vw,4.5rem)',
          { lineHeight: '1.02', letterSpacing: '-0.025em' },
        ],
        'display-lg': [
          'clamp(2.15rem,4.2vw,3.15rem)',
          { lineHeight: '1.08', letterSpacing: '-0.02em' },
        ],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        readable: '40rem',
        measure: '28rem',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
        float: 'var(--shadow-float)',
      },
      borderRadius: {
        editorial: '1.25rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
