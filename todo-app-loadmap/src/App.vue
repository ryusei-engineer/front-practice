<script setup>
import TaskFrom from './components/TaskFrom.vue';
import TaskList from './components/TaskList.vue';
import { ref } from 'vue';

const tasks = ref([]);

const addTask = (task) => {
  tasks.value.push({ text: task, completed: false});
}

const toggleCompleted = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

</script>

<template>
  <div id="app">
    <TaskFrom @add-task="addTask"></TaskFrom>
    <TaskList :tasks="tasks" @toggle-completed="toggleCompleted" 
    @delete-task="deleteTask"></TaskList>
  </div>
</template>

<style>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
