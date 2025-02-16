<script setup>
import { defineProps } from 'vue';

defineProps({
  placeholder: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
  emit("update:modelValue", event.target.value)
}
</script>

<template>
  <input type="text" :placeholder="placeholder" @input="updateValue">
</template>