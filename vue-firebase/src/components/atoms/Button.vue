<template>
  <button @click="onClick" :class="'btn ' + type">{{ label }}</button>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  label: String,
  type: { type: String, default: 'primary' },
  onClick: Function,
});
</script>

<style>
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.btn.primary {
  background-color: #3498db;
  color: white;
}
</style>
