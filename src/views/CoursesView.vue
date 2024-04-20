<template>
  <div class="my-20">
    <HeaderPages title="Courses" />
    <div class="flex flex-wrap container gap-3 mt-7" v-if="Courses">
      <div
        v-for="Course in Courses"
        :key="Course.id"
        class="group relative block overflow-hidden text-left rounded-xl shadow-lg text-white w-72 grow md:grow-[.5] lg:grow-0 mr-auto"
      >
        <img
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
    </div>
    <div v-else>
      <SkeltonLoaderCard2 />
      <SkeltonLoaderCard2 />
      <SkeltonLoaderCard2 />
    </div>
  </div>
</template>
<script>
import { CoursesStore } from "@/store/CoursesStore";
import { mapState, mapActions } from "pinia";
import HeaderPages from "../components/HeaderPages";
import { OhVueIcon } from "oh-vue-icons";
import SkeltonLoaderCard2 from "../components/skeltonLoaderCard2";
export default {
  name: "CoursesView",
  computed: {
    ...mapState(CoursesStore, ["Courses"]),
  },
  methods: {
    ...mapActions(CoursesStore, ["GetCourses", "add"]),
  },
  created() {
    this.GetCourses();
  },
  components: { HeaderPages, "v-icon": OhVueIcon, SkeltonLoaderCard2 },
};
</script>
