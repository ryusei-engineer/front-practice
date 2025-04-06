import { defineStore } from 'pinia'

// ストアを定義（名前は 'counter'）
export const useCounterStore = defineStore('counter', {
  // 状態（state）を定義
  state: () => ({
    count: 0  // カウントの初期値
  }),
  // ゲッター（算出プロパティ）を定義
  getters: {
    doubleCount: (state) => state.count * 2  // countの2倍を返す
  },
  // アクション（状態を変更する関数）を定義
  actions: {
    increment() {
      this.count++  // countを1増やす
    }
  }
})
