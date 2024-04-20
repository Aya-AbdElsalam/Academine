<template>
  <div class="h-[100vh] bg-primary flex justify-center items-center">
    <div
      :style="{ backgroundImage: `url(${bg})` }"
      class="absolute w-full h-full z-0 opacity-35"
    ></div>
    <div class="z-1 relative">
      <p
        class="text-white font-bold text-[30px] md:text-[50px] bg-black mb-9 px-8"
      >
        BACK TO<span class="text-primary"> SCHOOL </span>
      </p>
      <RouterLink
        to="/courses"
        class="bg-white text-black rounded-[150px] hover:bg-primary hover:text-white border-4 border-white p-3 font-bold transition-all"
      >
        Get Started Today
      </RouterLink>
    </div>
  </div>
  <div class="flex flex-wrap container gap-4 -mt-16 z-10 relative">
    <div
      class="flex grow p-9 shadow-lg rounded-lg bg-white hover:border-b-4 border-color1 transition-all"
    >
      <div class="w-1/2 text-color1">
        <v-icon name="fa-medal" scale="5"></v-icon>
      </div>
      <div class="w-1/2 border-l-2 border-secondary/45">
        <p class="my-3">Best Industry Leader</p>
        <RouterLink class="text-secondary hover:underline" to="/courses"
          >View More</RouterLink
        >
      </div>
    </div>
    <div
      class="flex grow p-9 shadow-lg rounded-lg bg-white hover:border-b-4 border-color2 transition-all"
    >
      <div class="w-1/2 text-color2">
        <v-icon name="co-notes" scale="5"></v-icon>
      </div>
      <div class="w-1/2 border-l-2 border-secondary/45">
        <p class="my-3">Learn Courses Online</p>
        <RouterLink class="text-secondary hover:underline" to="/courses"
          >View More</RouterLink
        >
      </div>
    </div>
    <div
      class="flex grow p-9 shadow-lg rounded-lg bg-white hover:border-b-4 border-color3 transition-all"
    >
      <div class="w-1/2 text-color3">
        <v-icon name="gi-bookshelf" scale="5"></v-icon>
      </div>
      <div class="w-1/2 border-l-2 border-secondary/45">
        <p class="my-3">Book Library & Store</p>
        <RouterLink class="text-secondary hover:underline" to="/courses"
          >View More</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script>
import bg from "../assets/bg.webp";
import { OhVueIcon } from "oh-vue-icons";

export default {
  name: "HeroSection",
  components: {
    "v-icon": OhVueIcon,
  },
  data() {
    return {
      bg,
    };
  },
};
</script>
