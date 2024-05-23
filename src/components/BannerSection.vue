<template>
  <div
    class="flex flex-wrap container my-[80px] text-left gap-8 items-center"
    :style="{ flexDirection: direction ? 'row-reverse' : 'row' }"
  >
    <div class="w-60 lg:w-[450px] grow-[1] self-stretch">
      <img
        :src="img"
        class="w-full h-full"
        :alt="title"
        width="100%"
        height="100%"
      />
    </div>
    <div class="w-96 grow-[2]">
      <p class="bg-secondary px-5 w-fit text-white py-3">
        {{ typography }}
      </p>
      <h2 class="font-bold text-[30px] md:text-[36px] leading-[1.1]">
        {{ title }}
      </h2>
      <p class="text-secondary my-5">
        {{ typographySecond }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerSection",
  props: ["typography", "title", "typographySecond", "btn", "img", "direction"],
};
</script>
