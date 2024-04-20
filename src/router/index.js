import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import BlogDetailsView from "../views/BlogDetails.vue";
import BlogView from "../views/BlogView.vue";
import NotFound from "../views/NotFound.vue";
import TermsAndConditions from "../views/TermsAndConditions.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import EventDetails from "@/views/EventDetails.vue";
import CourseDetials from "@/views/CourseDetials";
// eslint-disable-next-line no-unused-vars
import CourseContentView from "@/views/CourseContentView";
import EventView from "@/views/EventView.vue";
import LegalView from "../views/LegalView.vue";
import CoursesView from "../views/CoursesView.vue";
import ProfileView from "../views/ProfileView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "home page",
      description:
        "Welcome to Academine, where learning meets excellence! Explore our diverse range of courses taught by industry experts. Start your journey to knowledge and skill enhancement today!",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "contact us",
      description:
        "Get in touch with Academine! Have questions about our courses or need assistance? Fill out the form below or reach us via email or phone. We're here to support your learning journey!",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title: "about us",
      description:
        "Discover Academine's story and mission! Learn about our commitment to providing high-quality courses, empowering learners with valuable skills, and fostering a vibrant learning community. Join us in shaping the future of education!",
    },
  },

  {
    path: "/courses",
    name: "courses",
    component: CoursesView,
    meta: {
      title: "courses page",
      description:
        "Explore Academine's comprehensive course offerings! Browse through our diverse range of topics, from technology to business, and enroll in courses designed to enhance your skills and knowledge. Start learning with Academine today",
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
    meta: {
      title: "blogs",
      description:
        "Dive into Academine's insightful blog! Discover articles, tips, and resources to support your learning journey. Stay updated with the latest trends, industry insights, and educational content. Explore, learn, and grow with Academine's blog!",
    },
  },
  {
    path: "/event",
    name: "event",
    component: EventView,
    meta: {
      title: "events",
      description:
        "Stay informed with Academine's upcoming events! Explore workshops, webinars, and seminars designed to expand your knowledge and connect with industry experts. Join us in our educational events and take your learning to the next l",
    },
  },

  {
    path: "/TermsAndConditions",
    name: "TermsAndConditions",
    component: TermsAndConditions,
    meta: {
      title: "terms and conditions",
      description:
        "Read Academine's terms and conditions carefully. This page outlines the guidelines, policies, and agreements governing your use of our website and services. By accessing Academine, you agree to abide by these terms, ensuring a smooth and secure learning experience for all.",
    },
  },
  {
    path: "/PrivacyPolicy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    meta: {
      title: "privacy policy",
      description:
        '"Protecting your privacy is paramount at Academine. Our Privacy Policy details how we collect, use, and safeguard your personal information. Rest assured that your data is handled responsibly and with utmost care to ensure a secure and transparent online experience with us.',
    },
  },
  {
    path: "/LegalView",
    name: "LegalView",
    component: LegalView,
    meta: {
      title: "legal",
      description:
        "Explore Academine's Legal Policy for comprehensive information on copyright, disclaimer, and other legal aspects. This page outlines our commitment to intellectual property rights, limitations of liability, and user responsibilities. Familiarize yourself with our legal guidelines to ensure a compliant and fair online environment.",
    },
  },

  {
    path: "/blog/:id/:title",
    name: "BlogDetails",
    component: BlogDetailsView,
    meta: {
      description:
        "Dive into Academine's insightful blog! Discover articles, tips, and resources to support your learning journey. Stay updated with the latest trends, industry insights, and educational content. Explore, learn, and grow with Academine's blog!",
    },
  },
  {
    path: "/event/:id/:title",
    name: "EventDetails",
    component: EventDetails,
    meta: {
      title: "event",
      description:
        "Stay informed with Academine's upcoming events! Explore workshops, webinars, and seminars designed to expand your knowledge and connect with industry experts. Join us in our educational events and take your learning to the next l",
    },
  },

  {
    path: "/courses/:id/:title",
    name: "CourseDetials",
    component: CourseDetials,
    meta: {
      description:
        "Explore Academine's comprehensive course offerings! Browse through our diverse range of topics, from technology to business, and enroll in courses designed to enhance your skills and knowledge. Start learning with Academine today",
    },
  },
  {
    path: "/courses/:id/:title/contentCourse/:section/:lesson",
    name: "CourseContentView",
    component: CourseContentView,
    meta: {
      description:
        "Explore Academine's comprehensive course offerings! Browse through our diverse range of topics, from technology to business, and enroll in courses designed to enhance your skills and knowledge. Start learning with Academine today",
    },
  },
  {
    path: "/courses/:id/:title/contentCourse/quiz",
    name: "CourseContentViewQuiz",
    component: CourseContentView,
    meta: {
      description:
        "Explore Academine's comprehensive course offerings! Browse through our diverse range of topics, from technology to business, and enroll in courses designed to enhance your skills and knowledge. Start learning with Academine today",
    },
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: ProfileView,
    meta: {
      title: "profile",
      description:
        "Manage your Academine profile with ease! Access your course progress,  with Academine's user-friendly profile page.",
    },
  },

  {
    name: "not_found",
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: {
      title: "not found",
      description:
        "Oops! Looks like you've reached a page that doesn't exist. Don't worry, let's get you back on track. Navigate back to Academine's homepage or explore our courses to continue your learning journey with us.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  document.title = to.meta.title || to.params.title;
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
export default router;
