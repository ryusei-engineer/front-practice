<!-- src/components/atoms/InputField.vue -->
<template>
  <input
    type="text"
    :value="modelValue"
    @input="handleInput"
    :placeholder="placeholder"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
  placeholder: String,
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
