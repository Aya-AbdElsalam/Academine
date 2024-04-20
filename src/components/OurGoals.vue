<template>
  <div
    class="w-full bg-cover relative min-h-[90vh] p-10 flex items-center"
    :style="{ backgroundImage: `url(${Banner})` }"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"
    ></div>
    <div
      class="flex justify-center items-center text-white flex-wrap container gap-4"
    >
      <div class="grow-[3] w-96 relative z-10 md:text-left">
        <h2 class="font-bold leading-[80px] text-[40px] mb-5">Our Goals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et.dolore magna aliqua.
        </p>
        <div class="flex flex-wrap gap-3 mt-[40px]">
          <div
            class="w-[230px] grow flex flex-col gap-1 items-center min-[576px]:items-start"
          >
            <v-icon
              name="fa-book-open"
              class="text-yellow-500"
              scale="3"
            ></v-icon>
            <p class="text-[30px] font-bold">223</p>
            <p>Classess Complete</p>
          </div>
          <div
            class="w-[230px] grow flex flex-col gap-1 items-center min-[576px]:items-start"
          >
            <v-icon
              name="gi-graduate-cap"
              class="text-yellow-500"
              scale="3"
            ></v-icon>
            <p class="text-[30px] font-bold">826</p>
            <p>Student Enrolled</p>
          </div>
          <div
            class="w-[230px] grow flex flex-col gap-1 items-center min-[576px]:items-start"
          >
            <v-icon
              name="la-chalkboard-teacher-solid"
              class="text-yellow-500"
              scale="3"
            ></v-icon>
            <p class="text-[30px] font-bold">237</p>
            <p>Certified Teachers</p>
          </div>
        </div>
      </div>
      <div class="grow w-60 rounded-lg bg-white relative z-10">
        <div class="bg-primary h-[80px] rounded-t-lg">
          <h2 class="font-bold leading-[80px] text-[30px]">Register Now</h2>
        </div>
        <form @submit.prevent="submitForm" class="flex flex-col gap-3 p-5">
          <input
            class="rounded-3xl text-secondary bg-bgSecondary p-4 h-[48px] w-full"
            placeholder="Your Name"
            type="text"
            required
            v-model="name"
          />
          <input
            class="rounded-3xl text-secondary bg-bgSecondary p-4 h-[48px] w-full"
            placeholder="Email"
            type="email"
            required
            v-model="email"
          />
          <input
            class="rounded-3xl text-secondary bg-bgSecondary p-4 h-[48px] w-full"
            placeholder="phone"
            type="number"
            required
            v-model="phone"
          />
          <button
            type="submit"
            class="bg-primary rounded-[150px] hover:bg-transparent hover:text-primary border-4 border-primary p-3 font-bold w-36 text-white"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  </div>
  <section
    v-if="open"
    class="rounded-3xl shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-auto z-50 px-4 bg-white"
  >
    <div class="p-8 text-center sm:p-12">
      <v-icon
        name="hi-mail"
        animation="pulse"
        scale="6"
        class="bg-primary text-white text-bold rounded-full p-8 mb-5"
      />
      <p class="text-sm font-semibold uppercase tracking-widest text-primary">
        your data has been sent
      </p>

      <h2 class="mt-6 text-2xl font-bold text-secondary">
        We will contact you as soon as possible
      </h2>
    </div>
  </section>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons";
import Banner from "../assets/headerPages.webp";

export default {
  name: "OurGoals",
  data() {
    return {
      Banner,
      email: "",
      name: "",
      phone: "",
      open: false,
    };
  },
  methods: {
    submitForm() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.open = true;

      setTimeout(() => {
        this.open = false;
      }, 3000);
    },
  },
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>
