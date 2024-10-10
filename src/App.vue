<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <img
    src="../src/assets/logo.png"
    alt=""
    width="200px"
    style="display: block; margin: 0 auto"
  />
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/store">Store</RouterLink>
    <RouterLink to="/invoices">Invoices</RouterLink>
    <RouterLink to="/tourism-hacking">Tourism hacking</RouterLink>
    <RouterLink to="/debriefs">Debriefs</RouterLink>
  </nav>

  <header>
    <img
      src="https://www.coremedicalgroup.com/hubfs/Core%20Medical%20June%202018/Home%20Page/banner_image.png"
      alt=""
      style="height: 500px; margin: 0 auto; display: block"
    />
  </header>

  <div style="margin: 0 auto 100px; width: 100%; max-width: 900px">
    <RouterView />
  </div>

  <footer>
    <div class="footer-content">
      <p class="site-summary">
        Exotic Escapes — Your ultimate destination for unforgettable travel
        experiences.
      </p>
      <RouterLink to="/deposit" class="deposit-link">Deposit</RouterLink>
    </div>
    <div class="footer-line"></div>
  </footer>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 20px;
}

.styled-button {
  background-color: #009b7d; /* Teal */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 25px; /* Rounded corners */
  padding: 15px 30px; /* Vertical and horizontal padding */
  font-size: 16px; /* Font size */
  font-weight: bold; /* Bold text */
  cursor: pointer; /* Pointer on hover */
  transition: background-color 0.3s ease, transform 0.3s ease; /* Transition for hover effects */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

.styled-button:hover {
  background-color: #febf5d; /* Soft Yellow on hover */
  color: #009b7d; /* Change text color on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.styled-button:focus {
  outline: none; /* Remove outline on focus */
}

.styled-button:active {
  transform: translateY(1px); /* Slight push effect when clicked */
}
nav {
  background-color: #fff;
  border-bottom: 2px solid #febf5d;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
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
  font-family: "Arial", sans-serif;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
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
