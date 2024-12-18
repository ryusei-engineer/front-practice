<template>
  <div class="task-item">
    <Checkbox v-model="task.completed" />
    <span>{{ task.title }}</span>
    <Button label="削除" type="danger" @click="deleteTask" />
  </div>
</template>

<script setup>
import Checkbox from '../atoms/Checkbox.vue';
import Button from '../atoms/Button.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  task: Object,
});

const emit = defineEmits(['delete', 'toggle']);

const deleteTask = () => emit('delete', props.task.id);
</script>
