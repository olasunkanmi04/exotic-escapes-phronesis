<template>
  <div>
    <div class="rebilly-instruments-summary"></div>
    <div class="rebilly-instruments"></div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import RebillyInstruments from "@rebilly/instruments";
import { onMounted } from "vue";
const agreeToSub = `
I agree to subscribe. I acknowledge that I will be charged a recurring fee. I understand that I can cancel my subscription at any time before the next billing cycle to avoid future charges.
`;

const agreeToTOS = `By paying, I have read and understood the [terms of service](https://www.example.com/tos) and [Privacy Policy](https://www.example.com/privacy).`;

const route = useRoute();
const planId = route.params.id;
const quantity = Number(route.query.quantity) || 1;

onMounted(() => {
  RebillyInstruments.mount({
    publishableKey: import.meta.env.VITE_APP_PUBLISHABLE_KEY,
    organizationId: "phronesis-exotic-escapes",
    websiteId: "exoticescapes.com",
    apiMode: "sandbox",
    items: [
      {
        planId: planId,
        quantity: quantity,
      },
    ],

    theme: {
      colorPrimary: "#009B7D", // Brand color
      colorText: "#000",
      colorDanger: "#cd5c5c",
      colorBackground: "#fff", // Website background color
      buttonColorText: "#FFBF5D",
    },
    paymentInstruments: {
      address: {
        show: ["phoneNumber", "email", "city", "country", "postalCode"],
        name: "default",
      },
    },
    features: {
      showConsentCheck: ["form"],
    },
    i18n: {
      en: {
        consentCheck: {
          // agreeToTOS,
          agreeToSub,
        },
        form: {
          address: {
            address2Label: "Address 2",
          },
        },
      },
    },
  });
  // Optional
  RebillyInstruments.on("instrument-ready", (instrument) => {
    console.info("instrument-ready", instrument);
  });
  RebillyInstruments.on("purchase-completed", (purchase) => {
    console.info("purchase-completed", purchase);
  });
});
</script>
