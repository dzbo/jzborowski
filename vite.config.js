import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['vue-router'],
    },
  },
  test: {
    environment: 'jsdom',
  },
})
