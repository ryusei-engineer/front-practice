<script setup></script>

<template>
  home
  <div>
    <router-link to="/form">form</router-link>|
    <router-link to="/memo-list">memoList</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>
