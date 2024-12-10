<template>
  <form @submit.prevent="submitArticle">
    <input v-model="title" placeholder="記事タイトル" required />
    <textarea v-model="body" placeholder="記事内容" required></textarea>
    <button type="submit">投稿</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const body = ref('');

const emit = defineEmits(['add-article']);

const submitArticle = () => {
  emit('add-article', { title: title.value, body: body.value });
  title.value = '';
  body.value = '';
};
</script>
