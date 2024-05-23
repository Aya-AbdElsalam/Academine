<template>
  <div class="my-20">
    <HeaderPages title="Events" />
    <div class="flex flex-col container gap-3 mt-7" v-if="event">
      <article
        v-for="event in event"
        :key="event.id"
        class="flex bg-white transition hover:shadow-xl text-left border-2 border-gray-900/10"
      >
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>{{ event.date }}</span>
            <span class="w-px flex-1 bg-gray-900/10"></span>
          </time>
        </div>
        <div class="basis-16 sm:block sm:basis-56">
          <img
            :alt="event.title"
            :src="event.img"
            width="100%"
            height="100%"
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div
            class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
          >
            <div>
              <h3 class="font-bold uppercase text-gray-900">
                {{ event.title }}
              </h3>
              <div class="flex gap-4 justify-between my-5 flex-wrap">
                <h4 class="grow flex gap-3 items-center">
                  <v-icon
                    name="bi-map"
                    class="text-primary"
                    scale="1.5"
                  ></v-icon>
                  <span class="font-semibold text-secondary">{{
                    event.location
                  }}</span>
                </h4>
                <h4 class="grow flex gap-3 items-center">
                  <v-icon
                    name="hi-clock"
                    class="text-primary"
                    scale="1.5"
                  ></v-icon>
                  <span class="font-semibold text-secondary">{{
                    event.time
                  }}</span>
                </h4>
              </div>
            </div>

            <p
              class="mt-2 line-clamp-3 text-sm/relaxed text-secondary h-[69px] overflow-hidden"
              :ref="event.id"
            ></p>
          </div>

          <div class="sm:flex sm:items-end sm:justify-end">
            <RouterLink
              :to="'/event/' + event.id + '/' + event.title"
              class="block bg-primary px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-primary/80"
            >
              Read event
            </RouterLink>
          </div>
        </div>
      </article>
    </div>
    <div v-else>
      <SkeltonLoaderCard />
    </div>
  </div>
</template>
<script>
import { eventStore } from "@/store/EventStore";
import { mapState, mapActions } from "pinia";
import HeaderPages from "../components/HeaderPages";
import { OhVueIcon } from "oh-vue-icons";
import SkeltonLoaderCard from "../components/skeltonLoaderCard";

export default {
  name: "EventView",
  computed: {
    ...mapState(eventStore, ["event"]),
  },
  methods: {
    ...mapActions(eventStore, ["Getevent"]),
  },
  created() {
    this.Getevent();
  },

  updated() {
    if (this.event) {
      this.event.map((b) => {
        this.$refs[b.id][0].innerHTML = b.txt;
      });
    }
  },
  components: { HeaderPages, "v-icon": OhVueIcon, SkeltonLoaderCard },
};
</script>
