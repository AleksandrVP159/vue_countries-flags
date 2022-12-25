import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'
import "vue-advanced-search/dist/AdvancedSearch.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.unwrapInjectedRef = true

app.mount('#app')
