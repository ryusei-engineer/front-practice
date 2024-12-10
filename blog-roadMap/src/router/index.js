import ArticleDetailView from "@/views/ArticleDetailView.vue";
import ArticleEditView from "@/views/ArticleEditView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },{
    path: "/article/:id",
    name: "ArticleDetail",
    component: ArticleDetailView,
  },
  {
    path: "/article/:id/edit",
    name: "ArticleEdit",
    component: ArticleEditView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;