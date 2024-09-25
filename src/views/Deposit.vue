<template>
    <div>
        <div class="rebilly-instruments-summary"></div>
        <div class="rebilly-instruments"></div>
    </div>
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
  deposit: {
            amount: 200,
            buttons: [1000*0.2, 1000*0.3, 1000*0.4],
            currency: 'USD',
            customAmount: {
                minimum: 1000*0.2,
                maximum: 1000,
            }
        },
//   deposit:{
//         depositRequestId: '',
//       },
      jwt: import.meta.env.VITE_APP_TOKEN,
});


// RebillyInstruments.on('instrument-ready', (instrument) => {
//   console.info('instrument-ready', instrument);
//   const {billingAddress, _raw} = instrument;
//   const form = document.querySelector('.rebilly-instruments');
//   form.innerHTML = `
//     <h1 class="rebilly-instruments-h1">Thanks, ${billingAddress.firstName} ${billingAddress.lastName} please confirm your purchase</h1>
//     <h2 class="rebilly-instruments-h2">${_raw.paymentInstrument?.type || ' '} ${_raw.paymentInstrument.brand} ****** ${_raw.paymentInstrument?.last4}</h2>
//     <label>
//       <input type="checkbox" id="terms" name="terms" required>
//       I accept the <a href="https://www.example.com/terms" target="_blank">terms and conditions</a>
//     </label>
//     <button id="confirm">Confirm</button>
//   `;

//   const confirm = document.querySelector('#confirm');
//   confirm.addEventListener('click', makePurchase);
   

//   async function makePurchase() {
//     try {
//       confirm.disabled = true;
//       confirm.innerText = 'Loading...';
//       await RebillyInstruments.purchase(instrument);
//     } catch (err) {
//       console.log(err)
//     } finally {
//       confirm.disabled = false;
//       confirm.innerText = 'Confirm';
//     }
//   }
// });
RebillyInstruments.on('purchase-completed', (purchase) => {
 console.info('purchase-completed', purchase);
});
})

</script>
