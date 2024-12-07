<template>
  <form @submit.prevent="submitTask">
    <input v-model="newTask" type="text">
    <button type="submit">追加</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const newTask = ref("");

const emit = defineEmits(["add-task"])
const submitTask = () => {
  if(newTask.value.trim()) {
    emit("add-task", newTask.value);
    newTask.value = "";
  }
}
</script>