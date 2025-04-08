import { createRouter, createWebHistory } from "vue-router";
import Form from "../components/Form.vue";
import Home from "../components/Home.vue";
import MemoList from "../components/MemoList.vue";

const routes = [
  // {path: "/", component: Home},
  {path: "/form", component: Form},
  {path: "/memo-list", component: MemoList}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router