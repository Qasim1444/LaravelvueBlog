<template>
  <div class="blogs">
    <h2>Latest Blogs</h2>
    <div class="blog-card" v-for="n in 3" :key="n">
      <h3>Sample Blog {{ n }}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <router-link :to="`/blog/${n}`">Read More</router-link>
    </div>
  </div>
</template>

<style scoped>
.blogs {
  max-width: 800px;
  margin: 40px auto;
}
.blog-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>
