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
      <RouterLink to="/projectsdashboard" class="dropdown-item"><img src="../assets/images/projecticon.png" alt="" class="icon"> Projects</RouterLink>
      
     
      <a href="https://github.com/RichardNzembei" class="dropdown-item"><img src="../assets/images/github.png" alt="github icon" class="icon"> Github</a>
      <span class="icon icon-docs"></span>
      <a href="https://vuejs.org/" class="dropdown-item"><img src="../assets/images/docs.png" alt="documentation icon" class="icon"> Documentation</a>
    </div>
  </div>
</template>
  
  
  
  <style scoped>
  .drops{
    display: flex;
  }
 .icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
 
  margin: 1px 0 0;
  object-fit: cover;
}


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
  width: max-content;
}

.dropdown-item {
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
}

.dropdown-item:hover {
  color: blue;
  background-color: aliceblue;
}
</style>
  