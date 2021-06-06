import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import {apiPlus} from './api';
import 'babel-polyfill'

const app = createApp(App)
app.use(router)
app.use(apiPlus)
app.mount('#app')

