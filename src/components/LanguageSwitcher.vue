<script setup lang="ts">
import useIntl from "@/composables/useIntl";

const { locale, switchLocale } = useIntl();

const toggleLanguage = () => {
  const newLocale = locale.value === "pl_PL" ? "en_US" : "pl_PL";
  switchLocale(newLocale);
};
</script>

<template>
  <button
    type="button"
    class="absolute left-1 flex items-center gap-1 rounded bg-slate-200 px-2 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 cursor-pointer"
    @click="toggleLanguage"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4"
    >
      <circle cx="12" cy="12" r="10" />
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      />
      <path d="M2 12h20" />
    </svg>
    <span>{{ locale === "pl_PL" ? "PL" : "EN" }}</span>
  </button>
</template>
