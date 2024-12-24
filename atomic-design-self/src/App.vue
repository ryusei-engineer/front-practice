<script setup>
import { ref } from 'vue';
import Button from './components/atoms/Button.vue';
import Checkbox from './components/atoms/Checkbox.vue';
import HomePage from './pages/HomePage.vue';
import InputField from './components/atoms/InputField.vue';
import TaskItem from './components/molecules/TaskItem.vue';

const value = ref("true");

</script>

<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<style scoped>
</style>
