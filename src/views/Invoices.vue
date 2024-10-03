<template>
  <div class="table-container">
    <table class="styled-table">
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
            <!-- <button>View</button> -->
            <a
              :href="invoice.paymentFormUrl"
              target="_blank"
              v-if="invoice.status !== 'paid'"
            >
              <button class="styled-button">Pay</button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const columns = ref([
  "Date of issue",
  "Invoice status",
  "Amount due",
  "Actions",
]);
const invoicesList = ref([]);

const fetchInvoices = async () => {
  try {
    const response = await fetch("/.netlify/functions/getInvoices");

    const data = await response.json();
    const invoices = data.items.map((invoice) => {
      return {
        ...invoice.fields,
      };
    });
    invoicesList.value = invoices;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchInvoices();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-container {
  max-width: 800px;
  margin: auto;
  overflow: hidden;
  border-radius: 8px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}

.styled-table thead {
  background-color: #009b7d; /* Teal */
  color: #ffffff;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  text-align: left;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: rgba(254, 191, 93, 0.4); /* Soft Yellow */
}

.styled-table tbody tr:nth-of-type(odd) {
  background-color: #ffffff;
}

.styled-table tbody tr:hover {
  background-color: #f0c26a; /* Light yellow hover */
  color: #ffffff;
}

.styled-table th {
  font-weight: bold;
  text-transform: uppercase;
}

.styled-table td {
  font-size: 14px;
}

@media (max-width: 600px) {
  .styled-table th,
  .styled-table td {
    display: block;
    text-align: right;
  }

  .styled-table th {
    position: absolute;
    left: -9999px;
  }

  .styled-table tr {
    margin-bottom: 15px;
  }

  .styled-table td {
    text-align: left;
    padding-left: 50%;
    position: relative;
  }

  .styled-table td:before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 10px;
    font-weight: bold;
    text-align: left;
  }
}
</style>
