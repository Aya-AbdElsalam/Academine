<template>
  <div class="flex flex-col md:flex-row gap-5 my-[150px]">
    <div class="sticky top-[115px] bg-white">
      <h3
        class="pl-3 font-bold bg-bgSecondary py-2 md:hidden w-full border-t-2 border-b-2 border-primary"
        @click="($event) => (open = !open)"
      >
        <v-icon
          :name="open ? 'io-close' : 'hi-solid-menu-alt-1'"
          class="mr-2"
        />
        SECTIONS
      </h3>
      <div class="md:w-64 border-r-[1px] text-left h-full">
        <div
          class="h-fit flex flex-col gap-1 md:sticky md:top-32 border-b-2 border-primary md:border-none"
          :class="open ? 'flex' : 'hidden md:flex '"
          v-if="CourseDetails"
        >
          <div
            class="px-3 leading-[2]"
            v-for="(section, index) in CourseDetails?.sections"
            :key="section.id"
          >
            <h3 class="text-[18px] font-semibold pl-2">
              Section {{ index + 1 }}
            </h3>
            <div class="flex flex-col gap-1">
              <RouterLink
                @click="($event) => (open = !open)"
                v-for="(lesson, index) in section.lessons"
                class="pl-2 hover:text-primary border-b-[1px] py-1 transition-all flex text-sm box-border gap-4 items-center justify-between group"
                :key="lesson.id"
                :to="
                  '/courses/' +
                  CourseDetails?.id +
                  '/' +
                  CourseDetails?.title +
                  '/contentCourse/' +
                  section.id +
                  '/' +
                  lesson.id
                "
                ><div class="flex gap-3 items-center">
                  <v-icon
                    name="md-stickynote2-outlined"
                    class="group-hover:text-primary"
                    scale="1.3"
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
            @click="($event) => (open = !open)"
            class="pl-[14px] px-3 hover:text-primary border-b-[1px] py-1 transition-all flex text-sm box-border gap-4 items-center justify-between group"
            :to="
              '/courses/' +
              CourseDetails?.id +
              '/' +
              CourseDetails?.title +
              '/contentCourse/quiz'
            "
            ><div class="flex gap-3 items-center">
              <v-icon
                name="md-quiz-outlined"
                class="group-hover:text-primary"
                scale="1.3"
              />
              <p>QUIZ</p>
            </div>
            <div v-if="Enrolled === false">
              <v-icon name="fa-lock" scale=".8" class="text-[#ab6060]"></v-icon>
            </div>
          </RouterLink>
        </div>
        <div
          class="h-fit flex flex-col gap-1 md:sticky md:top-32 border-b-2 border-primary md:border-none p-4"
          :class="open ? 'flex' : 'hidden md:flex '"
          v-else
        >
          <div
            class="animate-pulse bg-slate-200 w-full h-5 my-3"
            v-for="(array, index) in new Array(10)"
            :key="index"
          ></div>
        </div>
      </div>
    </div>
    <div class="md:w-[350px] grow">
      <h3 class="text-[20px] font-bold bg-primary px-3 py-1 text-white mb-7">
        {{ CourseDetails?.title }} -

        {{
          $route.path.includes("quiz")
            ? "QUIZ"
            : "section" +
              $route.params?.section +
              " - " +
              "Lesson" +
              $route.params?.lesson
        }}
      </h3>
      <div v-if="CourseDetails === undefined">
        <div
          class="animate-pulse bg-slate-200 w-full h-5 my-3"
          v-for="(array, index) in new Array(10)"
          :key="index"
        ></div>
      </div>
      <div
        v-else-if="
          (+$route.params?.lesson !== 1 || $route.path.includes('quiz')) &&
          Enrolled === false
        "
        role="alert"
        class="rounded border-s-4 border-red-500 bg-red-50 p-4 text-left"
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
            This content is protected, please login and enroll course to view
            this content!
          </strong>
        </div>
        <button
          class="bg-primary mt-7 hover:bg-transparent border-2 hover:text-primary p-3 font-bold text-white border-primary"
          v-if="Enrolled === false"
          @click="enrolled"
        >
          Enrolled this course
        </button>
      </div>
      <div v-else-if="$route.path.includes('quiz') && Enrolled">
        <QuizSection :quiz="CourseDetails?.quiz" />
      </div>
      <div v-else>
        <p class="p-5 leading-loose text-left text-[20px] text-secondary">
          {{
            CourseDetails?.sections[$route.params?.section - 1].lessons[
              $route.params?.lesson - 1
            ].content
          }}
        </p>
      </div>
    </div>
  </div>
  <p hidden>{{ userDetails?.email }}</p>
</template>
<script>
import { CoursesStore } from "@/store/CoursesStore";
import { mapState, mapActions } from "pinia";
import { OhVueIcon } from "oh-vue-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UsersStore } from "@/store/UsersStore";
import QuizSection from "@/components/QuizSection.vue";
export default {
  components: {
    "v-icon": OhVueIcon,
    // eslint-disable-next-line vue/no-unused-components
    QuizSection,
  },
  data() {
    return {
      open: false,
      user: false,
      email: "",
    };
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
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      this.user = user ? true : false;
    });
  },
  updated() {
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
};
</script>
<style scoped>
.router-link-active {
  background-color: #f9f9f9;
  border-left: 4px solid #00bf73;
  color: #00bf73;
}
.router-link-active svg {
  color: #00bf73;
}
</style>
