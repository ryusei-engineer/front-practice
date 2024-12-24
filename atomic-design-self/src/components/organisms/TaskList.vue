<script setup>
import TaskItem from '@/components/molecules/TaskItem.vue';
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  tasks: Array
});

const emit = defineEmits(["delete"]);

const deleteTask = (id) => {
  emit("delete", id);
}
</script>

<template>
  <TaskItem v-for="task in tasks"
  :key="task.id"
  :task="task"
  @delete="deleteTask"
  ></TaskItem>
</template>

<style scoped>
</style>
