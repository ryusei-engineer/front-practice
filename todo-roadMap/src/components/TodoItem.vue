<script setup>
defineProps({
  task: Object,
})
</script>

<template>
  <li>
    {{ task.text }}
    <button @click="$emit('delete-item', task.id)">削除</button>
  </li>
</template>

<style scoped>
li {
  list-style: none;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  margin-left: 20px;
  padding: 5px;
}
</style>
