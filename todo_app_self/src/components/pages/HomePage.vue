<script setup>
import { ref } from 'vue';
import ButtonAtom from '../atoms/InputAtom.vue';

const hoge = ref("");
</script>
<template>
<ButtonAtom v-model="hoge"></ButtonAtom>
{{ hoge }}
</template>

<style scoped>

</style>
