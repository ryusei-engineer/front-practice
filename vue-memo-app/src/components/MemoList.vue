<script setup>
import { onMounted } from 'vue';
import { useMemoStore } from '../store/memo';

const memoStore = useMemoStore();

onMounted(async () => {
  await memoStore.getMemos()
});
</script>

<template>
  <div>
    memolist
    {{ memoStore.memos }}
    <div v-for="memo in memoStore.memos" :key="memo.id">
      <p>{{ memo.text }}</p>
    </div>
  </div>
</template>