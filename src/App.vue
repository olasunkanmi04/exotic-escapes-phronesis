<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <img src="../src/assets/logo.png" alt="" width="200px" style="display: block; margin: 0 auto;">
<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/invoices">Invoices</RouterLink>
</nav>

<header>
      <img src="https://www.coremedicalgroup.com/hubfs/Core%20Medical%20June%202018/Home%20Page/banner_image.png" alt="" style="height: 500px; margin:0 auto; display: block;">
    </header>

    <div style="margin:0 auto; width: 100%; max-width: 600px;">
      <RouterView />

    </div>

  <footer>
  <div class="footer-content">
    <p class="site-summary">Exotic Escapes — Your ultimate destination for unforgettable travel experiences.</p>
    <RouterLink to="/deposit" class="deposit-link">Deposit</RouterLink>
  </div>
  <div class="footer-line"></div>
</footer>

</template>

<style scoped>
 nav {
  background-color: #fff;
  border-bottom: 2px solid #febf5d;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s, background-color 0.3s;
  border-radius: 5px;
}

nav a:hover {
  background-color: #febf5d;
  color: #fff;
}

nav a.active {
  background-color: #febf5d;
  color: #fff;
  border-radius: 5px;
}

nav a:not(.active):hover {
  background-color: #febf5d;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    padding: 15px 10px;
  }

  nav a {
    padding: 10px;
    width: 100%;
    text-align: center;
  }
}

footer {
  background-color: #fff;
  padding: 20px 0;
  text-align: center;
  font-family: 'Arial', sans-serif;
  position: relative;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.site-summary {
  color: #333;
  font-size: 16px;
  font-weight: 500;
}

.deposit-link {
  color: #febf5d;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.deposit-link:hover {
  color: #ffcc7a;
}

.footer-line {
  height: 4px;
  background-color: #febf5d;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 10px;
  }
}

</style>