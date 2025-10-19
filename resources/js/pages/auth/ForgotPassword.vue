<template>
    <div class="auth-form">
      <h2>Forgot Password</h2>
      <form @submit.prevent="sendLink">
        <input v-model="email" type="email" placeholder="Enter your email" required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from '../../api';
  import { ref } from 'vue';
  
  const email = ref('');
  
  const sendLink = async () => {
    try {
      await axios.post('/forgot-password', { email: email.value });
      alert('Password reset link sent!');
    } catch {
      alert('Unable to send reset link');
    }
  };
  </script>