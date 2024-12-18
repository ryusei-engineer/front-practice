<!-- src/templates/TaskDashboard.vue -->
<template>
  <div class="dashboard">
    <TaskForm @add="addTask" />
    <TaskList :tasks="tasks" @delete="deleteTask" />
  </div>
</template>

<script setup>
import TaskForm from '../components/organisms/TaskForm.vue';
import TaskList from '../components/organisms/TaskList.vue';
import { ref } from 'vue';

const tasks = ref([
  { id: 1, title: 'Vueの学習', completed: false },
  { id: 2, title: 'Atomic Designの理解', completed: false },
]);

const addTask = (title) => {
  tasks.value.push({ id: Date.now(), title, completed: false });
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
};
</script>
