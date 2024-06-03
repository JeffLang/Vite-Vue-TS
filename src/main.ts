import App from './App.vue'
import { createApp } from 'vue'
import router from './router/index'
// import Vant, { Lazyload } from 'vant'

import './style.css'

const app = createApp(App)
// app.use(Vant)
app.use(router)
app.mount('#app')
