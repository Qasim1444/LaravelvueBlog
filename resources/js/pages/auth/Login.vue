<template>
  <div class="auth-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <router-link to="/forgot-password">Forgot Password?</router-link>
  </div>
</template>

<script setup>
import axios from '../../api';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const res = await axios.post('/login', { email: email.value, password: password.value });
    localStorage.setItem('token', res.data.token);
    router.push('/');
  } catch (e) {
    alert('Invalid credentials');
  }
};
</script>


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
