<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" :checked="task.completed" @change="toggleCompleted(index)">
      <span :class="{ completed: task.completed }">{{ task.text }}</span>
      <input type="button" @click="deleteTask(index)">
    </li>
  </ul>
</template>

<script setup>
defineProps({
  tasks: {
    type: Array,
    required: true,
  }
})

const emit = defineEmits(["toggle-completed", "delete-task"])

const toggleCompleted = (index) => {
  emit("toggle-completed", index)
}

const deleteTask = (index) => {
  emit("delete-task", index)
}
</script>

<style>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>