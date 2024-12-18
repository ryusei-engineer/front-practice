<template>
  <button :class="type" @click="onClick">{{ label }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: String,
  type: String,
});

const emit = defineEmits(['click']);
const onClick = () => emit('click');
</script>
