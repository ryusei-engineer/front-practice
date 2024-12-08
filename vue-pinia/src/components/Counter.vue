<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>
<template>
  <div>
    <h1>Count: {{ counterStore.count }}</h1>
    <h2>Double Count: {{ counterStore.doubleCount }}</h2>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decreent">Decreent</button>
  </div>
</template>