<script setup>
import MemoForm from '@/components/MemoForm.vue';
import MemoList from '@/components/MemoList.vue';
import { onMounted, ref } from 'vue';
const memos = ref([]);

onMounted(() => {
  const savedMemos = JSON.parse(localStorage.getItem('memos')) || [];
  memos.value = savedMemos;
})

const addMemo = (memo) => {
  memos.value.push({
    id: Date.now(),
    ...memo,
  });
  saveToLocalStorage();
}

const deleteMemo = (id) => {
  memos.value = memos.value.filter(m => m.id !== id);
  saveToLocalStorage();
}

const saveToLocalStorage = () => {
  localStorage.setItem("memos", JSON.stringify(memos.value));
}
</script>

<template>
  <h1>メモ帳アプリ</h1>
  <MemoForm @add-memo="addMemo"/>
  <MemoList :memos="memos" @delete-memo="deleteMemo"/>
</template>

<style scoped>
</style>
