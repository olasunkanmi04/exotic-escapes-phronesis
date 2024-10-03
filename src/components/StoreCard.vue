<template>
  <router-link :to="`/store/${product.id}`" class="product-card">
    <img
      :src="product.thumbnail"
      alt="Product Thumbnail"
      class="product-thumbnail"
    />
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Store",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-decoration: none;
  color: #000;
  width: 300px;
  margin: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.product-thumbnail {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.product-info {
  padding: 16px;
  text-align: center;
}

.product-name {
  font-size: 1.2em;
  margin: 0;
  color: #009b7d; /* Your primary color */
}

.product-price {
  font-size: 1.1em;
  color: #ffbf5d; /* Your secondary color */
}
</style>
