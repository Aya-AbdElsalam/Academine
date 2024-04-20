<template>
  <HeaderPages title="About Us" />
  <WhyChooseUs />
  <BannerSection
    typography="Sign up for a new course"
    title="Learn to practice soft skills"
    :img="img"
  >
    <ul
      class="text-secondary leading-[3] text-[18px] p-4 ml-2"
      :style="{ listStyleImage: `url(${correctIcon})` }"
    >
      <li>Select & customize courses to your preferences</li>
      <li>Change the tutor and make arrangements</li>
      <li>Participate in events to join others</li>
      <li>Get the desired certificate delivered at house</li>
    </ul>
  </BannerSection>
  <BannerSection
    typography="Value for each course?"
    title="Experts raise your understand"
    direction="true"
    :img="img2"
    typographySecond="Save lessons for later and revise or write notes at any time and on multiple devices on your way. Never interfere with activities of enjoyment or other precious moments."
  >
  </BannerSection>
  <OurSkilledInstructors />
  <ReviewsSection />
</template>
<script>
import HeaderPages from "../components/HeaderPages.vue";
import WhyChooseUs from "../components/WhyChooseUs";
import BannerSection from "../components/BannerSection";
import OurSkilledInstructors from "../components/OurSkilledInstructors";
import ReviewsSection from "../components/ReviewsSection";
import img from "../assets/personalImg2.webp";
import img2 from "../assets/image.webp";
import correctIcon from "../assets/checkmark.webp";
export default {
  name: "AboutView",
  data() {
    return {
      img,
      img2,
      correctIcon,
    };
  },

  components: {
    ReviewsSection,
    OurSkilledInstructors,
    HeaderPages,
    WhyChooseUs,
    BannerSection,
  },
};
</script>
