<template>
  <div class="my-20 container cursor-grab">
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="brand in Brand" :key="brand.id"
        ><img :src="brand.img"
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { BrandStore } from "@/store/BrandStore";
import { mapState, mapActions } from "pinia";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
export default {
  name: "OurSkilledInstructors",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination],
    };
  },

  computed: {
    ...mapState(BrandStore, ["Brand"]),
  },
  methods: {
    ...mapActions(BrandStore, ["GetBrand"]),
  },
  mounted() {
    this.GetBrand();
  },
};
</script>
