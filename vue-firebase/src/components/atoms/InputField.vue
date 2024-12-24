<template>
  <input :value="modelValue" :placeholder="placeholder" class="input-field" @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: String,
  placeholder: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style>
.input-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
