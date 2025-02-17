<script setup>
import { defineProps } from 'vue';
defineProps({
  taskName: String,
  importance: String,
  urgency: String,
})
</script>
<template>
  <div>
    <p>{{ taskName }}</p>
    <span>重要度：{{ importance }}</span>
    <span>緊急度：{{ urgency }}</span>
  </div>
</template>