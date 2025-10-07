/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#00A9E0',
        'brand-teal-dark': '#008CBA',
        'brand-blue-dark': '#002D72',
        'brand-gold': '#FDB913',
        'brand-purple': '#A45A9A',
        'brand-green': '#8CC63F',
        'brand-light-bg': '#F7FAFC',
        'brand-light-blue': '#F0F9FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 0 25px rgba(0, 169, 224, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
  // PurgeCSS - entfernt nicht genutzte CSS-Klassen (99% Größenreduktion!)
  safelist: [
    'animate-fade-in-up',
    'will-change-transform',
    'gear-bg',
  ],
};
