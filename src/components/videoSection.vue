<template>
  <div class="h-[70vh] relative">
    <div
      class="bg-black/80 top-0 left-0 absolute w-full h-full text-white flex justify-center items-center cursor-pointer"
      @click="($event) => ($event.currentTarget.style.display = 'none')"
    >
      <v-icon name="bi-play-btn-fill" scale="5"></v-icon>
    </div>
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/19EUwQDpdjQ?si=RNqeX5JI9lyJ-AGv"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
  <div class="flex flex-wrap h-[80vh] min-[721px]:h-[40vh]">
    <div
      class="w-44 grow overflow-hidden h-[40vh] hover:h-[70vh] border-b-4 border-color1 transition-all z-10 group bg-white"
    >
      <div
        class="h-[30vh] relative flex justify-center items-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <div
          class="absolute top-0 left-0 w-full h-full bg-color1 z-0 opacity-80 group-hover:opacity-0"
        ></div>
        <div
          class="font-bold text-[24px] group-hover:opacity-0 bg-white relative z-10 w-24 h-24 rounded-full outline-dashed outline-2 outline-white border-color1 border-[7px] leading-[4]"
        >
          01
        </div>
      </div>
      <div class="p-5 bg-white">
        <h2
          class="border-b-2 text-[24px] font-semibold p-2 mb-5 line-clamp-1 group-hover:line-clamp-none"
        >
          Best care
        </h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
        </p>
      </div>
    </div>
    <div
      class="w-44 grow overflow-hidden h-[40vh] hover:h-[70vh] border-b-4 border-color2 transition-all z-10 group bg-white"
    >
      <div
        class="h-[30vh] relative flex justify-center items-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <div
          class="absolute top-0 left-0 w-full h-full bg-color2 z-0 opacity-80 group-hover:opacity-0"
        ></div>
        <div
          class="font-bold text-[24px] group-hover:opacity-0 bg-white relative z-10 w-24 h-24 rounded-full outline-dashed outline-2 outline-white border-color2 border-[7px] leading-[4]"
        >
          02
        </div>
      </div>
      <div class="p-5 bg-white">
        <h2
          class="border-b-2 text-[24px] font-semibold p-2 mb-5 line-clamp-1 group-hover:line-clamp-none"
        >
          Knowledge Zone
        </h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
        </p>
      </div>
    </div>
    <div
      class="w-44 grow overflow-hidden h-[40vh] hover:h-[70vh] border-b-4 border-color3 bg-white transition-all z-10 group"
    >
      <div
        class="h-[30vh] relative flex justify-center items-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <div
          class="absolute top-0 left-0 w-full h-full bg-color3 z-0 opacity-80 group-hover:opacity-0"
        ></div>
        <div
          class="font-bold text-[24px] group-hover:opacity-0 relative z-10 w-24 h-24 bg-white rounded-full outline-dashed outline-2 outline-white border-color3 border-[7px] leading-[4]"
        >
          03
        </div>
      </div>
      <div class="p-5 bg-white">
        <h2
          class="border-b-2 text-[24px] font-semibold p-2 mb-5 line-clamp-1 group-hover:line-clamp-none"
        >
          Trending courses
        </h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
        </p>
      </div>
    </div>
    <div
      class="w-44 grow overflow-hidden h-[40vh] hover:h-[70vh] border-b-4 border-color4 bg-white transition-all z-10 group"
    >
      <div
        class="h-[30vh] relative flex justify-center items-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <div
          class="absolute top-0 left-0 w-full h-full bg-color4 z-0 opacity-80 group-hover:opacity-0"
        ></div>
        <div
          class="font-bold text-[24px] group-hover:opacity-0 relative z-10 w-24 h-24 bg-white rounded-full outline-dashed outline-2 outline-white border-color4/80 border-[7px] leading-[4]"
        >
          04
        </div>
      </div>
      <div class="p-5 bg-white">
        <h2
          class="border-b-2 text-[24px] font-semibold p-2 mb-5 line-clamp-1 group-hover:line-clamp-none"
        >
          Best Teachers
        </h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import bg from "../assets/headerPages.jpg";
import { OhVueIcon } from "oh-vue-icons";

export default {
  name: "videoSection",
  components: {
    "v-icon": OhVueIcon,
  },
  data() {
    return {
      bg,
    };
  },
};
</script>
