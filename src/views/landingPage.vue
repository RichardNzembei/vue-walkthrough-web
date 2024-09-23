<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toBasicsCard = () => {
  router.push("/basicsdashboard");
};
const toComponentsCard = () => {
  router.push("/componentsdashboard");
};
</script>
<template>
  <div class="welcome">
    <div class="profile">
      <h3>My vue js WAlkthrough</h3>
    </div>
    <div class="guide">
      <div class="sections">
        <h4>vue Basic</h4>
        <ul>
          <li>computed properties</li>
          <li>conditional rendering</li>
          <li>list rendering</li>
          <li>event handling</li>
          <li>form input binding</li>
          <li>lifecycle hooks</li>
          <li>watchers</li>
        </ul>
        <button @click="toBasicsCard">Implementations</button>
      </div>
      <div class="sections">
        <h4>Components</h4>
        <ul>
          <li>registration</li>
          <li>props</li>
          <li>events</li>
          <li>component v-model</li>
          <li>slots</li>
          <li>async components</li>
          <li>provide/inject</li>
        </ul>
        <button @click="toComponentsCard">Implementations</button>
      </div>
      <div class="projects"></div>
    </div>
  </div>
</template>
<style scoped>
.welcome {
  background-color: azure;
  padding: 10px 10px;
  margin: 20px;
  justify-content: center;
}
.guide {
  background-color: white;
  display: flex;
  justify-content: center;
}
.profile {
  background-color: rgb(4, 44, 44);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 5px;
}
h3 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-display: inherit;
  font-weight: bolder;
  color: white;
}
h4 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-decoration: underline;
  font-size: 20px;
}
.sections {
  border: 3px solid rgb(77, 77, 124);
  padding: 10px 10px;
  margin: 10px;
  align-items: flex-start;
}
.sections li {
  color: rgb(82, 110, 110);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
}
button {
  background-color: rgb(71, 73, 73);
  border-radius: 3px;
  color: white;
}
button:hover {
  background-color: rgb(92, 92, 145);
}
</style>