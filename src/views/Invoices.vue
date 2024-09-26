<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="colunm">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoicesList" :key="invoice.id">
          <td>{{ invoice.issuedTime }}</td>
          <td>{{ invoice.status }}</td>
          <td>{{ invoice.subtotalAmount }}</td>
          <td>
            <button>View</button>
            <a :href="invoice.paymentFormUrl" target="_blank">Pay</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import Api from "../apiSetup";
import api from "../services/apiSetup"

const columns = ref([
  "Date of issue",
  "Invoice status",
  "Amount due",
  "Actions",
]);
const invoicesList = ref([]);

const fetchInvoices = async () => {
  try {
    const response = await api.invoices.getAll({
      filter: "customerId:cus_01J6FC5YXSCT80R0CV35KZJWKN;status:unpaid,upcoming",
    });
    const invoices = response.items.map((invoice) => {
    return {
      ...invoice.fields
    }
  });
  // console.log(invoices);
  invoicesList.value = invoices;
  } catch (error) {}
};

onMounted(() => {
  fetchInvoices();
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
</style>
