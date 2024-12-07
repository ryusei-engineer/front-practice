<script setup>
import { ref } from 'vue';
import { statuses } from '@/const/statuses';

const input = ref("");
const inputDate = ref("");
const isErrMsg = ref(false);

function onSubmitForm () {
  if(input.value == "" || inputDate.value == ""){
    isErrMsg.value = true;
    Event.preventDefault();
    return;
  }

  const items = JSON.parse(localStorage.getItem("items")) || [];

  const newItem = {
    id: items.length,
    content: input.value,
    limit: inputDate.value,
    state: statuses.NOT_START,
    onEdit: false, 
  };

  items.push(newItem);

  localStorage.setItem("items", JSON.stringify(items));
} 
</script>

<template>
  <div>
    <form @submit="onSubmitForm">
      <label for="">やること<input type="text" v-model="input"></label>
      <label for="">期限<input type="date" v-model="inputDate"></label>
      <input type="submit" value="登録">
    </form>
    <p v-if="isErrMsg">タスク・期限を入力してください。</p>
  </div>
</template>