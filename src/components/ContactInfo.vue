<template>
  <div class="-z-10 relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56781.52029650334!2d31.193130178621328!3d27.192607420081647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450b920e9aa459%3A0x21407693be516882!2sParadise%20Park%20in%20Assiut!5e0!3m2!1sen!2seg!4v1712210803051!5m2!1sen!2seg"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div
    class="flex flex-wrap gap-5 text-center container justify-center -mt-[70px] relative z-10"
  >
    <div
      class="flex flex-col gap-9 items-center shadow-lg px-8 py-16 border-b-4 border-color1 w-80 bg-white grow"
    >
      <v-icon
        name="bi-map"
        scale="7"
        class="bg-color1 text-white text-bold rounded-full p-8"
      />
      <p class="text-2xl font-bold">Address</p>
      <p class="text-secondary text-[18px]">
        1800 Abbot Kinney Blvd. Unit D & E Venice
      </p>
    </div>
    <div
      class="flex flex-col gap-9 items-center shadow-lg px-8 py-16 border-b-4 border-color2 w-80 bg-white grow"
    >
      <v-icon
        name="md-phoneintalk-outlined"
        scale="7"
        class="bg-color2 text-white text-bold rounded-full p-8"
      />
      <p class="text-2xl font-bold">Contact</p>
      <p class="text-secondary text-[18px] leading-[2]">
        <span class="block"> Mobile: (+88) - 1990 - 6886 </span>
        <span class="block"> Mail: contact@academie.com </span>
      </p>
    </div>
    <div
      class="flex flex-col gap-9 items-center shadow-lg px-8 py-16 border-b-4 border-color3 w-80 bg-white grow"
    >
      <v-icon
        name="md-watchlater-outlined"
        scale="7"
        class="bg-color3 text-white text-bold rounded-full p-8"
      />
      <p class="text-2xl font-bold">Hour of operation</p>
      <p class="text-secondary text-[18px] leading-[2]">
        <span class="block">Monday - Friday: 09:00 - 20:00 </span>
        <span class="block"> Sunday & Saturday: 10:30 - 22:00 </span>
      </p>
    </div>
  </div>
</template>
<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
  name: "ContactInfo",
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>
