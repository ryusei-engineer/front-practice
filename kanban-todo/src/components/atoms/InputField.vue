<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  modelValue: String,
  placeholder: String,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (e) => {
  emit("update:modelValue", e.target.value);
}
</script>

<template>
  <input :value="modelValue" @input="updateValue" type="text" :placeholder="placeholder">
</template>

<style scoped>
</style>
