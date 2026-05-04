<script setup>
import { ref, computed } from "vue";

// State (ref)
const count = ref(0);

// Methods (Functions)
const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => (count.value = 0);

// Computed Property
const message = computed(() => {
  return count.value > 10 ? "🔥 High Score!" : "Keep going...";
});
</script>
<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <p>{{ message }}</p>

    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
    <button @click="increment">+</button>
  </div>
</template>
<style scoped>
/* Optional styling */
.counter-container {
  text-align: center;
  padding: 20px;
}
button {
  margin: 5px;
  padding: 10px;
}
</style>
