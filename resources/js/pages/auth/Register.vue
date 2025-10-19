<template>
  <div class="auth-form">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import axios from '../../api';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');

const register = () => {
  axios
    .post('/register', {
      name: name.value,
      email: email.value,
      password: password.value,
    })
    .then(() => {
      alert('Registered! Please login.');
      router.push('/login');
    })
    .catch(() => {
      alert('Registration failed');
    });
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
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
