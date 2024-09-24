<script setup>
import { reactive, ref, computed, defineEmits, onMounted } from "vue";

const emit = defineEmits(["render"]);
function render() {
  emit("render", students);
}
const students = reactive([]);
const fetchstudentData = async () => {
  try {
    const response = await fetch("/students.json");
    if (!response.ok) {
      throw new Error(`HTTP error : ${response.ststus}`);
    }
    const data = await response.json();
    return data.students;
  } catch (error) {
    console.log("error fetching students data");
    return [];
  }
};

onMounted(async () => {
  const studentData = await fetchstudentData();
  Object.assign(students, studentData);
});
</script>
<template>
  <div class="list">
    <h4>list rendering</h4>
    <span>click render to display list in outputs</span>
    <button @click="render">render list</button>
  </div>
</template>

<style scoped>
.list {
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
button {
  margin: 5px;
}
</style>