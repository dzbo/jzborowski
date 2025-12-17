<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { onMounted, ref } from "vue";
import useImageLazyLoad from "@/composables/useImageLazyLoad";

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
      class="mx-4 grid grid-rows-1 rounded-xl bg-white drop-shadow-lg dark:bg-[color:var(--dark-card-background)] sm:m-auto sm:w-4/5 md:w-2/3 lg:grid-cols-12"
    >
      <div
        class="relative h-[500px] w-[100%] rounded-l-xl sm:col-span-6 sm:h-[600px] lg:col-span-5 lg:h-[100%]"
      >
        <div
          class="h-[500px] w-[100%] rounded-l-xl bg-[url('/img/avatar.jpg')] bg-cover bg-no-repeat grayscale sm:h-[600px] lg:h-[100%]"
        />
        <div
          class="absolute top-0 h-[500px] w-[100%] rounded-l-xl bg-gradient-to-r from-white via-transparent to-white dark:from-[color:var(--dark-card-background)] dark:via-transparent dark:to-[color:var(--dark-card-background)] sm:h-[600px] lg:h-[100%]"
        />
      </div>
      <div
        class="p-7 font-light leading-7 text-slate-500 dark:text-[color:var(--dark-font-color-primary)] sm:col-span-6 lg:col-span-7"
      >
        Artysta malarz, urodzony w 1957 r. zmarł w 2020 r. Należał do Związku
        Polskich Artystów Plastyków. Wystawa indywidualna rysunku i malarstwa w
        Klubie EMPiK w Częstochowie w 1987 r.
        <p
          class="pt-6 pb-2 text-center font-bold text-black dark:text-[color:var(--dark-font-color-secondary)]"
        >
          Wystawy zbiorowe:
        </p>
        <ul class="ml-8 list-disc">
          <li>
            III Wystawa Środowiska Częstochowskich Artysow Plastykow, Miejska
            Galeria Sztuki w Częstochowie, 1998 r.
          </li>
          <li>
            III Jesienny Salon Sztuki, Biuro Wystaw Artystycznych w Ostrowcu
            Świętokrzyskim, 1998 r.
          </li>
          <li>
            XXIV Ogólnopolski Plener Malarski "Jurajska Jesień", Miejska Galeria
            Sztuki w Częstochowie, 1999 r.
          </li>
          <li>
            XXV Ogólnopolski Plener Malarski "Jurajska Jesień", Miejska Galeria
            Sztuki w Częstochowie, Biuro Wystaw Artystycznych w Nowym Sączu,
            Friedrichshafen, 2000 r.
          </li>
          <li>Wystawa Artyści Częstochowy XX w., Częstochowa, 2000 r.</li>
          <li>
            Wystawa Środowiskowa Związku Polskich Artystów Plastyków,
            Częstochowa, 2004 r.
          </li>
        </ul>
        <p
          class="pt-6 pb-2 text-center font-bold text-black dark:text-[color:var(--dark-font-color-secondary)]"
        >
          Nagrody:
        </p>
        <ul class="ml-8 list-disc">
          <li>
            Ogólnopolski Konkurs im. J. Grabowskiego, Biuro Wystaw
            Artystycznych, Tarnów 1990 r.
          </li>
          <li>
            "Muzyka w malarstwie", Biuro Wystaw Artystycznych w Tychach, 1996
            r., wyróżnienie.
          </li>
          <li>Prace w zbiorach Państwa Opytow w USA.</li>
        </ul>
      </div>
    </section>
    <section class="m-auto mx-4 mt-8 sm:m-auto sm:w-4/5 md:w-2/3">
      <div
        class="mb-8 mt-[80px] text-center font-logo text-5xl dark:text-[color:var(--dark-font-color-primary)]"
      >
        <span class="text-red-600">G</span>al<span class="text-blue-500">e</span>ri<span class="text-yellow-400">a</span>
      </div>
      <div
        class="2xl-columns-5 gap-8 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4"
      >
        <img
          v-for="index in numberOfImages"
          :key="index"
          class="mb-6 w-full rounded-md opacity-0 drop-shadow-lg transition-opacity duration-500"
          :data-src="`/img/gallery/${numberOfImages + 1 - index}.jpg`"
        >
      </div>
    </section>
  </div>
</template>
