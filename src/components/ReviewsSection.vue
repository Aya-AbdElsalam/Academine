<template>
  <div class="my-20 container ReviewSection">
    <!--  -->
    <swiper :pagination="pagination" :modules="modules" class="mySwiper">
      <swiper-slide v-for="review in Reviews" :key="review.id"
        ><p
          class="text-[18px] md:text-[27px] text-secondary leading-[1.5] italic"
        >
          "{{ review.txt }}"
        </p>
        <h3 class="text-primary text-[18px]">{{ review.name }}</h3>
      </swiper-slide>
    </swiper>
    <!--  -->
  </div>
</template>
<script>
import { ReviewsStore } from "@/store/ReviewsStore";
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
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + index + "</span>";
        },
      },
      modules: [Pagination],
    };
  },
  computed: {
    ...mapState(ReviewsStore, ["Reviews"]),
  },
  methods: {
    ...mapActions(ReviewsStore, ["GetReviews"]),
  },

  created() {
    this.GetReviews();
  },
  mounted() {
    if (this.Reviews) {
      this.pagination.renderBullet = (index, className) => {
        return (
          '<div class="' +
          className +
          '"><img width="80px" height="auto" src="' +
          this.Reviews[index].img +
          '" alt="' +
          this.Reviews[index].name +
          '">' +
          "</img></div>"
        );
      };
    }
  },
  updated() {
    if (this.Reviews) {
      this.pagination.renderBullet = (index, className) => {
        return (
          '<div class="' +
          className +
          '"><img width="80px" height="auto" src="' +
          this.Reviews[index].img +
          '" alt="' +
          this.Reviews[index].name +
          '">' +
          "</img></div>"
        );
      };
    }
  },
};
</script>
<style lang="scss">
.ReviewSection {
  .swiper {
    width: 100%;
    min-height: 90vh;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .swiper-slide {
    text-align: center;
    padding: 10px;
    /* Center slide text vertically */
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    opacity: 1;
    overflow: hidden;
  }
  .swiper-pagination {
    bottom: 0 !important;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    background-image: linear-gradient(
      to bottom,
      #f9f9f9 50%,
      white 50%,
      white 100%
    );
  }
  .swiper-pagination-bullet img {
    widows: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet-active {
    border: 15px solid white;
    box-sizing: content-box;
    position: relative;
  }
  .swiper-pagination-bullet-active::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00bf738c;
    content: ",,";
    line-height: 0.6;
    font-family: fantasy;
    font-size: 70px;
    color: white;
  }
}
</style>
