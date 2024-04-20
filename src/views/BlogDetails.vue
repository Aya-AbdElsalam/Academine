<template>
  <HeaderPages :title="BlogDetails.title" />
  <div v-if="BlogDetails" class="container my-20 BlogDetails text-left">
    <div class="h-[50vh] relative">
      <picture>
        <source :srcset="BlogDetails.img" />
        <img
          :src="BlogDetails.img"
          :alt="BlogDetails.title"
          class="w-full h-full rounded-3xl"
          width="100%"
          height="100%"
        />
      </picture>
      <div
        class="absolute h-12 min-w-[70%] bg-white bottom-5 left-4 rounded-full flex items-center p-3 gap-4"
      >
        <div
          class="flex gap-2 font-bold border-r-2 border-r-bgSecondary grow pr-2"
        >
          <v-icon name="md-daterange" class="text-primary" scale="1.5" />
          <p>{{ BlogDetails.date }}</p>
        </div>
        <div class="flex gap-2 font-bold grow">
          <v-icon name="la-comments" class="text-primary" scale="1.5" />
          <p>{{ BlogDetails.comments.length || 0 }}</p>
        </div>
      </div>
    </div>
    <p ref="Blog" class="details"></p>
    <br />
    <hr />
    <br />
    <CommentSection
      :comments="BlogDetails.comments"
      :user="user"
      :deleteComment="deleteComment"
      :sendComment="sendComment"
    />
  </div>
  <div v-else>
    <SkeltonLoader />
  </div>
</template>
<script>
import { BlogStore } from "@/store/BlogStore";
import { mapState, mapActions } from "pinia";
import HeaderPages from "../components/HeaderPages";
import { OhVueIcon } from "oh-vue-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CommentSection from "@/components/CommentSection.vue";
import SkeltonLoader from "../components/skeltonLoader";
export default {
  name: "BlogDetailsView",
  data() {
    return { user: false };
  },
  computed: {
    ...mapState(BlogStore, ["BlogDetails"]),
  },

  methods: {
    ...mapActions(BlogStore, [
      "GetBlogDetails",
      "sendComment",
      "deleteComment",
    ]),
  },
  created() {
    this.GetBlogDetails(this.$route.params?.id);
  },
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      this.user = user ? true : false;
    });
  },
  updated() {
    this.GetBlogDetails(this.$route.params?.id);
    if (this.BlogDetails) {
      this.$refs.Blog.innerHTML = this.BlogDetails.txt;
    }
  },
  components: {
    HeaderPages,
    "v-icon": OhVueIcon,
    CommentSection,
    SkeltonLoader,
  },
};
</script>
<style lang="scss">
.BlogDetails {
  line-height: 2;
  .details {
    img {
      border-radius: 30px;
      display: inline !important;
      margin: 20px;
      flex-grow: 1;
    }
    blockquote {
      border-radius: 30px;
      border: 1px solid #555555;
      border-left: 7px solid #00bf73;
      padding: 30px;
    }
    p:has(> img) {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
