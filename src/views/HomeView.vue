<script setup lang="ts">
import ProfileCard from "../components/ProfileCard.vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
</script>

<template>
  <ProfileCard />
  <div>
    <h1>{{ userStore.welcomeMessage }}</h1>
    <p>User: {{ userStore.name }}</p>

    <button @click="userStore.toggleLogin">
      {{ userStore.isLoggedIn ? "Logout" : "Login" }}
    </button>

    <input v-model="userStore.name" placeholder="Change your name globally" />
  </div>
</template>
<style scoped>
.login-panel {
  margin-top: 30px;
  padding: 20px;
  border-top: 2px dashed #eee;
  background-color: #f0fff4;
  border-radius: 8px;
}

.welcome-text {
  color: #2f855a;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
