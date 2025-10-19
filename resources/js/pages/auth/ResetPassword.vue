<template>
    <div class="auth-form">
      <h2>Reset Password</h2>
      <form @submit.prevent="reset">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="token" type="text" placeholder="Reset Token" required />
        <input v-model="password" type="password" placeholder="New Password" required />
        <input v-model="password_confirmation" type="password" placeholder="Confirm Password" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from '../../api';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const email = ref('');
  const token = ref('');
  const password = ref('');
  const password_confirmation = ref('');
  
  const reset = async () => {
    try {
      await axios.post('/reset-password', {
        email: email.value,
        token: token.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      });
      alert('Password reset successful!');
      router.push('/login');
    } catch {
      alert('Reset failed.');
    }
  };
  </script>
  