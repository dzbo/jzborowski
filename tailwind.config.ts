import { Config } from 'tailwindcss'

export default <Config>{
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      logo: ['Square Peg', 'sans-serif'],
    },
  },
  plugins: [],
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'app.{js,ts,vue}',
    'content/**/*.md',
  ],
}
