<template>
  <HeaderPages :title="eventDetails && eventDetails.title" />
  <div class="container my-20 eventDetails text-left" v-if="eventDetails">
    <div class="h-[50vh] relative">
      <picture>
        <source :srcset="eventDetails.img" />
        <img
          :src="eventDetails.img"
          :alt="eventDetails.title"
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
          <p>{{ eventDetails.date }}</p>
        </div>
        <div class="flex gap-2 font-bold grow">
          <v-icon name="la-comments" class="text-primary" scale="1.5" />
          <p>{{ eventDetails.comments.length || 0 }}</p>
        </div>
      </div>
    </div>
    <p ref="event" class="details"></p>
    <br />
    <hr />
    <br />

    <CommentSection
      :comments="eventDetails.comments"
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
import { eventStore } from "@/store/EventStore";
import { mapState, mapActions } from "pinia";
import HeaderPages from "../components/HeaderPages";
import { OhVueIcon } from "oh-vue-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CommentSection from "@/components/CommentSection.vue";
import SkeltonLoader from "../components/skeltonLoader";

export default {
  name: "EventDetails",
  data() {
    return { email: "", comment: "", user: false };
  },
  computed: {
    ...mapState(eventStore, ["eventDetails"]),
  },
  methods: {
    ...mapActions(eventStore, [
      "GeteventDetails",
      "sendComment",
      "deleteComment",
    ]),
  },
  created() {
    this.GeteventDetails(this.$route.params?.id);
  },
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      user && (this.email = user.email);
      this.user = user ? true : false;
    });
  },
  updated() {
    this.GeteventDetails(this.$route.params?.id);
    if (this.eventDetails) {
      this.$refs.event.innerHTML = this.eventDetails.txt;
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
.eventDetails {
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
