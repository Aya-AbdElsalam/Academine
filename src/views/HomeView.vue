<template>
  <HeroSection />
  <BannerSection
    typography="Fall 2020 are now open"
    title="Fluent city Spanish"
    typographySecond=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et.dolore magna aliqua. Ut enim ad minim
        veniam"
    :img="img"
  >
    <RouterLink
      to="/contact"
      class="bg-primary inline-block rounded-[150px] hover:bg-transparent hover:text-primary border-4 border-primary px-5 py-2 mt-3 font-bold w-36 text-white"
    >
      APPLY NOW
    </RouterLink>
  </BannerSection>
  <TopCourses />
  <OurGoals />
  <OurSkilledInstructors />
  <ReviewsSection />
  <videoSection />
  <BannerSection
    typography="36 W 138th St, New York"
    title="Academie New York 
English School"
    typographySecond="TALK Aventura is located in this “City of Excellence”, an affluent international city to the north of the Miami metropolitan area."
    :img="img2"
  >
    <RouterLink
      to="/about"
      class="bg-primary inline-block rounded-[150px] hover:bg-transparent hover:text-primary border-4 border-primary px-5 py-2 mt-3 font-bold min-w-36 text-white"
    >
      LEARN MORE ABOUT US
    </RouterLink></BannerSection
  >
  <BrandSection />
</template>

<script>
import HeroSection from "../components/HeroSection";
import BannerSection from "../components/BannerSection";
import TopCourses from "../components/TopCourses";
import OurGoals from "../components/OurGoals";
import OurSkilledInstructors from "../components/OurSkilledInstructors";
import ReviewsSection from "../components/ReviewsSection";
import videoSection from "../components/videoSection";
import BrandSection from "../components/BrandSection";
import img from "../assets/personalImg2.webp";
import img2 from "../assets/image.webp";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    BannerSection,
    TopCourses,
    OurGoals,
    ReviewsSection,
    OurSkilledInstructors,
    videoSection,
    BrandSection,
  },
  data() {
    return {
      img,
      img2,
    };
  },
};
</script>
