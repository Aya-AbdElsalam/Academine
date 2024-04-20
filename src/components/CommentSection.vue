<template>
  <h3
    class="text-3xl font-semibold relative after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-24 after:bg-primary"
  >
    {{ comments?.length || 0 }} comments
  </h3>
  <div>
    <div
      class="flex w-full my-3 items-center gap-3"
      v-for="comment in comments"
      :key="comment.id"
    >
      <v-icon name="fa-user-circle" scale="5" />
      <div class="w-full">
        <p class="flex justify-between flex-wrap">
          <span class="font-bold">
            {{ comment?.email }}
          </span>
          <span class="text-sm text-secondary">
            {{ comment?.date }}
          </span>
        </p>
        <p class="flex justify-between flex-wrap text-secondary">
          <span class="font-bold">
            {{ comment?.txt }}
          </span>
          <span
            class="text-sm text-secondary"
            v-if="user && comment?.email === this.email"
            @click="
              () => {
                deleteComment($route.params?.id, comment.id);
              }
            "
          >
            <v-icon
              name="ri-delete-bin-2-line"
              class="cursor-pointer hover:text-red-600"
            />
          </span>
        </p>
      </div>
    </div>
  </div>
  <h3
    class="text-3xl font-semibold relative after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-24 after:bg-primary mt-20"
  >
    Leave a comment
  </h3>
  <form
    class="mt-10"
    @submit.prevent="
      ($event) => {
        sendComment(
          $route.params?.id,

          {
            date: new Date().toUTCString().slice(0, 16),
            email: this.email,
            id: Date.now(),
            txt: this.comment,
          }
        );
        this.comment = '';
      }
    "
  >
    <input
      class="rounded-3xl text-secondary bg-bgSecondary p-4 h-[48px] w-full my-5"
      placeholder="Email"
      type="email"
      required
      v-model="email"
      :disabled="user ? true : false"
    />

    <textarea
      name="your-message"
      cols="60"
      rows="5"
      required
      class="rounded-3xl text-secondary bg-bgSecondary p-4 grow w-full"
      aria-required="true"
      aria-invalid="false"
      placeholder="comment"
      v-model="comment"
    ></textarea>
    <button
      type="submit"
      class="bg-primary rounded-[150px] hover:bg-transparent hover:text-primary border-4 border-primary p-3 font-bold w-36 text-white"
    >
      SUBMIT
    </button>
  </form>
</template>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { OhVueIcon } from "oh-vue-icons";

export default {
  name: "CommentSection",
  data() {
    return { email: "", comment: "" };
  },
  props: ["comments", "user", "deleteComment", "sendComment"],
  components: {
    "v-icon": OhVueIcon,
  },
  mounted() {
    if (this.BlogDetails) {
      this.$refs.Blog.innerHTML = this.BlogDetails.txt;
    }
    onAuthStateChanged(getAuth(), (user) => {
      user && (this.email = user.email);
    });
  },
};
</script>
