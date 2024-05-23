<template>
  <NavBar />
  <router-view />
  <FooterTop />
  <FooterBottom />
  <GoToTop />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap");
html,
body {
  font-family: "Poppins", sans-serif;
}
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  ul {
    padding: 20px;
    a {
      font-weight: bold;

      &.router-link-exact-active {
        padding: 0 10px;
        border: 3px solid rgb(5 139 85);
        border-radius: 24px;
        display: inline-block;
        color: rgb(5 139 85);
      }
    }
  }
}
</style>
<script>
import NavBar from "./components/NavBar";
import FooterTop from "./components/FooterTop.vue";
import FooterBottom from "./components/FooterBottom.vue";
import GoToTop from "./components/GoToTop";

export default {
  components: {
    NavBar,
    FooterTop,
    FooterBottom,
    GoToTop,
  },
};
</script>
