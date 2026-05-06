<script setup>
const userList = [
  { id: 1, name: "Ly Meng", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Manager" },
];
</script>

<template>
  <div>
    <h1>Users Page</h1>
    <ul>
      <li v-for="user in userList" :key="user.id">
        {{ user.name }} - {{ user.role }}
      </li>
    </ul>
  </div>
</template>
