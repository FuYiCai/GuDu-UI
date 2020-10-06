<template>
<article class="markdown-body" v-html="content">
</article>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
export default {
    props: {
        path: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const content = ref < string > (null)
        import(props.path).then(res => {
            content.value = res.default
        })
        return {
            content
        }
    }
}
</script>
