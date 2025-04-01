<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue'])

const inputValue = (e) => {
  emit('update:modelValue', e.target.value);
}
</script>
<template>
  <input :value="modelValue" @input="inputValue">

</template>

<style scoped>

</style>
