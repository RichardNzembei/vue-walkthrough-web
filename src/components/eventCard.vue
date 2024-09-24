<script setup>
import { ref } from "vue";

const name = ref("agent keen");
function greet(event) {
  alert(`hello ${name.value}`);
}
</script>
<template>
  <div class="event">
    <h4>Event andling</h4>
    <button @click="greet">greet</button>
  </div>
</template>
<style scoped>
.event {
  background-color: aliceblue;
  padding: 5px 5px;
  margin: 5px 5px;
  width: 300px;
}
h4 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-decoration: underline;
  font-size: 20px;
}
</style>