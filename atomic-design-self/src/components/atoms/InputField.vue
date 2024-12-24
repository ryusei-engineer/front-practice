<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (e) => {
  emit("update:modelValue", e.target.value)
}

</script>

<template>
  <input type="text" :value="modelValue" @input="handleInput">
</template>

<style scoped>
</style>
