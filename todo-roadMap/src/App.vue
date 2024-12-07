<script setup>
import TodoList from './components/TodoList.vue';
import { ref } from 'vue';

const tasks = ref([]);
const newTask = ref("");
const addTask = () => {
  tasks.value.push({
    id: Date.now(),
    text: newTask.value,
  });
  newTask.value = "";
}

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
}
</script>

<template>
  <div id="app">
    <h1>Todo List</h1>
    <input type="text" v-model="newTask" placeholder="新しいタスクを追加">
    <button @click="addTask">追加</button>
    <TodoList :tasks="tasks" @delete-task="deleteTask"/>
    {{ tasks }}
  </div>
</template>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}

input {
  margin-right: 10px;
  padding: 5px;
}

button {
  padding: 5px 10px;
}
</style>
