<script setup>
import { ref } from 'vue';
import FoodCard from './components/FoodCard.vue';

const foods = ref([
  { name: "寿司", emoji: "🍣"},
  { name: "ハンバーガー", emoji: "🍣"},
  { name: "焼肉", emoji: "🍣"},
  { name: "麺系", emoji: "🍣"},
  { name: "タコ焼き", emoji: "🍣"},
  { name: "おでん", emoji: "🍣"},
  { name: "イタリアン", emoji: "🍣"},
  { name: "カレー", emoji: "🍣"},
])
const pickFoodIndex = ref(0)
const newFoodIndex = ref(1)
function pickFood(index) {
  pickFoodIndex.value = index
  newFoodIndex.value++
}

</script>

<template>
  <main>
    <h1>今日何食べる？</h1>
    <FoodCard
    :name="foods[pickFoodIndex].name"
    :emoji="foods[pickFoodIndex].emoji"
    @click="pickFood(pickFoodIndex)"/>
    <template v-if="newFoodIndex < foods.length">
      <p>vs</p>
      <FoodCard
      :name="foods[newFoodIndex].name"
      :emoji="foods[newFoodIndex].emoji"
      @click="pickFood(newFoodIndex)"/>
    </template>
  </main>
</template>

<style scoped>
main {
  width: 350px;
  margin: 100px auto;
  text-align: center;
}
</style>
