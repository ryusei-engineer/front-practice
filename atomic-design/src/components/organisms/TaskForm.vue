<!-- src/components/organisms/TaskForm.vue -->
<template>
  <div class="task-form">
    <InputField v-model="newTask" placeholder="タスクを入力" />
    <Button label="追加" @click="addTask" />
  </div>
</template>

<script setup>
import InputField from '../atoms/InputField.vue';
import Button from '../atoms/Button.vue';
import { ref, defineEmits } from 'vue';

const newTask = ref('');
const emit = defineEmits(['add']);

const addTask = () => {
  if (newTask.value.trim()) {
    emit('add', newTask.value);
    newTask.value = '';
  }
};
</script>
