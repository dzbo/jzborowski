<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import useIntl from "@/composables/useIntl";

const { formatMessage } = useIntl();
</script>

<template>
  <header
    class="relative mb-6 flex items-center justify-center pt-6 pb-5 text-center sm:m-auto sm:w-4/5 md:w-2/3"
  >
    <LanguageSwitcher />
    <ThemeSwitcher />

    <div>
      <div class="font-logo text-7xl dark:text-(--dark-font-color-primary)">
        <template v-if="formatMessage('header.title') === 'Malarstwo'">
          <span class="text-red-600">M</span>al<span class="text-blue-500"
          >a</span
          >rs<span class="text-yellow-400">t</span>wo
        </template>
        <template v-else>
          <span class="text-red-600">P</span>ai<span class="text-blue-500"
          >n</span
          >ti<span class="text-yellow-400">n</span>g
        </template>
      </div>
      <div
        class="text-sm font-light uppercase text-slate-600 dark:text-(--dark-font-color-primary)"
      >
        {{ formatMessage("header.subtitle") }}
      </div>
    </div>
  </header>
</template>
