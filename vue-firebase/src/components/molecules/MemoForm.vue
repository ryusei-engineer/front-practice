<template>
  <div class="memo-form">
    <InputField v-model="memoText" placeholder="Enter your memo" />
    <Button label="Add Memo" @click="addMemo" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMemoStore } from '../../store/memoStore';

import InputField from '../atoms/InputField.vue';
import Button from '../atoms/Button.vue';

const memoText = ref('');
const memoStore = useMemoStore();

const addMemo = async () => {
  console.log("A");
  console.log(memoText.value);
  if (memoText.value.trim()) {
    await memoStore.addMemo(memoText.value);
    memoText.value = '';
  }
};
</script>
