<script setup>
import HomeTemplate from '../templates/HomeTemplate.vue';
import TaskColumn from '../molecules/TaskColumn.vue';
import { ref } from 'vue';
const tasks = ref([
  { name: 'task1', id: 0, importance: "高", urgency: "高" },
  { name: 'task2', id: 1, importance: "高", urgency: "高" },
  { name: 'task3', id: 2, importance: "高", urgency: "高" },
  { name: 'task4', id: 3, importance: "高", urgency: "高" },
  { name: 'task5', id: 4, importance: "高", urgency: "高" },
]);
const tasks2 = ref([]);
const tasks3 = ref([]);
</script>

<template>
  <HomeTemplate />
  <TaskColumn columnName="未着手" group="task-group" :list="tasks"/>
  <TaskColumn columnName="進行中" group="task-group" :list="tasks2"/>
  <TaskColumn columnName="完了" group="task-group" :list="tasks3"/>
</template>

<style scoped>
</style>
