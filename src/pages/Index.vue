<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { onMounted, ref } from "vue";
import useImageLazyLoad from "@/composables/useImageLazyLoad";
import useIntl from "@/composables/useIntl";

const { formatMessage } = useIntl();
const numberOfImages = ref(52);
const { loadImages } = useImageLazyLoad();
const isMobile = useMediaQuery("(max-width: 768px)");

onMounted(() => {
  if (isMobile) {
    loadImages();
  }
});
</script>

<template>
  <div>
    <section
      class="mx-4 grid grid-rows-1 rounded-xl bg-white drop-shadow-lg dark:bg-(--dark-card-background) sm:m-auto sm:w-4/5 md:w-2/3 lg:grid-cols-12"
    >
      <div
        class="relative h-125 w-full rounded-l-xl sm:col-span-6 sm:h-150 lg:col-span-5 lg:h-full"
      >
        <div
          class="h-125 w-full rounded-l-xl bg-[url('/img/avatar.jpg')] bg-cover bg-no-repeat grayscale sm:h-150 lg:h-full"
        />
        <div
          class="absolute top-0 h-125 w-full rounded-l-xl bg-linear-to-r from-white via-transparent to-white dark:from-(--dark-card-background) dark:via-transparent dark:to-(--dark-card-background) sm:h-150 lg:h-full"
        />
      </div>
      <div
        class="p-7 font-light leading-7 text-slate-500 dark:text-(--dark-font-color-primary) sm:col-span-6 lg:col-span-7"
      >
        {{ formatMessage("bio.intro") }}
        <p
          class="pt-6 pb-2 text-center font-bold text-black dark:text-(--dark-font-color-secondary)"
        >
          {{ formatMessage("bio.groupExhibitions") }}
        </p>
        <ul class="ml-8 list-disc">
          <li>{{ formatMessage("bio.exhibitions.1") }}</li>
          <li>{{ formatMessage("bio.exhibitions.2") }}</li>
          <li>{{ formatMessage("bio.exhibitions.3") }}</li>
          <li>{{ formatMessage("bio.exhibitions.4") }}</li>
          <li>{{ formatMessage("bio.exhibitions.5") }}</li>
          <li>{{ formatMessage("bio.exhibitions.6") }}</li>
        </ul>
        <p
          class="pt-6 pb-2 text-center font-bold text-black dark:text-(--dark-font-color-secondary)"
        >
          {{ formatMessage("bio.awards") }}
        </p>
        <ul class="ml-8 list-disc">
          <li>{{ formatMessage("bio.awards.1") }}</li>
          <li>{{ formatMessage("bio.awards.2") }}</li>
          <li>{{ formatMessage("bio.awards.3") }}</li>
        </ul>
      </div>
    </section>
    <section class="m-auto mx-4 mt-8 sm:m-auto sm:w-4/5 md:w-2/3">
      <div
        class="mb-8 mt-20 text-center font-logo text-5xl dark:text-(--dark-font-color-primary)"
      >
        <template v-if="formatMessage('gallery.title') === 'Galeria'">
          <span class="text-red-600">G</span>al<span class="text-blue-500"
          >e</span
          >ri<span class="text-yellow-400">a</span>
        </template>
        <template v-else>
          <span class="text-red-600">G</span>al<span class="text-blue-500"
          >l</span
          >er<span class="text-yellow-400">y</span>
        </template>
      </div>
      <div
        class="2xl-columns-5 gap-8 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4"
      >
        <img
          v-for="index in numberOfImages"
          :key="index"
          class="mb-6 w-full rounded-md opacity-0 drop-shadow-lg transition-opacity duration-500"
          :data-src="`/img/gallery/${numberOfImages + 1 - index}.jpg`"
        />
      </div>
    </section>
  </div>
</template>
