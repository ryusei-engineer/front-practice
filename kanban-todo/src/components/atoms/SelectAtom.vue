<script setup>
import { defineProps } from 'vue';

defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
  modelValue: [String, Number]
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