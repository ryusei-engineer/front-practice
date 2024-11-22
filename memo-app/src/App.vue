<script setup>

</script>

<template>
  <div id="app">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>｜
    <RouterLink :to="{ name: 'new' }">New</RouterLink>
    <RouterView></RouterView>
  </div>
  
</template>
 
<style>

</style>
