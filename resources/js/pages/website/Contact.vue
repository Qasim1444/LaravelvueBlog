<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button>Send</button>
    </form>
  </div>
</template>

<style scoped>
form {
  max-width: 500px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input, textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
}
</style>
