<script setup>
import MemoItem from "./MemoItem.vue";
defineProps({
  memos: Array,
})
const emit = defineEmits(["delete-memo"])
</script>

<template>
  <MemoItem v-for="memo in memos" :key="memo.id" :memo="memo" @delete-memo="emit('delete-memo', memo.id)"/>
</template>

<style scoped>
</style>
