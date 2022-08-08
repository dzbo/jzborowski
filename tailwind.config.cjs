/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      logo: ['Square Peg', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
