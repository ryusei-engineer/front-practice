<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
  article: Object,
});

const emit = defineEmits(["delete-article"]);
</script>

<template>
  <div>
    <RouterLink :to="{ name: 'ArticleDetail', params: { id: article.id }}">{{ article.title }}</RouterLink>
    <button @click="emit('delete-article', article.id)">削除</button>
  </div>
</template>

<style scoped>
</style>
