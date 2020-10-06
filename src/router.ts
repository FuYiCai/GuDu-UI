import Home from './views/Home.vue'
import Doc from './views/Doc.vue'


import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

import { h } from 'vue'
import Markdown from './components/Markdown.vue'

import { createWebHashHistory,createRouter } from "vue-router"
const md = string => h(Markdown, { content: string, key: string })
const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,
        children: [
            { path: "intro", component: md(intro) },
            { path: "get-started", component: md(getStarted) },
            { path: "install", component: md(install) },
            { path: "switch", component: SwitchDemo },
            { path: "button", component: ButtonDemo },
            { path: "dialog", component: DialogDemo },
            { path: "tabs", component: TabsDemo },
            { path: "", redirect:'/doc/intro' },
        ],
    }
    ]
})