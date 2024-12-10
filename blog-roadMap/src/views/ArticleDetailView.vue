<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const article = ref(null);
const route = useRoute();

onMounted(async() => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
  article.value = response.data;
})
</script>

<template>
  <div v-if="article">
    <h2>{{ article.title }}</h2>
    <p>{{ article.body }}</p>
    <RouterLink to="/">戻る</RouterLink>
  </div>
</template>

<style scoped>
</style>
