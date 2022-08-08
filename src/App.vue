<script setup lang="ts">
import useTheme from './composables/useTheme'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PagesIndex from './pages/Index.vue'

const { loadTheme } = useTheme()
loadTheme()
</script>

<template>
  <main>
    <Header />
    <PagesIndex />
    <Footer />
  </main>
</template>
