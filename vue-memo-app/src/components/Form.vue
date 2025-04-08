<script setup>
import { ref } from 'vue';
import { useMemoStore } from '../store/memo';

const memoStore = useMemoStore();

const newMemoText = ref("");

const addMemo = ()=> {
  memoStore.addMemo(newMemoText.value);
  newMemoText.value = "";
}
</script>

<template>
  form
  <form @submit.prevent="addMemo">
    <input v-model="newMemoText">
    <button>追加</button>
  </form>
</template>