<template>
  <div
    class="container relative after:content-center after:-bottom-2 after:bg-primary after:h-1 after:w-20 after:absolute"
    id="header-section"
  >
    <h2 class="text-[27px] md:text-[36px] font-semibold">{{ title }}</h2>
    <p class="leading-[2] text-secondary">{{ typography }}</p>
  </div>
</template>
<script>
export default {
  name: "HeaderSections",
  props: ["title", "typography"],
};
</script>
<style>
#header-section::after {
  left: calc(50% - 40px);
}
</style>
