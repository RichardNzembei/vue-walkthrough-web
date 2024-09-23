<script setup>
import { ref } from "vue";
const FormData=ref({
  name:'',
  selected:[]
})
const emit=defineEmits(['submit'])
function submitData(){
  emit('submit',{...FormData.value})
}
</script>
<template>
  <div class="form">
    <h4>form input binding</h4>
    <p>citizens opinion</p>
   <div class="formCard">
    <form @submit.prevent="submitData">
    <label class="label" for="visitorname" > Enter Name</label><br><br>
    <input type="text" placeholder="Your Name.." v-model="FormData.name"><br><br>
    <label class="label" for="Politicalstand">Political Stand</label><br><br>
    <select name="politicalstand" id="politics" v-model="FormData.selected" multiple >
      <option disabled value=""><u>leave your opinion!</u></option>
      <option value="I support the government">I support the government</option>
      <option value="i don't support the government">i don't support the government</option>
      <option value="Tired">Tired</option>
      <option value="Not really interested">Not really interested</option>
      <option value="other">other</option>
    </select>
<button type="submit">submit data</button>
  </form>
   </div>

  </div>
 
</template>
<style scoped>
.form{
  background-color: aliceblue;
  padding: 5px 5px;
  margin: 5px 5px ;
  width: 300px;
}
.formCard{
  padding: 10px;
  
}
.label{
  color: rgb(124, 136, 136);
  font-weight: bolder;
}
input{
  border-radius: 5px;
  text-decoration: none;
  border: none;
  padding: 10px;
}
h4{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-decoration: underline;
    font-size: 20px;
}
button{
  margin: 10px;
  border: none;
  background-color: rgba(16, 17, 17, 0.849);
  color: white;
  border-radius: 4px;
}
</style>