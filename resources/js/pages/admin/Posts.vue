<template>
  <div class="admin-layout">
    <AdminSidebar />
    <div class="content">
      <h2>Manage Posts</h2>
      <button>Add New Post</button>
      <ul>
        <li v-for="n in 3" :key="n">Post {{ n }} <button>Edit</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from '../../components/AdminSidebar.vue';
</script>
