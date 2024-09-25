<script setup>
import { onMounted, ref } from "vue";
const loading = ref(false);
const fetchEventdata = async () => {
  try {
    loading.value = true;
    const response = await fetch("/posts.json");
    if (!response.ok) {
      throw new Error(`HTTP error : ${response.ststus}`);
    }
    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data.posts;
  } catch (error) {
    console.log("error fetching events data");
    return [];
  } finally {
    loading.value = false;
  }
};
const posts = ref([]);
onMounted(async () => {
  posts.value = await fetchEventdata();
});
const message = ref("welcome to the events dashboard");
const emit = defineEmits(["view"]);
const view = () => {
  emit("view", message.value);
};
</script>
<template>
  <div v-if="loading" class="spinner"></div>
  <div class="posts" v-if="!loading && posts.length">
    <div class="blogposts" v-for="post in posts" :key="post.title">
      <h4>{{ post.title }}</h4>

      <span><span class="postsAbout">Date:</span>{{ post.date }}</span
      ><br />
      <span class="postsAbout">Time:</span><strong>{{ post.time }}</strong
      ><br />
      <span><span class="postsAbout">Location:</span>{{ post.location }}</span>
      <p>{{ post.description }}</p>
      <button @click="view">View</button>
    </div>
  </div>
</template>
<style scoped>
.posts {
  display: flex;
  justify-content: center;
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
.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1.5s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>