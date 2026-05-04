import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  // State: The data
  const name = ref("Ly Meng");
  const isLoggedIn = ref(false);

  // Getters: Computed data based on state
  const welcomeMessage = computed(() => {
    return isLoggedIn.value ? `Welcome back, ${name.value}!` : "Please log in.";
  });

  // Actions: Functions to change the data
  function toggleLogin() {
    isLoggedIn.value = !isLoggedIn.value;
  }

  function updateName(newName) {
    name.value = newName;
  }

  return { name, isLoggedIn, welcomeMessage, toggleLogin, updateName };
});
