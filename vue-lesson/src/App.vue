<script setup>
import CountUp from './CountUp.vue';
import ShowCount from './components/ShowCount.vue'
import { ref } from 'vue';

let count = ref(0)
</script>
<template>
  <CountUp />
  <CountUp />
  <ShowCount :foo="count"/>
</template>
<style></style>