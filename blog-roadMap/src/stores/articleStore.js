import { defineStore } from 'pinia';
import axios from 'axios';

export const useArticleStore = defineStore('articleStore', {
  state: () => ({
    articles: [],
  }),
  actions: {
    async fetchArticles() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.articles = response.data;
    },
    async addArticle(article) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', article);
      this.articles.push(response.data);
    },
    async deleteArticle(id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      this.articles = this.articles.filter(article => article.id !== id);
    },
    async editArticle(updatedArticle) {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedArticle.id}`, updatedArticle);
      const index = this.articles.findIndex(article => article.id === updatedArticle.id);
      if (index !== -1) {
        this.articles[index] = updatedArticle;
      }
    },
  },
});
