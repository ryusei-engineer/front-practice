import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    tasks2: [],
    tasks3: [],
  }),
  actions: {
    getTask() {
      console.log('A')
      const taskCollection = collection(db, 'tasks')
      onSnapshot(
        taskCollection,
        (snapshot) => {
          this.tasks = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        },
        (error) => {
          console.error('Error fetching tasks:', error)
        },
      )
      // console.log(this.tasks);
      console.log('B')
    },

    async addTask(task, priorityValue, emergencyValue) {
      await addDoc(collection(db, 'tasks'), {
        task: task,
        priorityValue: priorityValue,
        emergencyValue: emergencyValue,
      })
    },

    async addTask2(task) {
      await addDoc(collection(db, 'tasks2'), {
        task: task.id,
        priorityValue: task.priorityValue,
        emergencyValue: task.emergencyValue,
      })
    },

    async addTask3(task) {
      await addDoc(collection(db, 'tasks3'), {
        task: task.id,
        priorityValue: task.priorityValue,
        emergencyValue: task.emergencyValue,
      })
    },
  },
})
