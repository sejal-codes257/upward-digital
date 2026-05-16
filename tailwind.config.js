/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#080808',
        void: '#050505',
        ink: '#0f0f0f',
        'deep-blue': '#0a1628',
        'royal-blue': '#1a3a6b',
        'electric-blue': '#2563eb',
        'ice-blue': '#93c5fd',
        'silk': '#f5f0e8',
        'cream': '#faf7f2',
        'warm-white': '#f0ebe0',
        'gold': '#c9a96e',
        'gold-light': '#e8d5a3',
        'silver': '#a8b4c4',
        'silver-light': '#d4dde8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultrawide': '0.3em',
        'megawide': '0.5em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/assets/noise.svg')",
      },
    },
  },
  plugins: [],
}
