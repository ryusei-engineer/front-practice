<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  options:{
    type: Array,
    default: () => [],
  },
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <select :value="modelValue" @change="updateValue">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>