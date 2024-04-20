<template>
  <HeaderPages title="Legal" />
  <div class="Legal-View text-left container my-[80px]">
    <sectionComponent title="User Agreement">
      <ul
        class="list-[disclosure-closed] ml-7 text-secondary text-[18px] leading-[2]"
      >
        <li>
          You must be at least 13 years old to use Academine. Users under 13
          require parental or guardian consent.
        </li>
        <li>
          You agree to provide accurate and complete information when
          registering an account or using our services.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities under your account.
        </li>
      </ul>
    </sectionComponent>
    <sectionComponent title="Course Enrollment">
      <ul
        class="list-[disclosure-closed] ml-7 text-secondary text-[18px] leading-[2]"
      >
        <li>
          Course availability and pricing are subject to change without notice.
          We strive to provide accurate and up-to-date information but do not
          guarantee availability or pricing.
        </li>
        <li>
          Payment for courses is due at the time of enrollment unless otherwise
          specified. We accept various payment methods and may use third-party
          payment processors.
        </li>
        <li>
          Refunds are available as per our refund policy, which may vary based
          on the course and enrollment type.
        </li>
      </ul>
    </sectionComponent>
    <sectionComponent title="Intellectual Property">
      <ul
        class="list-[disclosure-closed] ml-7 text-secondary text-[18px] leading-[2]"
      >
        <li>
          All content on Academine, including courses, materials, and website
          design, is the intellectual property of Academine or its licensors and
          is protected by copyright and other intellectual property laws.
        </li>
        <li>
          You may access and use the content for personal, non-commercial
          purposes only. Reproduction, distribution, or modification of the
          content without permission is prohibited.
        </li>
      </ul>
    </sectionComponent>

    <sectionComponent title="Privacy">
      <ul
        class="list-[disclosure-closed] ml-7 text-secondary text-[18px] leading-[2]"
      >
        <li>
          Our Privacy Policy outlines how we collect, use, and protect your
          personal information. By using Academine, you consent to the
          collection and processing of your information as described in the
          Privacy Policy.
        </li>
      </ul>
    </sectionComponent>
    <sectionComponent title="Disclaimer of Warranties">
      <ul
        class="list-[disclosure-closed] ml-7 text-secondary text-[18px] leading-[2]"
      >
        <li>
          Academine provides courses and services on an "as is" and "as
          available" basis without warranties of any kind, express or implied.
        </li>
        <li>
          We do not guarantee the accuracy, completeness, or reliability of
          course content or user-generated content.
        </li>
      </ul>
    </sectionComponent>
    <sectionComponent title="Limitation of Liability">
      <ul
        class="list-[disclosure-closed] ml-7 text-secondary text-[18px] leading-[2]"
      >
        <li>
          Academine and its affiliates shall not be liable for any direct,
          indirect, incidental, consequential, or punitive damages arising from
          your use of the website or services.
        </li>
      </ul>
    </sectionComponent>
    <sectionComponent title="Modifications">
      <ul
        class="list-[disclosure-closed] ml-7 text-secondary text-[18px] leading-[2]"
      >
        <li>
          We reserve the right to modify or update these terms and conditions at
          any time. Changes will be effective upon posting on the website. Your
          continued use of Academine constitutes acceptance of the revised
          terms.
        </li>
      </ul>
    </sectionComponent>
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
  name: "LegalView",
  components: {
    HeaderPages,
    sectionComponent,
  },
};
</script>
