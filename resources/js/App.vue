<template>
  <div>
    <Navbar v-if="!isAdminRoute" />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <Footer v-if="!isAdminRoute" />
  </div>
</template>

<script setup>
import Navbar from './pages/components/Navbar.vue'; // or correct path/casing
import Footer from './pages/components/Footer.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isAdminRoute = route.path.startsWith('/admin');
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background: #f5f7fa;
}
.main-content {
  padding: 20px;
}
</style>
