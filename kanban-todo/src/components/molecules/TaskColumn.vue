<script setup>
import draggable from 'vuedraggable'
import { defineProps } from 'vue'
import CardAtom from '../atoms/CardAtom.vue'
import { useTaskStore } from '@/Store/taskStore'

const taskStore = useTaskStore();
const props = defineProps({
  columnName: String,
  group: String,
  list: {
    type: Array,
    default: () => [],
  },
})

const moveTask = (event) => {
  if (event.to.id == '未着手') {
    console.log('未着手に移動')
  }
  if (event.to.id == '進行中') {
    console.log('進行中に移動');
    taskStore.addTask2(event.draggedContext.element);
  }
  if (event.to.id == '完了') {
    console.log('完了に移動')
    taskStore.addTask3(event.draggedContext.element);
  }
}
</script>

<template>
  <div class="draggable">
    <p>{{ columnName }}</p>
    <draggable
      :list="list"
      :id="columnName"
      :group="group"
      item-key="id"
      animation="200"
      :move="moveTask"
    >
      <template #item="{ element }">
        <CardAtom
          class="card-atom"
          :taskName="element.task"
          :importance="element.emergencyValue"
          :urgency="element.priorityValue"
        />
      </template>
    </draggable>
  </div>
</template>
<style scoped>
.draggable {
  cursor: pointer;
  height: 100%;
  border: 1px solid #333;
  display: block;
}

p {
  margin: 16px 0;
  font-size: 24px;
  font-weight: bold;
}

.card-atom {
  margin: 20px 0;
  padding: 10px;
  background-color: rgb(33, 105, 239);
  color: #ffffff;
  border-radius: 8px;
}
</style>
