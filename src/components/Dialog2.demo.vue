<demo>
一键打开 Dialog
</demo>
<template>
<div>
    <Button @click="showDialog">打开对话框</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {
    ref,
    h
} from 'vue'
import {
    onpenDialog
} from '../lib/openDialog'
export default {
    components: {
        Button
    },
    setup() {
        const showDialog = () => {
            onpenDialog({
                title: h('strong', {}, '标题'),
                content: '你好',
                ok() {
                    console.log('ok')
                },
                cancel() {
                    console.log('cancel')
                }
            })
        }
        return {
            showDialog
        }
    }
}
</script>
