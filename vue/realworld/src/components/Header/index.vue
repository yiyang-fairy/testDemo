<script setup lang="ts"></script>

<template>
  <div class="m-w header">
    <div>conduit</div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Sign in</router-link>
      <router-link to="/register">Sign up</router-link>
      <router-link to="/articles">Articles</router-link>
      <router-link to="/settings">Settings</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>

<style scoped>
a {
  color: rgba(0, 0, 0, 0.3);
  text-decoration: none;
  padding: 6.8px 0;
  margin: 0 8px;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
}
</style>
