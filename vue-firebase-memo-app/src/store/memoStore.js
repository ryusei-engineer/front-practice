import { defineStore } from "pinia";
import { collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const useMemoStore = defineStore("memo", {
  state:() => ({
    memos: [],
  }),
  actions: {
    fetchMemos() {
      onSnapshot(collection(db, "memos"), (snapshot) => {
        this.memos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      })
    },
    async addMemo(text) {
      await addDoc(collection(db, "memos"), {
        text: text,
      });
    },
    async deleteMemo(id) {
    await deleteDoc(doc(db, "memos", id));
  }
  },
  
})