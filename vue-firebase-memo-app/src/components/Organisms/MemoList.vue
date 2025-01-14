<script setup>
import { useMemoStore } from '@/store/memoStore';
import { onMounted } from 'vue';
import ButtonAtom from '../Atoms/ButtonAtom.vue';

const memoStore = useMemoStore();

onMounted(() => {
  memoStore.fetchMemos();
})
</script>

<template>
  <ul>
    <li v-for="memo in memoStore.memos" :key="memo.id">
      {{ memo.text }}
      <ButtonAtom label="delete" @click="memoStore.deleteMemo(memo.id)"/>
    </li>
  </ul>
</template>