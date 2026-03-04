/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#faf8f4',
          dark: '#f3ede3',
        },
        red: {
          50: '#fee2e2',
          100: '#fecaca',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7': '1.75rem',
        '9': '2.25rem',
        '15': '3.75rem',
        '25': '6.25rem',
      },
      animation: {
        heroZoom: 'heroZoom 10s ease-in-out infinite alternate',
        floatCard: 'floatCard 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
