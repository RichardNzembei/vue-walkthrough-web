<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
<template>
  <div class="dropdown-container">
    <button @click="toggleDropdown" class="dropdown-button">Menu</button>
    <div v-if="isDropdownOpen" class="dropdown-menu">
      <RouterLink to="/projectsdashboard" class="dropdown-item"
        >Projects</RouterLink
      >
      <a href="https://github.com/RichardNzembei" class="dropdown-item"
        >Github</a
      >
      <a href="https://vuejs.org/" class="dropdown-item">Documentation</a>
    </div>
  </div>
</template>
  
  
  
  <style scoped>
.dropdown-container {
  position: relative;
  display: inline-block;
  margin: 5px;
}

.dropdown-button {
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dropdown-button:hover {
  background-color: #2980b9;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1;
  margin: 4px;
}

.dropdown-item {
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
}

.dropdown-item:hover {
  color: blue;
}
</style>
  