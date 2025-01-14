<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: String,
})

const emit = defineEmits(["update:modelValue"]);

</script>

<template>
  <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)">
</template>