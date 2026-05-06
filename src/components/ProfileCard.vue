<script setup>
import { ref } from "vue";

const name = ref("Ly Meng Developer");
const age = ref(18);
const bio = ref("Learning Vue.js to build awesome things!");
const showDetails = ref(false);
const skills = ref(["JavaScript", "Vue.js", "CSS", "Vite"]);
</script>

<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <button @click="showDetails = !showDetails">
      {{ showDetails ? "Hide" : "Show" }} Details
    </button>

    <div v-if="showDetails">
      <p>Age: {{ age }}</p>
      <p>{{ bio }}</p>
      <h3>Skills:</h3>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  text-align: center;
  padding: 20px;
}

h1 {
  color: var(--vue-blue);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.skills-list {
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding: 0;
}

.skills-list li {
  background: #e1f5fe;
  color: #01579b;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
}
</style>
