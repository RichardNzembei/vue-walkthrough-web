<script setup>
import { reactive, ref, computed} from "vue";
const studentMajor = ref("CS");
const students = ref([
  { name: "joel" },
  { name: "gabriel" },
  { name: "collins" },
]);
const studentObj = reactive({
  name: "collins kimutai",
  yearOfStudy: "3rd year",
  major: "computer science",
});
const numbers=ref([1,2,3,4,5,6,7,8])
const evenNumbers=computed(()=>{
    return  numbers.value.filter((n)=>n%2===1)
})
</script>
<template>
  <div class="list">
    <h4>list rendering</h4>
    <li v-for="(student, index) in students" :key="index">
    {{ studentMajor }} -{{ index }}-{{ student.name }}
  </li>
  <ul>
    <h1>student details</h1>
    <li v-for="(value, key,index) in studentObj" :key="index">{{ key }}:{{ value }}</li>
  </ul>
  <li v-for="(n,index) in evenNumbers" :key="index">
    {{ n }}
  </li>
  </div>
 
</template>

<style scoped>
.list{
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