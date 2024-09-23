<script setup>
import { ref } from 'vue';

const grade=ref('A')
</script>
<template>
   <div class="condition">
    <h4>conditional rendering</h4>
    <h1 v-if="grade==='A'"> Excellent!</h1> 
  <h2  v-else-if="grade==='B'">great!</h2>
  <h4 v-else-if="grade==='C'">nice trial</h4>
  <h5 v-else>fail</h5>
   </div>

</template>
<style scoped>
.condition{
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