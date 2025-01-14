<script setup>
import { onMounted, ref } from 'vue';
import ButtonAtom from '../Atoms/ButtonAtom.vue';
import InputField from '../Atoms/InputField.vue';
import MemoForm from '../Molecules/MemoForm.vue';
import { useMemoStore } from '@/store/memoStore';
import MemoList from '../Organisms/MemoList.vue';

const memoStore = useMemoStore();
onMounted(() => {
  memoStore.fetchMemos();
})

</script>

<template>
  <MemoForm />
  <MemoList />
</template>