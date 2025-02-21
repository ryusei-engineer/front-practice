<script setup>
import draggable from 'vuedraggable'
import { defineProps } from 'vue'
import CardAtom from '../atoms/CardAtom.vue'
import { useTaskStore } from '@/Store/taskStore'

const taskStore = useTaskStore()
const props = defineProps({
  tasksArray: String,
  columnName: String,
  group: String,
  list: {
    type: Array,
    default: () => [],
  },
})

const moveTask = (event) => {
  console.log("aaaa");
  console.log(event.added);
  console.log(event.removed);
  if(event.added){
    console.log("追加処理");
    taskStore.addTask1(event.added.element, props.tasksArray)
    taskStore.getTasks()
  }

  if(event.removed){
    console.log("削除処理");
    console.log(event.removed);
    taskStore.removeTask1(event.removed.element, props.tasksArray)
    taskStore.getTasks()
  }
  
  // if (event.to.id == '未着手') {
  //   console.log('未着手に移動')
  //   taskStore.addTask1(event.draggedContext.element, event.from.id)
  //   taskStore.getTasks()
  // }
  // if (event.to.id == '進行中') {
  //   console.log('進行中に移動')
  //   console.log(event.from.id)
  //   taskStore.addTask2(event.draggedContext.element, event.from.id)
  //   taskStore.getTasks()
  // }
  // if (event.to.id == '完了') {
  //   console.log('完了に移動')
  //   taskStore.addTask3(event.draggedContext.element, event.from.id)
  //   taskStore.getTasks()
  // }
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
      @change="moveTask"
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
