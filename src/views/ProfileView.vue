<template>
  <div class="my-20">
    <HeaderPages title="Your Profile" />
    <div
      v-if="user === false"
      role="alert"
      class="rounded border-s-4 container border-red-500 bg-red-50 p-4 text-left mt-10"
    >
      <div class="flex items-center gap-2 text-red-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>

        <strong class="block font-medium">
          This page is protected, please login to view this page!
        </strong>
      </div>
    </div>
  </div>
  <div class="flex flex-col container gap-3 mt-7" v-if="user">
    <div v-if="userDetails === undefined">
      <div v-for="(a, index) in new Array(5)" :key="index">
        <div class="h-[20px] my-4 w-full bg-slate-200 animate-pulse"></div>
      </div>
    </div>
    <div v-else-if="userDetails.courses.length > 0">
      <article
        v-for="course in userDetails?.courses"
        :key="course.id"
        class="flex bg-white transition hover:shadow-xl text-left border-2 border-gray-900/10 my-3"
      >
        <div class="basis-24 sm:block sm:basis-56">
          <img
            :alt="course?.title"
            :src="course?.img"
            width="100%"
            height="100%"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div
            class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
          >
            <div>
              <div class="flex gap-3 justify-between">
                <h3
                  class="font-bold uppercase text-white bg-primary px-3 w-fit"
                >
                  {{ course?.category }}
                </h3>
                <v-icon
                  @click="
                    ($event) => {
                      RemoveCourse(course.id, this.email);
                      ReduceNumberOfEntrolled(course.id);
                    }
                  "
                  name="md-bookmarkremove"
                  class="text-red-700 cursor-pointer"
                  scale="1.5"
                />
              </div>
              <h3 class="font-bold uppercase text-gray-900">
                {{ course?.title }}
              </h3>
              <p class="mt-1.5 text-sm text-gray-700">
                <v-icon name="fa-regular-user" class="text-primary"></v-icon>
                {{ course?.instructor }}
              </p>
            </div>
          </div>

          <div class="sm:flex sm:items-end sm:justify-end">
            <RouterLink
              :to="'courses/' + course?.id + '/' + course?.title"
              class="block bg-primary px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-primary/80"
            >
              Start Course
            </RouterLink>
          </div>
        </div>
      </article>
    </div>
    <div v-else-if="userDetails?.courses.length === 0">
      <h3 class="text-primary font-bold text-xl">
        "You haven't enrolled in any course yet... Let's explore the courses
        available to you."
      </h3>
      <RouterLink
        to="/courses"
        class="bg-primary w-full hover:bg-transparent hover:text-primary border-4 border-primary p-3 font-bold inline-block my-5 text-white"
      >
        EXPLORE
      </RouterLink>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { OhVueIcon } from "oh-vue-icons";

import HeaderPages from "../components/HeaderPages";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UsersStore } from "@/store/UsersStore";
import { CoursesStore } from "@/store/CoursesStore";
export default {
  name: "ProfileView",
  data() {
    return { user: false, email: "" };
  },
  computed: {
    ...mapState(UsersStore, ["userDetails", "stateOfSignIn"]),
  },
  methods: {
    ...mapActions(UsersStore, [
      "GetUserDetails",
      "RemoveUserDetails",
      "GetStateOfSignIn",
      "RemoveCourse",
    ]),
    ...mapActions(CoursesStore, ["ReduceNumberOfEntrolled"]),
  },
  created() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.email = user.email;
        this.GetUserDetails(user.email);
        this.user = true;
      } else {
        this.email = undefined;
        this.RemoveUserDetails();
        this.user = false;
        this.GetStateOfEnrolled(false);
      }
    });
  },
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      this.user = user ? true : false;
    });
  },
  components: { HeaderPages, "v-icon": OhVueIcon },
};
</script>
