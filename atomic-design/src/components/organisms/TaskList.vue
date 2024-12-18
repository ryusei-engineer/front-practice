<!-- src/components/organisms/TaskList.vue -->
<template>
  <div class="task-list">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @delete="deleteTask"
    />
  </div>
</template>

<script setup>
import TaskItem from '../molecules/TaskItem.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  tasks: Array,
});

const emit = defineEmits(['delete']);

const deleteTask = (id) => emit('delete', id);
</script>
