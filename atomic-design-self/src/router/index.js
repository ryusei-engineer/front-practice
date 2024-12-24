import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
 
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;