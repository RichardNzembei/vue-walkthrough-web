<script setup>
import { ref } from "vue";
const text = ref("");
const checked = ref("");
</script>
<template>
  <div class="form">
    <h4>form input binding</h4>
    <input v-model.trim="text" />
  <p>{{ text }}</p>
  <h1>checkbox</h1>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  </div>
 
</template>
<style scoped>
.form{
  background-color: aliceblue;
  padding: 5px 5px;
  margin: 5px 5px ;
  width: 300px;
}
h4{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-decoration: underline;
    font-size: 20px;
}
</style>