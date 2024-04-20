<template>
  <div @click="scrollToTop" class="w-fit fixed bottom-0 right-[9px] z-40">
    <v-icon
      name="bi-arrow-up-circle-fill"
      scale="3"
      class="hover:text-primary cursor-pointer"
    />
  </div>
</template>
<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
  name: "GoToTop",

  components: {
    "v-icon": OhVueIcon,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
