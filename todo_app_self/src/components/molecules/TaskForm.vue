<script setup>
import { ref } from 'vue';
import InputAtom from '../atoms/InputAtom.vue';
import ButtonAtom from '../atoms/ButtonAtom.vue';
import axios from 'axios';
const newTask = ref("");
const addNewTask = async () => {
  const res = await axios.post("http://localhost:8000/api/todos",
    {
      context: "task1",
    }
  );
}
</script>
<template>
  <InputAtom v-model="newTask" placeholder="タスクを入力"></InputAtom>
  <ButtonAtom label="追加" @click="addNewTask"></ButtonAtom>
</template>

<style scoped>

</style>
