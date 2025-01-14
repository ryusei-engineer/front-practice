import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia(App);

createApp(App).use(pinia).use(router).mount('#app')
