<script setup>
import {reactive, ref} from 'vue'
import listCard from "@/components/listCard.vue";
import formCard from "@/components/formCard.vue";
import conditionCard from "@/components/conditionCard.vue";
import eventCard from "@/components/eventCard.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toHomePage = () => {
  router.push("/");
};
const toComponentsPage = () => {
  router.push("/componentsdashboard");
};
const submitedData=ref({
  name:'',
  selected:[]
})
const renderedlist=reactive([])
const handlerender=(data)=>{
  renderedlist.push(...data)
}
const submitData=(data)=>{
  submitedData.value=data
}
const showReview=ref(false)
const toggleReview=()=>{
  showReview.value=!showReview.value
}

</script>
<template>
  <div class="basicsProjects">
    <button @click="toHomePage">back</button>
    <button @click="toComponentsPage">next</button>
    <h3>Basics Implementations</h3>
    <span>step by step</span>
    <div class="basicsbody">
      <div class="sections">
        <listCard
        @render="handlerender"
        />
      </div>
      <div class="sections">
        <formCard 
        @submit="submitData"
        />
      </div>
      <div class="sections">
        <conditionCard />
      </div>
      <div class="sections">
        <eventCard />
      </div>
    </div>
    <div class="outputs">

      <span class="outputHeading">outputs</span>
      <div class="outputscard">
        <div class="outputcard">
        <h1>rendered list output</h1>
        <span>click render on top to see list!</span><br><br>
       <span><u><strong>students data</strong></u></span><br><br>
       <table >
        <tr>
          <th>Name</th>
          <th>Year Of study</th>
          <th>Major</th>
        </tr>
        <tr v-for="(student,index) in renderedlist" :key="index">
          <td>{{ student.name }}</td>
          <td>{{student.yearOfStudy }}</td>
          <td>{{ student.major }}</td>
        </tr>
       </table>
        </div>
       
        <div class="outputcard">
        <h1>form output</h1>
        <p>click review to see citizens opinion!</p>
        <div class="citizenreview">       
          <strong><span class="review" @click="toggleReview">review</span></strong><br><br>
          <div v-if="showReview">
            <span>{{ submitedData.name }}</span>
            <p>{{ submitedData.selected.join() }}</p>
          </div>       
        </div>
      </div>
 
      </div>
      </div>
      

    </div>

</template>
<style scoped>
table,th,td{
  border: 1px solid black;
  border-collapse: collapse;
  text-align: left;
  padding: 5px;
  margin: 0px 3px 3px 3px;
}
.outputscard{
  display: flex;
  margin: 5px;
  padding: 10px;

}
.review{
  margin: 5px;
 
  color: rgb(187, 107, 107);
  text-decoration: underline;
  font-weight:bolder;
  width: 100px;
}
.citizenreview{
  background-color: azure;
  width: max-content;
  padding: 10px 0;
}
.basicsProjects {
  background-color: rgb(252, 249, 249);
  padding: 10px 10px;
  margin: 0;
}
.basicsbody {
  padding: 20px;
  display: flex;
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
.outputcard{
  background-color: white;
  width: 300px;
  height: 500px;
  margin:  10px 10px ;
}
.outputHeading{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
}
h1{
  font-size: 25px;
  padding: 10px;
  margin: 10px 10px;
  color: rgb(84, 111, 134);
}
</style>