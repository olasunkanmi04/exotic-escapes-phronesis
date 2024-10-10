<template>
  <div>
    <div class="heading">
      <h5>THE 10TH (AND FINAL) EEH... GOING OUT WITH A BANG!</h5>
      <h3>
        “Save Your Seat For THE LAST DANCE Of
        <br />
        <strong>Exotic Escapes hacking live x</strong>
        <br />
        In Las Vagas, Nevada!”
      </h3>
    </div>

    <div class="video instrument">
      <p class="subtitle">
        The Last (And Greatest) Tourism Event In The History of Tourism Events
        Is Happening On February 12th - 15th, 2025
      </p>
      <iframe
        width="700"
        height="500"
        src="https://www.youtube.com/embed/YkNKSSQKonk"
        title="The Future of Tourism | World Tourism Day Conference 2023"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <div class="heading">
      <h4>
        Fill Out Your Details Below And Secure Your Ticket To
        <span>Exotic Escapes Hacking LIVE 10</span>
      </h4>
    </div>
    <div class="instrument">
      <div class="rebilly-instruments-summary"></div>
      <div class="rebilly-instruments"></div>
    </div>

    <!-- <EscapeFramePay /> -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import RebillyInstruments from "@rebilly/instruments";
import EscapeFramePay from "../components/EscapeFramePay.vue";

onMounted(() => {
  RebillyInstruments.mount({
    publishableKey: import.meta.env.VITE_APP_PUBLISHABLE_KEY,
    organizationId: "phronesis-exotic-escapes",
    websiteId: "exoticescapes.com",
    apiMode: "sandbox",
    items: [
      {
        planId: "exotic-escape-hacking",
        quantity: 1,
      },
    ],

    addons: [
      {
        planId: "exotic-escape-hacking-live-replay",
        quantity: 1,
      },
      {
        planId: "exotic-escape-hacking-live-x-partner",
        quantity: 1,
      },
    ],

    theme: {
      colorPrimary: "#009B7D", // Brand color
      colorText: "#000",
      colorDanger: "#cd5c5c",
      colorBackground: "#f9f9f9", // Website background color
      buttonColorText: "#FFBF5D",
      labels: "floating",
      fontSizeBase: "13px",
    },
    paymentInstruments: {
      address: {
        show: [
          "phoneNumber",
          "email",
          "city",
          "country",
          "region",
          "postalCode",
        ],
        name: "stacked",
      },
      paymentCard: {
        input: "split",
      },
    },
    i18n: {
      en: {
        form: {
          address: {
            address2Label: "Address 2",
          },
        },
      },
    },
    css: `
        .rebilly-instruments-form-field-label{
        font-size: 13px;
        }

        .rebilly-instruments-form-field-input,
        .rebilly-instruments-form-field-select,
        .rebilly-instruments-form-field-input:hover,
        .rebilly-instruments-form-field-input:focus,
        .rebilly-instruments-form-field-select:hover,
        .rebilly-instruments-form-field-select:focus{
            border-bottom: none;
            border-radius: 0;
        }

        .rebilly-instruments-form-field, .rebilly-instruments-form-field-group{
            margin: 0px;
        }
        .rebilly-instruments-form-field-group .rebilly-instruments-form-field{
            border-bottom: 1px solid #00000047;
        }
        .rebilly-instruments-divider{
            display: none;
        }
    `,
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

<style scoped lang="scss">
.heading {
  text-align: center;
  h5 {
    font-size: 24px;
    font-weight: 400;
  }

  h3 {
    font-size: 32px;
    strong {
      font-size: 60px;
      color: #009b7d;
    }
  }

  h4 {
    font-size: 20px;
    span {
      color: #009b7d;
    }
  }
}
.instrument {
  margin: 0 auto;
  max-width: 700px;
}
.video {
  margin-bottom: 40px;
}
.subtitle {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 30px;
  color: #333;
  text-align: center;
  font-size: 18px;
}
</style>
