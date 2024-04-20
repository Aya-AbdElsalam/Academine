<template>
  <header class="bg-white fixed z-50 top-0 w-full h-[75px]">
    <div class="mx-auto max-w-screen-xl">
      <div
        class="flex h-16 items-center justify-between flex-wrap xl:flex-nowrap"
      >
        <router-link
          class="text-left text-[40px] font-bold inline-block flex-1 z-40 bg-white px-4 sm:px-6 xl:px-8"
          to="/"
          >Acade<span class="text-primary">mine </span></router-link
        >
        <div
          class="block md:hidden bg-white z-40 relative px-4 sm:px-6 xl:px-8"
          @click="($event) => (openMenu = !openMenu)"
        >
          <div
            class="rounded bg-gray-100 p-[2px] cursor-pointer transition hover:text-primary"
          >
            <v-icon
              :name="openMenu ? 'io-close' : 'co-hamburger-menu'"
              scale="2"
            />
          </div>
        </div>
        <nav
          aria-label="Global "
          class="w-full lg:w-auto p-0 md:p-[25px] overflow-hidden md:h-auto transition-all duration-1000 bg-white z-20 relative"
          :class="[!openMenu ? 'mt-[-500px] md:mt-0' : 'mt-[0]']"
        >
          <ul
            class="flex items-center gap-6 text-sm flex-col md:flex-row overflow-hidden border-t md:border-none p-5 md:p-0 w-full justify-evenly"
          >
            <li v-for="link in myRoutes" :key="link.name">
              <router-link
                @click="($event) => (openMenu = !openMenu)"
                class="transition hover:text-primary text-[16px]"
                :to="link.path"
                >{{ link.name.toUpperCase() }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div
          class="flex gap-4 w-full xl:w-auto border-t border-b xl:border-none bg-white z-20"
        >
          <div class="relative flex min-w-3 w-full">
            <div class="p-2 text-primary border-r-2 relative">
              <v-icon
                name="fa-regular-user-circle"
                class="cursor-pointer"
                scale="2"
                @click="signIn"
              />
              <div
                v-if="user"
                class="absolute top-[141%] left-3 min-w-[250px] bg-white shadow-xl after:absolute after:border-[25px] after:border-transparent after:border-b-white after:-top-[23%] after:left-0"
              >
                <div
                  class="flex gap-2 items-center p-3 text-secondary font-semibold"
                >
                  <v-icon name="fa-regular-user-circle" scale="2" />

                  <p>{{ email }}</p>
                </div>
                <hr />
                <RouterLink
                  to="/profile"
                  class="flex gap-2 items-center p-3 text-secondary"
                >
                  <v-icon name="fa-home" scale="1" />

                  <p>Your profile</p>
                </RouterLink>
                <hr />
                <div
                  class="flex gap-2 items-center p-3 text-secondary cursor-pointer"
                  @click="signout"
                >
                  <v-icon name="ri-logout-box-line" scale="1" />
                  <p>LOGOUT</p>
                </div>
              </div>
            </div>
            <div class="relative w-full">
              <label for="Search" class="sr-only"> Search </label>
              <input
                @input="($event) => Filter($event.target.value)"
                @focus="($event) => (search = true)"
                @blur="closeSearch"
                ref="inputSearch"
                type="text"
                id="Search"
                placeholder="Search for..."
                class="w-full h-full py-2.5 p-10 sm:text-sm focus:border-none focus:outline-none"
              />

              <span
                class="absolute inset-y-0 end-0 grid w-10 place-content-center"
              >
                <button type="button" class="text-gray-600 hover:text-gray-700">
                  <span class="sr-only">Search</span>
                  <v-icon name="oi-search" />
                </button>
              </span>
              <div
                v-if="search"
                class="absolute bg-white shadow-lg rounded-lg border top-[140%] p-3 w-full text-left max-h-[50vh] overflow-y-auto -left-4"
              >
                <div v-if="FilterCourses.length !== 0">
                  <h3 class="font-bold">Course</h3>
                  <RouterLink
                    v-for="(course, index) in FilterCourses"
                    :key="course.id"
                    :to="'/courses/' + course.id + '/' + course.title"
                    class="block my-3 px-2 py-1 hover:text-white hover:bg-primary hover:font-bold"
                    :class="
                      index % 4 === 0
                        ? 'bg-color1'
                        : index % 3 === 0
                        ? 'bg-color2'
                        : index % 2 === 0
                        ? 'bg-color3'
                        : 'bg-color4'
                    "
                    >{{ course.title }}
                  </RouterLink>
                </div>
                <div v-if="FilterBlog.length !== 0">
                  <h3 class="font-bold">Blog</h3>
                  <RouterLink
                    v-for="(blog, index) in FilterBlog"
                    :key="blog.id"
                    :to="'/blog/' + blog.id + '/' + blog.title"
                    class="block my-3 px-2 py-1 hover:text-white hover:bg-primary hover:font-bold"
                    :class="
                      index % 4 === 0
                        ? 'bg-color1'
                        : index % 3 === 0
                        ? 'bg-color2'
                        : index % 2 === 0
                        ? 'bg-color3'
                        : 'bg-color4'
                    "
                    >{{ blog.title }}
                  </RouterLink>
                </div>
                <div v-if="FilterEvent.length !== 0">
                  <h3 class="font-bold">Event</h3>
                  <RouterLink
                    v-for="(Event, index) in FilterEvent"
                    :key="Event.id"
                    :to="'/event/' + Event.id + '/' + Event.title"
                    class="block my-3 px-2 py-1 hover:text-white hover:bg-primary hover:font-bold"
                    :class="
                      index % 4 === 0
                        ? 'bg-color1'
                        : index % 3 === 0
                        ? 'bg-color2'
                        : index % 2 === 0
                        ? 'bg-color3'
                        : 'bg-color4'
                    "
                    >{{ Event.title }}
                  </RouterLink>
                </div>
                <p
                  v-if="
                    FilterCourses.length === 0 &&
                    FilterBlog.length === 0 &&
                    FilterEvent.length === 0
                  "
                  class="font-bold"
                >
                  No Result
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div v-if="stateOfSignIn" class="fixed w-full h-full z-50 top-0">
    <div class="absolute w-full h-full bg-black/60 top-0 left-0"></div>
    <SignIn />
  </div>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons";
import SignIn from "./SignIn";
// eslint-disable-next-line no-unused-vars
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { UsersStore } from "@/store/UsersStore";
import { mapActions, mapState } from "pinia";
import { FilterStore } from "@/store/FilterStore";
export default {
  name: "NavBar",
  computed: {
    ...mapState(UsersStore, ["stateOfSignIn"]),
    ...mapState(FilterStore, ["FilterCourses", "FilterBlog", "FilterEvent"]),
  },
  data() {
    return {
      myRoutes: [],
      openMenu: false,
      user: false,
      email: "",
      password: "",
      search: false,
    };
  },
  components: {
    SignIn,
    "v-icon": OhVueIcon,
  },
  mounted() {
    this.myRoutes = this.$router.options.routes.slice(0, 6);
    // eslint-disable-next-line no-undef
    onAuthStateChanged(getAuth(), (user) => {
      user && (this.email = user.email);
    });
  },

  methods: {
    ...mapActions(UsersStore, ["GetStateOfSignIn"]),
    ...mapActions(FilterStore, ["Filter"]),
    closeSearch() {
      setTimeout(() => {
        this.search = false;
      }, 1000);
    },
    signIn() {
      onAuthStateChanged(getAuth(), (user) => {
        if (!user) {
          this.GetStateOfSignIn(true);
          this.user = false;
        } else {
          this.GetStateOfSignIn(false);

          this.user = !this.user;
        }
      });
    },
    close() {
      this.GetStateOfSignIn(false);
    },
    signout() {
      signOut(getAuth()).then(() => {});
    },
  },
  provide() {
    return {
      close: this.close,
    };
  },
};
</script>
