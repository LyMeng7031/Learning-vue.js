<script setup>
// Define what the button needs from the parent
defineProps({
  label: String,
  type: {
    type: String,
    default: "button",
  },
});
</script>

<template>
  <button :type="type" class="btn-primary">
    {{ label }}
  </button>
</template>

<style scoped>
.btn-primary {
  background-color: #42b883;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: #35495e;
}
</style>
