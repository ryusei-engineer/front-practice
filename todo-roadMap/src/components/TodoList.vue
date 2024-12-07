<script setup>
import TodoItem from './TodoItem.vue';
defineProps({
  tasks: Array
})
</script>

<template>
  <ul>
    <TodoItem v-for="task in tasks" :key="task.id" :task="task" @delete-item="$emit('delete-task', task.id)"/>
  </ul>
</template>

<style scoped>
</style>
