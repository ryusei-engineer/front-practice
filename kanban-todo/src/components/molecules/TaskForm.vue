<script setup>
import { ref } from 'vue'
import InputField from '../atoms/InputField.vue'
import ButtonAtom from '../atoms/ButtonAtom.vue'
import SelectAtom from '../atoms/SelectAtom.vue'
import { useTaskStore } from '@/Store/taskStore'
const taskStore = useTaskStore();
const task = ref('');
const priorityValue = ref('');
const emergencyValue = ref('');
const addTask = () => {
  taskStore.addTask(task.value, priorityValue.value, emergencyValue.value);
  task.value = "";
  priorityValue.value = "";
  emergencyValue.value = "";
}

const priorityOptions = [
  { value: '', label: '重要度' },
  { value: '高', label: '高' },
  { value: '中', label: '中' },
  { value: '低', label: '低' },
]

const emergencyOptions = [
  { value: '', label: '緊急度' },
  { value: '高', label: '高' },
  { value: '中', label: '中' },
  { value: '低', label: '低' },
]
</script>

<template>
  <div class="task-form">
    <InputField class="input-field" v-model="task" placeholder="タスクを入力" />
    <SelectAtom v-model="priorityValue" :options="priorityOptions" />
    <SelectAtom v-model="emergencyValue" :options="emergencyOptions" />
    <ButtonAtom class="button-atom" @click="addTask" label="追加" />
  </div>
</template>

<style scoped>
.task-form {
  display: flex;
  justify-self: center;
  gap: 10px;
}

.task-form > * {
  border: 1px solid rgb(131, 131, 131);
  border-radius: 4px;
}
.input-field{
  height: 36px;
  width: 260px;
  border: 1px solid rgb(131, 131, 131);
  border-radius: 4px;
}

::v-deep(input) {
  font-size: 14px;
}

.button-atom{
  width: 80px;
}

::v-deep(button) {
  font-size: 16px;
  color: #fff;
  background-color: rgb(49, 169, 9);
  border: none;
}
</style>
