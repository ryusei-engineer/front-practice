<template>
  <div v-if="article">
    <h2>{{ article.title }}</h2>
    <p>{{ article.body }}</p>
    <router-link :to="{ name: 'ArticleEdit', params: { id: article.id } }">編集</router-link>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const article = ref(null);

onMounted(async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
  article.value = response.data;
});
</script>
