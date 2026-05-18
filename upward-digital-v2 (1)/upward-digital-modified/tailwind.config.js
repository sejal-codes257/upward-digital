/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-black': '#030303',
        'dark-blue': '#070d1a',
        'midnight': '#0a0f1e',
        'charcoal': '#111111',
        'beige': '#c8b89a',
        'beige-light': '#ddd0bc',
        'beige-dark': '#8a7a62',
        'silver': '#a0a8b0',
        'gold': '#c9a96e',
        'gold-light': '#e2c99a',
        cream: '#f5f0e8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Neue Haas Grotesk"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Cormorant"', '"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
