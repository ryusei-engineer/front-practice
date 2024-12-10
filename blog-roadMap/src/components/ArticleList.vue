<script setup>
import ArticleItem from './ArticleItem.vue';
import { defineProps } from 'vue';
defineProps({
  articles: Array,
});

const emit = defineEmits(['delete-article']);
</script>

<template>
  <ArticleItem
  v-for="article in articles"
  :key="article.id"
  :article="article"
  @delete-article="emit('delete-article', article.id)"
   ></ArticleItem>
</template>

<style scoped>
</style>
