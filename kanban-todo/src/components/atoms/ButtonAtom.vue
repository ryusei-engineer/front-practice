<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  label: String,
});

const emit = defineEmits(["click"]);

const click = () => {
  emit("click");
}
</script>

<template>
  <button @click="click">{{ label }}</button>
</template>