<template>
  <h1>入力された値</h1>
  <p>{{ inputValue }}</p>
  <Chiled v-model="inputValue"/>
</template>

<script setup>
import { ref } from 'vue';
import Chiled from './Chiled.vue';

const inputValue = ref("");
</script>
