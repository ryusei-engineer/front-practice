<template>
  <div>
    <h1>記事一覧</h1>
    <ArticleForm @add-article="addArticle" />
    <ArticleList :articles="store.articles" @delete-article="deleteArticle" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useArticleStore } from '../stores/articleStore';
import ArticleList from '../components/ArticleList.vue';
import ArticleForm from '../components/ArticleForm.vue';

const store = useArticleStore();

onMounted(() => {
  store.fetchArticles();
});

const addArticle = (article) => {
  store.addArticle(article);
};

const deleteArticle = (id) => {
  store.deleteArticle(id);
};
</script>
