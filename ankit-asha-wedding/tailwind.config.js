/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-red': '#5e0b0b',
        'royal-gold': '#c5a059',
        'ivory': '#fdfbf7',
      },
      fontFamily: {
        'heading': ['"Cinzel"', 'serif'],
        'body': ['"Playfair Display"', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 2.5s infinite', // The "Shine" effect
        'float': 'float 6s ease-in-out infinite', // Gentle floating
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}