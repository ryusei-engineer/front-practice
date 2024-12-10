<template>
  <ul>
    <ArticleItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
      @delete-article="emit('delete-article', article.id)"
    />
  </ul>
</template>

<script setup>
import ArticleItem from './ArticleItem.vue';

defineProps({
  articles: Array,
});

const emit = defineEmits(['delete-article']);
</script>
