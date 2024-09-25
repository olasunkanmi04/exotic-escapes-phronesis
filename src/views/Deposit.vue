<template>
    <div style="text-align: center; width: 100%;">
    <div class="rebilly-instruments-summary"></div>
    <div class="rebilly-instruments"></div>
    </div>
</template>

<script setup> 
import RebillyInstruments from '@rebilly/instruments';
import { onMounted } from 'vue';


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJqd3RfMDFKOE45NE5SRTVYNloyVkdSRzcxNEFHMFYiLCJleHAiOjE3MjcyOTUyODYuNTgwNzA0LCJpYXQiOjE3MjcyOTEwODYuNjA3MDAyLCJhY2wiOlt7InNjb3BlIjp7ImRlcG9zaXRSZXF1ZXN0SWQiOlsiZGVwX3JlcV8wMUo4Tjk0TlFNVEU1SDJHWFBBUlZQQU1XOCJdfSwicGVybWlzc2lvbnMiOlsyODQsMjg2LDQxNCw0MTUsNDM0LDQxMSw0MTIsNDI0LDQyNSw0MjYsNDI3LDQyOCw0MjksNDA5LDQxMCw0MDEsNDAyLDQzMyw0ODgsNDg3LDY4Nyw2ODEsNjg4XX1dLCJjbGFpbXMiOnsid2Vic2l0ZUlkIjoiZXhvdGljZXNjYXBlcy5jb20iLCJkZXBvc2l0UmVxdWVzdElkIjoiZGVwX3JlcV8wMUo4Tjk0TlFNVEU1SDJHWFBBUlZQQU1XOCIsInRyYW5zYWN0aW9uSWQiOm51bGx9LCJtZXJjaGFudCI6InBocm9uZXNpcy1leG90aWMtZXNjYXBlcyIsImN1c3RvbWVyIjp7ImlkIjoiY3VzXzAxSjZGQVBYQ0swUVAzTVAxUE45QVNQMUVFIiwibmFtZSI6IkpvaG4gRG9lIiwiY3JlYXRlZFRpbWUiOiIyMDI0LTA4LTI5VDE1OjA1OjIyKzAwOjAwIn19.GeaEeqM7NjDG61S9EyTcvLfDxSaTMp4V2_mC5ByGvn_a_3R2Ppa-BUH_cGCn1MxfvxneOJhfWpdNc17imyi_3K9kGW_zm9wTiIzSbZhQ4VvVxwL4tb0wpI3f18v1GwODukIECJlZIbrSCdsEhXooPbhaBwRfaWm47BbzGueuQ4hvXEyhKPJfG30gPCbRCVIE6z7a5Y1LSM17SLCnlmpz3BJquZXBjAz4QUmV494MQHKaiiAhDBOZT54JuAJpyUvNn61IuSR0MBVJNLyUCycYUsgIF2UVfnJ-RQU0AfwJiinULvUB_x9PWOEBCXOhErFuQwd1XUGvYglefGXBehecrA'

onMounted(()=>{
    RebillyInstruments.mount({
  publishableKey: 'pk_sandbox_0tOFA8jd2Drc-IlPsj6S5Km5De_Fd6vhs84xnlZ',
  organizationId: 'phronesis-exotic-escapes',
  websiteId: 'exoticescapes.com',
  apiMode: 'sandbox',
  deposit: {
            amount: 9.99,
            buttons: [1000*0.2, 1000*0.3, 1000*0.4],
            currency: 'USD',
        },
//   deposit:{
//         depositRequestId: 'dep_req_01J8N94NQMTE5H2GXPARVPAMW8',
//       },
      jwt: token,
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
