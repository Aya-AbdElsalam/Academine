<template>
  <div
    class="h-[70vh] w-full bg-cover relative flex justify-center items-center text-white"
    :style="{ backgroundImage: `url(${headerImg})` }"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"
    ></div>
    <h1 class="text-4xl z-10 font-bold">{{ title }}</h1>
  </div>
</template>
<script>
import headerImg from "../assets/headerPages.jpg";
export default {
  name: "HeaderPages",
  data() {
    return {
      headerImg,
    };
  },
  props: ["title"],
};
</script>
