import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMemoStore = defineStore("memo", {
  state: () => ({
    memos: ref([])
  }),

  actions: {
    async getMemos() {
      const res = await axios.get("http://localhost:8080/api/memos"
      );
      this.memos = res.data;
    },

    async addMemo(newMemoText) {
      await axios.post("http://localhost:8080/api/memos", {
        text: newMemoText,
      })
    },

    updateMemo() {
    },

    deleteMemo() {

    },

  }
})