/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#080912',
          card: 'rgba(23, 27, 44, 0.65)',
          border: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'phone': '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(120, 119, 198, 0.2)',
        'glow-primary': '0 0 25px -5px var(--theme-glow, rgba(168, 85, 247, 0.4))',
      }
    },
  },
  plugins: [],
}
