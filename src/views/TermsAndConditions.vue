<template>
  <HeaderPages title="Terms and conditions" />
  <div class="terms_conditions text-left container my-[80px]">
    <sectionComponent
      title="Customer Account"
      typography=" You are responsible for the confidentiality of your account information on
    Academine and for all activities that occur under your account. You must
    notify Academine immediately if you suspect any unauthorized use of your
    account."
    />
    <sectionComponent
      title="Contributing to the Website"
      typography="When submitting any content on the Academine website, you are fully responsible for that content and ensure it does not violate the intellectual property rights of others or contain harmful or unwanted content."
    />
    <sectionComponent
      title="Information Collection and Use"
      typography="We collect personal information from you for purposes such as processing transactions and improving our services. Your information will be used according to our privacy policy."
    />
    <sectionComponent
      title="Payments and Refunds"
      typography="Academine offers products and services for sale, and payment transactions are processed through a secure third-party payment processor. Refund and payment terms apply according to the specified provisions in this agreement."
    />
    <sectionComponent
      title="Responsibility Towards Website Visitors"
      typography="Academine does not endorse or assume responsibility for any contributed content and is not liable for any damage resulting from visitors' use of the content."
    />
    <sectionComponent
      title="Copyright Violations and DMCA Policy"
      typography="Academine respects intellectual property rights and follows a policy for addressing complaints regarding copyright violations according to common guidelines."
    />
    <sectionComponent
      title="Use of Cookies"
      typography="We use cookies to improve user experience and understand website traffic patterns. Third parties are not allowed to use collected information except to improve our services."
    />
    <sectionComponent
      title="Third-Party Links"
      typography="The Academine website may contain links to third-party sites, which are subject to independent terms of service and privacy policies. Academine is not responsible for the content of those sites."
    />
    <sectionComponent
      title="Intellectual Property"
      typography="All intellectual property rights related to Academine remain with the academy, and the use of trademarks or logos is not permitted without permission."
    />
    <sectionComponent
      title="Changes to Terms and Conditions"
      typography="Academine reserves the right to modify this agreement and other policies at its discretion. Continued use of the website constitutes acceptance of any changes."
    />
    <sectionComponent
      title="Access Rights"
      typography="We reserve the right to modify or suspend access to the website for anyone who violates these terms and conditions or poses a threat to the website or users."
    />
    <sectionComponent
      title="Personal Use"
      typography="Using the website for any unlawful or unauthorized purpose, including posting content that violates applicable laws, is prohibited."
    />
    <sectionComponent
      title="Indemnification"
      typography="The user agrees to indemnify Academine and associated parties for any loss or damage incurred due to their unlawful use of the website or violation of these terms and conditions."
    />
    <sectionComponent
      title="Dispute Resolution"
      typography="Any disputes arising from these terms and conditions will be resolved through arbitration or legal proceedings according to applicable laws."
    />
    <sectionComponent
      title="Disclaimer"
      typography="Academine disclaims any liability for any loss or damage resulting from the use of the website or reliance on any content therein."
    />
    <sectionComponent
      title="Enforcement of Terms"
      typography="These terms and conditions are fully enforceable according to the laws in force in the Kingdom of Saudi Arabia."
    />
    <p class="text-secondary">
      Please note that all users must adhere to these terms and conditions when
      using Academine and its services.
    </p>
  </div>
</template>
<script>
import HeaderPages from "../components/HeaderPages.vue";
import sectionComponent from "../components/sectionComponent.vue";
export default {
  name: "TermsAndConditions",
  components: {
    HeaderPages,
    sectionComponent,
  },
};
</script>
