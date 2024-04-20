<template>
  <span class="flex items-center my-3">
    <h2 class="pr-6 inline-block font-bold text-xl">{{ title }}</h2>
    <span class="h-[2px] flex-1 bg-secondary"></span>
  </span>
  <p class="text-secondary text-[18px] leading-[2]">
    {{ typography }}
  </p>
  <slot></slot>
</template>
<script>
export default {
  props: ["title", "typography"],
};
</script>
