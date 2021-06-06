import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('#app');
app.provide('Deckplanner', 'Vue3');

