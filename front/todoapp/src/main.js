

import { createApp } from 'vue'
import App from './App.vue'

if(window.Telegram?.WebApp){
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
}

createApp(App).mount('#app')

