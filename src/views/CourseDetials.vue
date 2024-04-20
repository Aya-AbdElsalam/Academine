<template>
  <HeaderPages :title="CourseDetails.title" />
  <div
    class="flex flex-wrap my-[80px] text-left container gap-6"
    v-if="CourseDetails"
  >
    <div
      class="w-72 shadow-xl rounded-lg p-5 sticky lg:top-[64px] h-fit grow md:grow-0"
    >
      <dl class="-my-3 divide-y divide-gray-100 text-sm">
        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Price</dt>
          <dd class="text-gray-700 sm:col-span-2">
            {{ CourseDetails?.price }}
          </dd>
        </div>

        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Instructor</dt>
          <dd class="text-gray-700 sm:col-span-2">
            {{ CourseDetails?.instructor?.name }}
          </dd>
        </div>

        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Duration</dt>
          <dd class="text-gray-700 sm:col-span-2">
            {{ CourseDetails?.duration }}
          </dd>
        </div>

        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Enrolled</dt>
          <dd class="text-gray-700 sm:col-span-2">
            {{ CourseDetails?.enrolled }}
          </dd>
        </div>

        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Language</dt>
          <dd class="text-gray-700 sm:col-span-2">
            {{ CourseDetails?.language }}
          </dd>
        </div>
        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Items</dt>
          <dd class="text-gray-700 sm:col-span-2">
            {{ CourseDetails?.items }}
          </dd>
        </div>
        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Status</dt>
          <dd class="text-gray-700 sm:col-span-2">
            {{ userDetails && Enrolled ? "Enrolled" : "Not enrolled" }}
          </dd>
        </div>
      </dl>
      <button
        v-if="!Enrolled"
        class="bg-primary mt-7 rounded-[150px] hover:bg-transparent hover:text-primary p-3 font-bold w-full text-white border-[4px] border-primary"
        @click="enrolled"
      >
        Enrolled this course
      </button>
    </div>
    <div class="w-80 grow">
      <img
        :src="CourseDetails?.img"
        :alt="CourseDetails?.title"
        class="rounded-lg"
        width="100%"
        height="50vh"
      />
      <div>
        <div class="block">
          <div class="border-b border-gray-200 my-9">
            <nav class="-mb-px flex flex-wrap gap-6" aria-label="Tabs">
              <RouterLink
                :to="{ query: { tab: 'Overview' } }"
                :class="
                  $route?.query?.tab?.toLowerCase() ==
                    'Overview'.toLowerCase() || $route.query.tab == undefined
                    ? 'border-primary  text-primary shrink-0 border-b-2  px-1 pb-4'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                "
              >
                Overview
              </RouterLink>

              <RouterLink
                :to="{ query: { tab: 'Curriculum' } }"
                :class="
                  $route?.query?.tab?.toLowerCase() ==
                  'Curriculum'.toLowerCase()
                    ? 'border-primary  text-primary shrink-0 border-b-2  px-1 pb-4'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                "
              >
                Curriculum
              </RouterLink>

              <RouterLink
                :to="{ query: { tab: 'Instructor' } }"
                :class="
                  $route?.query?.tab?.toLowerCase() ==
                  'Instructor'.toLowerCase()
                    ? 'border-primary  text-primary shrink-0 border-b-2  px-1 pb-4'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                "
              >
                Instructor
              </RouterLink>
            </nav>
          </div>
        </div>
      </div>
      <div
        class="rounded-lg border-2 p-5"
        v-if="
          $route?.query?.tab?.toLowerCase() == 'overview' ||
          $route.query.tab == undefined
        "
      >
        <h3 class="text-[25px]">Course Description</h3>
        <p class="text-secondary my-6 leading-loose">
          {{ CourseDetails?.description }}
        </p>
      </div>
      <div
        class="rounded-lg border-2 p-5 leading-[2]"
        v-if="$route?.query?.tab?.toLowerCase() == 'Instructor'.toLowerCase()"
      >
        <h3 class="text-[25px]">Instructor</h3>
        <p class="text-primary font-bold mt-6">
          {{ CourseDetails?.instructor.name }}
        </p>
        <p class="text-white bg-primary font-bold w-fit px-4 py-1">
          {{ CourseDetails?.instructor.jopTitle }}
        </p>
        <p class="text-secondary">
          {{ CourseDetails?.instructor.description }}
        </p>
      </div>
      <div
        v-if="$route?.query?.tab?.toLowerCase() == 'Curriculum'.toLowerCase()"
        class="flex flex-col gap-5"
      >
        <div
          class="rounded-lg border-2 p-5 leading-[2]"
          v-for="(section, index) in CourseDetails?.sections"
          :key="section.id"
        >
          <h3 class="text-[25px]">Section {{ index + 1 }}</h3>
          <p class="text-secondary my-6 leading-loose">
            {{ section?.description }}
          </p>
          <div class="flex flex-col gap-1">
            <RouterLink
              v-for="(lesson, index) in section.lessons"
              class="hover:bg-primary hover:text-white p-3 transition-all flex gap-4 items-center justify-between group"
              :class="index % 2 === 0 ? 'bg-bgSecondary' : 'bg-white'"
              :key="lesson.id"
              :to="
                '/courses/' +
                CourseDetails?.id +
                '/' +
                CourseDetails.title +
                '/contentCourse/' +
                section.id +
                '/' +
                lesson.id
              "
              ><div class="flex gap-3 items-center">
                <v-icon
                  name="md-stickynote2-outlined"
                  class="group-hover:text-white"
                  scale="1.3"
                  :class="
                    index % 4 === 0
                      ? 'text-color1'
                      : index % 3 === 0
                      ? 'text-color2'
                      : index % 2 === 0
                      ? 'text-color3'
                      : 'text-color4'
                  "
                />
                <p>Lesson {{ index + 1 }}</p>
              </div>
              <div v-if="Enrolled === false">
                <p
                  v-if="index === 0"
                  class="bg-[#00adff] px-2 font-semibold py-[.5px] rounded-sm text-white text-[12px]"
                >
                  Preview
                </p>
                <v-icon
                  name="fa-lock"
                  v-if="index !== 0"
                  scale=".8"
                  class="text-[#ab6060]"
                ></v-icon>
              </div>
            </RouterLink>
          </div>
        </div>
        <RouterLink
          class="mx-4 hover:bg-primary hover:text-white p-3 transition-all flex gap-4 items-center justify-between group bg-bgSecondary"
          :to="
            '/courses/' +
            CourseDetails?.id +
            '/' +
            CourseDetails?.title +
            '/contentCourse/' +
            'quiz'
          "
          ><div class="flex gap-3 items-center">
            <v-icon
              name="md-quiz-outlined"
              class="group-hover:text-white"
              scale="1.3"
            />
            <p>QUIZ</p>
          </div>
          <div v-if="Enrolled === false">
            <v-icon name="fa-lock" scale=".8" class="text-[#ab6060]"></v-icon>
          </div>
        </RouterLink>
      </div>

      <div class="mt-11"></div>
      <hr />
      <br />
      <CommentSection
        :comments="CourseDetails?.comments"
        :user="user"
        :deleteComment="deleteComment"
        :sendComment="sendComment"
      />
    </div>
  </div>
  <div v-else>
    <SkeltonLoader />
  </div>
</template>
<script>
import { CoursesStore } from "@/store/CoursesStore";
import { mapState, mapActions } from "pinia";
import HeaderPages from "../components/HeaderPages";
import { OhVueIcon } from "oh-vue-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UsersStore } from "@/store/UsersStore";
import CommentSection from "@/components/CommentSection.vue";
import SkeltonLoader from "../components/skeltonLoader";

export default {
  name: "CourseDetailsView",
  data() {
    return {
      email: "",
      comment: "",
      user: false,
    };
  },
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      this.user = user ? true : false;
      this.GetUserDetails(user.email);
    });
  },
  computed: {
    ...mapState(CoursesStore, ["CourseDetails"]),
    ...mapState(UsersStore, ["userDetails", "stateOfSignIn", "Enrolled"]),
  },
  methods: {
    ...mapActions(CoursesStore, [
      "GetCourseDetails",
      "sendComment",
      "deleteComment",
      "SetEntrolled",
    ]),
    ...mapActions(UsersStore, [
      "GetUserDetails",
      "RemoveUserDetails",
      "AddCourse",
      "GetStateOfSignIn",
      "GetStateOfEnrolled",
    ]),
    enrolled() {
      if (this.user) {
        this.AddCourse(
          {
            id: this.CourseDetails.id,
            title: this.CourseDetails.title,
            img: this.CourseDetails.img,
            price: this.CourseDetails.price,
            instructor: this.CourseDetails.instructor.name,
            category: this.CourseDetails.category,
          },
          this.email
        );
        this.SetEntrolled(this.CourseDetails.id);
      } else {
        this.GetStateOfSignIn(true);
      }
    },
  },

  created() {
    this.GetCourseDetails(this.$route.params?.id);
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
  updated() {
    this.GetCourseDetails(this.$route.params?.id);
    if (this.user && this.userDetails) {
      this.userDetails.courses.find((c) => {
        return c.id == this.CourseDetails.id;
      })
        ? this.GetStateOfEnrolled(true)
        : this.GetStateOfEnrolled(false);
    } else {
      this.GetStateOfEnrolled(false);
    }
  },
  components: {
    CommentSection,
    HeaderPages,
    "v-icon": OhVueIcon,
    SkeltonLoader,
  },
};
</script>
