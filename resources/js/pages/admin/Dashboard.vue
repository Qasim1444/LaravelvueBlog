<template>
  <div class="admin-layout">
    <AdminSidebar />
    <div class="content">
      <h2>Dashboard</h2>
      <p>Welcome to the admin dashboard!</p>
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from '../../components/AdminSidebar.vue';
</script>

<style scoped>
.admin-layout {
  display: flex;
}
.content {
  flex: 1;
  padding: 30px;
}
</style>
