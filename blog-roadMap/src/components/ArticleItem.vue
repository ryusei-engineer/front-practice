<template>
  <li>
    <router-link :to="{ name: 'ArticleDetail', params: { id: article.id } }">{{ article.title }}</router-link>
    <button @click="emit('delete-article')">削除</button>
  </li>
</template>

<script setup>
defineProps({
  article: Object,
});

const emit = defineEmits(['delete-article']);
</script>
