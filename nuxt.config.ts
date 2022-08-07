import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  vite: {
    plugins: [eslintPlugin()],
  },
  tailwindcss: {
    cssPath: '~/assets/styles/main.scss',
  },
})