<script setup lang="ts">
const date = new Date().getFullYear()
</script>

<template>
  <div
    class="pt-[80px] pb-6 text-center text-sm font-light text-slate-600 dark:text-[color:var(--dark-font-color-secondary)]"
  >
    Copyright © {{ date }} Jerzy Zborowski. All rights reserved.
    <div
      class="mt-1 text-slate-400 dark:text-[color:var(--dark-font-color-primary)]"
    >
      Made by <a href="http://domi-net.pl">Domi-Net</a>
    </div>
  </div>
</template>
