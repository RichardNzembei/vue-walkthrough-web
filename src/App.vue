<script setup>
import { ref } from "vue";
</script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>  
<style>
h2 {
  color: black;
  text-decoration: underline;

  text-align: center;
}
.vuebasics {
  border: 1px solid black;
  width: 400px;
  border-radius: 10px;
}
.components {
  border: 1px solid rgb(22, 22, 21);
  width: 400px;
  position: absolute;
  left: 450px;
  top: 0;
  border-radius: 10px;
}
</style>