<template>
  <rebilly-form class="form-container" @submit.prevent="submitHandler">
    <section class="contact-info">
      <h3>Contact Information</h3>
      <div class="field-group">
        <label for="firstName">First Name</label>
        <input
          v-model="form.firstName"
          id="firstName"
          type="text"
          placeholder="First Name"
          data-rebilly="firstName"
        />
      </div>
      <div class="field-group">
        <label for="lastName">Last Name</label>
        <input
          v-model="form.lastName"
          id="lastName"
          type="text"
          placeholder="Last Name"
          data-rebilly="lastName"
        />
      </div>
      <div class="field-group">
        <label for="email">Email</label>
        <input
          v-model="form.email"
          id="email"
          type="email"
          placeholder="Email"
          data-rebilly="email"
        />
      </div>
      <div class="field-group">
        <label for="phoneNumber">Phone Number</label>
        <input
          v-model="form.phoneNumber"
          id="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          data-rebilly="phoneNumber"
        />
      </div>
    </section>

    <rebilly-card></rebilly-card>

    <!-- <section class="product-selection">
      <h3>Select Product</h3>
      <div class="field-group">
        <label>
          <input
            type="radio"
            v-model="form.selectedProduct"
            value="FHL10"
            data-rebilly="productSelection"
          />
          Funnel Hacking LIVE (FHL10) - $997.00
        </label>
      </div>
    </section>

    <section class="billing-info">
      <h3>Billing Information</h3>
      <div class="field-group">
        <label for="address">Address</label>
        <input
          v-model="form.address"
          id="address"
          type="text"
          placeholder="Address"
          data-rebilly="address"
        />
        <span v-if="!form.address" class="error">* Address is required</span>
      </div>
      <div class="field-group">
        <label for="apartment">Apartment, building, floor (optional)</label>
        <input
          v-model="form.apartment"
          id="apartment"
          type="text"
          placeholder="Apartment, building, floor"
          data-rebilly="apartment"
        />
      </div>
      <div class="field-group">
        <label for="country">Country</label>
        <select v-model="form.country" id="country" data-rebilly="country">
          <option value="United Kingdom">United Kingdom</option>
        </select>
      </div>
      <div class="field-group">
        <label for="state">State</label>
        <select v-model="form.state" id="state" data-rebilly="state">
          <option value="England">England</option>
        </select>
      </div>
      <div class="field-group">
        <label for="city">City</label>
        <input
          v-model="form.city"
          id="city"
          type="text"
          placeholder="City"
          data-rebilly="city"
        />
      </div>
      <div class="field-group">
        <label for="postalCode">Postal Code</label>
        <input
          v-model="form.postalCode"
          id="postalCode"
          type="text"
          placeholder="Postal Code"
          data-rebilly="postalCode"
        />
      </div>
    </section>

    <section class="payment-info">
      <h3>Payment Information</h3>
      <div class="field-group">
        <label for="cardNumber">Card Number</label>
        <input
          v-model="form.cardNumber"
          id="cardNumber"
          type="text"
          placeholder="Card number"
          data-rebilly="cardNumber"
        />
      </div>
      <div class="field-group">
        <label for="expiryDate">Expiry Date (MM/YY)</label>
        <input
          v-model="form.expiryDate"
          id="expiryDate"
          type="text"
          placeholder="MM / YY"
          data-rebilly="expiryDate"
        />
      </div>
      <div class="field-group">
        <label for="cvv">CVV</label>
        <input
          v-model="form.cvv"
          id="cvv"
          type="text"
          placeholder="CVV"
          data-rebilly="cvv"
        />
      </div>
    </section>

    <section class="additional-options">
      <div class="checkbox-group">
        <label>
          <input
            type="checkbox"
            v-model="form.addReplays"
            data-rebilly="addReplays"
          />
          Funnel Hacking LIVE Replays - $97.00
        </label>
      </div>
      <div class="checkbox-group">
        <label>
          <input
            type="checkbox"
            v-model="form.addPartnerTicket"
            data-rebilly="addPartnerTicket"
          />
          Add a Partner Ticket To My Order - $697.00
        </label>
        <div v-if="form.addPartnerTicket">
          <label for="numberOfPartners">Number of Partners</label>
          <select
            v-model="form.numberOfPartners"
            id="numberOfPartners"
            data-rebilly="numberOfPartners"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </section> -->

    <button type="submit">Secure My Ticket!</button>
  </rebilly-form>
</template>

<script setup>
import { reactive, ref, onMounted, getCurrentInstance } from "vue";
import FramePay, { RebillyForm, RebillyCard } from "@rebilly/framepay-vue";
const app = getCurrentInstance().appContext.app;

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  selectedProduct: "FHL10",
  address: "",
  apartment: "",
  country: "United Kingdom",
  state: "England",
  city: "",
  postalCode: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  addReplays: false,
  addPartnerTicket: false,
  numberOfPartners: 1,
});

const submitHandler = (event) => {
  console.log("Form submitted", event);
  const form = event.target;
  console.log(form);
  const extraData = {}; // some stuff
  //   createToken(form, extraData)
  //     .then((token) => {
  //       // the token is already added to the form via RebillyToken
  //       form.submit();
  //     })
  //     .catch((error) => {
  //       // see error.code and error.message
  //       console.log(error);
  //     });
};

onMounted(() => {
  const configuration = {
    publishableKey: import.meta.env.VITE_APP_PUBLISHABLE_KEY,
    injectStyle: true,
    organizationId: "phronesis-exotic-escapes",
    websiteId: "exoticescapes.com",
    transactionData: {
      currency: "USD",
      amount: 997,
    },
  };
  app.use(FramePay, configuration);
});
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
}

.field-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

input[type="checkbox"],
input[type="radio"] {
  width: auto;
}

.error {
  color: red;
  font-size: 12px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #009b7d;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #007c65;
}
</style>
