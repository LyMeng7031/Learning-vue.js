<script setup>
import { reactive, ref } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";

// Use reactive for form objects
const form = reactive({
  name: "",
  email: "",
  message: "",
});

const errors = ref({});

const validateForm = () => {
  errors.value = {}; // Reset errors

  if (!form.name) errors.value.name = "Name is required";
  if (!form.email.includes("@")) errors.value.email = "Invalid email";
  if (!form.message) errors.value.message = "Message cannot be empty";

  if (Object.keys(errors.value).length === 0) {
    alert("Form Submitted Successfully!");
    // Reset form
    form.name = "";
    form.email = "";
    form.message = "";
  }
};
</script>

<template>
  <form @submit.prevent="validateForm" class="contact-form">
    <div>
      <input v-model="form.name" placeholder="Name" />
      <span v-if="errors.name" class="error">{{ errors.name }}</span>
    </div>

    <div>
      <input v-model="form.email" placeholder="Email" />
      <span v-if="errors.email" class="error">{{ errors.email }}</span>
    </div>

    <div>
      <textarea v-model="form.message" placeholder="Message"></textarea>
      <span v-if="errors.message" class="error">{{ errors.message }}</span>
    </div>

    <ButtonPrimary label="Send Message" type="submit" />
  </form>
</template>
s
<style scoped>
.error {
  color: red;
  font-size: 0.8rem;
  display: block;
}
.contact-form div {
  margin-bottom: 15px;
}
input,
textarea {
  width: 100%;
  padding: 8px;
}
</style>
