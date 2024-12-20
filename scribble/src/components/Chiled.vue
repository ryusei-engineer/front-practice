<template>
  <input type="text" :value="modelValue" @input="handleInput">
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(["update:modelValue"])
const handleInput = (e) => {
  emit("update:modelValue", e.target.value);
  }
</script>
