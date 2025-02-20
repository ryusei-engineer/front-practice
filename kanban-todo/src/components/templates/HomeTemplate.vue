<script setup>
import TaskForm from '../molecules/TaskForm.vue'
import TaskColumn from '../molecules/TaskColumn.vue'
import { computed } from 'vue'
import { useTaskStore } from '@/Store/taskStore';
import { onMounted } from 'vue';
const taskStore = useTaskStore();
onMounted(() => {
  taskStore.getTask();
})
const tasks = computed(() => taskStore.tasks || []);
const tasks2 = [];
const tasks3 = [];


</script>

<template>
  <TaskForm />
  <div class="task-columns">
    <TaskColumn class="task-column" columnName="未着手" group="task-group" :list="tasks" />
    <TaskColumn class="task-column" columnName="進行中" group="task-group" :list="tasks2"/>
    <TaskColumn class="task-column" columnName="完了" group="task-group" :list="tasks3" />
  </div>
</template>

<style scoped>
.task-columns{
  margin: 48px 0 0;
  width: 90%;
  display: flex;
  justify-self: center;
  gap: 10px;
}
.task-column {
  flex: 1;
  padding: 0 10px 10px;
  border: 2px solid rgb(197, 197, 197);
  border-radius: 16px;
}

</style>
