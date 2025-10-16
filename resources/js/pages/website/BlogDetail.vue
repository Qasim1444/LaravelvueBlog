<template>
  <div class="blog-detail">
    <h2>Blog Title {{ $route.params.id }}</h2>
    <p>This is a detailed view of blog {{ $route.params.id }}.</p>
  </div>
</template>

<style scoped>
.blog-detail {
  max-width: 800px;
  margin: 40px auto;
}
</style>
