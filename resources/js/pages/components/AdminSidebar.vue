<template>
  <aside class="sidebar">
    <h3>Admin Panel</h3>
    <ul>
      <li><router-link to="/admin">Dashboard</router-link></li>
      <li><router-link to="/admin/posts">Posts</router-link></li>
      <li><router-link to="/admin/categories">Categories</router-link></li>
      <li><router-link to="/admin/users">Users</router-link></li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  background: #111827;
  color: white;
  min-height: 100vh;
  padding: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 15px 0;
}
a {
  color: #d1d5db;
  text-decoration: none;
}
a.router-link-active {
  color: #3b82f6;
}
</style>
