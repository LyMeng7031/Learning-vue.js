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
