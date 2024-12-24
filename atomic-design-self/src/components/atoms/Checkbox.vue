<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const handleChange = (e) => {
  emit("update:modelValue", e.target.checked);
}
</script>

<template>
  <input type="checkbox" :checked="modelValue" @change="handleChange">
</template>

<style scoped>
</style>
