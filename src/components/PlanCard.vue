<template>
  <div class="product-card">
    <h2 class="product-name">{{ plan.name }}</h2>
    <p class="product-price">${{ plan?.pricing?.price.toFixed(2) || "0" }}</p>
    <p class="product-description">{{ plan.richDescription }}</p>
    <p class="trial-period" v-if="plan.trial">
      Trial Period: {{ plan.trial.period.length }}
      {{ plan.trial.period.unit }}
    </p>
    <RouterLink :to="`/book/` + plan.id">
      <button class="book-button">Book Now</button>
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    plan: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  background-color: #ffffff; /* White background for the card */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  padding: 20px; /* Padding inside the card */
  margin: 20px; /* Margin between cards */
  text-align: center; /* Centered text */
  transition: transform 0.3s; /* Smooth hover effect */
}

.product-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
}

.product-name {
  font-size: 24px; /* Larger font size for the product name */
  margin: 0 0 10px; /* Margin below the name */
}

.product-price {
  font-size: 20px; /* Font size for price */
  color: #009b7d; /* Teal color for price */
  margin: 10px 0; /* Margin above and below the price */
}

.product-description {
  color: #555; /* Dark gray for description */
  margin: 10px 0; /* Margin above and below the description */
}

.trial-period {
  font-style: italic; /* Italic style for trial period */
  margin: 10px 0; /* Margin above and below the trial period */
}

.book-button {
  background-color: #febf5d; /* Yellow background */
  color: #009b7d; /* Teal text color */
  border: none; /* No border */
  border-radius: 5px; /* Slightly rounded corners */
  padding: 10px 20px; /* Padding inside the button */
  font-size: 16px; /* Font size */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
}

.book-button:hover {
  background-color: #009b7d; /* Change background on hover */
  color: #ffffff; /* Change text color on hover */
  transform: scale(1.05); /* Slightly enlarge on hover */
}
</style>
