<script setup>
import { ref } from 'vue';
import InputAtom from '../atoms/InputAtom.vue';
import ButtonAtom from '../atoms/ButtonAtom.vue';

const hoge = ref("");
const hogeClick = () => {
  hoge.value = "foo";
}
</script>
<template>
<InputAtom v-model="hoge"></InputAtom>
<ButtonAtom label="ボタン" @click="hogeClick"></ButtonAtom>
{{ hoge }}
</template>

<style scoped>

</style>
