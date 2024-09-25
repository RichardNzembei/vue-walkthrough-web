<script setup>
import landingPage from "./landingPage.vue";

import { useRouter } from "vue-router";
const router = useRouter();
const toHomePage = () => {
  router.push("/");
};
</script>
<template>
  <div class="basicsProjects">
    <button @click="toHomePage">back</button>

    <h3>Live projects</h3>
    <span class="message"
      >click <strong class="messageId">live</strong> or
      <strong class="messageId">codebase</strong> buttons to view the projects
      in depth</span
    >
    <div class="guide">
      <div class="sections">
        <h4 class="head">Vendor web App</h4>
        <span>its a online fruits,veges and cereals shop!</span><br />
        <img src="../assets/images/vendor.png" alt="" />
        <div class="buttons">
          <a href="https://vendor-web-app.onrender.com/" class="livebutton"
            >live</a
          >
          <a
            href="https://github.com/RichardNzembei/vendor-web-app.git"
            class="livebutton"
            >CodeBase</a
          >
        </div>
      </div>
      <div class="sections">
        <h4 class="head">Todo MVC</h4>
        <span>A tasks tracker and do`s planning</span><br />
        <img src="../assets/images/todo.png" alt="" />
        <div class="buttons">
          <a href="https://todo-app-1-pcc4.onrender.com/" class="livebutton"
            >live</a
          >
          <a
            href="https://github.com/RichardNzembei/todo-app.git"
            class="livebutton"
            >CodeBase</a
          >
        </div>
      </div>
      <div class="sections">
        <h4 class="head">Vue Walkthrough</h4>
        <span>its a web documentation of my vue js learning curve</span><br />
        <img src="../assets/images/vuuWalkthrough.png" alt="" />
        <div class="buttons">
          <a href="https://vue-walkthrough-web.onrender.com/" class="livebutton"
            >live</a
          >
          <a
            href="https://github.com/RichardNzembei/vue-walkthrough-web.git"
            class="livebutton"
            >CodeBase</a
          >
        </div>
      </div>
      <div class="sections">
        <h4 class="head">Student Portal</h4>
        <span>its a Kabarak Student portal makeover</span><br />
        <img src="../assets/images/portal.png" alt="" />
        <div class="buttons">
          <a href="https://student-portal-66qh.onrender.com/" class="livebutton"
            >live</a
          >
          <a
            href="https://github.com/RichardNzembei/student-portal.git"
            class="livebutton"
            >CodeBase</a
          >
        </div>
      </div>
      <div class="projects"></div>
    </div>
  </div>
</template>
<style scoped>
.message {
  justify-content: center;
  display: flex;
  margin: 10px;
}
.messageId {
  margin: 2px 10px;
}
.head {
  background-color: #8dbbce;
  padding: 5px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin: 30px;
  background-color: aliceblue;
}
.livebutton {
  text-decoration: none;

  padding: 3px;
  border-radius: 5px;
  background-color: rgb(183, 200, 209);
}
.basicsProjects {
  background-color: rgb(252, 249, 249);
  padding: 10px 10px;
  height: 100%;
}
h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  font-size: 30px;
  text-align: center;
}
h3:hover {
  color: rgb(84, 102, 102);
}
button {
  margin: 10px;
  background-color: rgb(221, 221, 209);
  border-radius: 3px;
}
.guide {
  background-color: white;
  display: flex;
  justify-content: center;
  margin: 50px;
}
.sections {
  border: 3px solid rgb(77, 77, 124);
  padding: 10px 10px;
  margin: 10px;
  align-items: flex-start;
  height: 100%;
  border-radius: 5px;
}
.sections img {
  width: 300px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>