<script setup>
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
</script>
<template>
  <div class="basicsProjects">
    <button @click="toHomePage">back</button>
    <button @click="toComponentsPage">next</button>
    <h3>Basics Implementations</h3>
    <span>step by step</span>
    <div class="basicsbody">
      <div class="sections">
        <listCard />
      </div>
      <div class="sections">
        <formCard />
      </div>
      <div class="sections">
        <conditionCard />
      </div>
      <div class="sections">
        <eventCard />
      </div>
    </div>
  </div>
</template>
<style scoped>
.basicsProjects {
  background-color: rgb(252, 249, 249);
  padding: 10px 10px;
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
</style>