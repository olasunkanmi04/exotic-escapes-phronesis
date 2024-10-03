<template>
  <div class="product-details" v-if="plan">
    <!-- Product Images Carousel -->
    <div class="carousel">
      <img
        :src="images[currentImage]"
        alt="Product Image"
        class="carousel-image"
      />
      <button @click="prevImage" class="carousel-control prev">&lt;</button>
      <button @click="nextImage" class="carousel-control next">&gt;</button>
    </div>

    <!-- Product Info -->
    <div class="product-info">
      <h1 class="product-name">{{ plan.name }}</h1>
      <p class="product-description">{{ plan.description }}</p>
      <p class="product-price">${{ plan.pricing?.price.toFixed(2) }}</p>

      <!-- Quantity Picker -->
      <div class="quantity-picker">
        <button @click="decreaseQuantity" class="quantity-control">-</button>
        <input
          type="text"
          v-model="quantity"
          readonly
          class="quantity-display"
        />
        <button @click="increaseQuantity" class="quantity-control">+</button>
      </div>

      <!-- Buy Now Button -->
      <button class="buy-now" @click="buyNow">Buy Now</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const planId = route.params.id;

const plan = ref(null);

const fetchStorePlan = async () => {
  try {
    const response = await fetch(
      `/.netlify/functions/getSpecificPlan?id=${planId}`
    );

    const data = await response.json();
    plan.value = data.fields;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  if (planId) {
    fetchStorePlan();
  }
});

// const product = ref({
//   name: "Product Name",
//   description:
//     "This is a detailed description of the product. It highlights features, benefits, and other details the user may find useful.",
//   price: 59.99,
// });

const images = ref(
  Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/id/${i + 12}/300/350`
  )
);

const currentImage = ref(0);
const quantity = ref(1);

function nextImage() {
  currentImage.value = (currentImage.value + 1) % images.value.length;
}

function prevImage() {
  currentImage.value =
    (currentImage.value - 1 + images.value.length) % images.value.length;
}

function increaseQuantity() {
  quantity.value++;
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

function buyNow() {
  router.push(`/checkout/${planId}?quantity=${quantity.value}`);
}
</script>

<style scoped>
.product-details {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.carousel {
  position: relative;
  width: 300px;
}

.carousel-image {
  width: 100%;
  border-radius: 8px;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #009b7d;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-control.prev {
  left: -20px;
}

.carousel-control.next {
  right: -20px;
}

.product-info {
  max-width: 400px;
}

.product-name {
  font-size: 1.5em;
  color: #009b7d;
}

.product-description {
  font-size: 1em;
  margin: 15px 0;
  color: #333;
}

.product-price {
  font-size: 1.8em;
  color: #ffbf5d;
}

.quantity-picker {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.quantity-control {
  background-color: #009b7d;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.quantity-display {
  width: 50px;
  text-align: center;
  border: 1px solid #ccc;
  margin: 0 10px;
}

.buy-now {
  background-color: #ffbf5d;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-now:hover {
  background-color: #ffa740;
}
</style>
