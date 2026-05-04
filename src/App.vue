<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/users">Users</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.router-link-active {
  color: #42b883;
  font-weight: bold;
}

main {
  padding: 0 20px;
}
</style>
