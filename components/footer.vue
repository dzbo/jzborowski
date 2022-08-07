<script setup lang="ts">
const date = new Date().getFullYear()
</script>

<template>
  <div class="pt-[80px] pb-6 font-light text-center text-sm text-slate-600">
    Copyright © {{ date }} Jerzy Zborowski. All rights reserved.
    <div class="text-slate-400 mt-1">
      Made by <a href="http://domi-net.pl">Domi-Net</a>
    </div>
  </div>
</template>
