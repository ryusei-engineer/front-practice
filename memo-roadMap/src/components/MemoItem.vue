<script setup>
import { RouterLink } from 'vue-router';
defineProps({
  memo: Object,
})

defineEmits(["delete-memo"])
</script>

<template>
  <li>
    <!-- <RouterLink :to="`/memo/${memo.id}`">{{ memo.title }}</RouterLink> -->
    <RouterLink :to="{ name: 'MemoDetail', params: { id: memo.id } }">{{ memo.title }}</RouterLink>
    <button @click="$emit('delete-memo')">削除</button>
  </li>
</template>

<style scoped>
</style>
