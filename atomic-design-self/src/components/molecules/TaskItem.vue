<script setup>
import Button from '../atoms/Button.vue';
import Checkbox from '../atoms/Checkbox.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  task: Object,
});

const emit = defineEmits(["delete"]);

const deleteTask = () => {
  emit("delete", props.task.id);
}
</script>

<template>
  <div>
    <Checkbox v-model="task.completed"></Checkbox>
    <span :class="{'line' : task.completed}">{{ task.title }}</span>
    <Button label="削除" @click="deleteTask"></Button>
  </div>
</template>

<style scoped>
.line{
  text-decoration: line-through;
}
</style>
