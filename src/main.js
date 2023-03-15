import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import { vMaska } from "maska"

createApp(App).directive('maska', vMaska).mount('#app')
