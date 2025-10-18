<template>
  <div class="admin-layout">
    <AdminSidebar />
    <div class="content">
      <h2>Users</h2>
      <table>
        <tr><th>Name</th><th>Email</th></tr>
        <tr><td>John Doe</td><td>john@example.com</td></tr>
        <tr><td>Jane Smith</td><td>jane@example.com</td></tr>
      </table>
    </div>
  </div>
</template>

<script setup>
 import AdminSidebar from '../components/AdminSidebar.vue';
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
