<script setup>
import Button from '../atoms/Button.vue';
import InputField from '../atoms/InputField.vue';
import { defineEmits, ref } from 'vue';

const newTask = ref("");

const emit = defineEmits(["addTask"]);

const addTask = () => {
  emit("addTask", newTask.value);
  newTask.value = "";
}

</script>

<template>
  <div>
    <InputField v-model="newTask"></InputField>
    <Button label="追加" @click="addTask"></Button>
  </div>
</template>

<style scoped>
</style>
