<!-- Counter.vue -->
<script setup>
// ストアをインポート
import { useCounterStore } from '@/stores/counter'

// ストアを使う
const counter = useCounterStore()
</script>

<template>
  <div>
    <!-- ストアの状態を表示 -->
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>

    <!-- アクションを呼び出すボタン -->
    <button @click="counter.increment">+1</button>
  </div>
</template>
