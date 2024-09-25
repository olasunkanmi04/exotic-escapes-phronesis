<template>
       
    <div class="rebilly-instruments-summary"></div>
    <div class="rebilly-instruments"></div>

</template>

<script setup>
import RebillyInstruments from '@rebilly/instruments';
import { onMounted } from 'vue';

onMounted(()=>{
    RebillyInstruments.mount({
      publishableKey: import.meta.env.VITE_APP_PUBLISHABLE_KEY,
  organizationId: 'phronesis-exotic-escapes',
  websiteId: 'exoticescapes.com',
  apiMode: 'sandbox',
  money: {
    currency: 'USD',
    amount: 1000,
  },
  theme: {
    colorPrimary: '#009B7D', // Brand color
    colorText: '#000',
    colorDanger: '#cd5c5c',
    colorBackground: '#fff', // Website background color
    buttonColorText: '#FFBF5D',
  },
  paymentInstruments: {
    address: {
      show: ['phoneNumber', 'email', 'city', 'country'],
      name: 'default'
    }
  },
  i18n:{
    en: {
      form:{
        address: {
        address2Label: 'Address 2',
        fullNameLabel: "Full Name",
        }
      }
    },
  }
});
// Optional
RebillyInstruments.on('instrument-ready', (instrument) => {
  console.info('instrument-ready', instrument);
});
RebillyInstruments.on('purchase-completed', (purchase) => {
  console.info('purchase-completed', purchase);
});
})
</script>