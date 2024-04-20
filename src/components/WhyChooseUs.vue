<template>
  <div class="container">
    <div
      class="flex flex-wrap rounded-2xl -mt-14 bg-[#f5f5f5] relative z-10 p-4 text-left gap-x-9 min-h-[60vh] justify-center items-stretch md:items-center"
    >
      <div
        class="w-[300px] text-[36px] flex font-bold grow md:border-secondary items-center lg:border-r-2 p-3 gap-2"
      >
        <div>
          <v-icon
            name="bi-question-circle"
            class="text-primary"
            scale="5"
          ></v-icon>
        </div>
        <h2>Why choose us?</h2>
      </div>
      <div class="w-[250px] grow-[4]">
        <p class="leading-[2]">
          TALK Aventura is located in this “City of Excellence”, an affluent
          international city to the north of the Miami area. It is located just
          minutes from the beautiful beaches of Hallandale, Golden Beach and
          Sunny Isles.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
  name: "WhyChooseUs",

  components: {
    "v-icon": OhVueIcon,
  },
};
</script>
