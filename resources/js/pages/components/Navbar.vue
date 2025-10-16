<template>
  <nav class="navbar">
    <div class="logo">MyBlog</div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blogs">Blogs</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1f2937;
  padding: 15px 30px;
}
.logo {
  font-size: 1.5em;
  color: white;
  font-weight: bold;
}
ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
a {
  text-decoration: none;
  color: white;
}
a.router-link-active {
  border-bottom: 2px solid #3b82f6;
}
</style>
