<template>
  <div class="gallery">
    <MyCard>
      <template #header>
        <h3>カード 1</h3>
      </template>
      <p>このカードはデフォルトコンテンツを使用しています。</p>
      <template #footer>
        <button>詳細を見る</button>
      </template>
    </MyCard>

    <MyCard>
      <template #header>
        <h3>カード 2</h3>
      </template>
      <p>このカードはデフォルトコンテンツを使用しています。2</p>
      <template #footer>
        <button>詳細を見る2</button>
      </template>
    </MyCard>
  </div>
</template>

<script setup>
import MyCard from './components/MyCard.vue';
</script>

<style>
.gallery {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
