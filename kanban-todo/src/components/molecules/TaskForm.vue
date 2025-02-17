<script setup>
import { ref } from 'vue'
import InputField from '../atoms/InputField.vue'
import Select from '../atoms/SelectAtom.vue'
import ButtonAtom from '../atoms/ButtonAtom.vue'

const task = ref('')
const priority = ref('')
const emergency = ref('')

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

const addTask = () => {}
</script>

<template>
  <InputField v-model="task" placeholder="タスクを入力" />
  <Select v-model="priority" :options="priorityOptions" />
  <Select v-model="emergency" :options="emergencyOptions" />
  <ButtonAtom label="追加" @click="addTask" />
  {{ task }}
</template>

<style scoped></style>
