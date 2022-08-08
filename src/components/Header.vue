<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue'
</script>

<template>
  <header
    class="relative mb-6 flex items-center justify-center pt-6 pb-5 text-center sm:m-auto sm:w-4/5 md:w-2/3"
  >
    <ThemeSwitcher />

    <div>
      <div
        class="font-logo text-7xl dark:text-[color:var(--dark-font-color-primary)]"
      >
        <span class="text-red-600">M</span>al<span class="text-blue-500">a</span
        >rs<span class="text-yellow-400">t</span>wo
      </div>
      <div
        class="text-sm font-light uppercase text-slate-600 dark:text-[color:var(--dark-font-color-primary)]"
      >
        Jerzy Zborowski
      </div>
    </div>
  </header>
</template>
