import "./lib/gulu.scss";
import "./index.scss";
import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'
import 'github-markdown-css/github-markdown.css'




const app =  createApp(App);
app.use(router)
app.mount('#app')
