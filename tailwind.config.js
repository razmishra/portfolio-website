/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-base': '#F6F6F4',
        ink: '#16213A',
        'ink-soft': '#4A5568',
        accent: '#D98E04',
        'accent-soft': '#FCEFD1',
        line: '#E2E1DC',
        success: '#2F855A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        hero: ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'hero-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        section: ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        body: ['1rem', { lineHeight: '1.65' }],
        data: ['0.95rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
    },
  },
  plugins: [],
}
