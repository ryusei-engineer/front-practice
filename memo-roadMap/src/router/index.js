import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MemoDetailView from "@/views/MemoDetailView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },{
    path: "/memo/:id",
    name: "MemoDetail",
    component: MemoDetailView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;