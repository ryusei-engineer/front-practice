<script setup>
import TaskForm from '@/components/organisms/TaskForm.vue';
import TaskList from '@/components/organisms/TaskList.vue';
import { ref } from 'vue';

const tasks = ref([
  {
    id: 1,
    title: "task1",
    completed: false
  },{
    id: 2,
    title: "task2",
    completed: false
  },{
    id: 3,
    title: "task3",
    completed: false
  },{
    id: 4,
    title: "task4",
    completed: false
  },{
    id: 5,
    title: "task5",
    completed: true
  },
]);

const addTask = (task) => {
  tasks.value.push({
    id: Date.now(),
    title: task,
    completed: false
  });
}

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
}

</script>

<template>
  <TaskForm @addTask="addTask"></TaskForm>
  <TaskList :tasks="tasks" @delete="deleteTask"></TaskList>
</template>

<style scoped>
</style>
