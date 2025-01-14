<script setup>
import { ref } from 'vue';
import ButtonAtom from '../Atoms/ButtonAtom.vue';
import InputField from '../Atoms/InputField.vue'; 
import { useMemoStore } from '@/store/memoStore';

const memoStore = useMemoStore();
const task = ref(""); 

const addTask = async () => {
   await memoStore.addMemo(task.value);
   task.value = ""; 
}
</script>

<template>
  <div>
    <InputField v-model="task"/>
    <ButtonAtom label="Add Memo" @click="addTask"/>
  </div>
</template>