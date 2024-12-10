<script setup>
import { ref } from 'vue';

const title = ref("");
const body = ref("");

const emit = defineEmits(["add-article"]);

const addArticle = () => {
  emit("add-article", {
    title: title.value,
    body: body.value,
  });

  title.value = "";
  body.value = "";
}
</script>

<template>
  <form @submit.prevent="addArticle">
    <input v-model="title" type="text" placeholder="記事タイトル">
    <textarea v-model="body" placeholder="記事内容"></textarea>
    <button type="submit">追加</button>
  </form>
</template>

<style scoped>
</style>
