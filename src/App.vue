<script setup lang="ts">
import useTheme from '@/composables/useTheme'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PagesIndex from '@/pages/Index.vue'

const { loadTheme } = useTheme()
loadTheme()

setTimeout(() => {
  document.body.scrollTop = document.documentElement.scrollTop = 0
}, 100)
</script>

<template>
  <main>
    <Header />
    <PagesIndex />
    <Footer />
  </main>
</template>
