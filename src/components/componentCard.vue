<script setup>
import { onMounted, ref } from "vue";
const fetchEventdata = async () => {
  try {
    const response = await fetch("/posts.json");
    if (!response.ok) {
      throw new Error(`HTTP error : ${response.ststus}`);
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.log("error fetching events data");
    return [];
  }
};
const posts = ref([]);
onMounted(async () => {
  posts.value = await fetchEventdata();
});

const emits = defineEmits(["buttonClicked"]);
const sendEvent = () => {
  emits("buttonClicked", "you Joined the event");
};
</script>
<template>
  <div class="posts">
    <div class="blogposts" v-for="post in posts" :key="post.title">
      <h4>{{ post.title }}</h4>

      <span><span class="postsAbout">Date:</span>{{ post.date }}</span
      ><br />
      <span class="postsAbout">Time:</span><strong>{{ post.time }}</strong
      ><br />
      <span><span class="postsAbout">Location:</span>{{ post.location }}</span>
      <p>{{ post.description }}</p>
      <button @click="sendEvent">join</button>
    </div>
  </div>
</template>
<style scoped>
.posts {
  display: flex;
}
.postsAbout {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgb(201, 121, 17);
  padding: 10px 10px;
  margin: 20px;
}
.blogposts {
  border: 2px solid rgb(125, 125, 160);
  height: 400px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  display: block;
  width: 400px;
  background-color: white;
}
h4 {
  color: rgb(90, 131, 131);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
button {
  margin: 100px 40px;
  width: 50px;
  background-color: rgb(177, 220, 221);
  border: none;
  border-radius: 5px;
  font-weight: bolder;
}
p {
  padding: 30px;
}
</style>