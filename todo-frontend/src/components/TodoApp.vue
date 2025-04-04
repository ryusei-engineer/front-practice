<template>
  <div>
    <h1>ToDo App</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="新しいタスク" />
    <button @click="addTask">追加</button>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const tasks = ref([])
const newTask = ref('')

const fetchTasks = async () => {
  const res = await axios.get('http://localhost:8080/api/tasks')
  tasks.value = res.data
}

const addTask = async () => {
  if (!newTask.value.trim()) return
  await axios.post('http://localhost:8080/api/tasks', { title: newTask.value })
  newTask.value = ''
  fetchTasks()
}

const deleteTask = async (id) => {
  await axios.delete(`http://localhost:8080/api/tasks/${id}`)
  fetchTasks()
}

onMounted(fetchTasks)
</script>