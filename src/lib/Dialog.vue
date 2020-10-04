<template>
<template v-if="visible">
    <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
    <div class="gulu-dialog-wrapper">
        <div class="gulu-dialog">
            <header>
                <slot name="title"></slot>
                <span @click="close" class="gulu-dialog-close"></span>
            </header>
            <main>
                <slot name="content" />
            </main>
            <footer>
                <Button @click="ok">ok</Button>
                <Button @click="cancel">Cancel</Button>
            </footer>
        </div>
    </div>
</template>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    props: {

        visible: {
            type: Boolean,
            default: false
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function,
        },
        cancel: {
            type: Function,
        }
    },
    components: {
        Button
    },
    setup(props, context) {
        const close = () => {
            context.emit('update:visible', false)
        }
        const onClickOverlay = () => {
            if (props.closeOnClickOverlay) {
                close()
            }
        }
        const ok = () => {
            // 简写 props.ok && props.ok() !== false
            if (props.ok?.() !== false) {
                close()
            }
        }
        const cancel = () => {
            close()
        }
        return {
            close,
            onClickOverlay,
            ok,
            cancel
        }
    }
}
</script>
