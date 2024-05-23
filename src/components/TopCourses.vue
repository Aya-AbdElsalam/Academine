<template>
  <div class="container topCourses">
    <HeaderSections title="Top Courses" />
    <swiper
      :slidesPerView="3"
      :spaceBetween="25"
      :grabCursor="ture"
      :freeMode="true"
      :pagination="pagination"
      :modules="modules"
      class="mySwiper my-[40px]"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :mousewheel="true"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      }"
    >
      <swiper-slide
        v-for="Course in Courses"
        :key="Course.id"
        class="group text-left rounded-xl shadow-lg text-white w-72"
      >
        <div v-if="Courses.length > 0">
          <img
            width="100%"
            height="13rem"
            :src="Course.img"
            :alt="Course.title"
            class="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div class="relative border border-gray-100 bg-white p-6">
            <span
              class="whitespace-nowrap bg-primary px-3 py-1.5 text-xs font-medium"
            >
              {{ Course.price }}
            </span>

            <h3 class="mt-4 text-lg font-medium text-gray-900">
              {{ Course.title }}
            </h3>

            <p class="mt-1.5 text-sm text-gray-700">
              <v-icon name="fa-regular-user" class="text-primary"></v-icon>
              {{ Course.instructor }}
            </p>

            <RouterLink
              :to="'courses/' + Course.id + '/' + Course.title"
              class="mt-4 block w-full rounded bg-primary p-4 text-sm font-medium transition hover:scale-105"
            >
              Start Course
            </RouterLink>
          </div>
        </div>
        <div v-else>
          <SkeltonLoaderCard2 />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SkeltonLoaderCard2 from "../components/skeltonLoaderCard2";

import { CoursesStore } from "@/store/CoursesStore";
import { mapState, mapActions } from "pinia";
import { OhVueIcon } from "oh-vue-icons";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import HeaderSections from "./HeaderSections.vue";
export default {
  name: "TopCourses",
  data() {
    return {};
  },
  computed: {
    ...mapState(CoursesStore, ["Courses"]),
  },
  methods: {
    ...mapActions(CoursesStore, ["GetCourses"]),
  },
  created() {
    this.GetCourses();
  },

  updated() {},
  // eslint-disable-next-line vue/no-unused-components
  components: {
    HeaderSections,
    "v-icon": OhVueIcon,
    Swiper,
    SwiperSlide,
    SkeltonLoaderCard2,
  },

  setup() {
    return {
      pagination: {
        clickable: true,
      },
      modules: [FreeMode, Pagination, Autoplay],
    };
  },
};
</script>
<style lang="scss">
.topCourses {
  .swiper-pagination {
    position: relative;
    margin-top: 60px;
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
  }
  .swiper-pagination-bullet-active {
    background-color: #00bf73;
  }
}
</style>
