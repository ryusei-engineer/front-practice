import { defineStore } from 'pinia';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const useMemoStore = defineStore('memo', {
  state: () => ({
    memos: [], // メモのリスト
  }),
  actions: {
    // Firestoreからメモを取得
    fetchMemos() {
      const memoCollection = collection(db, 'memos');
      onSnapshot(memoCollection, (snapshot) => {
        this.memos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      }, (error) => {
        console.error('Error fetching memos:', error);
      });
    },
    // メモをFirestoreに追加
    async addMemo(text) {
      console.log("b");
      await addDoc(collection(db, 'memos'), {
        text: text,
        createdAt: new Date(),
      });
      console.log("c");
    },
    // メモをFirestoreから削除
    async deleteMemo(id) {
      await deleteDoc(doc(db, 'memos', id));
    },
  },
});
