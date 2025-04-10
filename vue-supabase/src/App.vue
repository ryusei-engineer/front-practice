<template>
  <div>
    <h1>Todo App</h1>
    <ul>
      <div v-for="todo in todos" :key="todo.id">
      <li>{{ todo.title }}</li>
      <button @click="deleteTodoById(todo.id)">削除</button>
      </div>
      
    </ul>
    <input v-model="newTask" placeholder="新しいタスクを入力する" />
    <button @click="addTodo">追加</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
  import { supabase } from './utils/supabase'

const todos = ref([])
const newTask = ref('')

const fetchTodos = async () => {
  const { data, error } = await supabase.from('todos').select('*').order('created_at', { ascending: false })
  if (!error) {
    todos.value = data
  }
}

const addTodo = async () => {
  if (newTask.value.trim() === '') return
  const { error } = await supabase.from('todos').insert([{ title: newTask.value }])
  if (!error) {
    newTask.value = ''
    fetchTodos()
  }
}

const deleteTodoById = async (todoId) => {
  await supabase.from("todos").delete().eq("id",todoId);
  fetchTodos();
}

onMounted(fetchTodos)
</script>
