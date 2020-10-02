import { createApp } from 'vue'
import App from './App.vue'
import Hahahaha from './components/hi.vue'
import HelloWorld from './components/HelloWorld.vue'

import { createWebHashHistory,createRouter } from "vue-router"

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        {path:'/',component:Hahahaha},
        {path:'/xxx',component:HelloWorld}
    ]
})

import './index.css'

const app =  createApp(App);
app.use(router)
app.mount('#app')
