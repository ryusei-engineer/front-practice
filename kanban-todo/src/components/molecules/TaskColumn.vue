<script setup>
import draggable from 'vuedraggable';
import { defineProps } from 'vue';
import CardAtom from '../atoms/CardAtom.vue';

defineProps({
  columnName: String,
  group: String,
  list:{
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="draggable">
    <p>{{ columnName }}</p>
    <draggable :list="list" :group="group" item-key="id" animation="200">
    <template #item="{ element }">  
      <CardAtom :taskName="element.name" :importance="element.importance" :urgency="element.urgency"/>
    </template>
  </draggable>
  </div>
  
</template>
<style scoped>
.draggable {
  border: 1px solid #333;
  display: block;
}
</style>
