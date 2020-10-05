<template>
<div>Dialog示例</div>
<div>
    <Button @click="toggle">Button</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
        <template v-slot:title>
            title
        </template>
        <template v-slot:content>
            content
        </template>
    </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
    onpenDialog
} from '../lib/openDialog'
import {
    ref
} from 'vue'
export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }
        const f1 = () => {
            return false
        }
        onpenDialog({
            title: 'ttt',
            content: 'leirong',
            ok() {
                console.log('dialog ok')
            },
            cancel() {
                console.log('dialog cancel')
            },
            closeOnClickOverlay: false
        });

        return {
            toggle,
            x,
            f1
        }
    }
}
</script>
