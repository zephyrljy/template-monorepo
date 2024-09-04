import { createApp } from 'vue'
import App from './app.vue'

import '@unocss/reset/normalize.css'
import 'virtual:uno.css'

const app = createApp(App)

app.mount('#app')
