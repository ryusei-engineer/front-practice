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
  <RouterLink :to="{ name: 'about'}">about</RouterLink>
  <RouterLink :to="{ name: 'home'}">home</RouterLink>
  <RouterView></RouterView>
</template>
<style></style>