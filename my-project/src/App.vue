<script setup>
</script>
｜
<template>
  <div id="app">
    <router-link :to="{ name: 'home' }">Home</router-link>｜
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
