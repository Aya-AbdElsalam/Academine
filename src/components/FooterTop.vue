<template>
  <footer class="bg-white py-16 border-t-2 text-[16px] container font-medium">
    <h2 class="text-left text-4xl">
      Acade<span class="text-primary">mie </span>
    </h2>

    <p class="my-6 leading-relaxed text-secondary text-left">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus
      antium dolorem
    </p>
    <div class="flex gap-2 items-center">
      <v-icon name="fc-phone" scale="2" />
      <p class="text-lg">+1 (800) 646-286-4018</p>
    </div>
    <div class="text-left grow-[2] w-[180px] mt-8">
      <p class="text-[24px] font-medium pb-3 border-b-2 border-t-2">Follow</p>
      <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
        <li
          class="border-2 p-2 hover:text-blue-800 text-secondary hover:border-blue-800 transition-all rounded-md"
        >
          <a href="#" rel="noreferrer" target="_blank" class="transition">
            <span class="sr-only">Facebook</span>
            <v-icon name="co-facebook-f" scale="1.3" />
          </a>
        </li>

        <li
          class="border-2 p-2 hover:text-pink-700 text-secondary hover:border-pink-700 transition-all rounded-md"
        >
          <a href="#" rel="noreferrer" target="_blank" class="transition">
            <span class="sr-only">Instagram</span>
            <v-icon name="bi-instagram" scale="1.3" />
          </a>
        </li>

        <li
          class="border-2 p-2 hover:text-blue-500 text-secondary hover:border-blue-500 transition-all rounded-md"
        >
          <a href="#" rel="noreferrer" target="_blank" class="transition">
            <span class="sr-only">Twitter</span>
            <v-icon name="bi-twitter" scale="1.3" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
  name: "FooterTop",
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>
