import { createApp , h} from 'vue';
import Dialog from './Dialog.vue'
export const onpenDialog = (options) =>{
    const {title,content,ok,cancel,closeOnClickOverlay} = options;
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app =  createApp({
        render(){
            return h(
                Dialog,
                {
                    visible:true,
                    'onUpdate:visible':(newVisible)=>{
                        if(newVisible===false){
                            app.unmount(div)
                            div.remove()
                        }
                    },
                    ok,cancel,closeOnClickOverlay
                },
                {
                    title,content
                }
            )
        }
    })
    app.mount(div)
}