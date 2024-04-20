<template>
  <div class="mt-5">
    <ContactInfo />
    <ContactForm />
  </div>
</template>
<script>
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
export default {
  name: "ContactView",
  components: {
    ContactInfo,
    ContactForm,
  },
};
</script>
