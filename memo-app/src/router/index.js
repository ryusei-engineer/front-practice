import HomeView from "@/Views/HomeView.vue";
import NewView from "@/Views/NewView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/new",
      name: "new",
      component: NewView
    }
  ]

})
export default router