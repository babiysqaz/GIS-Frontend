import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { apiClient } from './services'

const app = createApp(App)

app.config.globalProperties.$api = apiClient

app.use(router).mount('#app')
