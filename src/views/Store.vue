<template>
  <div class="product-list">
    <Store v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Store from "@/components/StoreCard.vue";

// {
//     id: 1,
//     thumbnail: "https://picsum.photos/id/13/400/200",
//     name: "Product 1",
//     price: 29.99,
//   },
const products = ref([]);

const fetchStoreProduct = async () => {
  try {
    const response = await fetch(
      "/.netlify/functions/getStorePlans?filter=id:hats,t-shirts,start-your-villa-rental-business-online,why-should-you-invest-in-real-estate"
    );

    const data = await response.json();
    const plans = data.items.map((plan) => {
      return {
        ...plan.fields,
      };
    });
    const planItems = plans.map((plan, index) => {
      return {
        id: plan.id,
        thumbnail: `https://picsum.photos/id/${index + 12}/400/200`,
        name: plan.name,
        price: plan.pricing?.price,
      };
    });
    products.value = planItems;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchStoreProduct();
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
