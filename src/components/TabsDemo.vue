<template>
<div>
    Switch 的文档
    <tabs v-model:selected="x">
        <tab title="one">123132</tab>
        <tab title="two55555555555555">5555555555555555555</tab>
    </tabs>
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
export default {
    components: {
        Tab,
        Tabs
    },
    setup(props) {
        const x = ref('one')
        return {
            x
        }
    }
}
</script>
