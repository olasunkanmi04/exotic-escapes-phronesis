<template>
  <div style="margin-bottom: 100px">
    <div style="text-align: center; width: 100%">
      <div class="product-grid">
        <PlanCard v-for="plan in planList" :plan="plan" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PlanCard from "@/components/PlanCard.vue";

const planList = ref([]);

const fetchPlans = async () => {
  try {
    const response = await fetch("/.netlify/functions/getPlans");

    const data = await response.json();
    const plans = data.items.map((plan) => {
      return {
        ...plan.fields,
      };
    });
    planList.value = plans;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchPlans();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
  border-collapse: collapse; /* Ensures borders are shared between cells */
  margin-bottom: 1rem; /* Adds space below the table */
}

th,
td {
  border: 1px solid #ddd; /* Border around cells */
  padding: 8px; /* Padding inside cells */
  text-align: left; /* Align text to the left */
}

th {
  background-color: #f2f2f2; /* Light background for table headers */
  font-weight: bold; /* Makes header text bold */
}

tr:nth-child(even) {
  background-color: #f9f9f9; /* Alternating row background color */
}

tr:hover {
  background-color: #f1f1f1; /* Highlight row on hover */
}
.product-grid {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to next line */
  /* justify-content: center; */
}
</style>
