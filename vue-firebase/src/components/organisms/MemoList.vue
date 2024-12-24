<template>
  <ul class="memo-list">
    <li v-for="memo in memoStore.memos" :key="memo.id">
      <span>{{ memo.text }}</span>
      <Button @click="memoStore.deleteMemo(memo.id)" label="Delete"></Button>
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMemoStore } from '../../store/memoStore';
import Button from '../atoms/Button.vue';
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
