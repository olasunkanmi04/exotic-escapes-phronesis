<template>
       
    <div class="rebilly-instruments-summary"></div>
    <div class="rebilly-instruments"></div>

</template>

<script setup>
import RebillyInstruments from '@rebilly/instruments';
import { onMounted } from 'vue';
const agreeToSub= `
I agree to subscribe. I acknowledge that I will be charged a recurring fee. I understand that I can cancel my subscription at any time before the next billing cycle to avoid future charges.
`;

const agreeToTOS = `By subscribing, I have read and understood the [terms of service](https://www.example.com/tos) and [Privacy Policy](https://www.example.com/privacy).`
onMounted(()=>{
    RebillyInstruments.mount({
      publishableKey: import.meta.env.VITE_APP_PUBLISHABLE_KEY,
      organizationId: 'phronesis-exotic-escapes',
      websiteId: 'exoticescapes.com',
      apiMode: 'sandbox',
      items: [
{
  planId: 'premium-membership',
  quantity: 1,
}
      ],
        
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
      features: {
        showConsentCheck: ['form'],
      },
      i18n:{
        en: {
          consentCheck: {
            agreeToTOS,
            agreeToSub,
          },
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