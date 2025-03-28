import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'
import Portfolio from './components/Portfolio.vue'

const app = createApp(App)
app.component('main-page', Portfolio)
app.mount('#app')
