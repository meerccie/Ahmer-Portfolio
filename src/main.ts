import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Make sure this points to your router file
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
