<template>
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
        const f2 = () => {}
        return {
            toggle,
            x,
            f1,
            f2
        }
    }
}
</script>
