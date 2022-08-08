<template>
  <header
    class="text-center pt-6 pb-5 mb-6 flex justify-center items-center sm:m-auto sm:w-4/5 md:w-2/3 relative"
  >
    <ThemeSwitcher />

    <NuxtLink to="/">
      <div
        class="text-7xl font-logo dark:text-[color:var(--dark-font-color-primary)]"
      >
        <span class="text-red-600">M</span>al<span class="text-blue-500">a</span
        >rs<span class="text-yellow-400">t</span>wo
      </div>
      <div
        class="text-sm text-slate-600 uppercase font-light dark:text-[color:var(--dark-font-color-primary)]"
      >
        Jerzy Zborowski
      </div>
    </NuxtLink>
  </header>
</template>
