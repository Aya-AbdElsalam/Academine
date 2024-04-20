<template>
  <section
    class="rounded-3xl shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full sm:w-auto z-50"
  >
    <button
      class="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1"
      @click="close"
    >
      <span class="sr-only">Close</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div>
      <!-- REGISTER -->
      <div class="p-8 text-center sm:p-12 sign-in inline-block">
        <h2
          class="text-sm font-semibold uppercase tracking-widest text-primary"
        >
          {{ register ? "REGISTER" : "SIGN IN" }}
        </h2>

        <p
          class="mt-6 text-lg font-bold"
          @click="($event) => AddUser(this.email)"
        >
          Become a part of our community!
        </p>
        <form
          @submit.prevent="($event) => (register ? Register() : SignIn())"
          class="flex flex-col gap-2 mt-4"
        >
          <input
            placeholder="Email"
            type="email"
            v-model="email"
            required
            class="h-12 rounded-3xl bg-bgSecondary p-2 text-sm"
          />

          <input
            placeholder="Password"
            type="password"
            v-model="password"
            required
            class="h-12 rounded-3xl bg-bgSecondary p-2 text-sm"
          />
          <p v-if="errMsg" class="text-red-700 text-sm">{{ errMsg }}</p>
          <p class="text-sm underline cursor-pointer" @click="switchCase">
            {{
              register
                ? "have account? sign in"
                : "don't have account? register"
            }}
          </p>

          <button
            type="submit"
            class="mx-auto bg-primary rounded-[150px] hover:bg-transparent hover:text-primary border-4 border-primary p-2 font-bold w-36 text-white"
          >
            {{ register ? "REGISTER" : "SIGN IN" }}
          </button>
        </form>
        <!-- <hr class="my-4" />
        <button class="bg-bgSecondary w-full p-3">Register using Google</button> -->
      </div>
    </div>
  </section>
</template>
<script>
import { UsersStore } from "@/store/UsersStore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { mapActions } from "pinia";
export default {
  name: "SignIn",
  inject: ["close"],
  data() {
    return {
      signIn: true,
      register: false,
      email: "",
      oldEmail: "",
      password: "",
      errMsg: "",
    };
  },
  methods: {
    ...mapActions(UsersStore, ["AddUser"]),

    switchCase() {
      this.oldEmail = this.email;
      this.signIn = !this.signIn;
      this.register = !this.register;
      this.errMsg = "";
      this.email = "";
      this.password = "";
    },
    Register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(() => {
          signOut(getAuth());
          this.errMsg = "";
          this.switchCase();
          setTimeout(() => {
            this.AddUser(this.oldEmail);
          }, 3000);
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              this.errMsg = "email already in use";
              break;
            case "auth/weak-password":
              this.errMsg = "Password should be at least 6 characters";
              break;
            default:
              this.errMsg = "Email or password was incorrect";
          }
        });
    },
    SignIn() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(() => {
          this.errMsg = "";
          this.close();
        })
        .catch(() => {
          this.errMsg = "Email or password was incorrect";
        });
    },
  },
};
</script>
