<template>
  <div
    class="h-1 w-full"
    style="
      background-image: linear-gradient(
        to right,
        #b0d590 25%,
        #bfbbfd 25%,
        #bfbbfd 50%,
        #ffbcca 50%,
        #ffbcca 75%,
        #a5dcf6 75%
      );
    "
  ></div>
  <div class="container border-t border-gray-100 py-8 text-sm">
    <div class="sm:flex sm:justify-between">
      <p class="text-secondary">&copy; {{ date.getFullYear() }} Made by Aya</p>

      <ul
        class="mt-8 flex flex-wrap justify-center gap-4 sm:mt-0 lg:justify-end"
      >
        <li>
          <RouterLink
            to="/TermsAndConditions"
            class="text-gray-500 transition hover:opacity-75"
          >
            Terms & Conditions
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/PrivacyPolicy"
            class="text-gray-500 transition hover:opacity-75"
          >
            Privacy Policy
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/LegalView"
            class="text-gray-500 transition hover:opacity-75"
          >
            Legal
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterBottom",
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>
