import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { addIcons } from "oh-vue-icons";
import {
  FaRegularUserCircle,
  OiSearch,
  CoHamburgerMenu,
  IoClose,
  FcPhone,
  CoFacebookF,
  BiInstagram,
  BiTwitter,
  MdDaterange,
  HiMail,
  BiMap,
  MdPhoneintalkOutlined,
  MdWatchlaterOutlined,
  MdQuizOutlined,
  BiArrowUpCircleFill,
  FaUserCircle,
  MdStickynote2Outlined,
  FaMedal,
  CoNotes,
  FaLock,
  MdBookmarkremove,
  GiBookshelf,
  FaBookOpen,
  GiGraduateCap,
  RiDeleteBin2Line,
  HiClock,
  LaChalkboardTeacherSolid,
  BiQuestionCircle,
  LaComments,
  BiPlayBtnFill,
  BiCheck2Circle,
  FaHome,
  HiSolidMenuAlt1,
  FaRegularUser,
  RiLogoutBoxLine,
} from "oh-vue-icons/icons";

addIcons(
  GiGraduateCap,
  HiSolidMenuAlt1,
  RiLogoutBoxLine,
  LaChalkboardTeacherSolid,
  FaRegularUserCircle,
  CoNotes,
  FaUserCircle,
  MdStickynote2Outlined,
  MdBookmarkremove,
  RiDeleteBin2Line,
  OiSearch,
  HiClock,
  FaRegularUser,
  CoHamburgerMenu,
  FaLock,
  IoClose,
  FcPhone,
  CoFacebookF,
  MdQuizOutlined,
  BiInstagram,
  BiCheck2Circle,
  BiPlayBtnFill,
  BiTwitter,
  HiMail,
  BiMap,
  MdDaterange,
  LaComments,
  FaHome,
  FaBookOpen,
  GiBookshelf,
  MdPhoneintalkOutlined,
  MdWatchlaterOutlined,
  BiArrowUpCircleFill,
  BiQuestionCircle,
  FaMedal
);
import "./assets/tailwind.css";
import { createPinia } from "pinia";
const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount("#app");
