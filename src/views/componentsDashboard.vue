<script setup>
import componentCard from "@/components/componentCard.vue";
import {useRouter} from 'vue-router'
const router=useRouter()
const toHomePage=()=>{
    router.push('/')
}
const tobasicscard=()=>{
    router.push('/basicsdashboard')
}
function hanldebuttonclick() {}
</script>
<template>
  <div class="basicsProjects">
    <button @click="tobasicscard">back</button>
    <button @click="toComponentsPage">next</button>
    <h3>Components Implementations</h3>
    <span>step by step</span>
    <componentCard />
  </div>
</template>
<style scoped>
.basicsProjects {
  background-color: rgb(252, 249, 249);
  padding: 10px 10px;
  height: 100%;
}
h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  font-size: 30px;
}
h3:hover {
  color: rgb(84, 102, 102);
}
button {
  margin: 10px;
  background-color: rgb(221, 221, 209);
  border-radius: 3px;
}
</style>