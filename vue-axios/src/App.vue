<template>
  <div>
    <h1>Post List</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
    <button @click="fetchPosts">Fetch Posts</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const posts = ref([]);
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  posts.value = response.data;
}

</script>
