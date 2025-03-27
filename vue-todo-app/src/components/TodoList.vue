<template>
  <div>
    <h1>ToDo List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add a new task" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" @change="updateTodo(todo)" />
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">{{ todo.description }}</span>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const todos = ref([]);
const newTodo = ref('');

const fetchTodos = async () => {
  const response = await axios.get('http://localhost:8080/api/todos');
  todos.value = response.data;
};

const addTodo = async () => {
  if (newTodo.value.trim() === '') return;

  const response = await axios.post('http://localhost:8080/api/todos', {
    description: newTodo.value,
    completed: false
  });

  todos.value.push(response.data);
  newTodo.value = '';
};

const updateTodo = async (todo) => {
  await axios.put(`http://localhost:8080/api/todos/${todo.id}`, todo);
};

const deleteTodo = async (id) => {
  await axios.delete(`http://localhost:8080/api/todos/${id}`);
  todos.value = todos.value.filter(todo => todo.id !== id);
};

onMounted(fetchTodos);
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
