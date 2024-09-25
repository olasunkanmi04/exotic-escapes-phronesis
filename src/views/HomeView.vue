<template>
  <div style="margin-bottom: 100px;">
    <div style="text-align: center; width: 100%;">
     
      <h3 style="font-size: 50px; color: #febf5d;"> Book your next vacation with us!</h3>
      <p style="font-size: 20px; color: #009b7c;">Only for <strong style=" color: #febf5d;">$1000</strong></p>

     
    <RouterLink to="/book">
      <button style="color:#009b7c; width: 200px; height: 50px; background: #febf5d; font-size: 18px; border: none; border-radius: 8px; cursor:pointer">Book now!</button>
    </RouterLink>
    </div>
  </div>
</template>

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
