<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const article = ref({
  title: '',
  body: '',
});

const loading = ref(true);
const error = ref(null);

// 記事データをAPIから取得
onMounted(async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
    article.value = response.data;
  } catch (err) {
    error.value = '記事が見つかりませんでした。';
    console.error(err);
  } finally {
    loading.value = false;
  }
});

// 記事を更新する関数
const updateArticle = async () => {
  try {
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, article.value);
    alert('記事が更新されました！');
    router.push({ name: 'ArticleDetail', params: { id: route.params.id } });
  } catch (err) {
    error.value = '記事の更新に失敗しました。';
    console.error(err);
  }
};
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <h1>記事の編集</h1>
    <form @submit.prevent="updateArticle">
      <div>
        <label for="title">タイトル</label>
        <input id="title" v-model="article.title" required />
      </div>
      <div>
        <label for="body">内容</label>
        <textarea id="body" v-model="article.body" required></textarea>
      </div>
      <button type="submit">保存</button>
      <router-link :to="{ name: 'ArticleDetail', params: { id: route.params.id } }">キャンセル</router-link>
    </form>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}

a {
  margin-left: 1rem;
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
