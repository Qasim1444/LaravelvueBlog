<template>
  <div class="auth-form">
    <h2>Login</h2>
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
    <router-link to="/register">Don’t have an account? Register</router-link>
  </div>
</template>

<style scoped>
.auth-form {
  width: 350px;
  margin: 80px auto;
  text-align: center;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
input, button {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}
button {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
