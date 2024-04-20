<template>
  <HeaderPages title="Privacy Policy" />
  <div class="privacy_conditions text-left container my-[80px]">
    <p class="text-secondary">
      At Academine, we are committed to protecting your privacy and ensuring the
      security of your personal information. This Privacy Policy outlines how we
      collect, use, disclose, and protect your information when you use our
      website and services.
    </p>
    <sectionComponent
      title="Information We Collect"
      typography="We collect personal information, such as your name, email address, phone number, and payment details, when you register an account, enroll in a course, or communicate with us. We may also collect non-personal information such as browser type, IP address, and cookies for analytics and website optimization."
    />
    <sectionComponent
      title="How We Use Your Information"
      typography="We use your information to provide and improve our services, personalize your experience, process payments, communicate with you, and comply with legal obligations. We may also use your information for marketing purposes with your consent."
    />
    <sectionComponent
      title="Sharing Your Information"
      typography="We may share your information with trusted third parties, such as payment processors and service providers, to facilitate our services. We do not sell or rent your personal information to third parties for their marketing purposes."
    />
    <sectionComponent
      title="Data Security"
      typography="We implement security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
    />
    <sectionComponent
      title="Your Choices"
      typography="You can access, update, or delete your personal information by logging into your account or contacting us directly. You can also choose to opt-out of marketing communications or cookies, although this may affect your experience on our website."
    />
    <sectionComponent
      title="Children's Privacy"
      typography="We do not knowingly collect personal information from children under the age of 13 without parental consent. If you believe we have inadvertently collected such information, please contact us to remove it."
    />
    <sectionComponent
      title="Changes to this Privacy Policy"
      typography="We may update this Privacy Policy periodically to reflect changes in our practices and legal requirements. We encourage you to review this policy regularly for any updates."
    />
    <sectionComponent
      title="Contact Us"
      typography="If you have any questions or concerns about this Privacy Policy or our practices, please contact us at contact form"
    />
    <RouterLink to="/contact" class="text-primary"
      ><u>Contact Form</u>
    </RouterLink>
  </div>
</template>
<script>
import HeaderPages from "../components/HeaderPages.vue";
import sectionComponent from "../components/sectionComponent.vue";
export default {
  name: "PrivacyPolicy",
  components: {
    HeaderPages,
    sectionComponent,
  },
};
</script>
