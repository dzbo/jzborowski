<script setup lang="ts">
import useTheme from './composables/useTheme'

const { loadTheme } = useTheme()
loadTheme()
</script>

<template>
  <NuxtLayout :name="'default'">
    <NuxtPage />
  </NuxtLayout>
</template>
