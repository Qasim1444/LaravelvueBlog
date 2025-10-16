<template>
  <section class="home">
    <h1>Welcome to My Blog</h1>
    <p>Explore tech tutorials, tips, and coding stories!</p>
    <router-link to="/blogs" class="btn">Read Blogs</router-link>
  </section>
</template>

<style scoped>
.home {
  text-align: center;
  margin-top: 80px;
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
