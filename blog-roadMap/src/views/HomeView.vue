<script setup>
import ArticleForm from '@/components/ArticleForm.vue';
import ArticleList from '@/components/ArticleList.vue';
import { useArticleStore } from '@/stores/articleStore';
import { onMounted } from 'vue';

const store = useArticleStore();

onMounted(() => {
  store.fetchArticles();
});

const addArticle = (article) => {
  store.addArticle(article);
}

const deleteArticle = (id) => {
  store.deleteArticle(id);
}


</script>

<template>
  記事一覧
  <ArticleForm @add-article="addArticle"></ArticleForm>
  <ArticleList :articles="store.articles" @delete-article="deleteArticle"></ArticleList>
</template>

<style scoped>
</style>
