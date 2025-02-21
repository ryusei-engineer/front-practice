import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    tasks2: [],
    tasks3: [],
  }),
  actions: {
    getTasks() {
      this.getTask()
      this.getTask2()
      this.getTask3()
    },

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

    getTask2() {
      console.log('A')
      const taskCollection = collection(db, 'tasks2')
      onSnapshot(
        taskCollection,
        (snapshot) => {
          this.tasks2 = snapshot.docs.map((doc) => ({
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
    getTask3() {
      console.log('A')
      const taskCollection = collection(db, 'tasks3')
      onSnapshot(
        taskCollection,
        (snapshot) => {
          this.tasks3 = snapshot.docs.map((doc) => ({
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
      //TODO:移動元のtask[]から削除するコードを書く
    },

    async addTask1(task, tasksArray) {
      await addDoc(collection(db, tasksArray), {
        task: task.task,
        priorityValue: task.priorityValue,
        emergencyValue: task.emergencyValue,
      })
      
    },

    async removeTask1(task, tasksArray) {
      await deleteDoc(doc(db, tasksArray, task.id));
      //TODO:移動元のtask[]から削除するコードを書く
    
    },
  },
})
