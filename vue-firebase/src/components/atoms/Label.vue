<template>
  <label :for="forId" class="label">{{ text }}</label>
</template>

<script setup>
import { defineProps } from 'vue';

// Props: ラベルのテキストと関連する入力フィールドのID
defineProps({
  text: { type: String, required: true },
  forId: { type: String, required: false }, // 必須ではない（省略可）
});
</script>

<style>
.label {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
  display: block;
}
</style>
