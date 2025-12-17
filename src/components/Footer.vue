<script setup lang="ts">
import useIntl from "@/composables/useIntl";

const { formatMessage } = useIntl();
const date = new Date().getFullYear();
</script>

<template>
  <div
    class="pt-20 pb-6 text-center text-sm font-light text-slate-600 dark:text-(--dark-font-color-secondary)"
  >
    {{ formatMessage("footer.copyright", { year: date }) }}
    <div class="mt-1 text-slate-400 dark:text-(--dark-font-color-primary)">
      {{ formatMessage("footer.madeBy") }}
      <a href="http://domi-net.pl">Domi-Net</a>
    </div>
  </div>
</template>
