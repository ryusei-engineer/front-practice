<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
const route = useRoute();
const memo = ref({
  title: "",
  content: "",
});

onMounted(() => {
  const memos = JSON.parse(localStorage.getItem("memos")) || [];
  memo.value = memos.find(m => m.id === parseInt(route.params.id))
})
</script>

<template>
  <div>
    <p>{{ memo.title }}</p>
    <p>{{ memo.content }}</p>
    <RouterLink to="/">戻る</RouterLink>
  </div>
</template>

<style scoped>
</style>
