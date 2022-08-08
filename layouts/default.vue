<script setup>
useHead({
  title: 'Jerzy Zborowski - Malarstwo',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      name: 'description',
      content: 'Strona domowa artysty malarza Jerzego Zborowskiego',
    },
    {
      name: 'author',
      content: 'Dominik Zborowski <dominik.zborowski@gmail.com>',
    },
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: '',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;600&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Square+Peg&display=swap',
    },
    {
      rel: 'shortcut icon',
      href: 'favicon.png',
    },
  ],
  bodyAttrs: {
    class:
      'bg-slate-50 bg-[url("img/beams-components.png")] bg-no-repeat scrollbar dark:bg-[#011e26]',
  },
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <Header />
    <slot />
    <Footer />
  </div>
</template>
