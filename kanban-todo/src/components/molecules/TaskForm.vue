<script setup>
import { ref } from 'vue'
import InputField from '../atoms/InputField.vue'
import ButtonAtom from '../atoms/ButtonAtom.vue'
import SelectAtom from '../atoms/SelectAtom.vue'
const task = ref('');
const priorityValue = ref("");
const emergencyValue = ref("");
const addTask = () => {}

const priorityOptions = [
  { value: '', label: '重要度' },
  { value: 'high', label: '高' },
  { value: 'medium', label: '中' },
  { value: 'low', label: '低' },
]

const emergencyOptions = [
  { value: '', label: '緊急度' },
  { value: 'high', label: '高' },
  { value: 'medium', label: '中' },
  { value: 'low', label: '低' },
]
</script>

<template>
  <InputField v-model="task" placeholder="タスクを入力" />
  <SelectAtom v-model="priorityValue" :options="priorityOptions" />
  <SelectAtom v-model="emergencyValue" :options="emergencyOptions" />
  <ButtonAtom @click="addTask" label="追加" />
</template>

<style scoped></style>
