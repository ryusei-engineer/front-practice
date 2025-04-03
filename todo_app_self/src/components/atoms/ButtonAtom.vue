<script setup>
import { defineProps } from 'vue';
defineProps({
  label: String,
})

const emit = defineEmits(["click"])

const clicked = () => {
  emit("click");
} 
</script>
<template>
<button @click="clicked">{{ label }}</button>
</template>

<style scoped>

</style>
