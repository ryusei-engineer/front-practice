<script setup>
import { ref } from 'vue';

const title = ref("");
const content = ref("");
const emit = defineEmits(["add-memo"]);

const submitMemo = () => {
  emit("add-memo", {
    title: title.value,
    content: content.value,
  });
  title.value = "";
  content.value = "";
}
</script>

<template>
  <form @submit.prevent="submitMemo">
    <input v-model="title" type="text" placeholder="メモのタイトル" required>
    <textarea v-model="content" name="" id="" placeholder="メモの内容"></textarea>
    <button>追加</button>
  </form>
</template>

<style scoped>
form {
  margin-bottom: 20px;
}

input, textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}

button {
  padding: 10px 20px;
}
</style>
