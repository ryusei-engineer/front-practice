<template>
  <div class="memo-page">
    <h1>Memo App</h1>
    <MemoForm />
    <MemoList />
  </div>
</template>

<script setup>
import MemoForm from '../molecules/MemoForm.vue';
import MemoList from '../organisms/MemoList.vue';
</script>

<style>
.memo-page {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
</style>
