<template>
  <div class="flex gap-6 flex-wrap container my-20">
    <div class="w-80 grow">
      <img class="w-full h-full" width="300" height="300" :src="contact" />
    </div>
    <form
      class="w-80 grow-[2] flex flex-col gap-6"
      @submit.prevent="submitForm"
    >
      <h2 class="text-[36px] font-bold text-left">
        Fill out this form for booking a consultant
      </h2>
      <input
        class="rounded-3xl text-secondary bg-bgSecondary p-4 h-[48px]"
        placeholder="Your Name"
        type="text"
        required
        v-model="name"
      />
      <input
        class="rounded-3xl text-secondary bg-bgSecondary p-4 h-[48px]"
        placeholder="Email"
        type="email"
        required
        v-model="email"
      />

      <textarea
        name="your-message"
        cols="40"
        rows="10"
        class="rounded-3xl text-secondary bg-bgSecondary p-4 grow"
        aria-required="true"
        aria-invalid="false"
        placeholder="Message"
        v-model="msg"
      ></textarea>
      <button
        type="submit"
        class="bg-primary rounded-[150px] hover:bg-transparent hover:text-primary border-4 border-primary p-3 font-bold w-36 text-white"
      >
        SUBMIT
      </button>
    </form>
  </div>
  <section
    v-if="open"
    class="rounded-3xl shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full sm:w-auto z-50"
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

      <h2 class="mt-6 text-2xl font-bold">
        We will contact you as soon as possible
      </h2>
    </div>
  </section>
</template>
<script>
import contact from "../assets/contact.png";
import { OhVueIcon } from "oh-vue-icons";

export default {
  name: "ContactForm",
  data() {
    return {
      contact,
      email: "",
      name: "",
      msg: "",
      open: false,
    };
  },
  methods: {
    submitForm() {
      this.name = "";
      this.email = "";
      this.msg = "";
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
