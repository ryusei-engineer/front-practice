<script setup>
import ButtonAtom from '../atoms/ButtonAtom.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
const tasks = ref([
  {
    id: 1,
    context: "t"
  }
]);
const task = ref();
onMounted(async () => {
  const res = await axios.get("http://localhost:8000/api/todos");
  tasks.value = res.data;
})

const deleteTask = (id) => {

}
</script>
<template>
  <div v-for="task in tasks" :key="task.id">
    <span>{{ task.context }}</span>
    <ButtonAtom label="削除" @click="deleteTask(task.id)"></ButtonAtom>
  </div>
  
</template>

<style scoped>

</style>
