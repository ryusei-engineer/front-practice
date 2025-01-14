<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  label: String,
});

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
}

</script>

<template>
  <button @click="onClick">{{ label }}</button>
</template>