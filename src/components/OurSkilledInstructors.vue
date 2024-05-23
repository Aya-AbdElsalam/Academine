<template>
  <div class="my-20">
    <HeaderSections
      title="Our Skilled Instructors"
      typography="Sed ut perspiciatis unde omnis iste natus error sit"
    />
    <div class="flex flex-wrap container gap-3 justify-evenly mt-7">
      <div
        class="group relative block overflow-hidden w-56 grow-[.5]"
        v-for="team in team"
        :key="team.id"
      >
        <img
          height="256px"
          width="100%"
          :src="team.img"
          :alt="team.name"
          class="h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div class="relative border border-gray-100 bg-white p-6">
          <span
            class="whitespace-nowrap bg-primary text-white px-3 py-1.5 font-medium"
          >
            {{ team.exp }}
          </span>

          <h3 class="mt-4 text-lg font-medium text-gray-900">
            {{ team.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { teamStore } from "@/store/teamStore";
import { mapState, mapActions } from "pinia";
import HeaderSections from "./HeaderSections";
export default {
  name: "OurSkilledInstructors",
  computed: {
    ...mapState(teamStore, ["team"]),
  },
  methods: {
    ...mapActions(teamStore, ["GetTeam"]),
  },
  created() {
    this.GetTeam();
  },
  components: { HeaderSections },
};
</script>
