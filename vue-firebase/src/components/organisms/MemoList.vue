<template>
  <ul class="memo-list">
    <li v-for="memo in memoStore.memos" :key="memo.id">
      <span>{{ memo.text }}</span>
      <button @click="memoStore.deleteMemo(memo.id)">Delete</button>
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMemoStore } from '../../store/memoStore';

const memoStore = useMemoStore();

onMounted(() => {
  memoStore.fetchMemos();
});

//分割代入をするとreactiveでは無くなる
//const { memos, deleteMemo } = memoStore;
</script>

<style>
.memo-list {
  list-style: none;
  padding: 0;
}
.memo-list li {
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
}
</style>
