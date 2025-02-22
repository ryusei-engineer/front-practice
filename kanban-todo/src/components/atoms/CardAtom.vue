<script setup>
import { defineProps } from 'vue'
import ButtonAtom from './ButtonAtom.vue'
import { useTaskStore } from '@/Store/taskStore'

const taskStore = useTaskStore()

defineProps({
  columnName: String,
  taskId: String,
  taskName: String,
  importance: String,
  urgency: String,
})

const deleteTask = (taskId, columnName) => {
  console.log(taskId)
  console.log(columnName)
  taskStore.deleteTask1(taskId, columnName)
  taskStore.getTasks()
}
</script>
<template>
  <div class="parent">
    <div>
      <p>{{ taskName }}</p>
      <span>重要度:{{ importance }}</span>
      <span>緊急度:{{ urgency }}</span>
    </div>
    <ButtonAtom class="deleteButton" @click="deleteTask(taskId, columnName)" label="削除" />
  </div>
</template>

<style scoped>
p {
  margin: 0;
  padding: 4px 0;
  font-size: 18px;
}
span + span {
  margin: 0 0 0 12px;
}
.parent {
  position: relative;
}

.deleteButton {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 48px;
  height: 30px;
  font-size: 16px;
  background-color: rgb(255, 69, 69);
  color: #fff;
  border: none;
  border-radius: 4px;
}
</style>
