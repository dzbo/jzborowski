<script setup lang="ts">
const numberOfImages = 37
</script>

<template>
  <div>
    <section
      class="grid grid-rows-1 lg:grid-cols-12 rounded-xl drop-shadow-lg mx-4 bg-white sm:m-auto sm:w-4/5 md:w-2/3"
    >
      <div
        class="sm:col-span-6 lg:col-span-5 bg-no-repeat bg-cover rounded-l-xl w-[100%] h-[500px] sm:h-[600px] lg:h-[100%] bg-[url('~/assets/img/avatar.jpg')] grayscale"
      >
        <div
          class="rounded-l-xl bg-gradient-to-r from-white via-transparent to-white w-[100%] h-[500px] sm:h-[600px] lg:h-[100%]"
        ></div>
      </div>
      <div
        class="sm:col-span-6 lg:col-span-7 font-light p-7 leading-7 text-slate-500"
      >
        Artysta malarz, urodzony 13.05.1957 r. zmarł w 2020 r. Należał do
        Związku Polskich Artystów Plastyków. Wystawa indywidualna rysunku i
        malarstwa w Klubie EMPiK w Częstochowie w 1987 r.
        <p class="font-bold pt-6 pb-2 text-black text-center">
          Wystawy zbiorowe:
        </p>
        <ul class="list-disc ml-8">
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
        <p class="font-bold pt-6 pb-2 text-black text-center">Nagrody:</p>
        <ul class="list-disc ml-8">
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
    <section class="m-auto mt-8 mx-4 sm:m-auto sm:w-4/5 md:w-2/3">
      <div class="text-center font-logo text-5xl mb-8 mt-[80px]">Galeria</div>
      <div
        class="gap-8 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl-columns-5"
      >
        <img
          v-for="index in numberOfImages"
          :key="index"
          class="w-full mb-6 rounded-md drop-shadow-lg"
          :src="`/assets/img/gallery/${index}.jpg`"
        />
      </div>
    </section>
  </div>
</template>
